const SETTINGS_KEY = "shows-dota-guide-settings";
const FAVORITES_KEY = "shows-dota-guide-favorites";

const DEFAULT_SETTINGS = {
  language: "ru",
  theme: "radiant",
  font: "manrope"
};

const uiText = {
  en: {
    navDashboard: "Dashboard",
    navHeroes: "Heroes",
    navItems: "Items",
    navLearn: "Learn",
    navBuilds: "Builds",
    navTactics: "Tactics",
    navStudio: "Studio",
    navCreator: "Creator",
    sideMissionLabel: "Mission",
    sideMissionText: "One desktop guide for heroes, items, beginner builds, tactics, and essential Dota 2 mechanics.",
    sideTipsLabel: "Fast Tips",
    sideTipsText: "Use Alt+1..8 to change sections. Click hero build items to jump into the item catalog.",
    heroTitleText: "Heroes, shop items, mechanics, tutorials, starter builds, tactics, and visual customization.",
    heroCountLabel: "heroes",
    itemCountLabel: "items",
    favoritesCountLabel: "favorites",
    dashOverviewKicker: "Overview",
    dashOverviewTitle: "A visual beginner-first desktop guide for learning Dota 2 without drowning in tabs.",
    dashOverviewText: "Explore every hero, browse the item shop, read mechanics tutorials, learn position-based builds, understand map tactics, and switch themes or language inside one desktop app.",
    dashOpenHeroes: "Browse Heroes",
    dashOpenItems: "Open Item Shop",
    dashRandomHero: "Random Hero",
    dashRoadmapKicker: "Roadmap",
    dashFavoritesKicker: "Favorites",
    dashFeaturedHeroesKicker: "Featured Heroes",
    dashQuickLearnKicker: "Quick Learn",
    heroesKicker: "Hero Catalog",
    heroesTitle: "All Dota 2 heroes with portraits, stats, roles, beginner tips, and starter buying paths.",
    heroSearchLabel: "Search hero",
    heroAttrLabel: "Attribute",
    heroRoleLabel: "Role",
    heroRandomButton: "Random Hero",
    heroFavoritesButton: "Only Favorites",
    itemsKicker: "Item Shop",
    itemsTitle: "Shop catalog with images, costs, behavior, lore, notes, abilities, and components.",
    itemSearchLabel: "Search item",
    itemCategoryLabel: "Category",
    itemSortLabel: "Sort",
    itemRandomButton: "Random Item",
    itemFavoritesButton: "Only Favorites",
    learnKicker: "Tutorials",
    learnTitle: "Core mechanics, map logic, and the pieces every new Dota 2 player should understand first.",
    buildsKicker: "Beginner Builds",
    buildsTitle: "Starter buying plans, role playbooks, and beginner-friendly hero suggestions.",
    buildsPlaybookKicker: "Position Playbooks",
    buildsBeginnersKicker: "Beginner Heroes",
    buildsChecklistKicker: "Buying Checklist",
    buildsMistakesKicker: "Common Mistakes",
    tacticsKicker: "Tactics",
    tacticsTitle: "What to do in lane, when to rotate, how to use vision, when to push, and how not to throw your lead.",
    studioKicker: "Studio",
    studioTitle: "Switch theme, language, and fonts to make the guide feel like your own desktop manual.",
    studioThemeKicker: "Themes",
    studioLangKicker: "Language",
    studioFontKicker: "Font",
    studioPreviewKicker: "Preview",
    studioPreviewTitle: "Show's Dota 2 Guide",
    studioPreviewText: "Themes and language settings are stored locally, so the guide opens the way you like next time.",
    creatorKicker: "Creator",
    creatorTitle: "show made this guide as a cleaner, friendlier way to learn Dota 2 without hopping across dozens of tabs.",
    creatorText: "The idea is simple: one desktop app where a new player can explore heroes, understand items, read tactics, review builds, and keep learning inside a polished interface.",
    creatorContactKicker: "Contact",
    creatorNextKicker: "Next Up",
    allOption: "All",
    onlyFavoritesOn: "Only Favorites",
    onlyFavoritesOff: "Show All",
    sortName: "Name",
    sortCostHigh: "Highest Cost",
    sortCostLow: "Lowest Cost",
    featuredFavoriteEmpty: "No favorites yet. Save heroes or items to build your own learning deck.",
    dashboardNoRoadmap: "Roadmap is empty.",
    heroPlaceholder: "Select a hero to see details, starter items, beginner advice, and quick tactical notes.",
    itemPlaceholder: "Select an item to see cost, behavior, lore, attributes, and component notes.",
    favoriteSaved: "Saved to favorites.",
    favoriteRemoved: "Removed from favorites.",
    openExternalFailed: "Could not open external link.",
    loadingText: "Loading Dota 2 data...",
    noHeroes: "No heroes match the current filters.",
    noItems: "No items match the current filters.",
    heroBuildLabel: "Starter Build",
    heroTipsLabel: "Quick Tips",
    heroStatsLabel: "Stats",
    heroLinksLabel: "External",
    heroOpenOpendota: "Open OpenDota",
    heroOpenOfficial: "Official Hero Page",
    itemAboutLabel: "About Item",
    itemAbilityLabel: "Abilities",
    itemComponentsLabel: "Components",
    itemAttributesLabel: "Attributes",
    itemNoAbilities: "Passive or stat-based item.",
    itemNoAttributes: "No additional attributes listed.",
    itemNoComponents: "No listed components",
    beginnerFriendly: "Beginner Friendly",
    attribute_str: "Strength",
    attribute_agi: "Agility",
    attribute_int: "Intelligence",
    attribute_all_attr: "Universal"
  },
  ru: {
    navDashboard: "Главная",
    navHeroes: "Герои",
    navItems: "Предметы",
    navLearn: "Обучение",
    navBuilds: "Билды",
    navTactics: "Тактики",
    navStudio: "Студия",
    navCreator: "Создатель",
    sideMissionLabel: "Идея",
    sideMissionText: "Один desktop-гайд по героям, предметам, стартовым закупам, тактикам и базовой механике Dota 2.",
    sideTipsLabel: "Быстрые советы",
    sideTipsText: "Используй Alt+1..8 для переключения разделов. Нажимай на айтемы в билде героя, чтобы сразу открыть их в каталоге.",
    heroTitleText: "Герои, магазин предметов, механики, туториалы, стартовые билды, тактики и визуальная настройка.",
    heroCountLabel: "героев",
    itemCountLabel: "предметов",
    favoritesCountLabel: "избранное",
    dashOverviewKicker: "Обзор",
    dashOverviewTitle: "Визуальный desktop-гайд для новичков, чтобы учить Dota 2 без хаоса из вкладок.",
    dashOverviewText: "Изучай всех героев, листай магазин предметов, читай механики, смотри позиционные билды, разбирай тактики карты и меняй темы или язык в одном приложении.",
    dashOpenHeroes: "Открыть героев",
    dashOpenItems: "Открыть предметы",
    dashRandomHero: "Случайный герой",
    dashRoadmapKicker: "Маршрут новичка",
    dashFavoritesKicker: "Избранное",
    dashFeaturedHeroesKicker: "Герои для старта",
    dashQuickLearnKicker: "Быстрые уроки",
    heroesKicker: "Каталог героев",
    heroesTitle: "Все герои Dota 2 с портретами, статами, ролями, советами для новичков и стартовыми закупами.",
    heroSearchLabel: "Поиск героя",
    heroAttrLabel: "Атрибут",
    heroRoleLabel: "Роль",
    heroRandomButton: "Случайный герой",
    heroFavoritesButton: "Только избранное",
    itemsKicker: "Магазин",
    itemsTitle: "Каталог предметов с картинками, стоимостью, типом применения, лором, заметками, способностями и компонентами.",
    itemSearchLabel: "Поиск предмета",
    itemCategoryLabel: "Категория",
    itemSortLabel: "Сортировка",
    itemRandomButton: "Случайный предмет",
    itemFavoritesButton: "Только избранное",
    learnKicker: "Туториалы",
    learnTitle: "Базовые механики, логика карты и фундаментальные вещи, которые новичку нужно понять в первую очередь.",
    buildsKicker: "Билды для новичков",
    buildsTitle: "Стартовые закупы, позиционные плейбуки и подборка дружелюбных к новичку героев.",
    buildsPlaybookKicker: "Плейбуки по позициям",
    buildsBeginnersKicker: "Герои для новичков",
    buildsChecklistKicker: "Чеклист закупа",
    buildsMistakesKicker: "Частые ошибки",
    tacticsKicker: "Тактики",
    tacticsTitle: "Что делать на линии, когда смещаться, как работать с виженом, когда пушить и как не отдать преимущество.",
    studioKicker: "Студия",
    studioTitle: "Меняй тему, язык и шрифт, чтобы гайд ощущался как твое собственное desktop-приложение.",
    studioThemeKicker: "Темы",
    studioLangKicker: "Язык",
    studioFontKicker: "Шрифт",
    studioPreviewKicker: "Превью",
    studioPreviewTitle: "Show's Dota 2 Guide",
    studioPreviewText: "Темы и язык сохраняются локально, поэтому в следующий запуск гайд откроется уже в привычном виде.",
    creatorKicker: "Создатель",
    creatorTitle: "show сделал этот гайд как более чистый и дружелюбный способ учить Dota 2 без прыжков по десяткам вкладок.",
    creatorText: "Идея простая: одно desktop-приложение, где новичок может изучать героев, понимать предметы, читать тактики, смотреть билды и прогрессировать в аккуратном интерфейсе.",
    creatorContactKicker: "Контакт",
    creatorNextKicker: "Дальше можно добавить",
    allOption: "Все",
    onlyFavoritesOn: "Только избранное",
    onlyFavoritesOff: "Показать все",
    sortName: "По имени",
    sortCostHigh: "Сначала дорогие",
    sortCostLow: "Сначала дешевые",
    featuredFavoriteEmpty: "Пока нет избранного. Сохраняй героев и предметы, чтобы собрать свой учебный набор.",
    dashboardNoRoadmap: "Маршрут пока пустой.",
    heroPlaceholder: "Выбери героя, чтобы увидеть детали, стартовый закуп, советы для новичка и короткие тактические заметки.",
    itemPlaceholder: "Выбери предмет, чтобы увидеть стоимость, тип применения, лор, характеристики и компоненты.",
    favoriteSaved: "Добавлено в избранное.",
    favoriteRemoved: "Убрано из избранного.",
    openExternalFailed: "Не удалось открыть внешнюю ссылку.",
    loadingText: "Загрузка данных Dota 2...",
    noHeroes: "По текущим фильтрам герои не найдены.",
    noItems: "По текущим фильтрам предметы не найдены.",
    heroBuildLabel: "Стартовый билд",
    heroTipsLabel: "Быстрые советы",
    heroStatsLabel: "Статы",
    heroLinksLabel: "Внешние ссылки",
    heroOpenOpendota: "Открыть OpenDota",
    heroOpenOfficial: "Официальная страница героя",
    itemAboutLabel: "О предмете",
    itemAbilityLabel: "Способности",
    itemComponentsLabel: "Компоненты",
    itemAttributesLabel: "Параметры",
    itemNoAbilities: "Пассивный предмет или предмет без отдельной активной способности.",
    itemNoAttributes: "Дополнительные параметры не указаны.",
    itemNoComponents: "Компоненты не указаны",
    beginnerFriendly: "Дружелюбен к новичку",
    attribute_str: "Сила",
    attribute_agi: "Ловкость",
    attribute_int: "Интеллект",
    attribute_all_attr: "Универсал"
  }
};

const lessons = [
  {
    id: "roles",
    title: { en: "Roles and lanes", ru: "Роли и линии" },
    body: {
      en: "Dota usually splits into positions 1 to 5. Carries scale hardest with gold, supports create space and save teammates, mids pressure the map, and offlaners start fights.",
      ru: "В Dota роли часто делят на позиции 1–5. Керри сильнее всего растут от золота, саппорты создают пространство и спасают команду, мид давит карту, а офлейнер начинает драки."
    },
    bullets: {
      en: ["Safe lane usually protects your carry.", "Mid lane controls tempo with runes.", "Offlane wants pressure and durable heroes."],
      ru: ["На легкой линии обычно защищают керри.", "Мид контролирует темп через руны.", "Офлейн любит давление и живучих героев."]
    }
  },
  {
    id: "lasthits",
    title: { en: "Last hits and denies", ru: "Добивания и денай" },
    body: {
      en: "Getting the final hit gives gold. Denying your own creeps reduces enemy experience and gold. New players improve fastest by practicing this first.",
      ru: "Последний удар по крипу дает золото. Денай своих крипов режет опыт и золото врагу. Для новичка это одна из самых быстрых точек роста."
    },
    bullets: {
      en: ["Watch creep health carefully.", "Do not auto-attack the wave constantly.", "Buy damage items only when they help your lane plan."],
      ru: ["Следи за здоровьем крипов.", "Не бей волну без остановки автоатакой.", "Покупай урон только если он реально помогает твоему плану на линию."]
    }
  },
  {
    id: "vision",
    title: { en: "Vision and wards", ru: "Вижен и варды" },
    body: {
      en: "Good wards reveal rotations, rune fights, and objective setups. Vision wins games because it lets you choose better fights.",
      ru: "Хорошие варды показывают смещения, драки за руны и подготовку к объектам. Вижен выигрывает игры, потому что позволяет выбирать правильные драки."
    },
    bullets: {
      en: ["Ward before objectives, not after.", "Use sentries to protect important areas.", "De-warding gives gold and map control."],
      ru: ["Ставь вард до выхода на объект, а не после.", "Используй сентри, чтобы защитить важные зоны.", "Снятие вардов дает золото и контроль карты."]
    }
  },
  {
    id: "runes",
    title: { en: "Runes and water control", ru: "Руны и контроль мида" },
    body: {
      en: "Runes change early tempo. Mid players and supports both benefit from controlling water runes, power runes, and bounty runes.",
      ru: "Руны меняют ранний темп игры. И мидеры, и саппорты сильно выигрывают от контроля водяных, активных и баунти-рун."
    },
    bullets: {
      en: ["Plan your bottle refill windows.", "Push the wave before moving to rune spots.", "Supports can secure river control for mid."],
      ru: ["Планируй моменты для пополнения бутылки.", "Перед выходом на руну сначала пропушь линию.", "Саппорты могут обеспечить контроль реки для мида."]
    }
  },
  {
    id: "objectives",
    title: { en: "Objectives and towers", ru: "Объекты и вышки" },
    body: {
      en: "Kills matter less if they do not become towers, Roshan, wards, or map control. Always ask what your next objective is after a fight.",
      ru: "Убийства мало значат, если они не превращаются в вышки, Рошана, вижен или контроль карты. После драки всегда думай, какой следующий объект ты можешь забрать."
    },
    bullets: {
      en: ["Push when enemy ultimates are down.", "Do not overstay after taking a tower.", "Use catapults and item timings to pressure."],
      ru: ["Пушь, когда у врага нет важных ультимейтов.", "Не стой слишком долго после взятой вышки.", "Используй катапульты и тайминги предметов для давления."]
    }
  },
  {
    id: "roshan",
    title: { en: "Roshan timing", ru: "Тайминги Рошана" },
    body: {
      en: "Roshan gives one of the biggest advantages in the game. Teams usually take it after winning a fight, with strong physical damage, or when they control the map.",
      ru: "Рошан дает одно из самых больших преимуществ в игре. Обычно его забирают после выигранной драки, при сильном физическом уроне или при полном контроле карты."
    },
    bullets: {
      en: ["Bring vision before entering the pit.", "Respect buybacks near Roshan.", "Aegis should go to the hero that can keep pressure alive."],
      ru: ["Подготовь вижен перед заходом в яму.", "Уважай байбеки возле Рошана.", "Эгида должна идти тому герою, который лучше сохранит давление команды."]
    }
  },
  {
    id: "teamfights",
    title: { en: "Teamfight basics", ru: "Основы тимфайта" },
    body: {
      en: "Good fights are about target priority, spacing, spell usage, and patience. New players often lose fights by overchasing or pressing everything at once.",
      ru: "Хороший тимфайт строится на фокусе целей, дистанции, использовании заклинаний и терпении. Новички часто проигрывают драки из-за лишнего чейза или прожатия всего сразу."
    },
    bullets: {
      en: ["Hit what is safe, not only what is perfect.", "Save defensive spells for important moments.", "Fight around vision and high ground when possible."],
      ru: ["Бей то, что безопасно, а не только идеальную цель.", "Сохраняй защитные кнопки на важные моменты.", "Старайся драться от вижена и удобной позиции."]
    }
  },
  {
    id: "buyback",
    title: { en: "Buyback discipline", ru: "Дисциплина байбека" },
    body: {
      en: "Buyback is a game-changing resource. Use it when it saves core objectives, secures Roshan, or flips a decisive fight near your base.",
      ru: "Байбек — ресурс, который меняет игру. Используй его, когда он спасает важный объект, помогает взять Рошана или переворачивает ключевую драку возле базы."
    },
    bullets: {
      en: ["Do not waste buyback for small skirmishes.", "Track enemy buybacks after big fights.", "Keep enough gold if a crucial objective is coming."],
      ru: ["Не трать байбек на мелкие стычки.", "Запоминай байбеки врага после больших драк.", "Держи запас золота, если впереди важный объект."]
    }
  }
];

const tactics = [
  {
    title: { en: "Strong laning starts with wave control", ru: "Сильная линия начинается с контроля волны" },
    text: {
      en: "Do not hit creeps mindlessly. Control where the wave meets so your hero trades from safety and your support can actually help you.",
      ru: "Не бей крипов бездумно. Контролируй точку встречи волны, чтобы твой герой разменивался безопасно, а саппорт действительно мог помочь."
    }
  },
  {
    title: { en: "Rotate only after fixing your lane", ru: "Смещайся только после того, как починил линию" },
    text: {
      en: "The best rotation happens after you push the wave or force the enemy to respond. Bad rotations sacrifice your own farm for nothing.",
      ru: "Лучшее смещение происходит после того, как ты пропушил волну или заставил врага реагировать. Плохие смещения просто сжигают твой собственный фарм."
    }
  },
  {
    title: { en: "Play around cooldowns and item timings", ru: "Играй от кулдаунов и таймингов предметов" },
    text: {
      en: "If your team just got Blink, BKB, Mek, or a major ultimate back, that can be a better reason to fight than a random pickoff.",
      ru: "Если у вашей команды только что появились Blink, BKB, Mek или вернулся ключевой ультимейт, это часто лучшая причина подраться, чем случайный пик-офф."
    }
  },
  {
    title: { en: "Vision should support a plan", ru: "Вижен должен поддерживать план" },
    text: {
      en: "Ward the area you want to play in next. Aggressive wards are strongest when your team is already ready to stand behind them.",
      ru: "Ставь вард в ту зону, где команда собирается играть дальше. Агрессивные варды сильны только тогда, когда команда реально готова стоять за ними."
    }
  },
  {
    title: { en: "Do not siege high ground blindly", ru: "Не заходи на хайграунд вслепую" },
    text: {
      en: "Take outer towers, control Roshan, force buybacks, and only then look for high ground with vision and cooldown advantage.",
      ru: "Сначала забери внешние вышки, возьми Рошана, выбей байбеки, а уже потом думай о хайграунде — с виженом и преимуществом по кулдаунам."
    }
  },
  {
    title: { en: "When behind, trade the map instead of panicking", ru: "Когда проигрываешь, меняй карту, а не паникуй" },
    text: {
      en: "If you cannot defend everywhere, push the opposite side, force teleports, de-ward your triangle, and protect the hero that still scales.",
      ru: "Если нельзя защитить всё, дави противоположную сторону, заставляй врага тпшиться, снимай варды возле своего треугольника и защищай героя, который еще масштабируется."
    }
  }
];

const playbooks = [
  {
    position: "Pos 1",
    en: "Farm safely, hit lane creeps consistently, and enter fights after your first real damage or survivability item.",
    ru: "Фарми безопасно, стабильно добивай крипов и подключайся к дракам после первого настоящего уронящего или защитного предмета."
  },
  {
    position: "Pos 2",
    en: "Control runes, move first after pushing mid, and turn every successful rotation into a tower or warding window.",
    ru: "Контролируй руны, первым двигайся после пропушенной средней линии и превращай каждое удачное смещение в вышку или окно для вижена."
  },
  {
    position: "Pos 3",
    en: "Soak pressure, take dangerous farm, and start fights when your initiation tools are ready.",
    ru: "Принимай давление, забирай опасный фарм и начинай драки, когда готовы твои инструменты инициации."
  },
  {
    position: "Pos 4",
    en: "Move between lanes, secure runes, break smokes, and create chaos without abandoning your cores.",
    ru: "Двигайся между линиями, контролируй руны, ломай смоки и создавай хаос, не бросая своих коров."
  },
  {
    position: "Pos 5",
    en: "Protect the carry, buy defensive utility, maintain vision, and make sure the team can play the next objective safely.",
    ru: "Защищай керри, покупай защитную полезность, держи вижен и обеспечивай команде безопасный выход на следующий объект."
  }
];

const roadmapSteps = {
  en: [
    "Learn roles and lane structure before chasing advanced mechanics.",
    "Pick two or three beginner heroes and spam them for repetition.",
    "Practice last hits, creep wave control, and safe positioning.",
    "Memorize the purpose of core shop items before experimenting.",
    "Watch the minimap every few seconds and tie kills to objectives."
  ],
  ru: [
    "Сначала пойми роли и структуру линий, а уже потом лезь в сложную механику.",
    "Выбери двух-трех простых героев и играй ими сериями для повторения.",
    "Отдельно тренируй ластхит, контроль волны и безопасную позицию.",
    "Запомни назначение базовых предметов магазина перед экспериментами.",
    "Смотри на миникарту каждые несколько секунд и связывай убийства с объектами."
  ]
};

const buyingChecklist = {
  en: [
    "Do I need lane sustain first?",
    "Do I need boots now or can I delay them for a stronger lane item?",
    "Will this item help me farm, fight, survive, or save teammates?",
    "Am I buying into my role or trying to do everything at once?",
    "Does the enemy lineup force BKB, dispel, or armor?"
  ],
  ru: [
    "Мне сейчас нужнее восстановление линии?",
    "Мне уже пора покупать ботинок или линия важнее?",
    "Этот предмет помогает фармить, драться, жить или сейвить союзников?",
    "Я покупаю по роли или пытаюсь делать всё сразу?",
    "Пик врага требует BKB, диспела или брони?"
  ]
};

const buildMistakes = {
  en: [
    "Buying expensive greed items while dying in every fight.",
    "Ignoring basic boots, wand, or utility for too long.",
    "Copying pro builds without matching the game state.",
    "Forcing damage items when survivability is the real issue.",
    "Stacking too many small items and never finishing a timing."
  ],
  ru: [
    "Покупать жадные дорогие слоты, когда ты умираешь в каждой драке.",
    "Слишком долго игнорировать ботинки, wand или базовую полезность.",
    "Слепо копировать про-билды без учета конкретной игры.",
    "Форсить урон, когда реальная проблема — выживаемость.",
    "Набирать кучу мелких предметов и не закрывать важный тайминг."
  ]
};

const creatorNext = {
  en: [
    "Matchup pages and anti-hero tips",
    "Lane practice drills",
    "Internal notes and match prep sheets",
    "Patch update view with changelog summaries"
  ],
  ru: [
    "Страницы по матчапам и анти-пикам",
    "Тренировочные упражнения по линии",
    "Внутренние заметки и шаблоны подготовки к матчу",
    "Экран с патчноутами и краткими сводками"
  ]
};

const state = {
  data: null,
  language: DEFAULT_SETTINGS.language,
  theme: DEFAULT_SETTINGS.theme,
  font: DEFAULT_SETTINGS.font,
  heroQuery: "",
  heroAttr: "all",
  heroRole: "all",
  itemQuery: "",
  itemCategory: "all",
  itemSort: "name",
  heroFavoritesOnly: false,
  itemFavoritesOnly: false,
  selectedHero: null,
  selectedItem: null,
  favorites: {
    heroes: [],
    items: []
  }
};

function $(id) {
  return document.getElementById(id);
}

function getText(key) {
  return uiText[state.language][key] || uiText.en[key] || key;
}

function showToast(message, tone = "success") {
  const stack = $("toastStack");
  const toast = document.createElement("div");
  toast.className = `toast ${tone}`;
  toast.textContent = message;
  stack.append(toast);
  window.setTimeout(() => toast.remove(), 2600);
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify({
    language: state.language,
    theme: state.theme,
    font: state.font
  }));
}

function loadSettings() {
  try {
    const raw = JSON.parse(localStorage.getItem(SETTINGS_KEY));
    if (raw) {
      state.language = raw.language || state.language;
      state.theme = raw.theme || state.theme;
      state.font = raw.font || state.font;
    }
  } catch {
    // ignore malformed settings
  }
}

function loadFavorites() {
  try {
    const raw = JSON.parse(localStorage.getItem(FAVORITES_KEY));
    if (raw) {
      state.favorites.heroes = Array.isArray(raw.heroes) ? raw.heroes : [];
      state.favorites.items = Array.isArray(raw.items) ? raw.items : [];
    }
  } catch {
    // ignore malformed favorites
  }
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites));
}

function applyThemeSettings() {
  document.body.dataset.theme = state.theme;
  document.body.dataset.font = state.font;

  document.querySelectorAll("[data-theme]").forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === state.theme);
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === state.language);
  });
  document.querySelectorAll("[data-font]").forEach((button) => {
    button.classList.toggle("active", button.dataset.font === state.font);
  });
}

function applyStaticText() {
  Object.keys(uiText[state.language]).forEach((key) => {
    const element = $(key);
    if (element) {
      element.textContent = getText(key);
    }
  });

  $("heroFavoritesButton").textContent = state.heroFavoritesOnly ? getText("onlyFavoritesOff") : getText("onlyFavoritesOn");
  $("itemFavoritesButton").textContent = state.itemFavoritesOnly ? getText("onlyFavoritesOff") : getText("onlyFavoritesOn");
  updateSelectLabels();

  document.title = "Show's Dota 2 Guide";
}

function updateSelectLabels() {
  const heroAttrFilter = $("heroAttrFilter");
  const heroRoleFilter = $("heroRoleFilter");
  const itemCategoryFilter = $("itemCategoryFilter");
  const itemSort = $("itemSort");

  heroAttrFilter.options[0].text = getText("allOption");
  itemCategoryFilter.options[0].text = getText("allOption");
  heroRoleFilter.options[0].text = getText("allOption");
  itemSort.options[0].text = getText("sortName");
  itemSort.options[1].text = getText("sortCostHigh");
  itemSort.options[2].text = getText("sortCostLow");
  heroAttrFilter.options[1].text = getText("attribute_str");
  heroAttrFilter.options[2].text = getText("attribute_agi");
  heroAttrFilter.options[3].text = getText("attribute_int");
  heroAttrFilter.options[4].text = getText("attribute_all_attr");
}

function openPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("active", page.id === pageId);
  });

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageId);
  });
}

async function openExternal(url) {
  let opened = false;

  if (window.showsDotaGuide?.openExternal) {
    try {
      opened = await window.showsDotaGuide.openExternal(url);
    } catch {
      opened = false;
    }
  }

  if (!opened) {
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    opened = Boolean(popup);
  }

  if (!opened) {
    showToast(getText("openExternalFailed"), "error");
  }
}

function isHeroFavorite(slug) {
  return state.favorites.heroes.includes(slug);
}

function isItemFavorite(key) {
  return state.favorites.items.includes(key);
}

function toggleHeroFavorite(slug) {
  if (isHeroFavorite(slug)) {
    state.favorites.heroes = state.favorites.heroes.filter((value) => value !== slug);
    showToast(getText("favoriteRemoved"));
  } else {
    state.favorites.heroes.push(slug);
    showToast(getText("favoriteSaved"));
  }
  saveFavorites();
  renderAll();
}

function toggleItemFavorite(key) {
  if (isItemFavorite(key)) {
    state.favorites.items = state.favorites.items.filter((value) => value !== key);
    showToast(getText("favoriteRemoved"));
  } else {
    state.favorites.items.push(key);
    showToast(getText("favoriteSaved"));
  }
  saveFavorites();
  renderAll();
}

function attributeLabel(value) {
  const key = `attribute_${value}`;
  return getText(key);
}

function mapHeroPageUrl(hero) {
  return `https://www.dota2.com/hero/${hero.slug}`;
}

function getHeroes() {
  return state.data.heroes
    .filter((hero) => hero.name.toLowerCase().includes(state.heroQuery.toLowerCase()))
    .filter((hero) => state.heroAttr === "all" || hero.primaryAttr === state.heroAttr)
    .filter((hero) => state.heroRole === "all" || hero.roles.includes(state.heroRole))
    .filter((hero) => !state.heroFavoritesOnly || isHeroFavorite(hero.slug));
}

function getItems() {
  return state.data.items
    .filter((item) => item.name.toLowerCase().includes(state.itemQuery.toLowerCase()))
    .filter((item) => state.itemCategory === "all" || item.category === state.itemCategory)
    .filter((item) => !state.itemFavoritesOnly || isItemFavorite(item.key))
    .sort((left, right) => {
      if (state.itemSort === "cost_desc") return right.cost - left.cost;
      if (state.itemSort === "cost_asc") return left.cost - right.cost;
      return left.name.localeCompare(right.name);
    });
}

function itemByKey(key) {
  return state.data.items.find((item) => item.key === key);
}

function heroBySlug(slug) {
  return state.data.heroes.find((hero) => hero.slug === slug);
}

function createRoleTags(roles) {
  return roles.map((role) => `<span class="role-tag">${role}</span>`).join("");
}

function createStarterItems(keys) {
  return keys.map((key) => {
    const item = itemByKey(key);
    if (!item) {
      return "";
    }
    return `<button class="item-chip" data-item-jump="${item.key}">${item.name}</button>`;
  }).join("");
}

function renderDashboard() {
  $("heroCount").textContent = state.data.heroes.length.toString();
  $("itemCount").textContent = state.data.items.length.toString();
  $("favoritesCount").textContent = (state.favorites.heroes.length + state.favorites.items.length).toString();

  $("roadmapList").innerHTML = roadmapSteps[state.language]
    .map((item) => `<div class="mini-item">${item}</div>`)
    .join("");

  const favorites = [
    ...state.favorites.heroes.slice(0, 3).map((slug) => heroBySlug(slug)).filter(Boolean).map((hero) => hero.name),
    ...state.favorites.items.slice(0, 3).map((key) => itemByKey(key)).filter(Boolean).map((item) => item.name)
  ];

  $("favoritesPreview").innerHTML = favorites.length
    ? favorites.map((item) => `<div class="mini-item">${item}</div>`).join("")
    : `<div class="mini-item">${getText("featuredFavoriteEmpty")}</div>`;

  const featuredSlugs = ["axe", "wraith_king", "dragon_knight", "sniper", "juggernaut", "lich"];
  $("featuredHeroes").innerHTML = featuredSlugs
    .map((slug) => heroBySlug(slug))
    .filter(Boolean)
    .map((hero) => `
      <button class="starter-card starter-hero" data-hero-open="${hero.slug}">
        <img src="${hero.image}" alt="${hero.name}">
        <div>
          <h4>${hero.name}</h4>
          <p>${hero.roles.join(", ")}</p>
        </div>
      </button>
    `)
    .join("");

  $("dashboardLessons").innerHTML = lessons.slice(0, 4).map((lesson) => `
    <article class="lesson-card">
      <h4 class="lesson-title">${lesson.title[state.language]}</h4>
      <p>${lesson.body[state.language]}</p>
    </article>
  `).join("");
}

function renderHeroGrid() {
  const heroes = getHeroes();

  $("heroGrid").innerHTML = heroes.length ? heroes.map((hero) => `
    <article class="hero-card" data-hero-card="${hero.slug}">
      <img src="${hero.image}" alt="${hero.name}">
      <div class="card-body">
        <div class="detail-head">
          <div>
            <p class="hero-name">${hero.name}</p>
            <p>${attributeLabel(hero.primaryAttr)} • ${hero.attackType}</p>
          </div>
          <button class="favorite-btn" data-hero-fav="${hero.slug}">${isHeroFavorite(hero.slug) ? "★" : "☆"}</button>
        </div>
        <div class="role-tags">${createRoleTags(hero.roles.slice(0, 3))}</div>
      </div>
    </article>
  `).join("") : `<div class="mini-item">${getText("noHeroes")}</div>`;
}

function renderHeroDetail() {
  const hero = state.selectedHero ? heroBySlug(state.selectedHero) : getHeroes()[0];

  if (!hero) {
    $("heroDetail").innerHTML = `<p>${getText("heroPlaceholder")}</p>`;
    return;
  }

  state.selectedHero = hero.slug;

  const build = hero.guide.starterBuild;
  const tips = hero.guide.quickTips[state.language];

  $("heroDetail").innerHTML = `
    <img class="detail-art" src="${hero.image}" alt="${hero.name}">
    <div class="detail-head">
      <div>
        <p class="detail-name">${hero.name}</p>
        <p>${attributeLabel(hero.primaryAttr)} • ${hero.attackType} • ${hero.guide.position}</p>
      </div>
      <button class="favorite-btn" data-hero-fav="${hero.slug}">${isHeroFavorite(hero.slug) ? "★" : "☆"}</button>
    </div>
    <div class="role-tags">${createRoleTags(hero.roles)}</div>

    <div class="detail-section">
      <h4>${getText("heroStatsLabel")}</h4>
      <div class="stat-grid">
        <span class="stat-pill">MS ${hero.moveSpeed}</span>
        <span class="stat-pill">Range ${hero.attackRange}</span>
        <span class="stat-pill">Win ${hero.pubStats.winRate}%</span>
        <span class="stat-pill">${getText("beginnerFriendly")}: ${hero.guide.difficulty}</span>
      </div>
    </div>

    <div class="detail-section">
      <h4>${getText("heroBuildLabel")}</h4>
      <p>${hero.guide.playstyle[state.language]}</p>
      <p><strong>${hero.guide.lane}</strong></p>
      <div class="build-row">
        <div>
          <p>Starter</p>
          <div class="starter-items">${createStarterItems(build.starter)}</div>
        </div>
        <div>
          <p>Early</p>
          <div class="starter-items">${createStarterItems(build.early)}</div>
        </div>
        <div>
          <p>Core</p>
          <div class="starter-items">${createStarterItems(build.core)}</div>
        </div>
        <div>
          <p>Extension</p>
          <div class="starter-items">${createStarterItems(build.extension)}</div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h4>${getText("heroTipsLabel")}</h4>
      <ul class="detail-list">
        ${tips.map((tip) => `<li>${tip}</li>`).join("")}
      </ul>
    </div>

    <div class="detail-section">
      <h4>${getText("heroLinksLabel")}</h4>
      <div class="action-row">
        <button class="link-btn" data-open-hero-opendota="${hero.id}">${getText("heroOpenOpendota")}</button>
        <button class="ghost-btn" data-open-hero-official="${hero.slug}">${getText("heroOpenOfficial")}</button>
      </div>
    </div>
  `;
}

function renderItemGrid() {
  const items = getItems();

  $("itemGrid").innerHTML = items.length ? items.map((item) => `
    <article class="item-card" data-item-card="${item.key}">
      <img src="${item.image}" alt="${item.name}">
      <div class="card-body">
        <div class="detail-head">
          <div>
            <p class="item-name">${item.name}</p>
            <p>${item.category} • ${item.cost} gold</p>
          </div>
          <button class="favorite-btn" data-item-fav="${item.key}">${isItemFavorite(item.key) ? "★" : "☆"}</button>
        </div>
      </div>
    </article>
  `).join("") : `<div class="mini-item">${getText("noItems")}</div>`;
}

function renderItemDetail() {
  const item = state.selectedItem ? itemByKey(state.selectedItem) : getItems()[0];

  if (!item) {
    $("itemDetail").innerHTML = `<p>${getText("itemPlaceholder")}</p>`;
    return;
  }

  state.selectedItem = item.key;

  $("itemDetail").innerHTML = `
    <img class="detail-art" src="${item.image}" alt="${item.name}">
    <div class="detail-head">
      <div>
        <p class="detail-name">${item.name}</p>
        <p>${item.category} • ${item.cost} gold</p>
      </div>
      <button class="favorite-btn" data-item-fav="${item.key}">${isItemFavorite(item.key) ? "★" : "☆"}</button>
    </div>

    <div class="detail-section">
      <h4>${getText("itemAboutLabel")}</h4>
      <p>${item.behavior}</p>
      ${item.notes ? `<p>${item.notes}</p>` : ""}
      ${item.lore ? `<p>${item.lore}</p>` : ""}
      <div class="stat-grid">
        <span class="stat-pill">Cost ${item.cost}</span>
        ${item.cooldown ? `<span class="stat-pill">CD ${item.cooldown}</span>` : ""}
        ${item.manaCost ? `<span class="stat-pill">Mana ${item.manaCost}</span>` : ""}
      </div>
    </div>

    <div class="detail-section">
      <h4>${getText("itemAbilityLabel")}</h4>
      ${item.abilities.length ? item.abilities.map((ability) => `
        <div class="mini-item">
          <strong>${ability.title}</strong>
          <p>${ability.description}</p>
        </div>
      `).join("") : `<p>${getText("itemNoAbilities")}</p>`}
    </div>

    <div class="detail-section">
      <h4>${getText("itemAttributesLabel")}</h4>
      ${item.attributes.length ? item.attributes.map((attribute) => `
        <div class="mini-item">${attribute.header || attribute.key}: ${Array.isArray(attribute.value) ? attribute.value.join(" / ") : attribute.value}</div>
      `).join("") : `<p>${getText("itemNoAttributes")}</p>`}
    </div>

    <div class="detail-section">
      <h4>${getText("itemComponentsLabel")}</h4>
      <div class="component-row">
        ${item.components.length ? item.components.map((component) => `<span class="preview-pill">${component}</span>`).join("") : `<span class="preview-pill">${getText("itemNoComponents")}</span>`}
      </div>
    </div>
  `;
}

function renderLessons() {
  $("lessonGrid").innerHTML = lessons.map((lesson) => `
    <article class="lesson-card">
      <h4 class="lesson-title">${lesson.title[state.language]}</h4>
      <p>${lesson.body[state.language]}</p>
      <ul class="detail-list">
        ${lesson.bullets[state.language].map((bullet) => `<li>${bullet}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderBuilds() {
  $("playbookGrid").innerHTML = playbooks.map((item) => `
    <article class="starter-card">
      <h4>${item.position}</h4>
      <p>${item[state.language]}</p>
    </article>
  `).join("");

  const beginnerSlugs = ["axe", "wraith_king", "dragon_knight", "sniper", "juggernaut", "lich", "ogre_magi", "lion"];
  $("beginnerHeroes").innerHTML = beginnerSlugs.map((slug) => heroBySlug(slug)).filter(Boolean).map((hero) => `
    <button class="starter-card starter-hero" data-hero-open="${hero.slug}">
      <img src="${hero.image}" alt="${hero.name}">
      <div>
        <h4>${hero.name}</h4>
        <p>${hero.guide.playstyle[state.language]}</p>
      </div>
    </button>
  `).join("");

  $("buyingChecklist").innerHTML = buyingChecklist[state.language].map((item) => `<div class="mini-item">${item}</div>`).join("");
  $("buildMistakes").innerHTML = buildMistakes[state.language].map((item) => `<div class="mini-item">${item}</div>`).join("");
}

function renderTactics() {
  $("tacticsGrid").innerHTML = tactics.map((item) => `
    <article class="lesson-card">
      <h4 class="lesson-title">${item.title[state.language]}</h4>
      <p>${item.text[state.language]}</p>
    </article>
  `).join("");
}

function renderCreator() {
  $("creatorNextList").innerHTML = creatorNext[state.language].map((item) => `<div class="mini-item">${item}</div>`).join("");
}

function renderAll() {
  applyStaticText();
  applyThemeSettings();
  renderDashboard();
  renderHeroGrid();
  renderHeroDetail();
  renderItemGrid();
  renderItemDetail();
  renderLessons();
  renderBuilds();
  renderTactics();
  renderCreator();
}

function attachStaticHandlers() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => openPage(button.dataset.page));
  });

  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.addEventListener("click", () => openPage(button.dataset.nav));
  });

  $("dashRandomHero").addEventListener("click", () => randomHero());
  $("heroRandomButton").addEventListener("click", () => randomHero());
  $("itemRandomButton").addEventListener("click", () => randomItem());

  $("heroFavoritesButton").addEventListener("click", () => {
    state.heroFavoritesOnly = !state.heroFavoritesOnly;
    renderAll();
  });

  $("itemFavoritesButton").addEventListener("click", () => {
    state.itemFavoritesOnly = !state.itemFavoritesOnly;
    renderAll();
  });

  $("heroSearch").addEventListener("input", (event) => {
    state.heroQuery = event.target.value;
    renderAll();
  });

  $("heroAttrFilter").addEventListener("change", (event) => {
    state.heroAttr = event.target.value;
    renderAll();
  });

  $("heroRoleFilter").addEventListener("change", (event) => {
    state.heroRole = event.target.value;
    renderAll();
  });

  $("itemSearch").addEventListener("input", (event) => {
    state.itemQuery = event.target.value;
    renderAll();
  });

  $("itemCategoryFilter").addEventListener("change", (event) => {
    state.itemCategory = event.target.value;
    renderAll();
  });

  $("itemSort").addEventListener("change", (event) => {
    state.itemSort = event.target.value;
    renderAll();
  });

  document.querySelectorAll("[data-theme]").forEach((button) => {
    if (button.classList.contains("option-btn")) {
      button.addEventListener("click", () => {
        state.theme = button.dataset.theme;
        saveSettings();
        applyThemeSettings();
      });
    }
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      state.language = button.dataset.language;
      saveSettings();
      renderAll();
    });
  });

  document.querySelectorAll("[data-font]").forEach((button) => {
    if (button.classList.contains("option-btn")) {
      button.addEventListener("click", () => {
        state.font = button.dataset.font;
        saveSettings();
        applyThemeSettings();
      });
    }
  });

  document.addEventListener("click", (event) => {
    const heroCard = event.target.closest("[data-hero-card]");
    if (heroCard) {
      state.selectedHero = heroCard.dataset.heroCard;
      renderHeroDetail();
      return;
    }

    const itemCard = event.target.closest("[data-item-card]");
    if (itemCard) {
      state.selectedItem = itemCard.dataset.itemCard;
      renderItemDetail();
      return;
    }

    const heroFavorite = event.target.closest("[data-hero-fav]");
    if (heroFavorite) {
      event.stopPropagation();
      toggleHeroFavorite(heroFavorite.dataset.heroFav);
      return;
    }

    const itemFavorite = event.target.closest("[data-item-fav]");
    if (itemFavorite) {
      event.stopPropagation();
      toggleItemFavorite(itemFavorite.dataset.itemFav);
      return;
    }

    const itemJump = event.target.closest("[data-item-jump]");
    if (itemJump) {
      state.selectedItem = itemJump.dataset.itemJump;
      openPage("items");
      renderItemDetail();
      return;
    }

    const heroOpen = event.target.closest("[data-hero-open]");
    if (heroOpen) {
      state.selectedHero = heroOpen.dataset.heroOpen;
      openPage("heroes");
      renderHeroDetail();
      return;
    }

    const openOpenDota = event.target.closest("[data-open-hero-opendota]");
    if (openOpenDota) {
      openExternal(`https://www.opendota.com/heroes/${openOpenDota.dataset.openHeroOpendota}`);
      return;
    }

    const openOfficial = event.target.closest("[data-open-hero-official]");
    if (openOfficial) {
      openExternal(mapHeroPageUrl(heroBySlug(openOfficial.dataset.openHeroOfficial)));
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.altKey) {
      const pageMap = {
        Digit1: "dashboard",
        Digit2: "heroes",
        Digit3: "items",
        Digit4: "learn",
        Digit5: "builds",
        Digit6: "tactics",
        Digit7: "studio",
        Digit8: "creator"
      };

      const page = pageMap[event.code];
      if (page) {
        event.preventDefault();
        openPage(page);
      }
    }
  });
}

function randomHero() {
  const heroes = getHeroes();
  if (!heroes.length) return;
  const hero = heroes[Math.floor(Math.random() * heroes.length)];
  state.selectedHero = hero.slug;
  openPage("heroes");
  renderHeroDetail();
}

function randomItem() {
  const items = getItems();
  if (!items.length) return;
  const item = items[Math.floor(Math.random() * items.length)];
  state.selectedItem = item.key;
  openPage("items");
  renderItemDetail();
}

async function loadData() {
  if (window.showsDotaGuide?.loadData) {
    return window.showsDotaGuide.loadData();
  }

  const response = await fetch("./data/dota-data.json");
  return response.json();
}

async function init() {
  loadSettings();
  loadFavorites();
  applyStaticText();
  applyThemeSettings();

  state.data = await loadData();
  state.selectedHero = state.data.heroes[0]?.slug || null;
  state.selectedItem = state.data.items[0]?.key || null;

  attachStaticHandlers();
  renderAll();
}

init().catch((error) => {
  console.error(error);
  showToast("Failed to initialize Dota guide.", "error");
});
