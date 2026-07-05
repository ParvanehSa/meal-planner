// Default recipes — all ingredient amounts are for 2 PEOPLE.
// Source priority: 1) Parvane's own recipes  2) Yummy Gastronomy (YouTube)  3) Namnak  4) other.
// Everything here can be edited inside the website (Recipes tab → Edit).
const DEFAULT_RECIPES = [
  {
    id: "tuna-buns",
    nameEn: "Tuna Buns",
    nameFa: "",
    source: {
      label: "Your family recipe card (photo) — original serves 5, scaled to 2",
      url: ""
    },
    ingredients: [
      { name: "grated cheddar cheese", qty: 45, unit: "g", category: "Dairy" },
      { name: "hard-boiled eggs (chopped)", qty: 1, unit: "", category: "Dairy" },
      { name: "canned tuna (drained & flaked)", qty: 0.5, unit: "can", category: "Pantry" },
      { name: "green pepper (chopped)", qty: 1, unit: "tbsp", category: "Produce" },
      { name: "green onion (chopped)", qty: 1, unit: "tbsp", category: "Produce" },
      { name: "green relish", qty: 1, unit: "tbsp", category: "Pantry" },
      { name: "mayonnaise", qty: 3, unit: "tbsp", category: "Pantry" },
      { name: "dinner buns (white/brown, cut in half)", qty: 2, unit: "", category: "Bakery" }
    ],
    steps: [
      "Mix all ingredients together.",
      "Pile the mixture on the bun halves.",
      "Heat in the oven or under the broiler until brown and bubbling."
    ],
    notes: "Original card serves 5 — the card says to double it for a crowd of 10 (that is the ×5 option in 'Cooking for')."
  },
  {
    id: "ghormeh-sabzi",
    nameEn: "Ghormeh Sabzi (herb stew)",
    nameFa: "قورمه سبزی",
    source: {
      label: "Yummy Gastronomy (Mahyar) — قورمه سبزی اصیل ایرانی. His recipe is for 6 servings; scaled to 2 here (÷3).",
      url: "https://www.youtube.com/watch?v=Cgb9kYG6Y2s"
    },
    ingredients: [
      { name: "fresh lamb — mix of boneless stewing meat + a piece of bone-in shank", qty: 300, unit: "g", category: "Meat & Protein" },
      { name: "fresh herbs, equal parts parsley + cilantro + Persian leek/chives + fenugreek (net weight, chopped)", qty: 330, unit: "g", category: "Produce" },
      { name: "red kidney beans (dry, pre-soaked 4h)", qty: 0.25, unit: "cup", category: "Pantry" },
      { name: "large white onion (chopped)", qty: 1, unit: "", category: "Produce" },
      { name: "dried Omani limes, dark type (limoo amani)", qty: 2, unit: "", category: "Pantry" },
      { name: "ground Omani lime pulp (optional, to taste)", qty: 1, unit: "tbsp", category: "Spices" },
      { name: "verjuice (abghooreh), to taste", qty: 2, unit: "tsp", category: "Pantry" },
      { name: "turmeric", qty: 1, unit: "tsp", category: "Spices" },
      { name: "salt", qty: 1, unit: "tsp", category: "Spices" },
      { name: "black pepper (freshly ground)", qty: 1, unit: "to taste", category: "Spices" },
      { name: "vegetable oil for frying the herbs (sunflower/canola)", qty: 0.33, unit: "cup", category: "Pantry" },
      { name: "butter ghee to top the rice", qty: 2, unit: "tbsp", category: "Dairy" }
    ],
    steps: [
      "Pre-soak the kidney beans ~4 hours (raw beans give better flavour than canned).",
      "Sauté the chopped onion in a little of the oil until golden, add turmeric, then brown the lamb pieces (including the bone-in shank for flavour).",
      "In a separate pan, fry the chopped herbs in the vegetable oil on medium-low until dark, fragrant and 'jaaftadeh' — don't stir too much or they turn to purée, and don't burn them.",
      "Add the fried herbs and drained beans to the meat, cover with hot water, add salt and pepper.",
      "Pierce the dried Omani limes and add them; add the ground lime pulp and verjuice to taste for the sour balance.",
      "Simmer on low for 2.5–3 hours until the meat is tender and the stew is thick and dark. Serve over rice topped with butter ghee."
    ],
    notes: "Mahyar's key points: use equal weights of the four herbs; fry them properly for the deep colour and aroma; balance the sourness at the end with Omani lime powder + verjuice. Buy fresh herbs from Indian/Arabic/Turkish/Chinese markets for best quality."
  },
  {
    id: "olivieh",
    nameEn: "Olivieh Salad (Persian chicken & potato salad)",
    nameFa: "الویه",
    source: {
      label: "Standard Persian recipe (Namnak-style) — replace with Yummy Gastronomy video link if he has one.",
      url: "https://namnak.com"
    },
    ingredients: [
      { name: "potatoes (medium)", qty: 2, unit: "", category: "Produce" },
      { name: "chicken breast", qty: 150, unit: "g", category: "Meat & Protein" },
      { name: "eggs", qty: 2, unit: "", category: "Dairy" },
      { name: "pickled cucumbers", qty: 4, unit: "", category: "Pantry" },
      { name: "green peas (frozen or canned)", qty: 0.5, unit: "cup", category: "Frozen" },
      { name: "carrot (optional)", qty: 1, unit: "", category: "Produce" },
      { name: "mayonnaise", qty: 0.5, unit: "cup", category: "Pantry" },
      { name: "lemon juice", qty: 1, unit: "tbsp", category: "Pantry" },
      { name: "salt & black pepper", qty: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Boil the chicken breast with a little salt until cooked; shred it finely.",
      "Boil the potatoes, eggs (and carrot if using) until done; peel and grate or mash them.",
      "Cook the peas briefly.",
      "Finely dice the pickles.",
      "Mix everything with mayonnaise, lemon juice, salt and pepper.",
      "Chill for at least 1 hour. Serve with bread (sangak/baguette)."
    ],
    notes: ""
  },
  {
    id: "kashke-bademjan",
    nameEn: "Kashke Bademjan (eggplant & kashk dip)",
    nameFa: "کشک و بادمجان",
    source: {
      label: "Yummy Gastronomy (Mahyar) — کشک بادمجان درست و حسابی (his 35-year version). For ~8 main servings; scaled to 2 here (÷4).",
      url: "https://www.youtube.com/watch?v=48toN0szG50"
    },
    ingredients: [
      { name: "fresh eggplants (~2–3 medium)", qty: 750, unit: "g", category: "Produce" },
      { name: "white or yellow onions (~2 medium)", qty: 500, unit: "g", category: "Produce" },
      { name: "fresh garlic (about half a head, ~4–5 cloves)", qty: 5, unit: "", category: "Produce" },
      { name: "dried mint", qty: 1, unit: "tbsp", category: "Spices" },
      { name: "kashk (liquid whey)", qty: 0.5, unit: "cup", category: "Dairy" },
      { name: "walnuts (shelled)", qty: 0.25, unit: "cup", category: "Pantry" },
      { name: "turmeric", qty: 0.25, unit: "tsp", category: "Spices" },
      { name: "vegetable oil, sunflower (for eggplant + piaz dagh + sir dagh)", qty: 0.75, unit: "cup", category: "Pantry" },
      { name: "salt & black pepper", qty: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Peel and slice the eggplants; fry (or roast) in the oil until fully soft and golden — Mahyar's point is to treat them 'respectfully', cooked through but not pulverised.",
      "Make a proper deep-golden fried onion (piaz dagh) using his slow method — this is most of the flavour.",
      "Separately make fried garlic (sir dagh) and bloomed dried mint (na'na dagh).",
      "Mash the eggplant and combine with most of the piaz dagh, sir dagh, mint, turmeric, salt and pepper; he adds a little ice water for the right texture.",
      "Stir in most of the kashk and warm through briefly.",
      "Serve topped with the reserved kashk, piaz dagh, sir dagh, na'na dagh and walnuts, with warm bread."
    ],
    notes: "Mahyar's 'olympic medal' kashk bademjan. The magic is in properly made piaz dagh + sir dagh + na'na dagh, treating the eggplant gently, and a splash of ice water for texture."
  },
  {
    id: "polo-morgh",
    nameEn: "Zereshk Polo ba Morgh (barberry rice with chicken)",
    nameFa: "پلو و مرغ (زرشک پلو با مرغ)",
    source: {
      label: "Yummy Gastronomy (Mahyar) — زرشک پلو با مرغ تکامل یافته (his original 'evolved' recipe). For 4–5 servings; scaled to 2 here.",
      url: "https://www.youtube.com/watch?v=cYzPAFIXbC8"
    },
    ingredients: [
      { name: "boneless skinless chicken breast", qty: 450, unit: "g", category: "Meat & Protein" },
      { name: "basmati rice (cook as kateh — he has a separate rice video)", qty: 1, unit: "cup", category: "Pantry" },
      { name: "white or yellow onion (slivered)", qty: 1, unit: "", category: "Produce" },
      { name: "barberries (zereshk)", qty: 30, unit: "g", category: "Pantry" },
      { name: "natural butter", qty: 1, unit: "tbsp", category: "Dairy" },
      { name: "vegetable oil (sunflower preferred)", qty: 1.5, unit: "tbsp", category: "Pantry" },
      { name: "good tomato paste", qty: 1.5, unit: "tsp", category: "Pantry" },
      { name: "ground saffron (a good pinch)", qty: 1, unit: "to taste", category: "Spices" },
      { name: "salt", qty: 0.75, unit: "tsp", category: "Spices" }
    ],
    steps: [
      "Cook the basmati rice (Mahyar uses his kateh method — see his rice video — but any fluffy polo works).",
      "Sliver the onion and sauté in the oil until soft and lightly golden.",
      "Add the chicken breast and cook gently; add the tomato paste and fry it in briefly — gentle heat plus the paste keeps the chicken from smelling 'zohm'.",
      "Bloom the ground saffron in a little hot water and stir it through the chicken.",
      "Separately, gently warm the barberries in the butter (a pinch of sugar optional) just until they plump and glisten — do NOT let them burn; this pulls out maximum aroma.",
      "Serve the chicken and its sauce over the rice, topped with the buttery saffron barberries."
    ],
    notes: "Mahyar's 'evolved' zereshk polo. His key idea (borrowed from classic French sauce technique) is to extract the most aroma from the saffron and barberries and to control the chicken smell — without unnecessary spices. He also has a video on picking good chicken and a separate one on perfect kateh rice."
  },
  {
    id: "fesenjan",
    nameEn: "Fesenjan (walnut & pomegranate stew)",
    nameFa: "فسنجون",
    source: {
      label: "Yummy Gastronomy (Mahyar) — فسنجان مجلسی استادپز (his original recipe). For 6 servings; scaled to 2 here (÷3). Note: he uses beef, not chicken.",
      url: "https://www.youtube.com/watch?v=-IDCHo66ezg"
    },
    ingredients: [
      { name: "fresh high-fat walnuts (finely ground)", qty: 165, unit: "g", category: "Pantry" },
      { name: "beef loin / raste (or tenderloin for a richer version), cubed", qty: 330, unit: "g", category: "Meat & Protein" },
      { name: "sweet-sour pomegranate molasses (rob-e anar malas)", qty: 0.5, unit: "cup", category: "Pantry" },
      { name: "ready fried onion (piaz dagh)", qty: 2, unit: "tsp", category: "Pantry" },
      { name: "sugar (adjust when balancing the sauce)", qty: 2.5, unit: "tsp", category: "Pantry" },
      { name: "salt", qty: 0.75, unit: "tsp", category: "Spices" },
      { name: "vegetable oil", qty: 2, unit: "tsp", category: "Pantry" },
      { name: "cinnamon + cardamom powder (very little, optional)", qty: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Grind the fresh walnuts finely (the higher the fat content, the better the oil release).",
      "Cook the ground walnuts with water on low heat, stirring, until they darken and release their oil — this is the key stage; be patient.",
      "Add the fried onion and the cubed beef and continue simmering gently until the meat is tender.",
      "Add the pomegranate molasses and simmer; then balance the seasoning carefully — adjust sugar vs molasses until you reach the sweet–sour taste you like (this is the step Mahyar stresses most).",
      "Add a very small amount of cinnamon and cardamom if you like. Simmer until thick, dark and the oil rises. Serve with rice (kateh)."
    ],
    notes: "Mahyar's original recipe. It's technically easy but needs patience — the flavour is all in slowly bringing the walnuts to oil-release and in fine-tuning the sweet–sour seasoning at the end. Beef loin is standard; tenderloin makes a more luxurious version."
  },
  {
    id: "cheese-board",
    nameEn: "Cheese Board",
    nameFa: "",
    source: {
      label: "Your own assortment — adjust to taste",
      url: ""
    },
    ingredients: [
      { name: "cheeses (2–3 kinds, e.g. brie, gouda, blue)", qty: 200, unit: "g", category: "Dairy" },
      { name: "crackers or baguette", qty: 1, unit: "pack", category: "Bakery" },
      { name: "grapes or figs", qty: 1, unit: "bunch", category: "Produce" },
      { name: "mixed nuts", qty: 0.5, unit: "cup", category: "Pantry" },
      { name: "olives", qty: 0.5, unit: "cup", category: "Pantry" },
      { name: "honey or fig jam", qty: 2, unit: "tbsp", category: "Pantry" }
    ],
    steps: [
      "Take the cheeses out of the fridge ~30 minutes before serving.",
      "Arrange cheeses, fruit, nuts, olives and crackers on a board with the honey/jam in a small bowl."
    ],
    notes: "No cooking needed — just assembly."
  },
  {
    id: "spaghetti",
    nameEn: "Spaghetti (Italian style, with meat sauce)",
    nameFa: "",
    source: {
      label: "Standard recipe",
      url: ""
    },
    ingredients: [
      { name: "spaghetti", qty: 200, unit: "g", category: "Pantry" },
      { name: "ground beef", qty: 200, unit: "g", category: "Meat & Protein" },
      { name: "onion", qty: 1, unit: "", category: "Produce" },
      { name: "garlic cloves", qty: 2, unit: "", category: "Produce" },
      { name: "tomato/marinara sauce", qty: 1.5, unit: "cup", category: "Pantry" },
      { name: "Italian herbs (oregano/basil)", qty: 1, unit: "tsp", category: "Spices" },
      { name: "parmesan cheese", qty: 30, unit: "g", category: "Dairy" },
      { name: "olive oil", qty: 2, unit: "tbsp", category: "Pantry" },
      { name: "salt & black pepper", qty: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Sauté onion and garlic in olive oil, add the ground beef and brown it.",
      "Add tomato sauce, herbs, salt and pepper; simmer 15–20 minutes.",
      "Cook the spaghetti in salted boiling water until al dente; drain.",
      "Serve the sauce over the spaghetti with grated parmesan."
    ],
    notes: ""
  },
  {
    id: "makaroni",
    nameEn: "Makaroni (Persian macaroni with tahdig)",
    nameFa: "ماکارونی",
    source: {
      label: "Standard Persian recipe — replace with Yummy Gastronomy video link if he has one.",
      url: ""
    },
    ingredients: [
      { name: "spaghetti", qty: 200, unit: "g", category: "Pantry" },
      { name: "ground beef", qty: 200, unit: "g", category: "Meat & Protein" },
      { name: "onion", qty: 1, unit: "", category: "Produce" },
      { name: "tomato paste", qty: 2, unit: "tbsp", category: "Pantry" },
      { name: "potato (for tahdig)", qty: 1, unit: "", category: "Produce" },
      { name: "turmeric", qty: 0.5, unit: "tsp", category: "Spices" },
      { name: "cooking oil", qty: 4, unit: "tbsp", category: "Pantry" },
      { name: "salt & black pepper", qty: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Sauté the chopped onion until golden, add turmeric, brown the ground beef, then fry in the tomato paste; season and add a splash of water; simmer 10 minutes.",
      "Boil the spaghetti in salted water until just under al dente; drain.",
      "Mix the spaghetti with the meat sauce.",
      "Coat the bottom of the pot with oil and a layer of sliced potato (tahdig), pile the spaghetti mixture on top.",
      "Cover the lid with a cloth (damkoni) and steam on low ~30–40 minutes until the tahdig is crispy.",
      "Flip or scoop out and serve with the crispy potato tahdig."
    ],
    notes: ""
  },
  {
    id: "khorak-esfenaj",
    nameEn: "Khorak Esfenaj (spinach & egg dish)",
    nameFa: "خوراک اسفناج",
    source: {
      label: "Standard Persian recipe — replace with Yummy Gastronomy video link if he has one.",
      url: ""
    },
    ingredients: [
      { name: "fresh spinach", qty: 400, unit: "g", category: "Produce" },
      { name: "onion", qty: 1, unit: "", category: "Produce" },
      { name: "garlic cloves", qty: 2, unit: "", category: "Produce" },
      { name: "eggs", qty: 2, unit: "", category: "Dairy" },
      { name: "turmeric", qty: 0.5, unit: "tsp", category: "Spices" },
      { name: "lemon juice", qty: 1, unit: "tbsp", category: "Pantry" },
      { name: "cooking oil", qty: 2, unit: "tbsp", category: "Pantry" },
      { name: "salt & black pepper", qty: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Wash and roughly chop the spinach.",
      "Sauté the chopped onion and garlic in oil until soft; add turmeric.",
      "Add the spinach and cook until wilted and most of the water has evaporated; season with salt and pepper.",
      "Make two wells in the spinach and crack the eggs in; cover and cook until the eggs are set.",
      "Finish with lemon juice. Serve with bread (or with kashk instead of eggs, if you prefer)."
    ],
    notes: "Also nice with kidney beans instead of eggs (khorak-e loobia ba esfenaj)."
  }
];
