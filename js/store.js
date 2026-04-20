const products = [
  { id: 1, name: 'Premium Shampoo', price: 135, category: 'toiletries', image: 'assets/EKTX0444.JPG', desc: '250ml luxury shampoo' },
  { id: 2, name: 'Body Lotion', price: 120, category: 'toiletries', image: 'assets/body-lotion.jpg', desc: 'Moisturizing lotion' },
  { id: 3, name: 'Soap Set', price: 150, category: 'toiletries', image: 'assets/soap-set.jpg', desc: '3-piece premium soap' },
  { id: 4, name: 'Luxury Slippers', price: 225, category: 'comfort', image: 'assets/DVA05553.JPG', desc: 'Soft & comfortable' },
  { id: 5, name: 'Extra Pillow', price: 300, category: 'comfort', image: 'assets/extra-pillow.jpg', desc: 'Memory foam pillow' },
  { id: 6, name: 'Cozy Throw', price: 375, category: 'comfort', image: 'assets/cozy-throw.jpg', desc: 'Soft blanket' },
  { id: 7, name: 'USB-C Adapter', price: 195, category: 'connectivity', image: 'assets/usb-adapter.jpg', desc: 'Fast charging' },
  { id: 8, name: 'Multi-Charger', price: 255, category: 'connectivity', image: 'assets/multi-charger.jpg', desc: '4-port charger' },
  { id: 9, name: 'Cable Kit', price: 180, category: 'connectivity', image: 'assets/connectivity.svg', desc: '5 cable set' },
  { id: 10, name: 'Chocolate Box', price: 210, category: 'snacks', image: 'assets/minibar.svg', desc: 'Assorted chocolates' },
  { id: 11, name: 'Nuts Mix', price: 150, category: 'snacks', image: 'assets/minibar.svg', desc: 'Healthy mix' },
  { id: 12, name: 'Coffee & Tea', price: 180, category: 'snacks', image: 'assets/minibar.svg', desc: 'Premium blends' },
  { id: 13, name: 'Laundry Bag', price: 90, category: 'laundry', image: 'assets/laundry.svg', desc: 'Durable bag' },
  { id: 14, name: 'Stain Kit', price: 135, category: 'laundry', image: 'assets/laundry.svg', desc: 'Quick stain removal' },
  { id: 15, name: 'Iron Kit', price: 105, category: 'laundry', image: 'assets/laundry.svg', desc: 'Mini iron & supplies' },
  { id: 16, name: 'First Aid Kit', price: 240, category: 'wellness', image: 'assets/wellness.svg', desc: 'Complete kit' },
  { id: 17, name: 'Sleep Mask', price: 120, category: 'wellness', image: 'assets/wellness.svg', desc: 'Comfortable mask' },
  { id: 18, name: 'Sanitizer Set', price: 150, category: 'wellness', image: 'assets/wellness.svg', desc: '3-piece set' }
];

let cart = [];
let currentFilter = 'all';

function init() {
  renderProducts(products);
  setupFilterButtons();
  setupCartListener();
  updateCartCount();
  document.getElementById('year').textContent = new Date().getFullYear();
}

function renderProducts(items) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = items.map(product => `
    <div class="product-card" data-category="${product.category}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-desc">${product.desc}</div>
        <div class="product-price">GHS ${product.price}</div>
        <div class="product-qty">
          <input type="number" class="qty-input" value="1" min="1" max="99" data-product-id="${product.id}">
          <button class="add-to-cart" data-product-id="${product.id}">Add</button>
        </div>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', addToCart);
  });
}

function addToCart(e) {
  const productId = parseInt(e.target.dataset.productId);
  const product = products.find(p => p.id === productId);
  const qty = parseInt(e.target.parentElement.querySelector('.qty-input').value) || 1;
  
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  
  updateCartCount();
  renderCart();
  alert(`${qty}x ${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartCount();
  renderCart();
}

function updateQty(productId, newQty) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.qty = Math.max(1, newQty);
    renderCart();
  }
}

function renderCart() {
  const container = document.getElementById('cartContainer');
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty</p>
        <a class="btn-primary" href="#shop">Continue Shopping</a>
      </div>
    `;
    return;
  }
  
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const html = `
    <div class="cart-items">
      ${cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">GHS ${item.price} each</div>
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="updateQty(${item.id}, ${item.qty - 1})">−</button>
              <span>${item.qty}</span>
              <button class="qty-btn" onclick="updateQty(${item.id}, ${item.qty + 1})">+</button>
            </div>
          </div>
          <div>
            <div class="cart-item-price">GHS ${item.price * item.qty}</div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="cart-summary">
      ${cart.map(item => `<div class="summary-row"><span>${item.qty}x ${item.name}</span><span>GHS ${item.price * item.qty}</span></div>`).join('')}
      <div class="summary-total">
        <span>Total:</span>
        <span>GHS ${total}</span>
      </div>
      <button class="checkout-btn" onclick="openPaymentModal()">Proceed to Checkout</button>
    </div>
  `;
  container.innerHTML = html;
}

function checkout() {
  if (cart.length === 0) {
    alert('Cart is empty');
    return;
  }
  
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemsList = cart.map(item => `${item.qty}x ${item.name} (GHS ${item.price * item.qty})`).join('\n');
  const message = `Hi Guesture_Haven! I'd like to order:\n\n${itemsList}\n\nTotal: GHS ${total}\n\nPlease confirm.`;
  
  const whatsappUrl = `https://wa.me/0506993828?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

function setupFilterButtons() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      currentFilter = e.target.dataset.filter;
      const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
      renderProducts(filtered);
    });
  });
  
  document.getElementById('whatsappCheckout').addEventListener('click', (e) => {
    e.preventDefault();
    checkout();
  });
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelector('.cart-count').textContent = count;
}

function openPaymentModal() {
  if (cart.length === 0) {
    alert('Cart is empty');
    return;
  }
  document.getElementById('paymentModal').style.display = 'flex';
}

function closePaymentModal() {
  document.getElementById('paymentModal').style.display = 'none';
}

function initPaystack() {
  if (cart.length === 0) {
    alert('Cart is empty');
    return;
  }
  
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const amountInKobo = total * 100; // Paystack uses kobo (smallest unit)
  const itemsList = cart.map(item => `${item.qty}x ${item.name}`).join(', ');
  
  // Initialize Paystack payment
  const handler = PaystackPop.setup({
    key: 'pk_live_YOUR_PAYSTACK_KEY_HERE', // Replace with actual Paystack public key
    email: 'guesturehaven@gmail.com',
    amount: amountInKobo,
    currency: 'GHS',
    ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generate unique reference
    onClose: function() {
      alert('Payment window closed.');
    },
    onSuccess: function(response) {
      alert('Payment successful! Reference: ' + response.reference);
      // Here you would typically send the order to your backend
      const orderDetails = `Payment received!\n\nReference: ${response.reference}\nItems: ${itemsList}\nTotal: GHS ${total}`;
      const whatsappUrl = `https://wa.me/0506993828?text=${encodeURIComponent('Hi Guesture_Haven! ' + orderDetails)}`;
      window.open(whatsappUrl, '_blank');
      cart = [];
      updateCartCount();
      renderCart();
      closePaymentModal();
    }
  });
  handler.openIframe();
}

function checkoutWhatsApp() {
  closePaymentModal();
  checkout();
}

function setupCartListener() {
  renderCart();
}

function submitSuggestion(event) {
  event.preventDefault();
  
  const name = document.getElementById('suggestionName').value;
  const email = document.getElementById('suggestionEmail').value;
  const phone = document.getElementById('suggestionPhone').value;
  const category = document.getElementById('suggestionCategory').value;
  const message = document.getElementById('suggestionMessage').value;
  
  const suggestionText = `Hi Guesture_Haven!\n\n📝 *New Suggestion*\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCategory: ${category}\n\nMessage:\n${message}`;
  
  const whatsappUrl = `https://wa.me/0506993828?text=${encodeURIComponent(suggestionText)}`;
  window.open(whatsappUrl, '_blank');
  
  // Reset form
  document.querySelector('.suggestion-form').reset();
  alert('Thank you! Your suggestion has been sent via WhatsApp.');
}

document.addEventListener('DOMContentLoaded', init);