/* Weekly Meal Planner — all data lives in this browser's localStorage. */

const STORAGE_KEY = "mealPlanner_v1";
const BASE_SERVINGS = 2; // all stored recipes are for 2 people

const UNITS = ["", "g", "kg", "cup", "tbsp", "tsp", "can", "pack", "bunch", "to taste"];
const CATEGORIES = ["Produce", "Meat & Protein", "Dairy", "Bakery", "Pantry", "Frozen", "Spices", "Other"];

let state = loadState();
LANG = state.lang || "en";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      if (Array.isArray(s.recipes)) {
        // Additive-only merge: bring in any brand-new built-in recipes that aren't
        // saved yet. This never overwrites existing recipes, so it's safe to do
        // automatically. (Updating EXISTING built-ins is the manual button below.)
        const existingIds = new Set(s.recipes.map(r => r.id));
        for (const def of DEFAULT_RECIPES) {
          if (!existingIds.has(def.id)) s.recipes.push(JSON.parse(JSON.stringify(def)));
        }
        return s;
      }
    }
  } catch (e) { console.warn("Could not load saved data:", e); }
  return {
    recipes: JSON.parse(JSON.stringify(DEFAULT_RECIPES)),
    selectedIds: [],
    shoppingChecks: {},   // itemKey -> true (means: I need to buy this)
    extraItems: [],       // [{id, name}]
    people: 2,
    apiKey: "",
    lang: "en",
    storeRegion: "ca"
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/* ---------------- helpers ---------------- */
const $ = (sel) => document.querySelector(sel);

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function formatQty(q) {
  if (!q && q !== 0) return "";
  const rounded = Math.round(q * 100) / 100;
  const fractions = { 0.25: "¼", 0.33: "⅓", 0.5: "½", 0.66: "⅔", 0.67: "⅔", 0.75: "¾", 1.5: "1½", 2.5: "2½" };
  if (fractions[rounded]) return fractions[rounded];
  return String(rounded);
}

function qtyText(qty, unit) {
  if (unit === "to taste") return t("toTaste");
  const u = unit ? t("unit_" + unit) : "";
  return `${formatQty(qty)} ${u}`.trim();
}

function scale(qty) {
  return qty * (state.people / BASE_SERVINGS);
}

function recipeById(id) {
  return state.recipes.find(r => r.id === id);
}

function displayName(r) {
  if (r.nameEn && r.nameFa) return LANG === "fa" ? `${r.nameFa} · ${r.nameEn}` : `${r.nameEn} · ${r.nameFa}`;
  return r.nameEn || r.nameFa || "(unnamed)";
}

function storeSearchUrl(store, itemName) {
  // strip parentheses/details so the search query stays short and useful
  let q = itemName.replace(/\(.*?\)/g, "").split(":")[0].split("—")[0].trim();
  if (q.length > 40) q = q.slice(0, 40);
  const tld = state.storeRegion === "us" ? "com" : "ca";
  return store === "walmart"
    ? `https://www.walmart.${tld}/search?q=${encodeURIComponent(q)}`
    : `https://www.amazon.${tld}/s?k=${encodeURIComponent(q)}`;
}

/* ---------------- language ---------------- */
function setLang(lang) {
  LANG = lang;
  state.lang = lang;
  saveState();
  $("#langSelect").value = lang;
  $("#settingsLang").value = lang;
  applyStaticI18n();
  renderAll();
}

$("#langSelect").addEventListener("change", e => setLang(e.target.value));

/* ---------------- tabs ---------------- */
document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => showTab(btn.dataset.tab));
});

function showTab(name) {
  document.querySelectorAll(".tab").forEach(b => b.classList.toggle("active", b.dataset.tab === name));
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("active", p.id === "tab-" + name));
  if (name === "shopping") renderShopping();
  if (name === "recipes") renderRecipes();
  if (name === "menu") renderMenu();
}

/* ---------------- people count ---------------- */
$("#peopleCount").value = String(state.people);
$("#peopleCount").addEventListener("change", e => {
  state.people = Number(e.target.value);
  saveState();
  renderAll();
});

/* ---------------- weekly menu ---------------- */
function renderMenu() {
  const list = $("#foodList");
  list.innerHTML = "";
  state.recipes.forEach(r => {
    const selected = state.selectedIds.includes(r.id);
    const card = document.createElement("label");
    card.className = "food-card" + (selected ? " selected" : "");
    const primary = LANG === "fa" ? (r.nameFa || r.nameEn) : (r.nameEn || r.nameFa);
    const secondary = LANG === "fa" ? (r.nameFa ? r.nameEn : "") : (r.nameEn ? r.nameFa : "");
    card.innerHTML = `
      <input type="checkbox" ${selected ? "checked" : ""}>
      <span class="names">
        <span class="name-en" dir="auto">${esc(primary)}</span>
        ${secondary ? `<span class="name-fa" dir="auto"> · ${esc(secondary)}</span>` : ""}
      </span>
      <a class="view-link" href="#">${t("viewRecipe")}</a>`;
    card.querySelector("input").addEventListener("change", (e) => {
      if (e.target.checked) state.selectedIds.push(r.id);
      else state.selectedIds = state.selectedIds.filter(id => id !== r.id);
      saveState();
      renderMenu();
    });
    card.querySelector(".view-link").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      showTab("recipes");
      const el = document.getElementById("recipe-" + r.id);
      if (el) { el.classList.add("open"); el.scrollIntoView({ behavior: "smooth" }); }
    });
    list.appendChild(card);
  });
  $("#selectedCount").textContent =
    state.selectedIds.length === 0 ? t("nothingSelected")
    : state.selectedIds.length === 1 ? t("selectedOne")
    : tf("selectedMany", { n: state.selectedIds.length });
}

$("#goShoppingBtn").addEventListener("click", () => showTab("shopping"));

$("#newWeekBtn").addEventListener("click", () => {
  if (!confirm(t("confirmNewWeek"))) return;
  state.selectedIds = [];
  state.shoppingChecks = {};
  state.extraItems = [];
  saveState();
  renderAll();
});

/* ---------------- shopping list ---------------- */
function buildShoppingItems() {
  // aggregate ingredients across selected recipes by (name + unit)
  const map = new Map();
  for (const id of state.selectedIds) {
    const r = recipeById(id);
    if (!r) continue;
    for (const ing of r.ingredients) {
      const key = (ing.name.trim().toLowerCase() + "|" + (ing.unit || "")).replace(/\s+/g, " ");
      if (!map.has(key)) {
        map.set(key, { key, name: ing.name, unit: ing.unit || "", qty: 0, category: ing.category || "Other", usedIn: [] });
      }
      const item = map.get(key);
      if (ing.unit !== "to taste") item.qty += scale(Number(ing.qty) || 0);
      item.usedIn.push(LANG === "fa" ? (r.nameFa || r.nameEn) : (r.nameEn || r.nameFa));
    }
  }
  return [...map.values()];
}

function renderShopping() {
  $("#shopPeople").textContent = state.people;
  const container = $("#shoppingList");
  container.innerHTML = "";

  const items = buildShoppingItems();
  if (items.length === 0 && state.extraItems.length === 0) {
    container.innerHTML = `<p class="empty-msg">${t("emptyShopping")}</p>`;
    return;
  }

  const byCat = {};
  for (const it of items) (byCat[it.category] ||= []).push(it);

  for (const cat of CATEGORIES) {
    if (!byCat[cat]) continue;
    const section = document.createElement("div");
    section.className = "shop-category";
    section.innerHTML = `<h3>${esc(t("cat_" + cat))}</h3>`;
    for (const it of byCat[cat]) section.appendChild(shoppingRow(it));
    container.appendChild(section);
  }

  if (state.extraItems.length > 0) {
    const section = document.createElement("div");
    section.className = "shop-category";
    section.innerHTML = `<h3>${t("extraItems")}</h3>`;
    for (const ex of state.extraItems) {
      const row = document.createElement("label");
      const checked = !!state.shoppingChecks[ex.id];
      row.className = "shop-item" + (checked ? " checked" : "");
      row.innerHTML = `
        <input type="checkbox" ${checked ? "checked" : ""}>
        <span>
          <span class="item-name" dir="auto">${esc(ex.name)}</span>
          <span class="store-links">${storeLinksHtml(ex.name)}</span>
        </span>
        <button class="remove-extra" title="Remove">✖</button>`;
      row.querySelector("input").addEventListener("change", e => {
        state.shoppingChecks[ex.id] = e.target.checked;
        saveState();
        renderShopping();
      });
      row.querySelector(".remove-extra").addEventListener("click", (e) => {
        e.preventDefault();
        state.extraItems = state.extraItems.filter(x => x.id !== ex.id);
        delete state.shoppingChecks[ex.id];
        saveState();
        renderShopping();
      });
      section.appendChild(row);
    }
    container.appendChild(section);
  }
}

function storeLinksHtml(name) {
  return `
    <a class="store-link walmart" href="${esc(storeSearchUrl("walmart", name))}" target="_blank" rel="noopener"
       title="${esc(t("searchTitle"))} Walmart">${t("searchWalmart")}</a>
    <a class="store-link amazon" href="${esc(storeSearchUrl("amazon", name))}" target="_blank" rel="noopener"
       title="${esc(t("searchTitle"))} Amazon">${t("searchAmazon")}</a>`;
}

function shoppingRow(it) {
  const row = document.createElement("label");
  const checked = !!state.shoppingChecks[it.key];
  row.className = "shop-item" + (checked ? " checked" : "");
  const usedIn = [...new Set(it.usedIn)].join("، ");
  row.innerHTML = `
    <input type="checkbox" ${checked ? "checked" : ""}>
    <span>
      <span class="item-name" dir="auto">${esc(it.name)}</span>
      <span class="store-links">${storeLinksHtml(it.name)}</span><br>
      <span class="used-in" dir="auto">${t("forLabel")}: ${esc(usedIn)}</span>
    </span>
    <span class="item-qty">${esc(qtyText(it.qty, it.unit))}</span>`;
  row.querySelector("input").addEventListener("change", e => {
    state.shoppingChecks[it.key] = e.target.checked;
    saveState();
    renderShopping();
  });
  // clicking a store link shouldn't toggle the checkbox
  row.querySelectorAll(".store-link").forEach(a =>
    a.addEventListener("click", e => e.stopPropagation()));
  return row;
}

$("#addExtraBtn").addEventListener("click", addExtraItem);
$("#extraItemName").addEventListener("keydown", e => { if (e.key === "Enter") addExtraItem(); });

function addExtraItem() {
  const name = $("#extraItemName").value.trim();
  if (!name) return;
  const id = "extra-" + Date.now();
  state.extraItems.push({ id, name });
  state.shoppingChecks[id] = true; // an item you add by hand is something you need to buy
  $("#extraItemName").value = "";
  saveState();
  renderShopping();
}

$("#copyListBtn").addEventListener("click", async () => {
  const items = buildShoppingItems().filter(it => state.shoppingChecks[it.key]);
  const extras = state.extraItems.filter(ex => state.shoppingChecks[ex.id]);
  if (items.length === 0 && extras.length === 0) {
    alert(t("noChecked"));
    return;
  }
  const lines = [t("shoppingListHeader") + " (" + new Date().toLocaleDateString(LANG === "fa" ? "fa-IR" : undefined) + ")"];
  for (const it of items) {
    const qt = it.unit === "to taste" ? "" : ` — ${qtyText(it.qty, it.unit)}`;
    lines.push(`• ${it.name}${qt}`);
  }
  for (const ex of extras) lines.push(`• ${ex.name}`);
  try {
    await navigator.clipboard.writeText(lines.join("\n"));
    alert(t("copied"));
  } catch {
    prompt(t("copyPrompt"), lines.join("\n"));
  }
});

$("#printListBtn").addEventListener("click", () => window.print());

/* ---------------- recipes tab ---------------- */
function renderRecipes() {
  $("#recipePeople").textContent = state.people;
  const container = $("#recipeList");
  container.innerHTML = "";
  state.recipes.forEach(r => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.id = "recipe-" + r.id;

    const ingredients = r.ingredients.map(ing => {
      const qt = ing.unit === "to taste" ? t("toTaste") : qtyText(scale(Number(ing.qty) || 0), ing.unit);
      return `<li dir="auto">${esc(ing.name)} — <strong>${esc(qt)}</strong></li>`;
    }).join("");

    const steps = (r.steps || []).map(s => `<li dir="auto">${esc(s)}</li>`).join("");
    const sourceLink = r.source?.url
      ? ` — <a href="${esc(r.source.url)}" target="_blank" rel="noopener">${t("openSource")}</a>`
      : "";
    const primary = LANG === "fa" ? (r.nameFa || r.nameEn) : (r.nameEn || r.nameFa);
    const secondary = LANG === "fa" ? (r.nameFa ? r.nameEn : "") : (r.nameEn ? r.nameFa : "");

    card.innerHTML = `
      <div class="recipe-head">
        <span class="names">
          <span class="name-en" dir="auto">${esc(primary)}</span>
          ${secondary ? `<span class="name-fa" dir="auto"> · ${esc(secondary)}</span>` : ""}
        </span>
        <button class="secondary small edit-btn">${t("edit")}</button>
        <span class="chevron">▶</span>
      </div>
      <div class="recipe-body">
        <h4>${tf("ingredientsFor", { n: state.people })}</h4>
        <ul>${ingredients}</ul>
        <h4>${t("steps")}</h4>
        <ol>${steps}</ol>
        ${r.notes ? `<div class="recipe-notes" dir="auto">📌 ${esc(r.notes)}</div>` : ""}
        <p class="source-line" dir="auto">${t("source")}: ${esc(r.source?.label || t("notSet"))}${sourceLink}</p>
      </div>`;

    card.querySelector(".recipe-head").addEventListener("click", (e) => {
      if (e.target.closest(".edit-btn")) return;
      card.classList.toggle("open");
    });
    card.querySelector(".edit-btn").addEventListener("click", () => openEditor(r.id));
    container.appendChild(card);
  });
}

/* ---------------- recipe editor ---------------- */
let editingId = null;

$("#addRecipeBtn").addEventListener("click", () => openEditor(null));

function openEditor(id) {
  editingId = id;
  const r = id ? recipeById(id) : null;
  $("#editorTitle").textContent = r ? t("editRecipe") : t("newRecipe");
  $("#edNameEn").value = r?.nameEn || "";
  $("#edNameFa").value = r?.nameFa || "";
  $("#edSourceLabel").value = r?.source?.label || "";
  $("#edSourceUrl").value = r?.source?.url || "";
  $("#edSteps").value = (r?.steps || []).join("\n");
  $("#edNotes").value = r?.notes || "";
  $("#edDeleteBtn").style.display = r ? "" : "none";
  $("#voiceTranscript").value = "";
  $("#voiceStatus").textContent = "";

  const ingBox = $("#edIngredients");
  ingBox.innerHTML = "";
  (r?.ingredients || []).forEach(ing => ingBox.appendChild(ingredientRow(ing)));
  if (!r) ingBox.appendChild(ingredientRow());

  $("#editorModal").classList.remove("hidden");
}

function ingredientRow(ing = {}) {
  const row = document.createElement("div");
  row.className = "ing-row";
  const unitOpts = UNITS.map(u =>
    `<option value="${u}" ${u === (ing.unit || "") ? "selected" : ""}>${u ? t("unit_" + u) : t("unitCount")}</option>`).join("");
  const catOpts = CATEGORIES.map(c =>
    `<option value="${c}" ${c === (ing.category || "Other") ? "selected" : ""}>${t("cat_" + c)}</option>`).join("");
  row.innerHTML = `
    <input class="ing-name" placeholder="${esc(t("ingName"))}" value="${esc(ing.name || "")}" dir="auto">
    <input class="ing-qty" type="number" step="any" min="0" placeholder="${esc(t("ingQty"))}" value="${ing.qty ?? ""}">
    <select class="ing-unit">${unitOpts}</select>
    <select class="ing-cat">${catOpts}</select>
    <button class="ing-del" title="Remove">✖</button>`;
  row.querySelector(".ing-del").addEventListener("click", () => row.remove());
  return row;
}

$("#edAddIngBtn").addEventListener("click", () => {
  $("#edIngredients").appendChild(ingredientRow());
});

$("#edSaveBtn").addEventListener("click", () => {
  const nameEn = $("#edNameEn").value.trim();
  const nameFa = $("#edNameFa").value.trim();
  if (!nameEn && !nameFa) { alert(t("needName")); return; }

  const ingredients = [...document.querySelectorAll("#edIngredients .ing-row")]
    .map(row => ({
      name: row.querySelector(".ing-name").value.trim(),
      qty: Number(row.querySelector(".ing-qty").value) || 0,
      unit: row.querySelector(".ing-unit").value,
      category: row.querySelector(".ing-cat").value
    }))
    .filter(ing => ing.name);

  const steps = $("#edSteps").value.split("\n").map(s => s.trim()).filter(Boolean);

  const data = {
    nameEn, nameFa,
    source: { label: $("#edSourceLabel").value.trim(), url: $("#edSourceUrl").value.trim() },
    ingredients, steps,
    notes: $("#edNotes").value.trim()
  };

  if (editingId) {
    Object.assign(recipeById(editingId), data);
  } else {
    data.id = "r-" + Date.now();
    state.recipes.push(data);
  }
  saveState();
  closeModals();
  renderAll();
});

$("#edDeleteBtn").addEventListener("click", () => {
  if (!editingId) return;
  const r = recipeById(editingId);
  if (!confirm(tf("confirmDelete", { name: displayName(r) }))) return;
  state.recipes = state.recipes.filter(x => x.id !== editingId);
  state.selectedIds = state.selectedIds.filter(id => id !== editingId);
  saveState();
  closeModals();
  renderAll();
});

/* ---------------- voice recording ---------------- */
let recognition = null;
let recording = false;

$("#recordBtn").addEventListener("click", () => {
  if (recording) { stopRecording(); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    $("#voiceStatus").textContent = t("noSpeech");
    return;
  }
  recognition = new SR();
  recognition.lang = $("#voiceLang").value;
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    let text = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) text += event.results[i][0].transcript + " ";
    }
    if (text) $("#voiceTranscript").value = ($("#voiceTranscript").value + " " + text).trim();
  };
  recognition.onerror = (e) => {
    $("#voiceStatus").textContent = t("recError") + e.error +
      (e.error === "not-allowed" ? t("allowMic") : "");
    stopRecording();
  };
  recognition.onend = () => { if (recording) recognition.start(); }; // keep listening until user stops

  recognition.start();
  recording = true;
  $("#recordBtn").textContent = t("stopRec");
  $("#recordBtn").classList.add("recording");
  $("#voiceStatus").textContent = t("listening") +
    " (" + ($("#voiceLang").value === "fa-IR" ? "فارسی" : "English") + ")";
});

function stopRecording() {
  recording = false;
  if (recognition) { try { recognition.stop(); } catch {} }
  $("#recordBtn").textContent = t("startRec");
  $("#recordBtn").classList.remove("recording");
  $("#voiceStatus").textContent = t("recStopped");
}

/* ---------------- AI cleanup ---------------- */
$("#aiCleanBtn").addEventListener("click", async () => {
  const transcript = $("#voiceTranscript").value.trim();
  if (!transcript) {
    $("#voiceStatus").textContent = t("nothingToClean");
    return;
  }
  if (!state.apiKey) {
    $("#voiceStatus").textContent = t("needKey");
    return;
  }
  $("#voiceStatus").textContent = t("cleaning");
  $("#aiCleanBtn").disabled = true;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": state.apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 2000,
        messages: [{
          role: "user",
          content:
`Below is a spoken/messy recipe transcript (may be in Persian or English). Turn it into a clean structured recipe scaled for 2 people.
Respond with ONLY valid JSON, no markdown, in this exact shape:
{"nameEn":"...","nameFa":"...","ingredients":[{"name":"...","qty":1,"unit":"one of: ,g,kg,cup,tbsp,tsp,can,pack,bunch,to taste","category":"one of: Produce,Meat & Protein,Dairy,Bakery,Pantry,Frozen,Spices,Other"}],"steps":["..."],"notes":"..."}
Ingredient names and steps in English (keep the Persian dish name in nameFa). If amounts are missing, use sensible amounts for 2 people.

Transcript:
${transcript}`
        }]
      })
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error("API error " + res.status + ": " + err.slice(0, 200));
    }
    const data = await res.json();
    let text = data.content?.[0]?.text || "";
    text = text.replace(/^```json?\s*/i, "").replace(/```\s*$/, "").trim();
    const parsed = JSON.parse(text);

    // fill the editor form with the AI result
    if (parsed.nameEn && !$("#edNameEn").value) $("#edNameEn").value = parsed.nameEn;
    if (parsed.nameFa && !$("#edNameFa").value) $("#edNameFa").value = parsed.nameFa;
    if (Array.isArray(parsed.ingredients) && parsed.ingredients.length) {
      const box = $("#edIngredients");
      box.innerHTML = "";
      parsed.ingredients.forEach(ing => box.appendChild(ingredientRow({
        name: ing.name || "",
        qty: Number(ing.qty) || 0,
        unit: UNITS.includes(ing.unit) ? ing.unit : "",
        category: CATEGORIES.includes(ing.category) ? ing.category : "Other"
      })));
    }
    if (Array.isArray(parsed.steps) && parsed.steps.length) $("#edSteps").value = parsed.steps.join("\n");
    if (parsed.notes) $("#edNotes").value = parsed.notes;
    if (!$("#edSourceLabel").value) $("#edSourceLabel").value = t("myVoiceRecipe");
    $("#voiceStatus").textContent = t("aiDone");
  } catch (e) {
    $("#voiceStatus").textContent = t("aiFailed") + e.message;
  } finally {
    $("#aiCleanBtn").disabled = false;
  }
});

/* ---------------- settings ---------------- */
$("#settingsBtn").addEventListener("click", () => {
  $("#apiKeyInput").value = state.apiKey || "";
  $("#settingsLang").value = LANG;
  $("#storeRegion").value = state.storeRegion || "ca";
  $("#settingsModal").classList.remove("hidden");
});

$("#settingsSaveBtn").addEventListener("click", () => {
  state.apiKey = $("#apiKeyInput").value.trim();
  state.storeRegion = $("#storeRegion").value;
  const newLang = $("#settingsLang").value;
  saveState();
  closeModals();
  if (newLang !== LANG) setLang(newLang); else renderAll();
});

$("#refreshRecipesBtn").addEventListener("click", () => {
  const defById = new Map(DEFAULT_RECIPES.map(d => [d.id, d]));
  const existingIds = new Set(state.recipes.map(r => r.id));
  const willRefresh = state.recipes.filter(r => defById.has(r.id)).length;
  const willAdd = DEFAULT_RECIPES.filter(d => !existingIds.has(d.id)).length;
  if (!confirm(
    tf("confirmRefresh1", { n: willRefresh }) +
    (willAdd ? tf("confirmRefreshAdd", { n: willAdd }) : "") +
    t("confirmRefresh2"))) return;

  // Refresh built-ins (ids matching DEFAULT_RECIPES); keep user-added recipes as-is.
  state.recipes = state.recipes.map(r =>
    defById.has(r.id) ? JSON.parse(JSON.stringify(defById.get(r.id))) : r);
  for (const d of DEFAULT_RECIPES) {
    if (!existingIds.has(d.id)) state.recipes.push(JSON.parse(JSON.stringify(d)));
  }
  saveState();
  renderAll();
  alert(tf("refreshDone1", { n: willRefresh }) +
    (willAdd ? tf("refreshDoneAdd", { n: willAdd }) : "") + t("refreshDone2"));
});

$("#exportBtn").addEventListener("click", () => {
  const exportData = { ...state, apiKey: "" }; // never export the API key
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "meal-planner-backup-" + new Date().toISOString().slice(0, 10) + ".json";
  a.click();
  URL.revokeObjectURL(a.href);
});

$("#importBtn").addEventListener("click", () => $("#importFile").click());
$("#importFile").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported.recipes)) throw new Error(t("notBackup"));
    if (!confirm(t("confirmImport"))) return;
    imported.apiKey = state.apiKey; // keep the local key
    state = imported;
    saveState();
    closeModals();
    setLang(state.lang || "en");
    $("#peopleCount").value = String(state.people || 2);
  } catch (err) {
    alert(t("importFail") + err.message);
  }
  e.target.value = "";
});

/* ---------------- modals ---------------- */
document.querySelectorAll(".close-modal").forEach(b =>
  b.addEventListener("click", closeModals));
document.querySelectorAll(".modal").forEach(m =>
  m.addEventListener("click", e => { if (e.target === m) closeModals(); }));

function closeModals() {
  if (recording) stopRecording();
  document.querySelectorAll(".modal").forEach(m => m.classList.add("hidden"));
}

/* ---------------- PWA service worker ---------------- */
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

/* ---------------- init ---------------- */
function renderAll() {
  renderMenu();
  renderShopping();
  renderRecipes();
}
$("#langSelect").value = LANG;
applyStaticI18n();
renderAll();
