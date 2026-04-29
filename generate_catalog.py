import json
import random

p1 = json.load(open('wb_from_subagent.json', 'r', encoding='utf-8'))
p2 = json.load(open('wb_from_subagent_p2.json', 'r', encoding='utf-8'))

all_items = p1 + p2
unique_map = {}
for i in all_items:
    unique_map[i['img']] = i

unique_items = list(unique_map.values())[:100]

categories = [
    {"id": "chemistry", "name": "Бытовая химия", "emoji": "🧼"},
    {"id": "cosmetics", "name": "Косметика", "emoji": "💄"},
    {"id": "health", "name": "Здоровье", "emoji": "💊"},
    {"id": "eco", "name": "Эко товары", "emoji": "🌿"}
]

desc_tpls = [
    "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи."
]

js_lines = ["const BASE_IMG = '';\nconst PRODUCTS = ["]
idx = 1
for item in unique_items:
    clean_name = item['name'].lstrip('/ ').replace('"', '\\"')
    price = random.randint(8, 90) * 50
    
    cat = categories[random.randint(0, 3)]
    n_lower = clean_name.lower()
    if any(x in n_lower for x in ["шампунь", "крем", "мыло", "лосьон", "дезодорант", "маска", "бальзам"]):
        cat = categories[1]
    elif any(x in n_lower for x in ["стирк", "посуд", "средство", "пятновывод", "мытья"]):
        cat = categories[0]
    elif any(x in n_lower for x in ["салфет", "полотенц", "гигиен", "зубн", "щетк", "паст", "проклад"]):
        cat = categories[2]

    desc = random.choice(desc_tpls)
    
    js_lines.append("  {")
    js_lines.append(f"    id: {idx},")
    js_lines.append(f'    name: "{clean_name}",')
    js_lines.append(f'    desc: "{desc}",')
    js_lines.append(f"    price: {price},")
    js_lines.append(f'    img: "{item["img"]}",')
    js_lines.append(f'    emoji: "{cat["emoji"]}",')
    js_lines.append(f'    cat: "{cat["id"]}",')
    js_lines.append(f'    catName: "{cat["name"]}"')
    js_lines.append("  },")
    idx += 1

js_lines.append("];")

with open('js/catalog.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(js_lines))

print(f"Successfully created catalog.js with {idx-1} products!")
