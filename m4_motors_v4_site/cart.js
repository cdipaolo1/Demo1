
const cartBtn = document.getElementById('cart-btn');
const cartModalEl = document.getElementById('cart-modal');
const cartItemsEl = document.getElementById('cart-items');
const cartCountEl = document.getElementById('cart-count');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const addButtons = document.querySelectorAll('.add-cart');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
  cartCountEl.textContent = cart.length;
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
  cartTotalEl.textContent = total.toLocaleString();
  localStorage.setItem('cart', JSON.stringify(cart));
}

addButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const product = {
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: parseFloat(btn.dataset.price)
    };
    cart.push(product);
    updateCartDisplay();
  });
});

cartBtn.addEventListener('click', () => {
  updateCartDisplay();
  const modal = new bootstrap.Modal(cartModalEl);
  modal.show();
});

checkoutBtn.addEventListener('click', () => {
  alert('Checkout not available in this demo.');
});
