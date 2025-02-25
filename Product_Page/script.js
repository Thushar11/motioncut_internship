let cartCount = 0;

function addToCart(button) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert(button.parentElement.getAttribute('data-name') + " added to cart!");
}
