$ProgressPreference = 'SilentlyContinue'
$url = "https://search.wb.ru/exactmatch/ru/common/v5/search?appType=1&curr=rub&dest=-1257786&query=greenleaf&resultset=catalog&sort=popular&spp=100"
$response = Invoke-RestMethod -Uri $url -Method Get
$products = $response.data.products | Select-Object -First 100 | Select-Object id, name
$products | ConvertTo-Json | Out-File "c:\Users\user\Downloads\ComfyUI-qwenmultiangle-master\GreenLeafShop\wb_products.json" -Encoding utf8
