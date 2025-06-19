
const cartBtn = document.querySelector('[data-bs-target="#cartModal"]');
const cartCount = document.getElementById('cart-count');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
  cartCount.textContent = cart.length;
  cartItemsEl.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = item.name;
    const span = document.createElement('span');
    span.textContent = '$' + item.price.toLocaleString();
    li.appendChild(span);
    cartItemsEl.appendChild(li);
    total += item.price;
  });
  cartTotalEl.textContent = '$' + total.toLocaleString();
  localStorage.setItem('cart', JSON.stringify(cart));
}

document.querySelectorAll('.add-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = {
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: parseFloat(btn.dataset.price)
    };
    cart.push(product);
    updateCart();
  });
});

checkoutBtn.addEventListener('click', () => {
  alert('Checkout not available in demo.');
});

// Initialize cart display
updateCart();
