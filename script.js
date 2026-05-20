const foods = [
  {
    name: "Qumësht",
    minerals: "Ca 120 mg, P 95 mg, K 150 mg, Mg 11 mg",
    daily: "Ca 9%, P 8%, K 3%, Mg 3%",
    importance: "I rëndësishëm për kockat, dhëmbët dhe muskujt."
  },
  {
    name: "Kos natyral",
    minerals: "Ca 120 mg, P 95 mg, K 155 mg, Mg 12 mg",
    daily: "Ca 9%, P 8%, K 3%, Mg 3%",
    importance: "Ndihmon kockat, tretjen dhe funksionin muskulor."
  },
  {
    name: "Djathë i bardhë",
    minerals: "Ca 400-500 mg, P 300 mg, Na 900-1200 mg, Zn 2-3 mg",
    daily: "Ca 31-38%, P 24%, Na 39-52%, Zn 18-27%",
    importance: "Shumë i pasur me kalcium, por mund të ketë shumë kripë."
  },
  {
    name: "Gjizë",
    minerals: "Ca 80-100 mg, P 120-160 mg, Na 300-400 mg",
    daily: "Ca 6-8%, P 10-13%, Na 13-17%",
    importance: "Burim proteinash dhe mineralesh për kockat."
  },
  {
    name: "Vezë",
    minerals: "Fe 1.8 mg, P 200 mg, Zn 1.3 mg, Se 30 mcg, I 25 mcg",
    daily: "Fe 10%, P 16%, Zn 12%, Se 55%, I 17%",
    importance: "Ndihmon gjakun, imunitetin dhe funksionin e tiroides."
  },
  {
    name: "Mish viçi",
    minerals: "Fe 2.6 mg, Zn 4.5 mg, P 200 mg, K 320 mg",
    daily: "Fe 14%, Zn 41%, P 16%, K 7%",
    importance: "I pasur me hekur dhe zink; ndihmon kundër anemisë."
  },
  {
    name: "Mish pule",
    minerals: "P 190 mg, K 250 mg, Zn 1 mg, Se 25 mcg",
    daily: "P 15%, K 5%, Zn 9%, Se 45%",
    importance: "Ndihmon muskujt, imunitetin dhe metabolizmin."
  },
  {
    name: "Mëlçi viçi",
    minerals: "Fe 6-7 mg, Zn 4 mg, Cu 9-12 mg, P 400 mg",
    daily: "Fe 33-39%, Zn 36%, P 32%",
    importance: "Shumë e pasur me hekur; ndihmon formimin e hemoglobinës."
  },
  {
    name: "Peshk i bardhë",
    minerals: "I 40-100 mcg, P 180-220 mg, K 300 mg, Se 30 mcg",
    daily: "I 27-67%, P 14-18%, K 6%, Se 55%",
    importance: "I rëndësishëm për tiroiden, trurin dhe muskujt."
  },
  {
    name: "Salmon",
    minerals: "P 200 mg, K 360 mg, Se 35 mcg, I 30-50 mcg",
    daily: "P 16%, K 8%, Se 64%, I 20-33%",
    importance: "Mbështet trurin, metabolizmin dhe shëndetin qelizor."
  },
  {
    name: "Sardele me kocka",
    minerals: "Ca 380 mg, P 490 mg, Se 50 mcg, I 30-60 mcg",
    daily: "Ca 29%, P 39%, Se 91%, I 20-40%",
    importance: "Shumë të mira për kockat për shkak të kalciumit."
  },
  {
    name: "Ton",
    minerals: "P 250 mg, K 250 mg, Se 80 mcg, I 15-30 mcg",
    daily: "P 20%, K 5%, Se 145%, I 10-20%",
    importance: "I pasur me selen dhe fosfor."
  },
  {
    name: "Karkaleca",
    minerals: "I 35-100 mcg, Zn 1.3 mg, Se 40 mcg, P 200 mg",
    daily: "I 23-67%, Zn 12%, Se 73%, P 16%",
    importance: "Të pasura me jod dhe selen."
  },
  {
    name: "Kripë e jodizuar",
    minerals: "Na rreth 38,000 mg, I ndryshon sipas fortifikimit",
    daily: "Na shumë mbi 100%",
    importance: "Jep natrium dhe jod, por duhet përdorur me masë."
  },
  {
    name: "Banane",
    minerals: "K 358 mg, Mg 27 mg, P 22 mg",
    daily: "K 8%, Mg 6%, P 2%",
    importance: "E njohur për kaliumin; ndihmon zemrën dhe muskujt."
  },
  {
    name: "Patate",
    minerals: "K 420 mg, Mg 23 mg, P 57 mg, Fe 0.8 mg",
    daily: "K 9%, Mg 5%, P 5%, Fe 4%",
    importance: "Burim i mirë kaliumi dhe energjie."
  },
  {
    name: "Patate e ëmbël",
    minerals: "K 337 mg, Mg 25 mg, P 47 mg, Mn 0.3 mg",
    daily: "K 7%, Mg 6%, P 4%",
    importance: "Ndihmon metabolizmin dhe funksionin muskulor."
  },
  {
    name: "Spinaq",
    minerals: "Fe 2.7 mg, Mg 79 mg, K 558 mg, Ca 99 mg",
    daily: "Fe 15%, Mg 19%, K 12%, Ca 8%",
    importance: "Ka hekur e magnez; hekuri bimor përthithet më pak se ai i mishit."
  },
  {
    name: "Brokoli",
    minerals: "Ca 47 mg, K 316 mg, Mg 21 mg, Fe 0.7 mg",
    daily: "Ca 4%, K 7%, Mg 5%, Fe 4%",
    importance: "Ndihmon kockat, imunitetin dhe dietën e balancuar."
  },
  {
    name: "Lakër jeshile",
    minerals: "Ca 150 mg, K 491 mg, Mg 47 mg, Fe 1.5 mg",
    daily: "Ca 12%, K 10%, Mg 11%, Fe 8%",
    importance: "E pasur me minerale për kockat dhe gjakun."
  },
  {
    name: "Sallatë jeshile",
    minerals: "K 194 mg, Ca 36 mg, Mg 13 mg, Fe 0.9 mg",
    daily: "K 4%, Ca 3%, Mg 3%, Fe 5%",
    importance: "Ka minerale në sasi të vogla dhe ndihmon hidratimin."
  },
  {
    name: "Karrotë",
    minerals: "K 320 mg, Ca 33 mg, Mg 12 mg, P 35 mg",
    daily: "K 7%, Ca 3%, Mg 3%, P 3%",
    importance: "Ndihmon funksionin qelizor dhe muskulor."
  },
  {
    name: "Domate",
    minerals: "K 237 mg, Mg 11 mg, P 24 mg",
    daily: "K 5%, Mg 3%, P 2%",
    importance: "Burim i mirë kaliumi dhe uji."
  },
  {
    name: "Kastravec",
    minerals: "K 147 mg, Mg 13 mg, Ca 16 mg",
    daily: "K 3%, Mg 3%, Ca 1%",
    importance: "Ndihmon hidratimin dhe balancën e lëngjeve."
  },
  {
    name: "Speca",
    minerals: "K 211 mg, Mg 12 mg, Fe 0.4 mg",
    daily: "K 4%, Mg 3%, Fe 2%",
    importance: "Mbështesin metabolizmin dhe ushqyerjen e shëndetshme."
  },
  {
    name: "Qepë",
    minerals: "K 146 mg, Ca 23 mg, P 29 mg",
    daily: "K 3%, Ca 2%, P 2%",
    importance: "Ka minerale në sasi të vogla."
  },
  {
    name: "Hudhër",
    minerals: "K 401 mg, P 153 mg, Ca 181 mg, Se 14 mcg",
    daily: "K 9%, P 12%, Ca 14%, Se 25%",
    importance: "Ka minerale të dobishme, por zakonisht hahet në sasi të vogla."
  },
  {
    name: "Fasule të ziera",
    minerals: "Fe 2.1 mg, Mg 45 mg, K 405 mg, P 140 mg, Zn 1 mg",
    daily: "Fe 12%, Mg 11%, K 9%, P 11%, Zn 9%",
    importance: "Burim i mirë hekuri bimor, magnezi dhe kaliumi."
  },
  {
    name: "Thjerrëza të ziera",
    minerals: "Fe 3.3 mg, Mg 36 mg, K 369 mg, P 180 mg, Zn 1.3 mg",
    daily: "Fe 18%, Mg 9%, K 8%, P 14%, Zn 12%",
    importance: "Të mira për energji dhe parandalim të lodhjes."
  },
  {
    name: "Qiqra të ziera",
    minerals: "Fe 2.9 mg, Mg 48 mg, K 291 mg, P 168 mg, Zn 1.5 mg",
    daily: "Fe 16%, Mg 11%, K 6%, P 13%, Zn 14%",
    importance: "Ndihmojnë muskujt, imunitetin dhe energjinë."
  },
  {
    name: "Bizele",
    minerals: "Fe 1.5 mg, Mg 33 mg, K 244 mg, P 108 mg",
    daily: "Fe 8%, Mg 8%, K 5%, P 9%",
    importance: "Burim bimor mineralesh."
  },
  {
    name: "Misër",
    minerals: "Mg 37 mg, P 89 mg, K 270 mg, Fe 0.5 mg",
    daily: "Mg 9%, P 7%, K 6%, Fe 3%",
    importance: "Ndihmon prodhimin e energjisë."
  },
  {
    name: "Oriz integral",
    minerals: "Mg 44 mg, P 112 mg, Mn 1.1 mg, Se 10 mcg",
    daily: "Mg 10%, P 9%, Se 18%",
    importance: "Më i pasur me minerale se orizi i bardhë."
  },
  {
    name: "Tërshërë",
    minerals: "Mg 138 mg, Fe 4.7 mg, P 410 mg, Zn 4 mg, Mn 4.9 mg",
    daily: "Mg 33%, Fe 26%, P 33%, Zn 36%",
    importance: "Shumë e mirë për energji, nerva dhe muskuj."
  },
  {
    name: "Bukë integrale",
    minerals: "Fe 2.5 mg, Mg 80 mg, P 200 mg, Zn 1.8 mg",
    daily: "Fe 14%, Mg 19%, P 16%, Zn 16%",
    importance: "Më e pasur me minerale se buka e bardhë."
  },
  {
    name: "Makarona integrale",
    minerals: "Mg 50 mg, P 150 mg, Fe 1.5 mg, Zn 1.2 mg",
    daily: "Mg 12%, P 12%, Fe 8%, Zn 11%",
    importance: "Ndihmon energjinë dhe funksionin muskulor."
  },
  {
    name: "Arra",
    minerals: "Mg 158 mg, P 346 mg, Zn 3 mg, Cu 1.6 mg, Mn 3.4 mg",
    daily: "Mg 38%, P 28%, Zn 27%",
    importance: "Të pasura me minerale për trurin dhe nervat."
  },
  {
    name: "Bajame",
    minerals: "Mg 270 mg, Ca 269 mg, P 481 mg, Zn 3.1 mg",
    daily: "Mg 64%, Ca 21%, P 38%, Zn 28%",
    importance: "Shumë të mira për kocka, muskuj dhe energji."
  },
  {
    name: "Lajthi",
    minerals: "Mg 163 mg, P 290 mg, Cu 1.7 mg, Mn 6 mg",
    daily: "Mg 39%, P 23%",
    importance: "Të pasura me magnez, bakër dhe mangan."
  },
  {
    name: "Kikirikë",
    minerals: "Mg 168 mg, P 376 mg, K 705 mg, Zn 3.3 mg",
    daily: "Mg 40%, P 30%, K 15%, Zn 30%",
    importance: "Burim i mirë mineralesh dhe energjie."
  },
  {
    name: "Fara kungulli",
    minerals: "Mg 535 mg, Zn 7.6 mg, Fe 8.8 mg, P 1170 mg",
    daily: "Mg 127%, Zn 69%, Fe 49%, P 94%",
    importance: "Shumë të pasura me magnez, zink dhe hekur."
  },
  {
    name: "Fara luledielli",
    minerals: "Mg 325 mg, P 660 mg, Se 53 mcg, Zn 5 mg",
    daily: "Mg 77%, P 53%, Se 96%, Zn 45%",
    importance: "Të mira për metabolizmin dhe mbrojtjen qelizore."
  },
  {
    name: "Fara chia",
    minerals: "Ca 631 mg, Mg 335 mg, P 860 mg, Fe 7.7 mg",
    daily: "Ca 49%, Mg 80%, P 69%, Fe 43%",
    importance: "Shumë të pasura me kalcium, magnez dhe fosfor."
  },
  {
    name: "Susam",
    minerals: "Ca 975 mg, Mg 351 mg, Fe 14.6 mg, Zn 7.8 mg",
    daily: "Ca 75%, Mg 84%, Fe 81%, Zn 71%",
    importance: "Një nga burimet bimore më të pasura me kalcium."
  },
  {
    name: "Kakao / çokollatë e zezë",
    minerals: "Mg 228 mg, Fe 11.9 mg, Cu 3.8 mg, Mn 1.9 mg",
    daily: "Mg 54%, Fe 66%",
    importance: "E pasur me magnez dhe hekur; konsumohet me masë."
  },
  {
    name: "Avokado",
    minerals: "K 485 mg, Mg 29 mg, Cu 0.2 mg, P 52 mg",
    daily: "K 10%, Mg 7%, P 4%",
    importance: "Burim i mirë kaliumi për zemrën dhe muskujt."
  },
  {
    name: "Portokall",
    minerals: "K 181 mg, Ca 40 mg, Mg 10 mg",
    daily: "K 4%, Ca 3%, Mg 2%",
    importance: "Ndihmon përthithjen e hekurit nga ushqimet bimore."
  },
  {
    name: "Mollë",
    minerals: "K 107 mg, Mg 5 mg, Ca 6 mg",
    daily: "K 2%, Mg 1%, Ca <1%",
    importance: "Ka pak minerale, por është pjesë e dietës së shëndetshme."
  },
  {
    name: "Dardhë",
    minerals: "K 116 mg, Mg 7 mg, Ca 9 mg",
    daily: "K 2%, Mg 2%, Ca 1%",
    importance: "Ndihmon hidratimin dhe ushqyerjen e balancuar."
  },
  {
    name: "Rrush",
    minerals: "K 191 mg, Mn 0.1 mg, Ca 10 mg",
    daily: "K 4%, Ca 1%",
    importance: "Ka kalium dhe ndihmon energjinë."
  },
  {
    name: "Kajsi",
    minerals: "K 259 mg, Fe 0.4 mg, Mg 10 mg",
    daily: "K 6%, Fe 2%, Mg 2%",
    importance: "E dobishme për funksion muskulor."
  },
  {
    name: "Fiq të thatë",
    minerals: "Ca 162 mg, K 680 mg, Mg 68 mg, Fe 2 mg",
    daily: "Ca 12%, K 14%, Mg 16%, Fe 11%",
    importance: "Më të pasur me minerale se shumë fruta të freskëta."
  },
  {
    name: "Rrush i thatë",
    minerals: "K 749 mg, Fe 1.9 mg, Mg 32 mg",
    daily: "K 16%, Fe 11%, Mg 8%",
    importance: "I pasur me kalium, por ka shumë sheqerna natyrale."
  },
  {
    name: "Kumbulla të thata",
    minerals: "K 732 mg, Fe 0.9 mg, Mg 41 mg",
    daily: "K 16%, Fe 5%, Mg 10%",
    importance: "Ndihmojnë tretjen dhe furnizojnë minerale."
  },
  {
    name: "Kërpudha",
    minerals: "Se 9-20 mcg, K 318 mg, P 86 mg, Cu 0.3 mg",
    daily: "Se 16-36%, K 7%, P 7%",
    importance: "Burim i mirë seleni dhe kaliumi."
  },
  {
    name: "Alga detare",
    minerals: "I shumë i lartë, Na 200-900 mg, Ca 100-150 mg, Mg 100 mg",
    daily: "I shpesh mbi 100%",
    importance: "Shumë të pasura me jod; duhen konsumuar me kujdes."
  },
  {
    name: "Ujë mineral",
    minerals: "Ca 10-150 mg/L, Mg 5-50 mg/L, Na ndryshon",
    daily: "Varet nga burimi",
    importance: "Përmbajtja ndryshon sipas llojit të ujit mineral."
  },
  {
    name: "Produkte të përpunuara",
    minerals: "Na shpesh 500-1500 mg, P i shtuar në disa produkte",
    daily: "Na 22-65%",
    importance: "Kanë shpesh shumë natrium; teprica lidhet me presionin e lartë."
  },
  {
    name: "Turshi",
    minerals: "Na 800-1500 mg, K 100-300 mg",
    daily: "Na 35-65%, K 2-6%",
    importance: "Të pasura me natrium për shkak të kripës."
  }
];

const mineralNames = {
  Ca: "Kalcium",
  P: "Fosfor",
  K: "Kalium",
  Mg: "Magnez",
  Na: "Natrium",
  Zn: "Zink",
  Fe: "Hekur",
  Se: "Selen",
  I: "Jod",
  Cu: "Bakër",
  Mn: "Mangan"
};

const searchInput = document.querySelector("#foodSearch");
const clearButton = document.querySelector("#clearSearch");
const suggestions = document.querySelector("#suggestions");
const resultCard = document.querySelector("#resultCard");
const foodGrid = document.querySelector("#foodGrid");
const foodCount = document.querySelector("#foodCount");

let selectedFood = null;

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ç/g, "c")
    .replace(/ë/g, "e")
    .trim();
}

function findMatches(query) {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return foods.slice(0, 9);
  }

  return foods
    .map((food) => {
      const normalizedName = normalizeText(food.name);
      let score = 0;

      if (normalizedName === normalizedQuery) score = 100;
      else if (normalizedName.startsWith(normalizedQuery)) score = 80;
      else if (normalizedName.includes(normalizedQuery)) score = 55;
      else if (normalizedQuery.split(/\s+/).some((word) => normalizedName.includes(word))) score = 30;

      return { food, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.food.name.localeCompare(b.food.name, "sq"))
    .slice(0, 9)
    .map((entry) => entry.food);
}

function getMineralCodes(minerals) {
  const codes = minerals.match(/\b(Ca|Mg|Na|Zn|Fe|Se|Cu|Mn|K|P|I)\b/g) || [];
  return [...new Set(codes)];
}

function chipClass(code) {
  if (code === "Na" || code === "I") return "mineral-chip is-warning";
  if (code === "Ca" || code === "Mg" || code === "Fe" || code === "K") return "mineral-chip is-major";
  return "mineral-chip";
}

function renderSuggestions(matches) {
  if (matches.length === 0) {
    suggestions.innerHTML = '<p class="empty-copy">Nuk u gjet në tabelë.</p>';
    return;
  }

  suggestions.innerHTML = matches
    .map((food) => `<button class="suggestion-button" type="button" data-food="${food.name}">${food.name}</button>`)
    .join("");
}

function renderResult(food) {
  if (!food) {
    resultCard.innerHTML = `
      <div class="empty-state">
        <strong>Zgjidh një ushqim</strong>
        <p>Rezultati do të shfaqë mineralet, përqindjen ditore dhe rëndësinë për organizmin.</p>
      </div>
    `;
    return;
  }

  const chips = getMineralCodes(food.minerals)
    .map((code) => `<span class="${chipClass(code)}" title="${mineralNames[code] || code}">${code}</span>`)
    .join("");

  resultCard.innerHTML = `
    <div class="result-title">
      <h2>${food.name}</h2>
      <span class="tag">100 g</span>
    </div>
    <div class="detail-grid">
      <div class="detail-box">
        <h3>Elementet / mineralet</h3>
        <p>${food.minerals}</p>
      </div>
      <div class="detail-box">
        <h3>Nevoja ditore</h3>
        <p>${food.daily}</p>
      </div>
      <div class="detail-box importance">
        <h3>Përmbajtja / rëndësia</h3>
        <p>${food.importance}</p>
      </div>
    </div>
    <div class="minerals">${chips}</div>
  `;
}

function renderFoodGrid() {
  foodCount.textContent = `${foods.length} ushqime`;
  foodGrid.innerHTML = foods
    .map((food) => `<button class="food-button" type="button" data-food="${food.name}">${food.name}</button>`)
    .join("");
}

function updateSelectedButtons() {
  document.querySelectorAll("[data-food]").forEach((button) => {
    button.classList.toggle("is-selected", selectedFood && button.dataset.food === selectedFood.name);
  });
}

function selectFood(food) {
  selectedFood = food;
  searchInput.value = food.name;
  renderResult(food);
  renderSuggestions(findMatches(food.name));
  updateSelectedButtons();
}

function selectFoodByName(name) {
  const food = foods.find((entry) => entry.name === name);
  if (food) selectFood(food);
}

searchInput.addEventListener("input", () => {
  const matches = findMatches(searchInput.value);
  renderSuggestions(matches);

  const exactMatch = foods.find((food) => normalizeText(food.name) === normalizeText(searchInput.value));
  if (exactMatch) {
    selectedFood = exactMatch;
    renderResult(exactMatch);
  } else if (!searchInput.value.trim()) {
    selectedFood = null;
    renderResult(null);
  }

  updateSelectedButtons();
});

clearButton.addEventListener("click", () => {
  selectedFood = null;
  searchInput.value = "";
  searchInput.focus();
  renderSuggestions(findMatches(""));
  renderResult(null);
  updateSelectedButtons();
});

suggestions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-food]");
  if (button) selectFoodByName(button.dataset.food);
});

foodGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-food]");
  if (button) selectFoodByName(button.dataset.food);
});

renderFoodGrid();
renderSuggestions(findMatches(""));
renderResult(null);
