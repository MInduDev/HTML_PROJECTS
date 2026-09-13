// Product information used to build the shop
const products = [
  { id: 1, 
    name: 'Classic Sitar', 
    category: 'Indian Classical', 
    price: 12500, 
    rating: '4.9', 
    image: '/img/Classic_Sitar.png' },
  
  { id: 2, 
    name: 'Sheesham Tabla Set', 
    category: 'Percussion', 
    price: 9800, 
    rating: '4.8', 
    image: '/img/Sheesham_Tabla_Set.png' },

  { id: 3, 
    name: 'Dreadnought Guitar', 
    category: 'Strings', 
    price: 14500, 
    rating: '4.7', 
    image: '/img/Dreadnought_Guitar.png' },

  { id: 4, 
    name: 'Bamboo Bansuri', 
    category: 'Wind Instruments', 
    price: 1850, 
    rating: '4.8', 
    image: '/img/Bamboo_Bansuri.png' },

  { id: 5, 
    name: 'Concert Harmonium', 
    category: 'Indian Classical', 
    price: 16800, 
    rating: '4.9', 
    image: '/img/Concert_Harmonium.png' },

  { id: 6, 
    name: 'Studio Keyboard', 
    category: 'Keyboards', 
    price: 21900, 
    rating: '4.6', 
    image: '/img/Studio_Keyboard.png' },

  { id: 7, 
    name: 'Artist Violin', 
    category: 'Strings', 
    price: 11200, 
    rating: '4.7', 
    image: '/img/Artist_Violin.png' },

  { id: 8, 
    name: 'Cedar Cajón', 
    category: 'Percussion', 
    price: 6700, 
    rating: '4.6', 
    image: '/img/Cedar_Cajón.png' }
];

const categories = [
  { name: 'Indian Classical', icon: 'bi-music-note-list', count: 'Sitar, tabla & more' }, { name: 'Strings', icon: 'bi-guitar', count: 'Guitars, violins & more' },
  { name: 'Percussion', icon: 'bi-circle', count: 'Rhythm begins here' }, { name: 'Wind Instruments', icon: 'bi-wind', count: 'Flutes and beyond' },
  { name: 'Keyboards', icon: 'bi-keyboard', count: 'Keys for every stage' }, { name: 'Accessories', icon: 'bi-box-seam', count: 'The finishing touch' }
];

let cart = JSON.parse(localStorage.getItem('raagbazaarCart')) || [];
let wishlist = [];

const productGrid = document.getElementById('productGrid');
const cartItems = document.getElementById('cartItems');
const money = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

// Build category cards
function renderCategories() {
  const categoryGrid = document.getElementById('categoryGrid');
  categories.forEach(function (category) {
    const column = document.createElement('div');
    column.className = 'col-6 col-md-4 col-lg-2';
    column.innerHTML = '<a href="#shop" class="category-card" data-category="' + category.name + '"><i class="bi ' + category.icon + '"></i><div><h3>' + category.name + '</h3><span>' + category.count + '</span></div></a>';
    categoryGrid.appendChild(column);
  });
}

// Show products based on the active filters
function renderProducts() {
  const searchText = document.getElementById('searchInput').value.toLowerCase();
  const selectedCategory = document.getElementById('categoryFilter').value;
  const selectedPrice = document.getElementById('priceFilter').value;
  const sortValue = document.getElementById('sortFilter').value;
  let filteredProducts = products.filter(function (product) {
    const matchingText = product.name.toLowerCase().includes(searchText) || product.category.toLowerCase().includes(searchText);
    const matchingCategory = selectedCategory === 'All' || product.category === selectedCategory;
    let matchingPrice = true;
    if (selectedPrice === 'under5000') matchingPrice = product.price < 5000;
    if (selectedPrice === '5000to15000') matchingPrice = product.price >= 5000 && product.price <= 15000;
    if (selectedPrice === 'over15000') matchingPrice = product.price > 15000;
    return matchingText && matchingCategory && matchingPrice;
  });
  if (sortValue === 'name') filteredProducts.sort(function (a, b) { return a.name.localeCompare(b.name); });
  if (sortValue === 'low') filteredProducts.sort(function (a, b) { return a.price - b.price; });
  if (sortValue === 'high') filteredProducts.sort(function (a, b) { return b.price - a.price; });
  productGrid.innerHTML = '';
  document.getElementById('resultCount').textContent = filteredProducts.length + ' instruments';
  if (filteredProducts.length === 0) { productGrid.innerHTML = '<p class="no-results">No instruments found. Try a different search.</p>'; return; }
  filteredProducts.forEach(function (product) {
    const column = document.createElement('div');
    const isSaved = wishlist.includes(product.id) ? 'active' : '';
    column.className = 'col-sm-6 col-lg-3';
    column.innerHTML = '<article class="product-card"><div class="product-image"><button class="wish-button ' + isSaved + '" data-wish="' + product.id + '" aria-label="Save ' + product.name + '"><i class="bi bi-heart' + (isSaved ? '-fill' : '') + '"></i></button><img src="' + product.image + '" alt="' + product.name + '"></div><div class="product-info"><h3>' + product.name + '</h3><div class="d-flex justify-content-between"><span class="product-category">' + product.category + '</span><span class="rating"><i class="bi bi-star-fill"></i> ' + product.rating + '</span></div><div class="product-bottom"><strong class="product-price">' + money.format(product.price) + '</strong><button class="add-button" data-id="' + product.id + '">Add to bag +</button></div></div></article>';
    productGrid.appendChild(column);
  });
}

// Save one product to the shopping cart
function addToCart(id) {
  const foundItem = cart.find(function (item) { return item.id === id; });
  if (foundItem) foundItem.quantity += 1;
  else cart.push({ id: id, quantity: 1 });
  saveCart();
}

function saveCart() { localStorage.setItem('raagbazaarCart', JSON.stringify(cart)); updateCart(); }

// Update the shopping cart panel and count
function updateCart() {
  let total = 0;
  let quantity = 0;
  cartItems.innerHTML = '';
  if (cart.length === 0) cartItems.innerHTML = '<div class="empty-cart"><i class="bi bi-bag"></i>Your bag is waiting for its first note.</div>';
  cart.forEach(function (item) {
    const product = products.find(function (currentProduct) { return currentProduct.id === item.id; });
    total += product.price * item.quantity;
    quantity += item.quantity;
    const cartRow = document.createElement('div');
    cartRow.className = 'cart-item';
    cartRow.innerHTML = '<img src="' + product.image + '" alt="' + product.name + '"><div><h4>' + product.name + '</h4><p>' + money.format(product.price) + '</p><div class="quantity"><button data-change="-1" data-id="' + product.id + '">−</button><span>' + item.quantity + '</span><button data-change="1" data-id="' + product.id + '">+</button></div></div><button class="remove-item" data-remove="' + product.id + '" aria-label="Remove item"><i class="bi bi-x-lg"></i></button>';
    cartItems.appendChild(cartRow);
  });
  document.getElementById('cartCount').textContent = quantity;
  document.getElementById('cartTotal').textContent = money.format(total);
}

function changeQuantity(id, change) {
  const item = cart.find(function (currentItem) { return currentItem.id === id; });
  item.quantity += change;
  if (item.quantity <= 0) cart = cart.filter(function (currentItem) { return currentItem.id !== id; });
  saveCart();
}

// Read theme preference and switch it when requested
function setTheme(theme) {
  const darkMode = theme === 'dark';
  document.body.classList.toggle('dark-theme', darkMode);
  document.querySelector('#themeToggle i').className = darkMode ? 'bi bi-sun' : 'bi bi-moon-stars';
  document.querySelector('#themeToggle span').textContent = darkMode ? 'Light' : 'Dark';
  localStorage.setItem('raagbazaarTheme', theme);
}

function fillCategoryFilter() {
  const categoryFilter = document.getElementById('categoryFilter');
  categories.slice(0, 5).forEach(function (category) { categoryFilter.innerHTML += '<option value="' + category.name + '">' + category.name + '</option>'; });
}

renderCategories(); fillCategoryFilter(); renderProducts(); updateCart();
setTheme(localStorage.getItem('raagbazaarTheme') || 'light');

document.getElementById('themeToggle').addEventListener('click', function () { setTheme(document.body.classList.contains('dark-theme') ? 'light' : 'dark'); });
document.querySelectorAll('#searchInput, #categoryFilter, #priceFilter, #sortFilter').forEach(function (filter) { filter.addEventListener('input', renderProducts); filter.addEventListener('change', renderProducts); });
document.getElementById('categoryGrid').addEventListener('click', function (event) { const card = event.target.closest('[data-category]'); if (card) { document.getElementById('categoryFilter').value = card.dataset.category; renderProducts(); } });
productGrid.addEventListener('click', function (event) { const addButton = event.target.closest('[data-id]'); const wishButton = event.target.closest('[data-wish]'); if (addButton) addToCart(Number(addButton.dataset.id)); if (wishButton) { const id = Number(wishButton.dataset.wish); wishlist = wishlist.includes(id) ? wishlist.filter(function (savedId) { return savedId !== id; }) : wishlist.concat(id); renderProducts(); } });
cartItems.addEventListener('click', function (event) { const quantityButton = event.target.closest('[data-change]'); const removeButton = event.target.closest('[data-remove]'); if (quantityButton) changeQuantity(Number(quantityButton.dataset.id), Number(quantityButton.dataset.change)); if (removeButton) { cart = cart.filter(function (item) { return item.id !== Number(removeButton.dataset.remove); }); saveCart(); } });
