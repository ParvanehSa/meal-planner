// Default recipes — all ingredient amounts are for 2 PEOPLE.
// Every recipe is bilingual: name/nameFa, ingredient name/nameFa, steps/stepsFa, notes/notesFa, source label/labelFa.
// Source priority: 1) Parvane's own recipes  2) Yummy Gastronomy (YouTube)  3) Namnak  4) other.
const DEFAULT_RECIPES = [
  {
    id: "tuna-buns",
    nameEn: "Tuna Buns",
    nameFa: "ساندویچ گرم تن ماهی",
    source: {
      label: "Your family recipe card (photo) — original serves 5, scaled to 2",
      labelFa: "کارت دستور خانوادگی شما (عکس) — اصل برای ۵ نفر، تنظیم‌شده برای ۲ نفر",
      url: ""
    },
    ingredients: [
      { name: "grated cheddar cheese", nameFa: "پنیر چدار رنده‌شده", qty: 45, unit: "g", category: "Dairy" },
      { name: "hard-boiled eggs (chopped)", nameFa: "تخم‌مرغ آب‌پز (خردشده)", qty: 1, unit: "", category: "Dairy" },
      { name: "canned tuna (drained & flaked)", nameFa: "تن ماهی (آبکش‌شده و ریش‌ریش)", qty: 0.5, unit: "can", category: "Pantry" },
      { name: "green pepper (chopped)", nameFa: "فلفل دلمه‌ای سبز (خردشده)", qty: 1, unit: "tbsp", category: "Produce" },
      { name: "green onion (chopped)", nameFa: "پیازچه (خردشده)", qty: 1, unit: "tbsp", category: "Produce" },
      { name: "green relish", nameFa: "ترشی ریز خیار (رِلیش سبز)", qty: 1, unit: "tbsp", category: "Pantry" },
      { name: "mayonnaise", nameFa: "سس مایونز", qty: 3, unit: "tbsp", category: "Pantry" },
      { name: "dinner buns (white/brown, cut in half)", nameFa: "نان ساندویچی کوچک (سفید/سبوس‌دار، از وسط نصف)", qty: 2, unit: "", category: "Bakery" }
    ],
    steps: [
      "Mix all ingredients together.",
      "Pile the mixture on the bun halves.",
      "Heat in the oven or under the broiler until brown and bubbling."
    ],
    stepsFa: [
      "همه مواد را با هم مخلوط کنید.",
      "مخلوط را روی نصفه‌های نان بگذارید.",
      "در فر یا زیر گریل حرارت دهید تا طلایی و حباب‌دار شود."
    ],
    notes: "Original card serves 5 — the card says to double it for a crowd of 10 (that is the ×5 option in 'Cooking for').",
    notesFa: "دستور اصلی برای ۵ نفر است — روی کارت نوشته برای جمعِ ۱۰ نفره دو برابر شود (همان گزینه ×۵ در «تعداد نفرات»)."
  },
  {
    id: "ghormeh-sabzi",
    nameEn: "Ghormeh Sabzi (herb stew)",
    nameFa: "قورمه سبزی",
    source: {
      label: "Yummy Gastronomy (Mahyar) — قورمه سبزی اصیل ایرانی. His recipe is for 6 servings; scaled to 2 here (÷3).",
      labelFa: "یامی گسترونومی (مهیار) — قورمه سبزی اصیل ایرانی. دستور او برای ۶ نفر است؛ اینجا برای ۲ نفر (÷۳).",
      url: "https://www.youtube.com/watch?v=Cgb9kYG6Y2s"
    },
    ingredients: [
      { name: "fresh lamb — mix of boneless stewing meat + a piece of bone-in shank", nameFa: "گوشت گوسفند تازه — ترکیب گوشت خورشتی بی‌استخوان + یک تکه ماهیچه با استخوان", qty: 300, unit: "g", category: "Meat & Protein" },
      { name: "fresh herbs, equal parts parsley + cilantro + Persian leek/chives + fenugreek (net weight, chopped)", nameFa: "سبزی قورمه تازه، به مقدار مساوی جعفری + گشنیز + تره + شنبلیله (وزن خالص، خردشده)", qty: 330, unit: "g", category: "Produce" },
      { name: "red kidney beans (dry, pre-soaked 4h)", nameFa: "لوبیا قرمز (خشک، ۴ ساعت خیسانده)", qty: 0.25, unit: "cup", category: "Pantry" },
      { name: "large white onion (chopped)", nameFa: "پیاز سفید درشت (خردشده)", qty: 1, unit: "", category: "Produce" },
      { name: "dried Omani limes, dark type (limoo amani)", nameFa: "لیمو عمانی تیره", qty: 2, unit: "", category: "Pantry" },
      { name: "ground Omani lime pulp (optional, to taste)", nameFa: "پودر لیمو عمانی (اختیاری، به ذائقه)", qty: 1, unit: "tbsp", category: "Spices" },
      { name: "verjuice (abghooreh), to taste", nameFa: "آبغوره (به ذائقه)", qty: 2, unit: "tsp", category: "Pantry" },
      { name: "turmeric", nameFa: "زردچوبه", qty: 1, unit: "tsp", category: "Spices" },
      { name: "salt", nameFa: "نمک", qty: 1, unit: "tsp", category: "Spices" },
      { name: "black pepper (freshly ground)", nameFa: "فلفل سیاه (تازه‌ساییده)", qty: 1, unit: "to taste", category: "Spices" },
      { name: "vegetable oil for frying the herbs (sunflower/canola)", nameFa: "روغن مایع برای سرخ کردن سبزی (آفتابگردان/کانولا)", qty: 0.33, unit: "cup", category: "Pantry" },
      { name: "butter ghee to top the rice", nameFa: "روغن کره برای روی برنج", qty: 2, unit: "tbsp", category: "Dairy" }
    ],
    steps: [
      "Pre-soak the kidney beans ~4 hours (raw beans give better flavour than canned).",
      "Sauté the chopped onion in a little of the oil until golden, add turmeric, then brown the lamb pieces (including the bone-in shank for flavour).",
      "In a separate pan, fry the chopped herbs in the vegetable oil on medium-low until dark, fragrant and 'jaaftadeh' — don't stir too much or they turn to purée, and don't burn them.",
      "Add the fried herbs and drained beans to the meat, cover with hot water, add salt and pepper.",
      "Pierce the dried Omani limes and add them; add the ground lime pulp and verjuice to taste for the sour balance.",
      "Simmer on low for 2.5–3 hours until the meat is tender and the stew is thick and dark. Serve over rice topped with butter ghee."
    ],
    stepsFa: [
      "لوبیا را حدود ۴ ساعت خیس کنید (لوبیای خام از کنسروی خوش‌طعم‌تر می‌شود).",
      "پیاز خردشده را با کمی روغن طلایی کنید، زردچوبه بزنید و تکه‌های گوشت (به‌همراه ماهیچه استخوان‌دار برای طعم) را تفت دهید.",
      "در تابه‌ای جدا، سبزی را با روغن روی حرارت متوسط رو به کم سرخ کنید تا تیره و معطر و جاافتاده شود — زیاد هم نزنید که پوره نشود، و نسوزد.",
      "سبزی سرخ‌شده و لوبیای آبکش‌شده را به گوشت اضافه کنید، آب جوش بریزید و نمک و فلفل بزنید.",
      "لیمو عمانی‌ها را سوراخ کنید و اضافه کنید؛ پودر لیمو عمانی و آبغوره را برای تنظیم ترشی به ذائقه اضافه کنید.",
      "۲/۵ تا ۳ ساعت روی حرارت کم بپزد تا گوشت نرم و خورش غلیظ و تیره شود. روی برنج با روغن کره سرو کنید."
    ],
    notes: "Mahyar's key points: use equal weights of the four herbs; fry them properly for the deep colour and aroma; balance the sourness at the end with Omani lime powder + verjuice. Buy fresh herbs from Indian/Arabic/Turkish/Chinese markets for best quality.",
    notesFa: "نکته‌های مهیار: وزن مساوی چهار سبزی؛ سرخ کردنِ درستِ سبزی برای رنگ و عطر عمیق؛ تنظیم ترشی در انتها با پودر لیمو عمانی و آبغوره. سبزی تازه را از فروشگاه‌های هندی/عربی/ترکی تهیه کنید."
  },
  {
    id: "olivieh",
    nameEn: "Olivieh Salad (Persian chicken & potato salad)",
    nameFa: "الویه",
    source: {
      label: "Standard Persian recipe (Namnak-style) — replace with Yummy Gastronomy video link if he has one.",
      labelFa: "دستور متداول ایرانی (به سبک نمناک) — اگر ویدیویی از یامی گسترونومی پیدا شد جایگزین کنید.",
      url: "https://namnak.com"
    },
    ingredients: [
      { name: "potatoes (medium)", nameFa: "سیب‌زمینی متوسط", qty: 2, unit: "", category: "Produce" },
      { name: "chicken breast", nameFa: "سینه مرغ", qty: 150, unit: "g", category: "Meat & Protein" },
      { name: "eggs", nameFa: "تخم‌مرغ", qty: 2, unit: "", category: "Dairy" },
      { name: "pickled cucumbers", nameFa: "خیارشور", qty: 4, unit: "", category: "Pantry" },
      { name: "green peas (frozen or canned)", nameFa: "نخود سبز (منجمد یا کنسروی)", qty: 0.5, unit: "cup", category: "Frozen" },
      { name: "carrot (optional)", nameFa: "هویج (اختیاری)", qty: 1, unit: "", category: "Produce" },
      { name: "mayonnaise", nameFa: "سس مایونز", qty: 0.5, unit: "cup", category: "Pantry" },
      { name: "lemon juice", nameFa: "آبلیمو", qty: 1, unit: "tbsp", category: "Pantry" },
      { name: "salt & black pepper", nameFa: "نمک و فلفل سیاه", qty: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Boil the chicken breast with a little salt until cooked; shred it finely.",
      "Boil the potatoes, eggs (and carrot if using) until done; peel and grate or mash them.",
      "Cook the peas briefly.",
      "Finely dice the pickles.",
      "Mix everything with mayonnaise, lemon juice, salt and pepper.",
      "Chill for at least 1 hour. Serve with bread (sangak/baguette)."
    ],
    stepsFa: [
      "سینه مرغ را با کمی نمک بپزید و ریز ریش‌ریش کنید.",
      "سیب‌زمینی، تخم‌مرغ (و هویج در صورت استفاده) را آب‌پز کنید؛ پوست بگیرید و رنده یا له کنید.",
      "نخود سبز را کمی بپزید.",
      "خیارشورها را ریز خرد کنید.",
      "همه را با مایونز، آبلیمو، نمک و فلفل مخلوط کنید.",
      "حداقل ۱ ساعت در یخچال بگذارید. با نان (سنگک/باگت) سرو کنید."
    ],
    notes: "",
    notesFa: ""
  },
  {
    id: "kashke-bademjan",
    nameEn: "Kashke Bademjan (eggplant & kashk dip)",
    nameFa: "کشک و بادمجان",
    source: {
      label: "Yummy Gastronomy (Mahyar) — کشک بادمجان درست و حسابی (his 35-year version). For ~8 main servings; scaled to 2 here (÷4).",
      labelFa: "یامی گسترونومی (مهیار) — کشک بادمجان درست و حسابی (نسخه ۳۵ ساله او). برای حدود ۸ نفر؛ اینجا برای ۲ نفر (÷۴).",
      url: "https://www.youtube.com/watch?v=48toN0szG50"
    },
    ingredients: [
      { name: "fresh eggplants (~2–3 medium)", nameFa: "بادمجان تازه (۲ تا ۳ عدد متوسط)", qty: 750, unit: "g", category: "Produce" },
      { name: "white or yellow onions (~2 medium)", nameFa: "پیاز سفید یا زرد (حدود ۲ عدد متوسط)", qty: 500, unit: "g", category: "Produce" },
      { name: "fresh garlic (about half a head, ~4–5 cloves)", nameFa: "سیر تازه (حدود نصف بوته، ۴–۵ حبه)", qty: 5, unit: "", category: "Produce" },
      { name: "dried mint", nameFa: "نعنا خشک", qty: 1, unit: "tbsp", category: "Spices" },
      { name: "kashk (liquid whey)", nameFa: "کشک (مایع)", qty: 0.5, unit: "cup", category: "Dairy" },
      { name: "walnuts (shelled)", nameFa: "مغز گردو", qty: 0.25, unit: "cup", category: "Pantry" },
      { name: "turmeric", nameFa: "زردچوبه", qty: 0.25, unit: "tsp", category: "Spices" },
      { name: "vegetable oil, sunflower (for eggplant + piaz dagh + sir dagh)", nameFa: "روغن مایع آفتابگردان (برای بادمجان + پیازداغ + سیرداغ)", qty: 0.75, unit: "cup", category: "Pantry" },
      { name: "salt & black pepper", nameFa: "نمک و فلفل سیاه", qty: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Peel and slice the eggplants; fry (or roast) in the oil until fully soft and golden — Mahyar's point is to treat them 'respectfully', cooked through but not pulverised.",
      "Make a proper deep-golden fried onion (piaz dagh) using his slow method — this is most of the flavour.",
      "Separately make fried garlic (sir dagh) and bloomed dried mint (na'na dagh).",
      "Mash the eggplant and combine with most of the piaz dagh, sir dagh, mint, turmeric, salt and pepper; he adds a little ice water for the right texture.",
      "Stir in most of the kashk and warm through briefly.",
      "Serve topped with the reserved kashk, piaz dagh, sir dagh, na'na dagh and walnuts, with warm bread."
    ],
    stepsFa: [
      "بادمجان‌ها را پوست بگیرید و ورقه کنید؛ در روغن سرخ (یا در فر) کنید تا کاملاً نرم و طلایی شود — به قول مهیار «با احترام»: پخته، ولی له‌ولورده نه.",
      "پیازداغ طلاییِ درست‌وحسابی با روش آرام او تهیه کنید — بیشترِ طعم همین‌جاست.",
      "جداگانه سیرداغ و نعناداغ آماده کنید.",
      "بادمجان را له کنید و با بیشترِ پیازداغ، سیرداغ، نعنا، زردچوبه، نمک و فلفل ترکیب کنید؛ او برای قوام کمی آب یخ اضافه می‌کند.",
      "بیشترِ کشک را اضافه کنید و چند دقیقه گرم کنید.",
      "با باقیِ کشک، پیازداغ، سیرداغ، نعناداغ و گردو تزئین کنید و با نان گرم سرو کنید."
    ],
    notes: "Mahyar's 'olympic medal' kashk bademjan. The magic is in properly made piaz dagh + sir dagh + na'na dagh, treating the eggplant gently, and a splash of ice water for texture.",
    notesFa: "کشک بادمجانِ «مدال‌المپیکیِ» مهیار. جادو در پیازداغ و سیرداغ و نعناداغِ درست، رفتار ملایم با بادمجان، و کمی آب یخ برای قوام است."
  },
  {
    id: "polo-morgh",
    nameEn: "Zereshk Polo ba Morgh (barberry rice with chicken)",
    nameFa: "پلو و مرغ (زرشک پلو با مرغ)",
    source: {
      label: "Yummy Gastronomy (Mahyar) — زرشک پلو با مرغ تکامل یافته (his original 'evolved' recipe). For 4–5 servings; scaled to 2 here.",
      labelFa: "یامی گسترونومی (مهیار) — زرشک پلو با مرغ تکامل‌یافته (رسپی اختصاصی او). برای ۴–۵ نفر؛ اینجا برای ۲ نفر.",
      url: "https://www.youtube.com/watch?v=cYzPAFIXbC8"
    },
    ingredients: [
      { name: "boneless skinless chicken breast", nameFa: "سینه مرغ بدون پوست و استخوان", qty: 450, unit: "g", category: "Meat & Protein" },
      { name: "basmati rice (cook as kateh — he has a separate rice video)", nameFa: "برنج باسماتی (به روش کته — ویدیوی جداگانه دارد)", qty: 1, unit: "cup", category: "Pantry" },
      { name: "white or yellow onion (slivered)", nameFa: "پیاز سفید یا زرد (خلالی)", qty: 1, unit: "", category: "Produce" },
      { name: "barberries (zereshk)", nameFa: "زرشک", qty: 30, unit: "g", category: "Pantry" },
      { name: "natural butter", nameFa: "کره طبیعی", qty: 1, unit: "tbsp", category: "Dairy" },
      { name: "vegetable oil (sunflower preferred)", nameFa: "روغن مایع (ترجیحاً آفتابگردان)", qty: 1.5, unit: "tbsp", category: "Pantry" },
      { name: "good tomato paste", nameFa: "رب گوجه مرغوب", qty: 1.5, unit: "tsp", category: "Pantry" },
      { name: "ground saffron (a good pinch)", nameFa: "زعفران ساییده (یک پر)", qty: 1, unit: "to taste", category: "Spices" },
      { name: "salt", nameFa: "نمک", qty: 0.75, unit: "tsp", category: "Spices" }
    ],
    steps: [
      "Cook the basmati rice (Mahyar uses his kateh method — see his rice video — but any fluffy polo works).",
      "Sliver the onion and sauté in the oil until soft and lightly golden.",
      "Add the chicken breast and cook gently; add the tomato paste and fry it in briefly — gentle heat plus the paste keeps the chicken from smelling 'zohm'.",
      "Bloom the ground saffron in a little hot water and stir it through the chicken.",
      "Separately, gently warm the barberries in the butter (a pinch of sugar optional) just until they plump and glisten — do NOT let them burn; this pulls out maximum aroma.",
      "Serve the chicken and its sauce over the rice, topped with the buttery saffron barberries."
    ],
    stepsFa: [
      "برنج را بپزید (مهیار روش کته دارد — ویدیوی برنجش را ببینید — ولی هر پلوی نرم و قدکشیده‌ای خوب است).",
      "پیاز خلالی را در روغن نرم و کمی طلایی کنید.",
      "سینه مرغ را با حرارت ملایم بپزید؛ رب را اضافه کنید و کمی تفت دهید — حرارت ملایم + رب، بوی زُهم مرغ را مهار می‌کند.",
      "زعفران را با کمی آب داغ دم کنید و به مرغ اضافه کنید.",
      "جداگانه زرشک را با کره (و در صورت تمایل کمی شکر) فقط تا وقتی پف کند و براق شود گرم کنید — نسوزد؛ همه عطرش همین‌جاست.",
      "مرغ و سسش را روی برنج بکشید و رویش زرشکِ کره‌ایِ زعفرانی بریزید."
    ],
    notes: "Mahyar's 'evolved' zereshk polo. His key idea (borrowed from classic French sauce technique) is to extract the most aroma from the saffron and barberries and to control the chicken smell — without unnecessary spices. He also has a video on picking good chicken and a separate one on perfect kateh rice.",
    notesFa: "زرشک‌پلوی «تکامل‌یافته» مهیار. ایده اصلی او (برگرفته از تکنیک سس‌های کلاسیک فرانسوی): گرفتنِ بیشترین عطر از زعفران و زرشک و مهار بوی مرغ — بدون ادویه‌های اضافه. ویدیوی جداگانه‌ای هم درباره انتخاب مرغ خوب و کته دارد."
  },
  {
    id: "fesenjan",
    nameEn: "Fesenjan (walnut & pomegranate stew)",
    nameFa: "فسنجون",
    source: {
      label: "Yummy Gastronomy (Mahyar) — فسنجان مجلسی استادپز (his original recipe). For 6 servings; scaled to 2 here (÷3). Note: he uses beef, not chicken.",
      labelFa: "یامی گسترونومی (مهیار) — فسنجان مجلسی استادپز (رسپی اوریجینال او). برای ۶ نفر؛ اینجا برای ۲ نفر (÷۳). توجه: او گوشت گوساله به کار می‌برد، نه مرغ.",
      url: "https://www.youtube.com/watch?v=-IDCHo66ezg"
    },
    ingredients: [
      { name: "fresh high-fat walnuts (finely ground)", nameFa: "مغز گردوی تازه و پرچرب (ریز آسیاب‌شده)", qty: 165, unit: "g", category: "Pantry" },
      { name: "beef loin / raste (or tenderloin for a richer version), cubed", nameFa: "گوشت راسته گوساله (یا فیله برای مجلسی‌تر)، مکعبی", qty: 330, unit: "g", category: "Meat & Protein" },
      { name: "sweet-sour pomegranate molasses (rob-e anar malas)", nameFa: "رب انار ملس", qty: 0.5, unit: "cup", category: "Pantry" },
      { name: "ready fried onion (piaz dagh)", nameFa: "پیازداغ آماده", qty: 2, unit: "tsp", category: "Pantry" },
      { name: "sugar (adjust when balancing the sauce)", nameFa: "شکر (هنگام تنظیم چاشنی کم‌وزیاد کنید)", qty: 2.5, unit: "tsp", category: "Pantry" },
      { name: "salt", nameFa: "نمک", qty: 0.75, unit: "tsp", category: "Spices" },
      { name: "vegetable oil", nameFa: "روغن مایع", qty: 2, unit: "tsp", category: "Pantry" },
      { name: "cinnamon + cardamom powder (very little, optional)", nameFa: "پودر دارچین و هل (خیلی کم، اختیاری)", qty: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Grind the fresh walnuts finely (the higher the fat content, the better the oil release).",
      "Cook the ground walnuts with water on low heat, stirring, until they darken and release their oil — this is the key stage; be patient.",
      "Add the fried onion and the cubed beef and continue simmering gently until the meat is tender.",
      "Add the pomegranate molasses and simmer; then balance the seasoning carefully — adjust sugar vs molasses until you reach the sweet–sour taste you like (this is the step Mahyar stresses most).",
      "Add a very small amount of cinnamon and cardamom if you like. Simmer until thick, dark and the oil rises. Serve with rice (kateh)."
    ],
    stepsFa: [
      "گردوی تازه را ریز آسیاب کنید (هرچه پرچرب‌تر، روغن‌اندازی بهتر).",
      "گردوی آسیاب‌شده را با آب روی حرارت کم و با هم‌زدن بپزید تا تیره شود و روغن بیندازد — مرحله کلیدی؛ صبور باشید.",
      "پیازداغ و گوشت مکعبی را اضافه کنید و آرام بپزید تا گوشت نرم شود.",
      "رب انار را اضافه کنید و بگذارید بجوشد؛ سپس چاشنی را با دقت تنظیم کنید — شکر و رب را آن‌قدر کم‌وزیاد کنید تا ملسِ دلخواهتان شود (مهم‌ترین نکته مهیار).",
      "در صورت تمایل خیلی کم دارچین و هل بزنید. تا غلیظ و تیره شدن و روغن‌انداختن بپزد. با برنج (کته) سرو کنید."
    ],
    notes: "Mahyar's original recipe. It's technically easy but needs patience — the flavour is all in slowly bringing the walnuts to oil-release and in fine-tuning the sweet–sour seasoning at the end. Beef loin is standard; tenderloin makes a more luxurious version.",
    notesFa: "رسپی اوریجینال مهیار. از نظر فنی آسان است ولی صبر می‌خواهد — همه طعم در روغن‌اندازیِ آرام گردو و تنظیم نهاییِ ملس است. راسته استاندارد است؛ فیله مجلسی‌ترش می‌کند."
  },
  {
    id: "cheese-board",
    nameEn: "Cheese Board",
    nameFa: "تخته پنیر",
    source: {
      label: "Your own assortment — adjust to taste",
      labelFa: "چیدمان سلیقه‌ای خودتان — به دلخواه تغییر دهید",
      url: ""
    },
    ingredients: [
      { name: "cheeses (2–3 kinds, e.g. brie, gouda, blue)", nameFa: "پنیر (۲–۳ نوع، مثلاً بری، گودا، پنیر آبی)", qty: 200, unit: "g", category: "Dairy" },
      { name: "crackers or baguette", nameFa: "کراکر یا باگت", qty: 1, unit: "pack", category: "Bakery" },
      { name: "grapes or figs", nameFa: "انگور یا انجیر", qty: 1, unit: "bunch", category: "Produce" },
      { name: "mixed nuts", nameFa: "آجیل مخلوط", qty: 0.5, unit: "cup", category: "Pantry" },
      { name: "olives", nameFa: "زیتون", qty: 0.5, unit: "cup", category: "Pantry" },
      { name: "honey or fig jam", nameFa: "عسل یا مربای انجیر", qty: 2, unit: "tbsp", category: "Pantry" }
    ],
    steps: [
      "Take the cheeses out of the fridge ~30 minutes before serving.",
      "Arrange cheeses, fruit, nuts, olives and crackers on a board with the honey/jam in a small bowl."
    ],
    stepsFa: [
      "پنیرها را حدود ۳۰ دقیقه قبل از سرو از یخچال درآورید.",
      "پنیر، میوه، آجیل، زیتون و کراکر را روی تخته بچینید و عسل/مربا را در کاسه کوچکی بگذارید."
    ],
    notes: "No cooking needed — just assembly.",
    notesFa: "پختی ندارد — فقط چیدمان."
  },
  {
    id: "spaghetti",
    nameEn: "Spaghetti (Italian style, with meat sauce)",
    nameFa: "اسپاگتی (ایتالیایی، با سس گوشت)",
    source: {
      label: "Standard recipe",
      labelFa: "دستور استاندارد",
      url: ""
    },
    ingredients: [
      { name: "spaghetti", nameFa: "اسپاگتی", qty: 200, unit: "g", category: "Pantry" },
      { name: "ground beef", nameFa: "گوشت چرخ‌کرده گوساله", qty: 200, unit: "g", category: "Meat & Protein" },
      { name: "onion", nameFa: "پیاز", qty: 1, unit: "", category: "Produce" },
      { name: "garlic cloves", nameFa: "سیر (حبه)", qty: 2, unit: "", category: "Produce" },
      { name: "tomato/marinara sauce", nameFa: "سس گوجه/ماریانارا", qty: 1.5, unit: "cup", category: "Pantry" },
      { name: "Italian herbs (oregano/basil)", nameFa: "سبزی‌های خشک ایتالیایی (پونه کوهی/ریحان)", qty: 1, unit: "tsp", category: "Spices" },
      { name: "parmesan cheese", nameFa: "پنیر پارمزان", qty: 30, unit: "g", category: "Dairy" },
      { name: "olive oil", nameFa: "روغن زیتون", qty: 2, unit: "tbsp", category: "Pantry" },
      { name: "salt & black pepper", nameFa: "نمک و فلفل سیاه", qty: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Sauté onion and garlic in olive oil, add the ground beef and brown it.",
      "Add tomato sauce, herbs, salt and pepper; simmer 15–20 minutes.",
      "Cook the spaghetti in salted boiling water until al dente; drain.",
      "Serve the sauce over the spaghetti with grated parmesan."
    ],
    stepsFa: [
      "پیاز و سیر را در روغن زیتون تفت دهید، گوشت چرخ‌کرده را اضافه و سرخ کنید.",
      "سس گوجه، سبزی‌های خشک، نمک و فلفل را اضافه کنید و ۱۵–۲۰ دقیقه بجوشانید.",
      "اسپاگتی را در آب‌جوشِ نمک‌دار آل‌دنته بپزید و آبکش کنید.",
      "سس را روی اسپاگتی بریزید و با پارمزان رنده‌شده سرو کنید."
    ],
    notes: "",
    notesFa: ""
  },
  {
    id: "makaroni",
    nameEn: "Makaroni (Persian macaroni with tahdig)",
    nameFa: "ماکارونی (با ته‌دیگ)",
    source: {
      label: "Standard Persian recipe — Yummy Gastronomy has no Persian-style makaroni video.",
      labelFa: "دستور متداول ایرانی — کانال یامی گسترونومی نسخه ایرانی ماکارونی ندارد.",
      url: ""
    },
    ingredients: [
      { name: "spaghetti", nameFa: "ماکارونی رشته‌ای (اسپاگتی)", qty: 200, unit: "g", category: "Pantry" },
      { name: "ground beef", nameFa: "گوشت چرخ‌کرده", qty: 200, unit: "g", category: "Meat & Protein" },
      { name: "onion", nameFa: "پیاز", qty: 1, unit: "", category: "Produce" },
      { name: "tomato paste", nameFa: "رب گوجه", qty: 2, unit: "tbsp", category: "Pantry" },
      { name: "potato (for tahdig)", nameFa: "سیب‌زمینی (برای ته‌دیگ)", qty: 1, unit: "", category: "Produce" },
      { name: "turmeric", nameFa: "زردچوبه", qty: 0.5, unit: "tsp", category: "Spices" },
      { name: "cooking oil", nameFa: "روغن مایع", qty: 4, unit: "tbsp", category: "Pantry" },
      { name: "salt & black pepper", nameFa: "نمک و فلفل سیاه", qty: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Sauté the chopped onion until golden, add turmeric, brown the ground beef, then fry in the tomato paste; season and add a splash of water; simmer 10 minutes.",
      "Boil the spaghetti in salted water until just under al dente; drain.",
      "Mix the spaghetti with the meat sauce.",
      "Coat the bottom of the pot with oil and a layer of sliced potato (tahdig), pile the spaghetti mixture on top.",
      "Cover the lid with a cloth (damkoni) and steam on low ~30–40 minutes until the tahdig is crispy.",
      "Flip or scoop out and serve with the crispy potato tahdig."
    ],
    stepsFa: [
      "پیاز خردشده را طلایی کنید، زردچوبه بزنید، گوشت را سرخ کنید و رب را تفت دهید؛ نمک و فلفل و کمی آب اضافه کنید و ۱۰ دقیقه بجوشد.",
      "ماکارونی را در آب‌جوشِ نمک‌دار کمی زیر آل‌دنته بپزید و آبکش کنید.",
      "ماکارونی را با سس گوشت مخلوط کنید.",
      "کف قابلمه روغن بریزید و یک لایه سیب‌زمینی ورقه‌ای بچینید (ته‌دیگ) و ماکارونی را رویش بریزید.",
      "درِ قابلمه را دم‌کنی بگذارید و ۳۰–۴۰ دقیقه روی حرارت کم دم کنید تا ته‌دیگ برشته شود.",
      "برگردانید یا بکشید و با ته‌دیگِ سیب‌زمینیِ برشته سرو کنید."
    ],
    notes: "",
    notesFa: ""
  },
  {
    id: "khorak-esfenaj",
    nameEn: "Khorak Esfenaj (spinach & egg dish)",
    nameFa: "خوراک اسفناج",
    source: {
      label: "Standard Persian recipe — Yummy Gastronomy has no standalone spinach dish video.",
      labelFa: "دستور متداول ایرانی — کانال یامی گسترونومی ویدیوی مستقل خوراک اسفناج ندارد.",
      url: ""
    },
    ingredients: [
      { name: "fresh spinach", nameFa: "اسفناج تازه", qty: 400, unit: "g", category: "Produce" },
      { name: "onion", nameFa: "پیاز", qty: 1, unit: "", category: "Produce" },
      { name: "garlic cloves", nameFa: "سیر (حبه)", qty: 2, unit: "", category: "Produce" },
      { name: "eggs", nameFa: "تخم‌مرغ", qty: 2, unit: "", category: "Dairy" },
      { name: "turmeric", nameFa: "زردچوبه", qty: 0.5, unit: "tsp", category: "Spices" },
      { name: "lemon juice", nameFa: "آبلیمو", qty: 1, unit: "tbsp", category: "Pantry" },
      { name: "cooking oil", nameFa: "روغن مایع", qty: 2, unit: "tbsp", category: "Pantry" },
      { name: "salt & black pepper", nameFa: "نمک و فلفل سیاه", qty: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Wash and roughly chop the spinach.",
      "Sauté the chopped onion and garlic in oil until soft; add turmeric.",
      "Add the spinach and cook until wilted and most of the water has evaporated; season with salt and pepper.",
      "Make two wells in the spinach and crack the eggs in; cover and cook until the eggs are set.",
      "Finish with lemon juice. Serve with bread (or with kashk instead of eggs, if you prefer)."
    ],
    stepsFa: [
      "اسفناج را بشویید و درشت خرد کنید.",
      "پیاز و سیر خردشده را در روغن نرم کنید؛ زردچوبه بزنید.",
      "اسفناج را اضافه کنید تا بپزد و بیشترِ آبش کشیده شود؛ نمک و فلفل بزنید.",
      "دو گودی در اسفناج باز کنید و تخم‌مرغ‌ها را در آن بشکنید؛ در قابلمه را بگذارید تا تخم‌مرغ‌ها ببندند.",
      "در انتها آبلیمو بزنید. با نان سرو کنید (یا اگر دوست دارید به‌جای تخم‌مرغ با کشک)."
    ],
    notes: "Also nice with kidney beans instead of eggs (khorak-e loobia ba esfenaj).",
    notesFa: "با لوبیا قرمز به‌جای تخم‌مرغ هم خوشمزه است (خوراک لوبیا با اسفناج)."
  }
];
