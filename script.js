const products =  [
  { name: "mango", category: "fruits", price: 3.5, image: "images/Mango.png" },
  { name: "Grapes", category: "fruits", price: 3.8, image: "images/grapes.jpg" },
  { name: "Watermelon", category: "fruits", price: 5, image: "images/watermelon.jpg" },
  { name: "Cucumber", category: "vegetables", price: 1.1, image: "images/cucumber.jpg" },
  { name: "Onion", category: "vegetables", price: 0.9, image: "images/onion.jpg" },
  { name: "Strawberry", category: "fruits", price: 1.3, image: "images/Strawberry.jpg" },
  { name: "Spinach", category: "vegetables", price: 1.7, image: "images/spinach.jpg" },
  { name: "Pepper", category: "vegetables", price: 2, image: "images/pepper.jpg" },
  { name: "Kiwi", category: "fruits", price: 2.8, image: "images/kiwi.jpg" },
    { name: "Corrot", category: "vegetables", price: 2.8, image: "images/Corrot.png" },
];
const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const cartCount = document.getElementById("cart-count");

let cart = 0;

function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>Category: ${p.category}</p>
        <p>Price: $${p.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      </div>`;
  });
}

function addToCart() {
  cart++;
  cartCount.textContent = cart;
}

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const category = categorySelect.value;
  const maxPrice = parseFloat(priceRange.value);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchText) &&
    (category === "all" || p.category === category) &&
    p.price <= maxPrice
  );

  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);
priceRange.addEventListener("input", () => {
  priceValue.textContent = `Max: $${priceRange.value}`;
  filterProducts();
});

displayProducts(products);
