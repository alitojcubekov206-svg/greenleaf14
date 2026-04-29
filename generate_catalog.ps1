$ErrorActionPreference = "Stop"
$p1 = Get-Content "c:\Users\user\Downloads\ComfyUI-qwenmultiangle-master\GreenLeafShop\wb_from_subagent.json" -Raw | ConvertFrom-Json
$p2 = Get-Content "c:\Users\user\Downloads\ComfyUI-qwenmultiangle-master\GreenLeafShop\wb_from_subagent_p2.json" -Raw | ConvertFrom-Json

$all = @()
$all += $p1
$all += $p2

# Get unique by image
$unique = $all | Group-Object img | ForEach-Object { $_.Group[0] }

# We only need 100
$finalList = $unique | Select-Object -First 100

$categories = @(
    @{ id='chemistry'; name='Бытовая химия'; emoji='🧼' },
    @{ id='cosmetics'; name='Косметика'; emoji='💄' },
    @{ id='health'; name='Здоровье'; emoji='💊' },
    @{ id='eco'; name='Эко товары'; emoji='🌿' }
)

$descTpls = @(
    "100% экологичный сертифицированный продукт. Абсолютно безопасен для природы и человека.",
    "Натуральный состав без агрессивных ПАВ и парабенов. Деликатный уход и защита.",
    "Биоразлагаемая формула премиум класса. Эффективность без вреда для экологии.",
    "Инновационная разработка Greenleaf для максимального результата с заботой о семье.",
    "Безвредный эко-продукт. Дерматологически протестирован, подходит для чувствительной кожи."
)

$jsLines = @(
    "const BASE_IMG = '';",
    "const PRODUCTS = ["
)

$idCounter = 1
$rand = New-Object System.Random

foreach ($item in $finalList) {
    # Clean name: remove leading slashes and extra spaces
    $cleanName = $item.name -replace '^/\s*', ''
    $cleanName = $cleanName -replace '"', '\"'
    
    # Random price between 400 and 4500, rounded to 50
    $price = ($rand.Next(8, 90) * 50)
    
    # Assign category based on string
    $catIndex = $rand.Next(0, 4)
    $cat = $categories[$catIndex]
    $nLower = $cleanName.ToLower()
    if ($nLower -match "шампунь|крем|мыло|лосьон|дезодорант|маска|бальзам") { $cat = $categories[1] }
    elseif ($nLower -match "стирк|посуд|средство|пятновывод|мытья") { $cat = $categories[0] }
    elseif ($nLower -match "салфет|полотенц|гигиен|зубн|щетк|паст|проклад") { $cat = $categories[2] }

    $desc = $descTpls[$rand.Next(0, $descTpls.Length)]
    $imgUrl = $($item.img)
    
    $jsLines += "  {"
    $jsLines += "    id: $idCounter,"
    $jsLines += "    name: `"$cleanName`","
    $jsLines += "    desc: `"$desc`","
    $jsLines += "    price: $price,"
    $jsLines += "    img: `"$imgUrl`","
    $jsLines += "    emoji: `"$($cat.emoji)`","
    $jsLines += "    cat: `"$($cat.id)`","
    $jsLines += "    catName: `"$($cat.name)`""
    $jsLines += "  },"
    
    $idCounter++
}

$jsLines += "];"

$outPath = "c:\Users\user\Downloads\ComfyUI-qwenmultiangle-master\GreenLeafShop\js\catalog.js"
$jsLines | Out-File -FilePath $outPath -Encoding utf8
Write-Host "Created catalog.js with $($idCounter - 1) items."
