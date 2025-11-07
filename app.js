(function(){
  const products = [
    { id: 101, name: 'Hybrid Theory Tee', band: 'Linkin Park', price: 890, category: 'tshirt metal', icon: '🦂', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', imageUrl: 'https://otheruk.com/cdn/shop/files/V3A79942_5abdabf9-0024-4db2-b9ec-1b70dc95dfa0.jpg?v=1723556483&width=2000' },
    { id: 102, name: 'Meteora Hoodie', band: 'Linkin Park', price: 1690, category: 'tshirt metal', icon: '🧥', gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTla5aQa4XSx5YPz4-escKCCpDkvebZ97V6HA&s' },
    { id: 201, name: 'Master of Puppets Tee', band: 'Metallica', price: 920, category: 'tshirt metal', icon: '⚡', gradient: 'linear-gradient(135deg, #232526 0%, #414345 100%)', imageUrl: 'https://cdn.media.amplience.net/i/metallica/MOPWOTRKT22_Master-Of-Puppets-T-Shirt_01?$large$' },
    { id: 202, name: 'Metallica Logo Cap', band: 'Metallica', price: 650, category: 'accessories metal', icon: '🧢', gradient: 'linear-gradient(135deg, #485563 0%, #29323c 100%)', imageUrl: 'https://collectacouple.com/cdn/shop/files/Copy-of_Hi_20240706_034751_0000.png?v=1720632222' },
    { id: 301, name: 'Smiley Tee', band: 'Nirvana', price: 850, category: 'tshirt alt', icon: '🙂', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)', imageUrl: 'https://shop.nirvana.com/cdn/shop/files/Nirvana_Smiley_Toddler_Tee_1_4a58ed0c-acc1-473f-b705-21ae80704d7e_600x.png?v=1739233528' },
    { id: 302, name: 'Nevermind Tote', band: 'Nirvana', price: 480, category: 'accessories alt', icon: '👜', gradient: 'linear-gradient(135deg, #83a4d4 0%, #b6fbff 100%)', imageUrl: 'https://i.ebayimg.com/images/g/NcIAAOSw1qNjXnMM/s-l400.png' },
    { id: 401, name: 'High Voltage Tee', band: 'AC/DC', price: 890, category: 'tshirt rock', icon: '⚡', gradient: 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)', imageUrl: 'https://jsrdirect.com/cdn/shop/files/ACD185_f3d8798f-368c-4373-955e-7c60c7cac4fa.jpg?v=1751891725' },
    { id: 402, name: 'AC/DC Keychain', band: 'AC/DC', price: 280, category: 'accessories rock', icon: '🔑', gradient: 'linear-gradient(135deg, #8e9eab 0%, #eef2f3 100%)', imageUrl: 'https://i.ebayimg.com/images/g/zFMAAOSwqa9kPtZG/s-l400.jpg' },
    { id: 501, name: 'Dark Side Tee', band: 'Pink Floyd', price: 980, category: 'tshirt rock', icon: '🌈', gradient: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)', imageUrl: 'https://shop.pinkfloyd.com/cdn/shop/files/X3CTPF1267_4a53f66f-7a3c-4d74-b2ed-09fdbf919f25.png?v=1757624306' },
    { id: 502, name: 'Prism Poster', band: 'Pink Floyd', price: 550, category: 'accessories rock', icon: '🖼️', gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', imageUrl: 'https://cdn.europosters.eu/image/750/36372.jpg' },
    { id: 601, name: 'American Idiot Tee', band: 'Green Day', price: 840, category: 'tshirt punk', icon: '🧨', gradient: 'linear-gradient(135deg, #16a085 0%, #000428 100%)', imageUrl: 'https://m.media-amazon.com/images/I/61JnHXvMYxL._AC_SL1500_.jpg' },
    { id: 602, name: 'Green Day Wristband', band: 'Green Day', price: 240, category: 'accessories punk', icon: '🎗️', gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', imageUrl: 'https://cdn.media.amplience.net/s/hottopic/10241883_hi?$productMainDesktop$&fmt=auto' },
    { id: 701, name: 'Enema Tee', band: 'Blink-182', price: 790, category: 'tshirt punk', icon: '💫', gradient: 'linear-gradient(135deg, #fc00ff 0%, #00dbde 100%)', imageUrl: 'https://i.ebayimg.com/images/g/iaoAAOSwHCBklfRR/s-l1200.jpg' },
    { id: 702, name: 'Blink-182 Mug', band: 'Blink-182', price: 420, category: 'accessories punk', icon: '☕', gradient: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgJOluNpL6A4fP2ulJEx5V1PVB_sd7Pa_sQ&s' },
    { id: 801, name: 'Iowa Tee', band: 'Slipknot', price: 930, category: 'tshirt metal', icon: '🩸', gradient: 'linear-gradient(135deg, #200122 0%, #6f0000 100%)', imageUrl: 'https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C91m5%2B8wLxjL.png%7C0%2C0%2C2140%2C2000%2B0%2C0%2C2140%2C2000_AC_UY1000_.png' },
    { id: 802, name: 'Slipknot Patch Set', band: 'Slipknot', price: 320, category: 'accessories metal', icon: '🩹', gradient: 'linear-gradient(135deg, #6441a5 0%, #2a0845 100%)', imageUrl: 'https://slipknotmerch.com/cdn/shop/files/Here-Comes-The-Pain-Patch-Set_105f8761-9ab9-4dc3-89e9-bad18d65c122.png?v=1722619124' },
    { id: 901, name: 'Issues Tee', band: 'Korn', price: 910, category: 'tshirt metal', icon: '🧸', gradient: 'linear-gradient(135deg, #373b44 0%, #4286f4 100%)', imageUrl: 'https://i.ebayimg.com/images/g/KWoAAOSwVCNl8cMC/s-l1200.jpg' },
    { id: 902, name: 'Korn Beanie', band: 'Korn', price: 560, category: 'accessories metal', icon: '🧢', gradient: 'linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)', imageUrl: 'https://www.footlocker.ph/media/catalog/product/cache/f57d6f7ebc711fc328170f0ddc174b08/0/8/0803-ADIJG1442005OSW-2.jpg' },
    { id: 1001, name: 'Riot! Tee', band: 'Paramore', price: 820, category: 'tshirt alt', icon: '📝', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', imageUrl: 'https://paom.com/cdn/shop/products/34428_231252.jpg?v=1578612138' },
    { id: 1002, name: 'Paramore Pin', band: 'Paramore', price: 230, category: 'accessories alt', icon: '📌', gradient: 'linear-gradient(135deg, #a8ff78 0%, #78ffd6 100%)', imageUrl: 'https://i.ebayimg.com/images/g/RucAAOSwxspef9Cw/s-l1200.jpg' },
    { id: 1101, name: 'Black Parade Tee', band: 'My Chemical Romance', price: 950, category: 'tshirt alt', icon: '🥁', gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)', imageUrl: 'https://area-23.shop/wp-content/uploads/2023/10/MCR-BLA-SS-12.png' },
    { id: 1102, name: 'MCR Patch', band: 'My Chemical Romance', price: 260, category: 'accessories alt', icon: '🎖️', gradient: 'linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)', imageUrl: 'https://inwfile.com/s-ga/wv521r.jpg' },
    { id: 1201, name: '1989 Tee', band: 'Taylor Swift', price: 890, category: 'tshirt pop', icon: '✨', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbO5fUlL_h0FfTImMKGku6oXhOr7jf7kVNA&s' },
    { id: 1202, name: 'Chromatica Keychain', band: 'Lady Gaga', price: 300, category: 'accessories pop', icon: '🔑', gradient: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)', imageUrl: 'https://i.etsystatic.com/29365931/r/il/fab49f/5125702505/il_340x270.5125702505_dm4z.jpg' },
    { id: 1301, name: 'Zeppelin Stairway Tee', band: 'Led Zeppelin', price: 940, category: 'tshirt rock', icon: '🔥', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', imageUrl: 'https://rockabilia.com/cdn/shop/products/52807F_1024x1024.jpg?v=1668725112' },
    { id: 1302, name: 'Beatles Abbey Road Pin', band: 'The Beatles', price: 250, category: 'accessories rock', icon: '📌', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', imageUrl: 'https://i.ebayimg.com/images/g/h2oAAOSwdnZm1sYu/s-l400.png' }
  ];

  let cart = [];
  let currentProducts = [...products];

  function renderProducts(productList) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    grid.innerHTML = productList.map(product => `
      <div class="product-card" data-category="${product.category}" onclick="goToDetail(${product.id})">
        <div class="product-image" style="background: ${product.gradient};">
          ${product.imageUrl ? `<img src="${product.imageUrl}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.onerror=null;this.remove();">` : `<span style="font-size: 80px;">${product.icon}</span>`}
        </div>
        <div class="product-info">
          <div class="band-name">${product.band}</div>
          <div class="product-title">${product.name}</div>
          <div class="product-price">฿${product.price}</div>
          <div class="product-actions">
            <button class="buy-btn" onclick="event.stopPropagation(); addToCart(${product.id})">ADD TO CART</button>
            <button class="quick-view-btn" onclick="event.stopPropagation(); quickView(${product.id})">VIEW</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function animateGridUpdate(next) {
    const grid = document.getElementById('productsGrid');
    if (!grid) { next(); return; }
    grid.classList.remove('fade-in');
    grid.classList.add('fade-out');
    setTimeout(() => {
      next();

      void grid.offsetHeight;
      grid.classList.remove('fade-out');
      grid.classList.add('fade-in');
      setTimeout(() => grid.classList.remove('fade-in'), 260);
    }, 180);
  }

  function addToCart(productId) {
    try {
      if (!window.AuthSim || !window.AuthSim.getAuth()) {
        alert('Please login to add items to cart.');
        window.location.href = 'login.html';
        return;
      }
    } catch(e) { /* fallback no-op */ }
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) { existingItem.quantity++; } else { cart.push({ ...product, quantity: 1 }); }
    updateCart();
    showNotification('Added to cart!');
  }

  function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');
    const cartFooter = document.getElementById('cartFooter');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;

    if (!cartItems || !cartFooter) return;
    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="empty-cart">
          <div class="empty-cart-icon">🛒</div>
          <p>YOUR CART IS EMPTY</p>
        </div>
      `;
      cartFooter.style.display = 'none';
    } else {
      cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-image" style="background: ${item.gradient};">
            ${item.icon}
          </div>
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">฿${item.price}</div>
            <div class="quantity-controls">
              <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
              <span>${item.quantity}</span>
              <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
          </div>
          <span class="remove-item" onclick="removeFromCart(${item.id})">×</span>
        </div>
      `).join('');
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const totalEl = document.getElementById('cartTotal');
      if (totalEl) totalEl.textContent = `฿${total}`;
      cartFooter.style.display = 'block';
    }
    try { localStorage.setItem('cart', JSON.stringify(cart)); } catch (e) {}
  }

  function changeQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) { removeFromCart(productId); } else { updateCart(); }
    }
  }

  function removeFromCart(productId) { cart = cart.filter(item => item.id !== productId); updateCart(); }
  function toggleCart() { const sidebar = document.getElementById('cartSidebar'); if (!sidebar) return; sidebar.classList.toggle('open'); }

  function quickView(productId) {
    window.location.href = `product_detail.html?id=${productId}`;
  }

  function goToDetail(productId){
    window.location.href = `product_detail.html?id=${productId}`;
  }

  function closeModal() { const modal = document.getElementById('quickViewModal'); if (modal) modal.classList.remove('open'); }
  function showNotification(message) {
    const note = document.createElement('div');
    note.textContent = message; note.style.position = 'fixed'; note.style.right = '20px'; note.style.bottom = '20px';
    note.style.background = '#00ADEF'; note.style.color = '#fff'; note.style.padding = '12px 16px'; note.style.fontWeight = '900'; note.style.letterSpacing = '1px'; note.style.zIndex = '4000'; note.style.boxShadow = '0 6px 24px rgba(0,173,239,0.4)';
    document.body.appendChild(note); setTimeout(() => note.remove(), 1400);
  }
  function loadCart() { try { const data = localStorage.getItem('cart'); cart = data ? JSON.parse(data) : []; } catch (e) { cart = []; } }

  function applyFilters() {
    const term = (document.getElementById('searchBox')?.value || '').trim().toLowerCase();
    const activeBtn = document.querySelector('.filter-btn.active');
    const category = activeBtn ? activeBtn.getAttribute('data-category') : 'all';
    let list = [...products];
    if (category !== 'all') { list = list.filter(p => p.category.includes(category)); }
    if (term) { list = list.filter(p => p.name.toLowerCase().includes(term) || p.band.toLowerCase().includes(term)); }
    const sort = document.getElementById('sortSelect')?.value;
    if (sort === 'price-low') list.sort((a,b)=>a.price-b.price);
    if (sort === 'price-high') list.sort((a,b)=>b.price-a.price);
    if (sort === 'name') list.sort((a,b)=>a.name.localeCompare(b.name));
    currentProducts = list;
    animateGridUpdate(() => renderProducts(currentProducts));
  }

  function checkout() {
    if (cart.length === 0) { showNotification('Cart is empty'); return; }
    const modal = document.getElementById('quickViewModal');
    const body = document.getElementById('modalBody');
    if (!modal || !body) return;
    const total = cart.reduce((s,i)=>s + i.price * i.quantity, 0);
    body.innerHTML = `
      <h3>Checkout</h3>
      <div style="display:grid; gap:12px; margin-top:10px;">
        <input id="co_name" placeholder="Full Name" style="padding:10px; background:#0a0a0a; border:1px solid #333; color:#fff;" />
        <input id="co_email" placeholder="Email" style="padding:10px; background:#0a0a0a; border:1px solid #333; color:#fff;" />
        <textarea id="co_addr" placeholder="Shipping Address" rows="3" style="padding:10px; background:#0a0a0a; border:1px solid #333; color:#fff;"></textarea>
        <div style="border-top:1px solid #333; padding-top:10px;">
          <div style="margin-bottom:8px; font-weight:900;">Order Summary</div>
          ${cart.map(i=>`<div style=\"display:flex; justify-content:space-between; margin:4px 0;\"><span>${i.name} × ${i.quantity}</span><span>฿${i.price*i.quantity}</span></div>`).join('')}
          <div style="display:flex; justify-content:space-between; margin-top:10px; font-weight:900; font-size:18px;\"><span>Total</span><span>฿${total}</span></div>
        </div>
        <button id=\"co_submit\" class=\"buy-btn\">Place Order</button>
      </div>
    `;
    modal.classList.add('open');
    setTimeout(()=>{ const btn = document.getElementById('co_submit'); if (btn) btn.onclick = () => { showNotification('Order placed! Thank you.'); cart = []; updateCart(); closeModal(); }; },0);
  }

  Object.assign(window, { products, cart, currentProducts, renderProducts, addToCart, updateCart, changeQuantity, removeFromCart, toggleCart, quickView, closeModal, showNotification, loadCart, applyFilters, checkout, goToDetail });

  document.addEventListener('DOMContentLoaded', () => {
    loadCart(); renderProducts(products); updateCart();
    document.querySelectorAll('.filter-btn').forEach(btn => { btn.addEventListener('click', () => { document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); applyFilters(); }); });
    const sb = document.getElementById('searchBox'); if (sb) sb.addEventListener('input', applyFilters);
    const ss = document.getElementById('sortSelect'); if (ss) ss.addEventListener('change', applyFilters);
    const qvm = document.getElementById('quickViewModal'); if (qvm) qvm.addEventListener('click', (e)=>{ if (e.target.id === 'quickViewModal') closeModal(); });
  });

  function $(sel){ return document.querySelector(sel); }
  function $all(sel){ return Array.from(document.querySelectorAll(sel)); }
  function debounce(fn, ms){ let t; return function(...args){ clearTimeout(t); t = setTimeout(()=>fn.apply(this,args), ms); }; }

  function trapFocus(container){ const focusable = container.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'); if (!focusable.length) return () => {}; const first = focusable[0]; const last = focusable[focusable.length - 1]; function handler(e){ if (e.key !== 'Tab') return; if (e.shiftKey){ if (document.activeElement === first){ e.preventDefault(); last.focus(); } } else { if (document.activeElement === last){ e.preventDefault(); first.focus(); } } } container.addEventListener('keydown', handler); return () => container.removeEventListener('keydown', handler); }

  let releaseModalTrap = null; let releaseCartTrap = null;
  window.addEventListener('DOMContentLoaded', function(){
    const backdrop = $('#cartBackdrop'); const cartSidebar = $('#cartSidebar'); const modal = $('#quickViewModal');
    if (typeof window.toggleCart === 'function'){ const origToggle = window.toggleCart; window.toggleCart = function(){ origToggle(); const isOpen = cartSidebar && cartSidebar.classList.contains('open'); if (isOpen){ if (backdrop) backdrop.classList.add('show'); const closeBtn = cartSidebar.querySelector('.close-cart'); if (closeBtn) closeBtn.focus(); if (!releaseCartTrap) releaseCartTrap = trapFocus(cartSidebar); } else { if (backdrop) backdrop.classList.remove('show'); if (releaseCartTrap) { releaseCartTrap(); releaseCartTrap = null; } } }; }
    const mo = new MutationObserver(()=>{ const open = modal && modal.classList.contains('open'); if (open){ const content = modal.querySelector('.modal-content'); if (content){ content.focus(); } if (!releaseModalTrap && content) releaseModalTrap = trapFocus(content); } else { if (releaseModalTrap){ releaseModalTrap(); releaseModalTrap = null; } } }); if (modal) mo.observe(modal, { attributes: true, attributeFilter: ['class'] });
    document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape'){ if (modal && modal.classList.contains('open')){ if (typeof window.closeModal === 'function') window.closeModal(); return; } if (cartSidebar && cartSidebar.classList.contains('open')){ if (typeof window.toggleCart === 'function') window.toggleCart(); } } });
    const searchBox = $('#searchBox'); if (searchBox) { const handler = debounce(()=>{ if (typeof window.applyFilters === 'function') window.applyFilters(); }, 200); searchBox.addEventListener('input', handler); }
    const sortSelect = $('#sortSelect'); const filterBtns = $all('.filter-btn');
    function saveFilters(){ try { localStorage.setItem('filters.search', searchBox ? searchBox.value : ''); localStorage.setItem('filters.sort', sortSelect ? sortSelect.value : 'default'); const active = document.querySelector('.filter-btn.active'); localStorage.setItem('filters.category', active ? active.getAttribute('data-category') : 'all'); } catch(e){} }
    function restoreFilters(){ try { const s = localStorage.getItem('filters.search'); const sort = localStorage.getItem('filters.sort'); const cat = localStorage.getItem('filters.category'); if (searchBox && s !== null) searchBox.value = s; if (sortSelect && sort) sortSelect.value = sort; if (cat){ filterBtns.forEach(b=>b.classList.remove('active')); const btn = document.querySelector(`.filter-btn[data-category="${cat}"]`); if (btn) btn.classList.add('active'); } } catch(e){} if (typeof window.applyFilters === 'function') window.applyFilters(); }
    if (searchBox) searchBox.addEventListener('input', saveFilters); if (sortSelect) sortSelect.addEventListener('change', saveFilters); filterBtns.forEach(btn=>btn.addEventListener('click', ()=>setTimeout(saveFilters,0)));
    restoreFilters();

    const strings = { EN: { HOME: 'HOME', SHOP: 'SHOP', ABOUT: 'ABOUT', CONTACT: 'CONTACT', YOUR_CART: 'YOUR CART', EMPTY: 'YOUR CART IS EMPTY', TOTAL: 'TOTAL:', CHECKOUT: 'CHECKOUT', FREE_SHIP: 'Free shipping over ฿1,500', SEARCH: 'SEARCH PRODUCTS...', SORT_BY: 'SORT BY', PRICE_LOW: 'PRICE: LOW TO HIGH', PRICE_HIGH: 'PRICE: HIGH TO LOW', NAME: 'NAME: A-Z', HERO_SUB: 'Made by VV1NZY for Classwork', ABOUT_H: 'About', ABOUT_BODY: 'Curated band merchandise store demo with cart, filters, quick view, and simple checkout. Theme inspired by Meteora 20th.', CONTACT_H: 'Contact', CONTACT_IG: 'Instagram', CONTACT_FB: 'Facebook' }, TH: { HOME: 'หน้าแรก', SHOP: 'ร้านค้า', ABOUT: 'เกี่ยวกับ', CONTACT: 'ติดต่อ', YOUR_CART: 'ตะกร้าของคุณ', EMPTY: 'ตะกร้าของคุณยังว่างอยู่', TOTAL: 'ยอดรวม:', CHECKOUT: 'ชำระเงิน', FREE_SHIP: 'ส่งฟรีเมื่อสั่งเกิน ฿1,500', SEARCH: 'ค้นหาสินค้า...', SORT_BY: 'เรียงตาม', PRICE_LOW: 'ราคา: จากน้อยไปมาก', PRICE_HIGH: 'ราคา: จากมากไปน้อย', NAME: 'ชื่อ: ก-ฮ', HERO_SUB: 'จัดทำโดย VV1NZY สำหรับงานในรายวิชา Front-End', ABOUT_H: 'เกี่ยวกับ', ABOUT_BODY: 'ร้านเดโมขายสินค้าวงดนตรี มีตะกร้า กรอง ดูด่วน และเช็คเอาท์แบบง่าย ธีมตาม Meteora 20th', CONTACT_H: 'ติดต่อ', CONTACT_IG: 'อินสตาแกรม', CONTACT_FB: 'เฟซบุ๊ก' } };
    function setLang(lang){ try { localStorage.setItem('lang', lang); } catch(e){} const t = strings[lang] || strings.EN; const nav = document.querySelector('.nav-menu'); if (nav){ const links = nav.querySelectorAll('a[href^="#"]'); if (links[0]) links[0].textContent = t.HOME; if (links[1]) links[1].textContent = t.SHOP; if (links[2]) links[2].textContent = t.ABOUT; if (links[3]) links[3].textContent = t.CONTACT; } const cartTitle = document.getElementById('cartTitle'); if (cartTitle) cartTitle.textContent = t.YOUR_CART; const empty = document.querySelector('.empty-cart p'); if (empty) empty.textContent = t.EMPTY; const totalLabel = document.querySelector('.cart-total span:first-child'); if (totalLabel) totalLabel.textContent = t.TOTAL; const coBtn = document.querySelector('.checkout-btn'); if (coBtn) coBtn.textContent = t.CHECKOUT; const freeShip = document.querySelector('#cartFooter div'); if (freeShip) freeShip.textContent = t.FREE_SHIP; const search = document.getElementById('searchBox'); if (search) search.placeholder = t.SEARCH; const sort = document.getElementById('sortSelect'); if (sort){ sort.options[0].text = t.SORT_BY; sort.options[1].text = t.PRICE_LOW; sort.options[2].text = t.PRICE_HIGH; sort.options[3].text = t.NAME; } const heroSub = document.getElementById('heroSub'); if (heroSub) heroSub.textContent = t.HERO_SUB; const aboutH = document.querySelector('#about h2'); if (aboutH) aboutH.textContent = t.ABOUT_H; const aboutBody = document.querySelector('#about .info-text'); if (aboutBody) aboutBody.textContent = t.ABOUT_BODY; const contactH = document.querySelector('#contact h2'); if (contactH) contactH.textContent = t.CONTACT_H; const ig = document.getElementById('ct_ig'); if (ig) ig.textContent = t.CONTACT_IG; const fb = document.getElementById('ct_fb'); if (fb) fb.textContent = t.CONTACT_FB; }
    const langBtn = document.getElementById('langToggle'); if (langBtn){ const saved = (localStorage.getItem('lang') || 'EN'); setLang(saved); langBtn.addEventListener('click', ()=>{ const next = (localStorage.getItem('lang') || 'EN') === 'EN' ? 'TH' : 'EN'; setLang(next); }); }
    if ('serviceWorker' in navigator){ navigator.serviceWorker.register('sw.js').catch(()=>{}); }
  });
})();
