

function getCart() {
  const cartString = sessionStorage.getItem("cartItems");
  return cartString ? JSON.parse(cartString) : [];
}

function saveCart(cart) {
  sessionStorage.setItem("cartItems", JSON.stringify(cart));
}

function addItemToCart(item) {
  const cart = getCart();
  cart.push(item);
  saveCart(cart);
}

const addCartButtons = document.querySelectorAll(".addCartBtn");

addCartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = {
      name: btn.dataset.name,
      price: btn.dataset.price,
      desc: btn.dataset.desc
    };

    addItemToCart(item);
    alert("Item added.");
  });
});

const viewCartBtn = document.getElementById("viewCartBtn");
const cartModal = document.getElementById("cartModal");
const cartItemsDiv = document.getElementById("cartItems");
const closeCartBtn = document.getElementById("closeCartBtn");

function renderCart() {
  if (!cartItemsDiv) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let html = "<ul>";
  cart.forEach((item) => {
    html += `<li><strong>${item.name}</strong> - $${item.price}<br>${item.desc}</li>`;
  });
  html += "</ul>";

  cartItemsDiv.innerHTML = html;
}

if (viewCartBtn && cartModal) {
  viewCartBtn.addEventListener("click", () => {
    renderCart();
    cartModal.style.display = "block";
  });
}

if (closeCartBtn && cartModal) {
  closeCartBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
  });
}

const clearCartBtn = document.getElementById("clearCartBtn");

if (clearCartBtn) {
  clearCartBtn.addEventListener("click", () => {
    sessionStorage.removeItem("cartItems");
    renderCart();
    alert("Cart cleared.");
  });
}

const processOrderBtn = document.getElementById("processOrderBtn");

if (processOrderBtn) {
  processOrderBtn.addEventListener("click", () => {
    sessionStorage.removeItem("cartItems");
    renderCart();
    alert("Thank you for your order.");
  });
}


const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      order: document.getElementById("order").value.trim()
    };

    localStorage.setItem("customOrder", JSON.stringify(data));

    alert(localStorage.getItem("customOrder"));

    contactForm.reset();
  });
}


const subscribeBtn = document.getElementById("subscribeBtn");

if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    alert("Thank you for subscribing.");
  });
}
