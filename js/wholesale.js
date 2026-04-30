function submitWholesaleForm(e) {
  e.preventDefault();
  
  const company = document.getElementById('company').value;
  const contact = document.getElementById('contact').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const quantity = document.getElementById('quantity').value;
  const products = document.getElementById('products').value;
  const requirements = document.getElementById('requirements').value;
  
  const message = `Wholesale Inquiry:\n\nCompany: ${company}\nContact: ${contact}\nEmail: ${email}\nPhone: ${phone}\nQuantity: ${quantity} units\n\nProducts: ${products}\n\nRequirements: ${requirements || 'None'}`;
  
  const whatsappUrl = `https://wa.me/233506993828?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
});