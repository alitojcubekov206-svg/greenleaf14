import json

js_path = 'js/catalog.js'

with open(js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to add 'tag: "hit"' to the first 8 products so they show on index.html
if "tag:" not in content:
    lines = content.split('\n')
    idx = 0
    hit_count = 0
    for i in range(len(lines)):
        if "catName:" in lines[i]:
            if hit_count < 8:
                lines[i] = lines[i] + ',\n    tag: "hit"'
                hit_count += 1
            else:
                lines[i] = lines[i] + ',\n    tag: "normal"'
    content = '\n'.join(lines)

logic = """

function buildCardHtml(p) {
  const isAuth = !!localStorage.getItem('glg_user');
  const finalPrice = isAuth ? Math.floor(p.price / 2) : p.price;
  const oldPriceHtml = isAuth ? `<span style="text-decoration:line-through;color:#e74c3c;font-size:0.85rem;margin-right:6px">\${formatPrice(p.price)}</span>` : '';
  const badgeHtml = isAuth ? `<div style="position:absolute;top:10px;left:10px;background:#2ecc71;color:white;padding:4px 8px;border-radius:12px;font-size:0.8rem;font-weight:bold;z-index:2;box-shadow:0 2px 5px rgba(0,0,0,0.2)">-50% Партнер</div>` : '';

  return `
    <div class="product-card" style="position:relative;display:flex;flex-direction:column;">
      \${badgeHtml}
      <div style="height:260px;overflow:hidden;position:relative" onclick="window.location.href='product.html?id=\${p.id}'" style="cursor:pointer">
        <img src="\${p.img}" loading="lazy" class="card-real-img" alt="\${p.name}" style="width:100%;height:100%;object-fit:cover;object-position:center;transition:transform 0.4s">
        <div class="product-img-emoji" style="position:absolute;bottom:10px;right:10px;font-size:1.8rem;background:rgba(255,255,255,0.9);border-radius:50%;padding:6px;box-shadow:0 2px 6px rgba(0,0,0,0.15)">\${p.emoji}</div>
      </div>
      <div style="padding:16px;display:flex;flex-direction:column;flex-grow:1;">
        <div style="font-size:0.75rem;color:#888;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.5px">\${p.catName}</div>
        <h3 style="font-size:1.05rem;margin:0 0 8px;color:#222;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-weight:600">\${p.name}</h3>
        <p style="font-size:0.85rem;color:#666;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:16px;flex-grow:1">\${p.desc}</p>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:auto">
          <div style="font-weight:bold;font-size:1.15rem;color:#1f8f4a;display:flex;flex-direction:column;">
             \${oldPriceHtml}
             <span>\${formatPrice(finalPrice)}</span>
          </div>
          <button class="btn btn-outline btn-sm" style="padding:8px 16px;border-radius:20px" onclick="addToCartFromCard(\${p.id})">🛒 Купить</button>
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
"""

if "buildCardHtml" not in content:
    content += logic

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Catalog logic restored and tags fixed.")
