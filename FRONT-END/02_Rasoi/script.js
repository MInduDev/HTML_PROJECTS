/* =========================================================
   DABBA DASH - simple JavaScript
   1. Food data  2. Theme  3. Menu and filters
   4. Shopping cart  5. Checkout  6. Tracking
   ========================================================= */

/* 1. Exactly 60 food items: 10 items in each category. */
const MENU = [
  /* Indian */
  { id: 1, name: "Butter Chicken", category: "Indian", price: 249, image: "Indian/Butter-Chicken.png", tag: "Bestseller", type: "Non-Veg", time: "25 min", rating: 4.8, description: "Creamy tomato gravy with tender tandoori chicken." },
  { id: 2, name: "Chicken Biryani", category: "Indian", price: 299, image: "Indian/Chicken_Biriyani.png", tag: "Bestseller", type: "Non-Veg", time: "30 min", rating: 4.7, description: "Fragrant basmati rice layered with spiced chicken." },
  { id: 3, name: "Paneer Tikka Wrap", category: "Indian", price: 149, image: "Indian/Paneer-Tikka-Wrap.png", tag: "Veg", type: "Veg", time: "15 min", rating: 4.6, description: "Smoky paneer tikka wrapped with fresh salad and chutney." },
  { id: 4, name: "Hakka Noodles", category: "Indian", price: 169, image: "Indian/Hakka-Noodles.png", tag: "Popular", type: "Veg", time: "15 min", rating: 4.4, description: "Wok-tossed noodles with crisp vegetables and sauces." },
  { id: 5, name: "Paneer Butter Masala", category: "Indian", price: 229, image: "Indian/paneer-butter-masala.png", tag: "Veg", type: "Veg", time: "20 min", rating: 4.6, description: "Soft paneer cubes in a rich buttery tomato gravy." },
  { id: 6, name: "Dal Makhani", category: "Indian", price: 199, image: "Indian/dal-makhani.png", tag: "Classic", type: "Veg", time: "20 min", rating: 4.5, description: "Slow-cooked black lentils finished with butter and cream." },
  { id: 7, name: "Chicken Tikka", category: "Indian", price: 259, image: "Indian/chicken-tikka.png", tag: "Grilled", type: "Non-Veg", time: "25 min", rating: 4.7, description: "Char-grilled chicken pieces marinated in Indian spices." },
  { id: 8, name: "Chole Bhature", category: "Indian", price: 149, image: "Indian/chole-bhature.png", tag: "Popular", type: "Veg", time: "18 min", rating: 4.5, description: "Spicy chickpea curry served with fluffy bhature." },
  { id: 9, name: "Veg Biryani", category: "Indian", price: 199, image: "Indian/veg-biryani.png", tag: "Veg", type: "Veg", time: "25 min", rating: 4.5, description: "Aromatic basmati rice cooked with colourful vegetables." },
  { id: 10, name: "Masala Dosa", category: "Indian", price: 129, image: "Indian/masala-dosa.png", tag: "South Indian", type: "Veg", time: "15 min", rating: 4.6, description: "Crisp dosa filled with spiced potato masala." },

  /* Pizza */
  { id: 11, name: "Margherita Pizza", category: "Pizza", price: 199, image: "Pizza/margherita-pizza.png", tag: "Classic", type: "Veg", time: "18 min", rating: 4.5, description: "Classic pizza with tomato, mozzarella and basil." },
  { id: 12, name: "Veg Tandoori Pizza", category: "Pizza", price: 299, image: "Pizza/veg-tandoori-pizza.png", tag: "Popular", type: "Veg", time: "20 min", rating: 4.6, description: "Tandoori vegetables and cheese on a crisp pizza base." },
  { id: 13, name: "Pepperoni Pizza", category: "Pizza", price: 329, image: "Pizza/pepperoni-pizza.png", tag: "Bestseller", type: "Non-Veg", time: "20 min", rating: 4.6, description: "Loaded with pepperoni, mozzarella and rich pizza sauce." },
  { id: 14, name: "Farmhouse Pizza", category: "Pizza", price: 279, image: "Pizza/farmhouse-pizza.png", tag: "Veg", type: "Veg", time: "20 min", rating: 4.5, description: "Mushroom, capsicum, onion and cheese on a golden crust." },
  { id: 15, name: "Mexican Green Wave Pizza", category: "Pizza", price: 299, image: "Pizza/mexican-green-wave-pizza.png", tag: "Spicy", type: "Veg", time: "20 min", rating: 4.4, description: "Jalapeno, corn, capsicum and Mexican-style seasoning." },
  { id: 16, name: "Paneer Tikka Pizza", category: "Pizza", price: 319, image: "Pizza/paneer-tikka-pizza.png", tag: "Veg", type: "Veg", time: "22 min", rating: 4.6, description: "Tandoori paneer and onions layered over melted cheese." },
  { id: 17, name: "BBQ Chicken Pizza", category: "Pizza", price: 349, image: "Pizza/bbq-chicken-pizza.png", tag: "Non-Veg", type: "Non-Veg", time: "22 min", rating: 4.7, description: "Smoky BBQ chicken, onions and mozzarella." },
  { id: 18, name: "Four Cheese Pizza", category: "Pizza", price: 359, image: "Pizza/four-cheese-pizza.png", tag: "Cheesy", type: "Veg", time: "20 min", rating: 4.7, description: "A rich blend of four creamy cheeses on a crisp base." },
  { id: 19, name: "Capsicum Corn Pizza", category: "Pizza", price: 229, image: "Pizza/capsicum-corn-pizza.png", tag: "Veg", type: "Veg", time: "18 min", rating: 4.4, description: "Sweet corn and crunchy capsicum with mozzarella." },
  { id: 20, name: "Peri Peri Chicken Pizza", category: "Pizza", price: 349, image: "Pizza/peri-peri-chicken-pizza.png", tag: "Spicy", type: "Non-Veg", time: "22 min", rating: 4.6, description: "Spicy peri peri chicken with cheese and herbs." },

  /* Burgers */
  { id: 21, name: "Double Smash Burger", category: "Burgers", price: 219, image: "Burgers/Burger.png", tag: "Popular", type: "Non-Veg", time: "18 min", rating: 4.5, description: "Two juicy smashed patties with cheese and house sauce." },
  { id: 22, name: "Classic Veg Burger", category: "Burgers", price: 129, image: "Burgers/classic-veg-burger.png", tag: "Veg", type: "Veg", time: "15 min", rating: 4.4, description: "Crispy vegetable patty with lettuce and creamy sauce." },
  { id: 23, name: "Crispy Chicken Burger", category: "Burgers", price: 189, image: "Burgers/crispy-chicken-burger.png", tag: "Crispy", type: "Non-Veg", time: "18 min", rating: 4.6, description: "Crunchy chicken fillet, lettuce and creamy mayo." },
  { id: 24, name: "Cheese Burst Burger", category: "Burgers", price: 179, image: "Burgers/cheese-burst-burger.png", tag: "Cheesy", type: "Veg", time: "16 min", rating: 4.5, description: "A juicy veg patty packed with molten cheese." },
  { id: 25, name: "BBQ Chicken Burger", category: "Burgers", price: 229, image: "Burgers/bbq-chicken-burger.png", tag: "BBQ", type: "Non-Veg", time: "18 min", rating: 4.6, description: "Grilled chicken, smoky BBQ sauce and fresh onions." },
  { id: 26, name: "Paneer Burger", category: "Burgers", price: 159, image: "Burgers/paneer-burger.png", tag: "Veg", type: "Veg", time: "16 min", rating: 4.5, description: "Crispy paneer patty with lettuce and mint mayo." },
  { id: 27, name: "Mushroom Swiss Burger", category: "Burgers", price: 199, image: "Burgers/mushroom-swiss-burger.png", tag: "Veg", type: "Veg", time: "18 min", rating: 4.5, description: "Sautéed mushrooms, Swiss cheese and a juicy veg patty." },
  { id: 28, name: "Spicy Aloo Tikki Burger", category: "Burgers", price: 99, image: "Burgers/spicy-aloo-tikki-burger.png", tag: "Budget", type: "Veg", time: "12 min", rating: 4.3, description: "Spiced potato tikki with chutney and crunchy lettuce." },
  { id: 29, name: "Mexican Veg Burger", category: "Burgers", price: 169, image: "Burgers/mexican-veg-burger.png", tag: "Spicy", type: "Veg", time: "16 min", rating: 4.4, description: "Mexican-style veg patty with salsa, jalapeno and cheese." },
  { id: 30, name: "Peri Peri Chicken Burger", category: "Burgers", price: 219, image: "Burgers/peri-peri-chicken-burger.png", tag: "Spicy", type: "Non-Veg", time: "18 min", rating: 4.6, description: "Spicy peri peri chicken fillet with creamy sauce." },

  /* Desserts */
  { id: 31, name: "Chocolate Lava Cake", category: "Desserts", price: 149, image: "Dessserts/Chocolate-Lava-Cake.png", tag: "Sweet", type: "Veg", time: "12 min", rating: 4.8, description: "Warm chocolate cake with a gooey molten centre." },
  { id: 32, name: "Mango Kulfi", category: "Desserts", price: 99, image: "Dessserts/Coolfie.png", tag: "Seasonal", type: "Veg", time: "8 min", rating: 4.7, description: "Creamy Indian kulfi with bright mango flavour." },
  { id: 33, name: "Brownie with Ice Cream", category: "Desserts", price: 179, image: "Dessserts/brownie-with-ice-cream.png", tag: "Popular", type: "Veg", time: "10 min", rating: 4.7, description: "Warm chocolate brownie served with chilled ice cream." },
  { id: 34, name: "Cheesecake", category: "Desserts", price: 199, image: "Dessserts/cheesecake.png", tag: "Creamy", type: "Veg", time: "8 min", rating: 4.6, description: "Silky cheesecake on a buttery biscuit base." },
  { id: 35, name: "Chocolate Mousse", category: "Desserts", price: 129, image: "Dessserts/chocolate-mousse.png", tag: "Chocolate", type: "Veg", time: "8 min", rating: 4.5, description: "Light, airy chocolate mousse with deep cocoa flavour." },
  { id: 36, name: "Gulab Jamun", category: "Desserts", price: 89, image: "Dessserts/gulab-jamun.png", tag: "Indian Sweet", type: "Veg", time: "7 min", rating: 4.6, description: "Soft milk dumplings soaked in fragrant sugar syrup." },
  { id: 37, name: "Rasmalai", category: "Desserts", price: 119, image: "Dessserts/rasmalai.png", tag: "Classic", type: "Veg", time: "7 min", rating: 4.6, description: "Soft chenna dumplings in saffron-cardamom milk." },
  { id: 38, name: "Red Velvet Cake", category: "Desserts", price: 169, image: "Dessserts/red-velvet-cake.png", tag: "Cake", type: "Veg", time: "8 min", rating: 4.5, description: "Moist red velvet sponge layered with cream cheese frosting." },
  { id: 39, name: "Tiramisu", category: "Desserts", price: 229, image: "Dessserts/tiramisu.png", tag: "Italian", type: "Veg", time: "8 min", rating: 4.7, description: "Coffee-soaked sponge layered with mascarpone cream." },
  { id: 40, name: "Belgian Chocolate Sundae", category: "Desserts", price: 189, image: "Dessserts/belgian-chocolate-sundae.png", tag: "Chocolate", type: "Veg", time: "8 min", rating: 4.6, description: "Vanilla ice cream, Belgian chocolate sauce and crunch." },

  /* Healthy */
  { id: 41, name: "Garden Salad", category: "Healthy", price: 129, image: "Healthy/Salad.png", tag: "Fresh", type: "Veg", time: "10 min", rating: 4.5, description: "Crisp greens, cucumber, tomato and colourful vegetables." },
  { id: 42, name: "Fruit Smoothie Bowl", category: "Healthy", price: 179, image: "Healthy/Fruit Smoothie Bowl.png", tag: "Fresh", type: "Veg", time: "10 min", rating: 4.6, description: "Thick fruit smoothie topped with fresh fruit and seeds." },
  { id: 43, name: "Grilled Vegetable Sandwich", category: "Healthy", price: 149, image: "Healthy/grilled-vegetable-sandwich.png", tag: "Light", type: "Veg", time: "12 min", rating: 4.4, description: "Grilled whole-wheat sandwich filled with vegetables." },
  { id: 44, name: "Quinoa Salad", category: "Healthy", price: 199, image: "Healthy/quinoa-salad.png", tag: "Protein", type: "Veg", time: "12 min", rating: 4.5, description: "Fluffy quinoa with fresh vegetables and lemon dressing." },
  { id: 45, name: "Paneer Protein Bowl", category: "Healthy", price: 229, image: "Healthy/paneer-protein-bowl.png", tag: "Protein", type: "Veg", time: "15 min", rating: 4.6, description: "Paneer, grains and vegetables in a balanced bowl." },
  { id: 46, name: "Sprouts Salad", category: "Healthy", price: 99, image: "Healthy/sprouts-salad.png", tag: "Light", type: "Veg", time: "8 min", rating: 4.4, description: "Fresh sprouts tossed with vegetables and lemon." },
  { id: 47, name: "Greek Salad", category: "Healthy", price: 189, image: "Healthy/greek-salad.png", tag: "Fresh", type: "Veg", time: "10 min", rating: 4.5, description: "Cucumber, tomato, olives and feta with herbs." },
  { id: 48, name: "Avocado Toast", category: "Healthy", price: 199, image: "Healthy/avocado-toast.png", tag: "Trending", type: "Veg", time: "10 min", rating: 4.5, description: "Creamy avocado on toasted bread with herbs and seeds." },
  { id: 49, name: "Grilled Chicken Salad", category: "Healthy", price: 249, image: "Healthy/grilled-chicken-salad.png", tag: "Protein", type: "Non-Veg", time: "15 min", rating: 4.7, description: "Lean grilled chicken with greens and fresh vegetables." },
  { id: 50, name: "Fresh Fruit Bowl", category: "Healthy", price: 139, image: "Healthy/fresh-fruit-bowl.png", tag: "Fresh", type: "Veg", time: "8 min", rating: 4.6, description: "A colourful bowl of seasonal fresh-cut fruits." },

  /* Beverages */
  { id: 51, name: "Strawberry Smoothie", category: "Beverages", price: 149, image: "Beverages/strawberry-smoothie.png", tag: "Fresh", type: "Veg", time: "8 min", rating: 4.6, description: "Creamy strawberry smoothie blended fresh to order." },
  { id: 52, name: "Mango Shake", category: "Beverages", price: 119, image: "Beverages/mango-shake.png", tag: "Seasonal", type: "Veg", time: "7 min", rating: 4.6, description: "Thick mango shake made with ripe mangoes." },
  { id: 53, name: "Cold Coffee", category: "Beverages", price: 129, image: "Beverages/cold-coffee.png", tag: "Popular", type: "Veg", time: "7 min", rating: 4.5, description: "Chilled coffee blended smooth with milk and ice." },
  { id: 54, name: "Chocolate Milkshake", category: "Beverages", price: 149, image: "Beverages/chocolate-milkshake.png", tag: "Chocolate", type: "Veg", time: "7 min", rating: 4.6, description: "Rich chocolate milkshake topped with chocolate drizzle." },
  { id: 55, name: "Fresh Lime Soda", category: "Beverages", price: 79, image: "Beverages/fresh-lime-soda.png", tag: "Refreshing", type: "Veg", time: "5 min", rating: 4.4, description: "Zesty lime, chilled soda and a touch of sweetness." },
  { id: 56, name: "Masala Chai", category: "Beverages", price: 49, image: "Beverages/masala-chai.png", tag: "Classic", type: "Veg", time: "5 min", rating: 4.6, description: "Hot Indian tea brewed with warming spices." },
  { id: 57, name: "Iced Tea", category: "Beverages", price: 99, image: "Beverages/iced-tea.png", tag: "Chilled", type: "Veg", time: "6 min", rating: 4.4, description: "Refreshing black tea served cold with lemon." },
  { id: 58, name: "Oreo Milkshake", category: "Beverages", price: 159, image: "Beverages/oreo-milkshake.png", tag: "Popular", type: "Veg", time: "8 min", rating: 4.7, description: "Creamy cookie milkshake blended with Oreo biscuits." },
  { id: 59, name: "Watermelon Juice", category: "Beverages", price: 89, image: "Beverages/watermelon-juice.png", tag: "Fresh", type: "Veg", time: "5 min", rating: 4.5, description: "Naturally sweet chilled watermelon juice." },
  { id: 60, name: "Blueberry Smoothie", category: "Beverages", price: 169, image: "Beverages/blueberry-smoothie.png", tag: "Fresh", type: "Veg", time: "8 min", rating: 4.6, description: "Creamy blueberry smoothie with a bright fruity finish." }
];

const CATEGORY_INFO = {
  Indian: "Comforting Indian favourites, from rich curries to classic street-style plates.",
  Pizza: "Freshly baked pizzas loaded with cheese, vegetables, chicken and bold flavours.",
  Burgers: "Juicy, crispy and cheesy burgers made for a satisfying bite.",
  Desserts: "Sweet treats, cakes and classic Indian desserts for the perfect finish.",
  Healthy: "Fresh, balanced and wholesome choices for lighter everyday meals.",
  Beverages: "Refreshing smoothies, shakes, tea and chilled drinks to sip with your meal."
};

const ORDER_STAGES = ["Order Placed", "Restaurant Confirmed", "Preparing Your Food", "Ready for Pickup", "Out for Delivery", "Delivered"];
let selectedCategory = "";
let cart = {};
let currentOrder = null;

const $ = function (selector) { return document.querySelector(selector); };

/* 2. Theme switcher. */
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  $("#themeIcon").textContent = theme === "dark" ? "☀" : "☼";
  try { localStorage.setItem("rasoiTheme", theme); } catch (error) {}
}

$("#themeBtn").addEventListener("click", function () {
  const newTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});

/* 3. Category menu, search, filters and sorting. */
function updateMenuHeading() {
  let title = "Select a Category";
  let description = "Choose any category above to open its 10-item menu.";
  let count = "6 categories available";

  if (selectedCategory === "All") {
    title = "Search Results";
    description = "Showing dishes from all categories.";
    count = MENU.length + " dishes available";
  } else if (selectedCategory) {
    title = selectedCategory + " Menu";
    description = CATEGORY_INFO[selectedCategory];
    count = "10 dishes available";
  }

  $("#menuTitle").textContent = title;
  $("#menuDescription").textContent = description;
  $("#menuCount").textContent = count;
  $("#menuTitleLightText").textContent = title;
  $("#menuDescriptionLight").textContent = description;
  $("#menuCountLight").textContent = count;
  $("#menuIntroTitle").innerHTML = title === "Select a Category" ? "Explore<br>Menu" : title.replace(" Menu", "<br>Menu");
}

function renderMenu() {
  const searchText = $("#menuSearch").value.trim().toLowerCase();
  const typeFilter = $("#foodType").value;
  const sortValue = $("#sortMenu").value;

  let dishes = MENU.filter(function (dish) {
    const matchesCategory = selectedCategory === "All" || dish.category === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchText);
    const matchesType = typeFilter === "All" || dish.type === typeFilter;
    return matchesCategory && matchesSearch && matchesType;
  });

  if (sortValue === "low") dishes.sort(function (a, b) { return a.price - b.price; });
  if (sortValue === "high") dishes.sort(function (a, b) { return b.price - a.price; });
  if (sortValue === "rating") dishes.sort(function (a, b) { return b.rating - a.rating; });

  if (!selectedCategory) {
    $("#productGrid").innerHTML = '<div class="menu-empty-state"><strong>Pick a category above</strong><span>Indian · Pizza · Burgers · Desserts · Healthy · Beverages</span></div>';
    $("#noResults").hidden = true;
    updateMenuHeading();
    return;
  }

  $("#productGrid").innerHTML = dishes.map(function (dish) {
    const quantity = cart[dish.id] || 0;
    const quantityControls = quantity > 0
      ? '<div class="card-quantity"><button type="button" data-card-change="-1" data-id="' + dish.id + '">−</button><b>' + quantity + '</b><button type="button" data-card-change="1" data-id="' + dish.id + '">+</button></div>'
      : '<button class="add-btn" data-add="' + dish.id + '" type="button">Add +</button>';

    return '<article class="product-card">' +
      '<div class="product-photo"><img src="assets/' + dish.image + '" alt="' + dish.name + '" loading="lazy"><span class="product-tag">' + dish.tag + '</span></div>' +
      '<div class="product-info">' +
        '<h3>' + dish.name + '</h3>' +
        '<p class="product-description">' + dish.description + '</p>' +
        '<div class="product-meta"><span class="food-type ' + (dish.type === "Veg" ? "veg" : "non-veg") + '">' + dish.type + '</span><span>⏱ ' + dish.time + '</span></div>' +
        '<div class="product-rating"><span>★</span> ' + dish.rating.toFixed(1) + ' <small>· Demo rating</small></div>' +
        '<div class="product-bottom"><span class="product-price">₹' + dish.price + '</span>' + quantityControls + '</div>' +
      '</div>' +
    '</article>';
  }).join("");

  $("#noResults").hidden = dishes.length > 0;
  updateMenuHeading();
}

function setCategory(category) {
  selectedCategory = category;
  $("#menuSearch").value = "";
  $("#foodType").value = "All";
  $("#sortMenu").value = "popular";
  document.querySelectorAll(".category-card").forEach(function (button) {
    button.classList.toggle("active", button.dataset.category === category);
  });
  renderMenu();
}

document.querySelectorAll(".category-card").forEach(function (button) {
  button.addEventListener("click", function () {
    setCategory(button.dataset.category);
    $("#menu").scrollIntoView({ behavior: "smooth" });
  });
});

$("#backToCategories").addEventListener("click", function () {
  $("#menuSearch").value = "";
  $("#foodType").value = "All";
  $("#sortMenu").value = "popular";
  selectedCategory = "";
  document.querySelectorAll(".category-card").forEach(function (button) { button.classList.remove("active"); });
  renderMenu();
  $("#categories").scrollIntoView({ behavior: "smooth" });
});

$("#menuSearch").addEventListener("input", renderMenu);
$("#foodType").addEventListener("change", renderMenu);
$("#sortMenu").addEventListener("change", renderMenu);
$("#clearFilters").addEventListener("click", function () {
  $("#menuSearch").value = "";
  $("#foodType").value = "All";
  $("#sortMenu").value = "popular";
  renderMenu();
});

$("#navSearch").addEventListener("input", function () {
  $("#menuSearch").value = this.value;
  setCategory("All");
  renderMenu();
  if (this.value.length > 0) $("#menu").scrollIntoView({ behavior: "smooth" });
});

$("#deliveryForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const location = $("#deliveryLocation").value.trim();
  if (!location) {
    showToast("Please enter your delivery location.");
    $("#deliveryLocation").focus();
    return;
  }
  showToast("Showing menu for " + location + " (demo).");
  $("#menu").scrollIntoView({ behavior: "smooth" });
});

/* 4. Shopping cart. */
function loadCart() {
  try { cart = JSON.parse(localStorage.getItem("dabbaCart")) || {}; } catch (error) { cart = {}; }
}

function saveCart() {
  try { localStorage.setItem("dabbaCart", JSON.stringify(cart)); } catch (error) {}
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
  renderMenu();
  showToast("Added to your cart.");
}

function changeQuantity(id, amount) {
  cart[id] = (cart[id] || 0) + amount;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
  renderMenu();
}

function getCartDetails() {
  let subtotal = 0;
  let count = 0;
  const items = [];
  Object.keys(cart).forEach(function (id) {
    const dish = MENU.find(function (item) { return item.id === Number(id); });
    if (!dish || cart[id] <= 0) return;
    subtotal += dish.price * cart[id];
    count += cart[id];
    items.push({ dish: dish, quantity: cart[id] });
  });
  const delivery = subtotal > 0 ? 40 : 0;
  const tax = Math.round(subtotal * 0.05);
  return { items: items, subtotal: subtotal, delivery: delivery, tax: tax, total: subtotal + delivery + tax, count: count };
}

function renderCart() {
  const details = getCartDetails();
  $("#cartCount").textContent = details.count;
  $("#cartTitleCount").textContent = "(" + details.count + ")";
  $("#cartItems").innerHTML = details.items.length ? details.items.map(function (item) {
    return '<div class="cart-row"><img src="assets/' + item.dish.image + '" alt="' + item.dish.name + '"><div><h3>' + item.dish.name + '</h3><p>₹' + item.dish.price + '</p><div class="quantity"><button type="button" data-change="-1" data-id="' + item.dish.id + '">−</button><b>' + item.quantity + '</b><button type="button" data-change="1" data-id="' + item.dish.id + '">+</button></div></div><button class="remove-item" type="button" data-remove="' + item.dish.id + '" aria-label="Remove item">✕</button></div>';
  }).join("") : '<div class="empty-cart"><span>🛍</span>Your cart is empty.<br>Add something delicious!</div>';

  $("#subtotal").textContent = "₹" + details.subtotal;
  $("#deliveryFee").textContent = "₹" + details.delivery;
  $("#tax").textContent = "₹" + details.tax;
  $("#grandTotal").textContent = "₹" + details.total;
  $("#checkoutButton").disabled = details.count === 0;
  $("#checkoutTotal").textContent = "₹" + details.total;
}

$("#productGrid").addEventListener("click", function (event) {
  const addButton = event.target.closest("[data-add]");
  const quantityButton = event.target.closest("[data-card-change]");
  if (addButton) addToCart(Number(addButton.dataset.add));
  if (quantityButton) changeQuantity(Number(quantityButton.dataset.id), Number(quantityButton.dataset.cardChange));
});

$("#cartItems").addEventListener("click", function (event) {
  const quantityButton = event.target.closest("[data-change]");
  const removeButton = event.target.closest("[data-remove]");
  if (quantityButton) changeQuantity(Number(quantityButton.dataset.id), Number(quantityButton.dataset.change));
  if (removeButton) {
    delete cart[removeButton.dataset.remove];
    saveCart();
    renderCart();
    renderMenu();
  }
});

/* 5. Checkout form and demo order confirmation. */
const checkoutModal = new bootstrap.Modal($("#checkoutModal"));
const confirmationModal = new bootstrap.Modal($("#confirmationModal"));
const trackingModal = new bootstrap.Modal($("#trackingModal"));
const cartPanel = bootstrap.Offcanvas.getOrCreateInstance($("#cartPanel"));

$("#checkoutButton").addEventListener("click", function () {
  if (getCartDetails().count === 0) return;
  $("#checkoutTotal").textContent = $("#grandTotal").textContent;
  cartPanel.hide();
  checkoutModal.show();
});

$("#checkoutForm").addEventListener("submit", function (event) {
  event.preventDefault();
  if (!this.reportValidity()) return;
  const details = getCartDetails();
  const formData = new FormData(this);
  currentOrder = { id: "DD" + Date.now().toString().slice(-6), name: formData.get("name"), address: formData.get("address"), items: details.items, total: details.total, placedAt: new Date() };
  $("#confirmationText").textContent = "Order " + currentOrder.id + " is confirmed for " + currentOrder.name + ".";
  cart = {};
  saveCart();
  renderCart();
  this.reset();
  checkoutModal.hide();
  confirmationModal.show();
});

$("#trackOrderButton").addEventListener("click", function () { confirmationModal.hide(); showTracking(); });

function showTracking() {
  if (!currentOrder) { showToast("Place a demo order first to see tracking."); return; }
  $("#trackingOrderId").textContent = "Order ID: " + currentOrder.id;
  const stageIndex = 2;
  $("#trackingList").innerHTML = ORDER_STAGES.map(function (stage, index) {
    return '<div class="track-stage ' + (index <= stageIndex ? "done" : "") + '">' + stage + '</div>';
  }).join("");
  $("#trackingStatus").textContent = "Current status: " + ORDER_STAGES[stageIndex] + " · Simulated demo tracking";
  trackingModal.show();
}

$("#footerTrack").addEventListener("click", function (event) { event.preventDefault(); showTracking(); });
$("#offerButton").addEventListener("click", function () { $("#menu").scrollIntoView({ behavior: "smooth" }); });
$("#newsletterForm").addEventListener("submit", function (event) { event.preventDefault(); $("#newsletterMessage").textContent = "Thanks! Newsletter signup is a demo."; this.reset(); });

const toast = new bootstrap.Toast($("#siteToast"), { delay: 2200 });
function showToast(message) { $("#toastText").textContent = message; toast.show(); }

/* Start with saved theme, cart and the default menu. */
loadCart();
renderMenu();
renderCart();
