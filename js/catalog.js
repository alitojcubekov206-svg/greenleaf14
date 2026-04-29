const BASE_IMG = '';
const PRODUCTS = [
  {
    id: 1,
    name: "Мягкие прессованные полотенца 23 шт 25x45см CARICH",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 2650,
    img: "https://basket-26.wbcontent.net/vol4667/part466743/466743508/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "hit"
  },
  {
    id: 2,
    name: "Сжатые салфетки Sterill 20 шт 24x30см",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 3850,
    img: "https://basket-30.wbcontent.net/vol5891/part589119/589119229/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "hit"
  },
  {
    id: 3,
    name: "Carich крем для восстановления волос 300г",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 2850,
    img: "https://basket-36.wbcontent.net/vol7917/part791783/791783184/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "hit"
  },
  {
    id: 4,
    name: "Мыло с эфирными маслами и активированным углем ручной",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 2350,
    img: "https://basket-39.wbcontent.net/vol8967/part896793/896793489/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "hit"
  },
  {
    id: 5,
    name: "CARICH Vitamin E Emulsion (Молочко с витамином Е",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 2950,
    img: "https://basket-39.wbcontent.net/vol8967/part896732/896732505/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "hit"
  },
  {
    id: 6,
    name: "BLUE POINT Увлажняющая маска для гладких и послушных волос",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 1050,
    img: "https://basket-36.wbcontent.net/vol7956/part795633/795633818/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "hit"
  },
  {
    id: 7,
    name: "Парфюмированный шампунь для волос PARFUM SHAMPOO",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 3200,
    img: "https://basket-36.wbcontent.net/vol7788/part778848/778848444/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "hit"
  },
  {
    id: 8,
    name: "Carich Ginger Volume Shampoo (Каррич Имбирный Шампунь",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 1000,
    img: "https://basket-39.wbcontent.net/vol8967/part896737/896737053/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "hit"
  },
  {
    id: 9,
    name: "Травяной бальзам для тела CARICH",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 4000,
    img: "https://basket-36.wbcontent.net/vol7788/part778869/778869419/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 10,
    name: "BLUE POINT Лосьон для тела с ниацинамидом 230 мл",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 3050,
    img: "https://basket-35.wbcontent.net/vol7682/part768251/768251330/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 11,
    name: "Зубная щетка лимитированной серии с минималистичным дизайном",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 3800,
    img: "https://basket-36.wbcontent.net/vol7917/part791790/791790726/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 12,
    name: "Имбирный бальзам-ополаскиватель для придания объёма волосам",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 3450,
    img: "https://basket-35.wbcontent.net/vol7684/part768401/768401343/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 13,
    name: "Глубоко увлажняющий крем для рук с лошадиным маслом 80гр",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 950,
    img: "https://basket-35.wbcontent.net/vol7682/part768294/768294177/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 14,
    name: "iLiFE Очищающий и разглаживающий кондиционер 500 мл",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 1450,
    img: "https://basket-36.wbcontent.net/vol7956/part795663/795663884/images/c516x688/1.webp",
    emoji: "🌿",
    cat: "eco",
    catName: "Эко товары",
    tag: "normal"
  },
  {
    id: 15,
    name: "iLiFE Гель для душа увлажняющий и освежающий 500мл",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 4250,
    img: "https://basket-36.wbcontent.net/vol7956/part795670/795670386/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 16,
    name: "Шампунь Carich Freshen & Oil Control 450мл",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 2500,
    img: "https://basket-40.wbcontent.net/vol9440/part944055/944055700/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 17,
    name: "CARICH Шариковый дезодорант-антиперспирант 40 мл",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 2900,
    img: "https://basket-36.wbcontent.net/vol7955/part795521/795521696/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 18,
    name: "BLUE POINT Мягкое очищающее мыло от клещей с морской солью",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 1700,
    img: "https://basket-35.wbcontent.net/vol7684/part768460/768460971/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 19,
    name: "CARICH Увлажняющий крем для рук с маслом 300г",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 1900,
    img: "https://basket-36.wbcontent.net/vol7955/part795548/795548614/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 20,
    name: "SEALUXE 120 г Очищающее желе улучшающее цвет лица",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 3700,
    img: "https://basket-36.wbcontent.net/vol7916/part791643/791643868/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 21,
    name: "Крем для рук с маслом карите CARICH увлажняющий 50мл",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 4400,
    img: "https://basket-35.wbcontent.net/vol7682/part768268/768268959/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 22,
    name: "iLiFE Моющее средство для посуды, 1 кг",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 1100,
    img: "https://basket-36.wbcontent.net/vol7956/part795640/795640576/images/c516x688/1.webp",
    emoji: "🧼",
    cat: "chemistry",
    catName: "Бытовая химия",
    tag: "normal"
  },
  {
    id: 23,
    name: "Шариковый антиперспирант Carich 40мл",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 400,
    img: "https://basket-40.wbcontent.net/vol9532/part953227/953227694/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 24,
    name: "Увлажняющий и разглаживающий шампунь iLiFE 500мл",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 1150,
    img: "https://basket-40.wbcontent.net/vol9441/part944120/944120925/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 25,
    name: "iLiFE Мощный пятновыводитель для одежды 300мл",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 2700,
    img: "https://basket-36.wbcontent.net/vol7956/part795695/795695371/images/c516x688/1.webp",
    emoji: "🧼",
    cat: "chemistry",
    catName: "Бытовая химия",
    tag: "normal"
  },
  {
    id: 26,
    name: "CARICH Антибактерильный гель для женской гигиены, 3 г× 6 шт",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 4050,
    img: "https://basket-36.wbcontent.net/vol7918/part791865/791865545/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 27,
    name: "iLiFE Высокоэффективное средство для удаления 300мл",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 4500,
    img: "https://basket-36.wbcontent.net/vol7956/part795690/795690426/images/c516x688/1.webp",
    emoji: "🧼",
    cat: "chemistry",
    catName: "Бытовая химия",
    tag: "normal"
  },
  {
    id: 28,
    name: "CARICH Молочко с витамином E (65мл)",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 900,
    img: "https://basket-36.wbcontent.net/vol7918/part791842/791842574/images/c516x688/1.webp",
    emoji: "🌿",
    cat: "eco",
    catName: "Эко товары",
    tag: "normal"
  },
  {
    id: 29,
    name: "iLife женские гигиенические травяные пластыри",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 2800,
    img: "https://basket-36.wbcontent.net/vol7956/part795621/795621007/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 30,
    name: "CARICH ультратонкие тряпки из микрофибры, упаковка из 10шт",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 3150,
    img: "https://basket-36.wbcontent.net/vol7918/part791828/791828806/images/c516x688/1.webp",
    emoji: "🌿",
    cat: "eco",
    catName: "Эко товары",
    tag: "normal"
  },
  {
    id: 31,
    name: "Крем-краска для волос с эффектом сияния №20 (мокко)",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 3950,
    img: "https://basket-36.wbcontent.net/vol7916/part791691/791691748/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 32,
    name: "Розовый гель алоэ вера iLiFE 180г",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 4450,
    img: "https://basket-35.wbcontent.net/vol7683/part768312/768312379/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 33,
    name: "Одноразовая целлофановая для сохранения свежести продуктов",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 3150,
    img: "https://basket-36.wbcontent.net/vol7918/part791808/791808033/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 34,
    name: "Сыворотка против выпадения волос Zhengai 30 мл",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 2700,
    img: "https://basket-16.wbcontent.net/vol2548/part254816/254816319/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 35,
    name: "Волчий яд Антибактериальный спрей 70 мл",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 600,
    img: "https://basket-19.wbcontent.net/vol3188/part318836/318836206/images/c516x688/1.webp",
    emoji: "🧼",
    cat: "chemistry",
    catName: "Бытовая химия",
    tag: "normal"
  },
  {
    id: 36,
    name: "SEALUXE 150 мл Пенка для снятия макияжа с зелёным чаем",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 650,
    img: "https://basket-35.wbcontent.net/vol7683/part768322/768322315/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 37,
    name: "CARICH очищающий шампунь для нормализаци жирности кожи 450мл",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 2100,
    img: "https://basket-36.wbcontent.net/vol7915/part791527/791527796/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 38,
    name: "Кондиционер для волос Carich Ginger Volume 450мл",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 2000,
    img: "https://basket-40.wbcontent.net/vol9440/part944074/944074450/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 39,
    name: "черничный напиток с лютеином 500мл",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 2550,
    img: "https://basket-40.wbcontent.net/vol9533/part953365/953365901/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 40,
    name: "iLiFE Восстановливающий Гель Алоэ 50мл",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 600,
    img: "https://basket-36.wbcontent.net/vol7955/part795562/795562241/images/c516x688/1.webp",
    emoji: "🌿",
    cat: "eco",
    catName: "Эко товары",
    tag: "normal"
  },
  {
    id: 41,
    name: "Pink point жемчужный тонизирующий крем для лица 50г",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 2750,
    img: "https://basket-35.wbcontent.net/vol7683/part768383/768383078/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 42,
    name: "Металлическая салфетка для мытья посуды (10 шт.)",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 4400,
    img: "https://basket-40.wbcontent.net/vol9534/part953439/953439430/images/c516x688/1.webp",
    emoji: "🧼",
    cat: "chemistry",
    catName: "Бытовая химия",
    tag: "normal"
  },
  {
    id: 43,
    name: "Жидкое средство для стирки с ароматом лаванды 3.2кг",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 3350,
    img: "https://basket-40.wbcontent.net/vol9535/part953554/953554403/images/c516x688/1.webp",
    emoji: "🧼",
    cat: "chemistry",
    catName: "Бытовая химия",
    tag: "normal"
  },
  {
    id: 44,
    name: "Освежающая зубная паста Carich с зеленым чаем 120мл",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 3300,
    img: "https://basket-40.wbcontent.net/vol9532/part953294/953294831/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 45,
    name: "iLiFE Чистый шампунь от перхоти 500мл",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 3500,
    img: "https://basket-36.wbcontent.net/vol7956/part795651/795651156/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 46,
    name: "Увлажняющее мыло с маслом ши Carich. 100мл",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 2650,
    img: "https://basket-40.wbcontent.net/vol9533/part953396/953396352/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 47,
    name: "Шампунь с цветочным ароматом от бренда Carich 1л",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 2850,
    img: "https://basket-40.wbcontent.net/vol9397/part939773/939773695/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 48,
    name: "CARICH Ароматические шарики для одежды Южный ветер",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 2000,
    img: "https://basket-36.wbcontent.net/vol7916/part791603/791603104/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 49,
    name: "SEALUXE Скраб для лица с грецким орехом 100гр",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 3300,
    img: "https://basket-35.wbcontent.net/vol7682/part768279/768279753/images/c516x688/1.webp",
    emoji: "🧼",
    cat: "chemistry",
    catName: "Бытовая химия",
    tag: "normal"
  },
  {
    id: 50,
    name: "Увлажняющее молочко для лица CARICH Vitamin E Emulsion",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 1550,
    img: "https://basket-40.wbcontent.net/vol9442/part944226/944226932/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 51,
    name: "Зубная паста CARICH со вкусом ледяной мяты 150мл",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 1850,
    img: "https://basket-40.wbcontent.net/vol9533/part953324/953324781/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 52,
    name: "Укрепляющий шампунь против выпадения волос 500мл",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 3350,
    img: "https://basket-40.wbcontent.net/vol9440/part944087/944087408/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 53,
    name: "Детская зубная щетка с мягкой щетиной (2 шт.)",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 2250,
    img: "https://basket-40.wbcontent.net/vol9533/part953364/953364479/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 54,
    name: "Увлажняющий шампунь с цветочным ароматом от бренда Carich 1л",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 1200,
    img: "https://basket-40.wbcontent.net/vol9397/part939764/939764471/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 55,
    name: "Zhengai жидкость против выпадения волос 30мл",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 4350,
    img: "https://basket-35.wbcontent.net/vol7684/part768420/768420022/images/c516x688/1.webp",
    emoji: "🌿",
    cat: "eco",
    catName: "Эко товары",
    tag: "normal"
  },
  {
    id: 56,
    name: "Шампунь для волос всех типов с имбирём и бамбуком",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 2800,
    img: "https://basket-36.wbcontent.net/vol7917/part791714/791714445/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 57,
    name: "Хозяйственное мыло с содой и энзимами 200мл×2шт",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 3950,
    img: "https://basket-40.wbcontent.net/vol9534/part953471/953471321/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 58,
    name: "Мыло ручной работы Carich 100мл",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 1200,
    img: "https://basket-40.wbcontent.net/vol9533/part953377/953377140/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 59,
    name: "Зубная щетка Carich Energy Charcoal Soft с углем (2 шт",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 1700,
    img: "https://basket-40.wbcontent.net/vol9534/part953406/953406533/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 60,
    name: "Набор зубных щеток Carich с древесным углем (10 шт.)",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 450,
    img: "https://basket-40.wbcontent.net/vol9534/part953414/953414009/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 61,
    name: "Carich НОЧНОЙ ПЛАСТЫРЬ ДЛЯ СТОП С ТРАВАМИ 20 ШТ",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 4450,
    img: "https://basket-36.wbcontent.net/vol7957/part795705/795705377/images/c516x688/1.webp",
    emoji: "🌿",
    cat: "eco",
    catName: "Эко товары",
    tag: "normal"
  },
  {
    id: 62,
    name: "Детская зубная щетка YIBEILE (6–12 лет)",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 1750,
    img: "https://basket-40.wbcontent.net/vol9533/part953396/953396111/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 63,
    name: "iLiFE Освежающий шампунь против перхоти 500мл",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 2300,
    img: "https://basket-36.wbcontent.net/vol7956/part795656/795656519/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 64,
    name: "Гринлиф Очищающий шампунь против перхоти 500мл",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 3650,
    img: "https://basket-36.wbcontent.net/vol7915/part791583/791583880/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 65,
    name: "CARICH зубная паста со вкусом ледяной мяты 150гр",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 1350,
    img: "https://basket-35.wbcontent.net/vol7683/part768370/768370290/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 66,
    name: "Многофункциональные гелевые капсулы для стирки iLiFE",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 4200,
    img: "https://basket-36.wbcontent.net/vol7916/part791629/791629668/images/c516x688/1.webp",
    emoji: "🧼",
    cat: "chemistry",
    catName: "Бытовая химия",
    tag: "normal"
  },
  {
    id: 67,
    name: "Carich Зубная паста для свежего дыхания с ароматом сакуры",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 1100,
    img: "https://basket-35.wbcontent.net/vol7683/part768355/768355341/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 68,
    name: "Твердое мыло 120гр",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 2500,
    img: "https://basket-35.wbcontent.net/vol7684/part768430/768430709/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 69,
    name: "Коллагеновый напиток красного апельсина и витамином С",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 3750,
    img: "https://basket-40.wbcontent.net/vol9533/part953345/953345515/images/c516x688/1.webp",
    emoji: "🧼",
    cat: "chemistry",
    catName: "Бытовая химия",
    tag: "normal"
  },
  {
    id: 70,
    name: "Освежающий шампунь против перхоти iLiFE объемом 500 мл",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 1700,
    img: "https://basket-40.wbcontent.net/vol9442/part944253/944253885/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 71,
    name: "iLiFE Многофункциональный гель для стирки (цветочный аромат)",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 450,
    img: "https://basket-36.wbcontent.net/vol7915/part791564/791564924/images/c516x688/1.webp",
    emoji: "🧼",
    cat: "chemistry",
    catName: "Бытовая химия",
    tag: "normal"
  },
  {
    id: 72,
    name: "Зубная щетка CARICH с длинной головкой и мягкой щетиной 6шт",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 2850,
    img: "https://basket-36.wbcontent.net/vol7917/part791798/791798227/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 73,
    name: "Набор зубных щеток Carich Глубокое очищение и мягкая забота",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 1050,
    img: "https://basket-40.wbcontent.net/vol9533/part953381/953381203/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 74,
    name: "Детская зубная паста с пробиотиками против кариеса 60г",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 4300,
    img: "https://basket-36.wbcontent.net/vol7956/part795606/795606725/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 75,
    name: "iLiFE Отбеливающий гель для стирки с энзимами 1кг",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 1200,
    img: "https://basket-36.wbcontent.net/vol7917/part791700/791700290/images/c516x688/1.webp",
    emoji: "🧼",
    cat: "chemistry",
    catName: "Бытовая химия",
    tag: "normal"
  },
  {
    id: 76,
    name: "Питательное мыло для лица и тела с козьим молоком 120мл",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 4250,
    img: "https://basket-40.wbcontent.net/vol9534/part953425/953425541/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 77,
    name: "Антибактериальное туалетное мыло с полынью 120мл",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 4250,
    img: "https://basket-40.wbcontent.net/vol9534/part953435/953435434/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 78,
    name: "ДЕТСКАЯ ЗУБНАЯ ПАСТА С КСИЛИТОМ ДЛЯ ТЩАТЕЛЬНОГО ОЧИЩЕНИЯ",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 2050,
    img: "https://basket-36.wbcontent.net/vol7955/part795594/795594892/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 79,
    name: "Мыло Blue Point с морской солью и аминокислотами (100 г)",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 1200,
    img: "https://basket-40.wbcontent.net/vol9440/part944097/944097684/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 80,
    name: "Освежающий шампунь против перхоти контроль жирности 500 мл",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 2900,
    img: "https://basket-36.wbcontent.net/vol7916/part791681/791681320/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 81,
    name: "Натуральная зубная паста iLiFE 120мл",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 1500,
    img: "https://basket-40.wbcontent.net/vol9532/part953281/953281460/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 82,
    name: "Шампунь против выпадения волос ZHENGAI 500мл",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 2250,
    img: "https://basket-35.wbcontent.net/vol7684/part768410/768410554/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 83,
    name: "Шампунь с цветочным ароматом Гринлиф Carich, для волос",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 1900,
    img: "https://basket-36.wbcontent.net/vol7917/part791726/791726716/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 84,
    name: "YIBEILE Детская зубная паста со вкусом апельсина 80г",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 4250,
    img: "https://basket-35.wbcontent.net/vol7683/part768343/768343829/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 85,
    name: "ИМБИРНЫЙ БАЛЬЗАМ-ОПОЛАСКИВАТЕЛЬ ДЛЯ ПРИДАНИЯ ОБЪЁМА ВОЛОС",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 1200,
    img: "https://basket-36.wbcontent.net/vol7916/part791669/791669047/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 86,
    name: "Шампунь для густоты и объема волос Оригинал",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 3400,
    img: "https://basket-14.wbcontent.net/vol2094/part209438/209438688/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 87,
    name: "iLiFE Крем для лица с протеином и медом 100мл",
    desc: "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи.",
    price: 1100,
    img: "https://basket-36.wbcontent.net/vol7918/part791853/791853647/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 88,
    name: "SEALUXE Увлажняющая очищающая паста для лица с зеленым чаем",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 4150,
    img: "https://basket-36.wbcontent.net/vol7955/part795538/795538530/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 89,
    name: "Зубная паста против кариеса CARICH",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 1600,
    img: "https://basket-26.wbcontent.net/vol4687/part468716/468716504/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 90,
    name: "Шампунь против перхоти с дисульфидом селеном 200 мл",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 2050,
    img: "https://basket-20.wbcontent.net/vol3284/part328496/328496394/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 91,
    name: "Carich туалетная бумага 5-слойный 10 шт, бамбук",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 1150,
    img: "https://basket-40.wbcontent.net/vol9534/part953448/953448439/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 92,
    name: "Успокаивающие пластыри с эфирным маслом полыни CARICH",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 1150,
    img: "https://basket-29.wbcontent.net/vol5652/part565255/565255656/images/c516x688/1.webp",
    emoji: "🌿",
    cat: "eco",
    catName: "Эко товары",
    tag: "normal"
  },
  {
    id: 93,
    name: "KARDLI Металлическая мочалка для мытья посуды (6 шт)",
    desc: "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    price: 3750,
    img: "https://basket-36.wbcontent.net/vol7918/part791819/791819367/images/c516x688/1.webp",
    emoji: "🧼",
    cat: "chemistry",
    catName: "Бытовая химия",
    tag: "normal"
  },
  {
    id: 94,
    name: "Очищающий шампунь для нормализации жирности кожи CARICH",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 4450,
    img: "https://basket-20.wbcontent.net/vol3309/part330904/330904745/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 95,
    name: "Салфетки конфетки хозяйственные гринлиф CARICH 23 шт",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 1000,
    img: "https://basket-37.wbcontent.net/vol8013/part801399/801399351/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 96,
    name: "PINK POINT Жемчужный крем для макияжа 50 г",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 4500,
    img: "https://basket-32.wbcontent.net/vol6737/part673774/673774127/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 97,
    name: "Бамбуковые стаканчики 50 шт. по 250 мл",
    desc: "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    price: 2350,
    img: "https://basket-27.wbcontent.net/vol4927/part492751/492751560/images/c516x688/1.webp",
    emoji: "🌿",
    cat: "eco",
    catName: "Эко товары",
    tag: "normal"
  },
  {
    id: 98,
    name: "Увлажняющий и разглаживающий шампунь",
    desc: "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    price: 2850,
    img: "https://basket-37.wbcontent.net/vol8043/part804342/804342993/images/c516x688/1.webp",
    emoji: "💄",
    cat: "cosmetics",
    catName: "Косметика",
    tag: "normal"
  },
  {
    id: 99,
    name: "3D зубная щетка CARICH",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 3100,
    img: "https://basket-26.wbcontent.net/vol4606/part460669/460669610/images/c516x688/1.webp",
    emoji: "💊",
    cat: "health",
    catName: "Здоровье",
    tag: "normal"
  },
  {
    id: 100,
    name: "Мицеллярная вода для снятия макияжа с глаз и лица",
    desc: "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    price: 3300,
    img: "https://basket-36.wbcontent.net/vol7710/part771085/771085795/images/c516x688/1.webp",
    emoji: "🧼",
    cat: "chemistry",
    catName: "Бытовая химия",
    tag: "normal"
  },
];

function buildCardHtml(p) {
  const isAuth = !!localStorage.getItem('glg_user');
  const finalPrice = isAuth ? Math.floor(p.price / 2) : p.price;
  const oldPriceHtml = isAuth ? `<span style="text-decoration:line-through;color:#e74c3c;font-size:0.85rem;margin-right:6px">${formatPrice(p.price)}</span>` : '';
  const badgeHtml = isAuth ? `<div style="position:absolute;top:10px;left:10px;background:#2ecc71;color:white;padding:4px 8px;border-radius:12px;font-size:0.8rem;font-weight:bold;z-index:2;box-shadow:0 2px 5px rgba(0,0,0,0.2)">-50% Партнер</div>` : '';

  return `
    <div class="product-card" style="position:relative;display:flex;flex-direction:column;">
      ${badgeHtml}
      <div style="height:260px;overflow:hidden;position:relative" onclick="window.location.href='product.html?id=${p.id}'" style="cursor:pointer">
        <img src="${p.img}" loading="lazy" class="card-real-img" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;object-position:center;transition:transform 0.4s">
        <div class="product-img-emoji" style="position:absolute;bottom:10px;right:10px;font-size:1.8rem;background:rgba(255,255,255,0.9);border-radius:50%;padding:6px;box-shadow:0 2px 6px rgba(0,0,0,0.15)">${p.emoji}</div>
      </div>
      <div style="padding:16px;display:flex;flex-direction:column;flex-grow:1;">
        <div style="font-size:0.75rem;color:#888;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.5px">${p.catName}</div>
        <h3 style="font-size:1.05rem;margin:0 0 8px;color:#222;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-weight:600">${p.name}</h3>
        <p style="font-size:0.85rem;color:#666;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:16px;flex-grow:1">${p.desc}</p>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:auto">
          <div style="font-weight:bold;font-size:1.15rem;color:#1f8f4a;display:flex;flex-direction:column;">
             ${oldPriceHtml}
             <span>${formatPrice(finalPrice)}</span>
          </div>
          <button class="btn btn-outline btn-sm" style="padding:8px 16px;border-radius:20px" onclick="addToCartFromCard(${p.id})">🛒 Купить</button>
        </div>
      </div>
    </div>
  `;
}

setTimeout(() => {
  if (document.getElementById('catalog-search') && document.getElementById('products-grid')) {
    initCatalogPage();
  }
}, 50);

function initCatalogPage() {
  const grid = document.getElementById('products-grid');
  const countSpan = document.getElementById('result-count');
  const searchInput = document.getElementById('catalog-search');
  const chips = document.querySelectorAll('.filter-chips .chip');

  let currentCat = 'all';
  let currentSearch = '';

  const params = new URLSearchParams(window.location.search);
  if(params.has('cat')) currentCat = params.get('cat');
  if(params.has('q')) currentSearch = params.get('q').toLowerCase();

  chips.forEach(c => {
    c.classList.remove('active');
    if (c.dataset.filter === currentCat) c.classList.add('active');
  });
  if(searchInput && currentSearch) searchInput.value = currentSearch;

  function renderGrid() {
    let filt = PRODUCTS.filter(p => {
       const matchCat = currentCat === 'all' || p.cat === currentCat;
       const matchSearch = currentSearch === '' || p.name.toLowerCase().includes(currentSearch) || p.desc.toLowerCase().includes(currentSearch);
       return matchCat && matchSearch;
    });
    if(countSpan) countSpan.innerText = filt.length + ' товаров';
    if(filt.length === 0) {
       grid.innerHTML = '<div style="grid-column:1/-1;padding:60px 20px;text-align:center;color:#666"><div style="font-size:3rem;margin-bottom:10px">🤷‍♂️</div><h3 style="margin-bottom:8px">Ничего не найдено</h3><p>Попробуйте изменить поисковый запрос или выбрать другую категорию.</p></div>';
    } else {
       grid.innerHTML = filt.map(buildCardHtml).join('');
    }
  }

  chips.forEach(c => {
    c.addEventListener('click', (e) => {
      chips.forEach(x => x.classList.remove('active'));
      e.target.classList.add('active');
      currentCat = e.target.dataset.filter;
      renderGrid();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase();
      renderGrid();
    });
  }

  renderGrid();
}
