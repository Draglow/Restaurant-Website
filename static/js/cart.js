$(document).ready(function() {
    // Function to add item to cart
    window.addToCart = function(itemId, title, price, discountPrice, image) {
        $.ajax({
            url: '/add-to-cart/',  // Update with the correct URL
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                'item_id': itemId,
                'title': title,
                'price': price,
                'discount_price': discountPrice,
                'image': image
            }),
            success: function(response) {
                // Update cart icon or item count
                updateCartCount(response.cart);
                alert('Item added to cart!');
            },
            error: function(xhr, status, error) {
                console.error('Error adding item to cart:', error);
            }
        });
    };

    // Function to remove item from cart
    window.removeFromCart = function(itemId) {
        $.ajax({
            url: '/remove-from-cart/',  // Update with the correct URL
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                'item_id': itemId
            }),
            success: function(response) {
                // Update cart icon or item count
                updateCartCount(response.cart);
                alert('Item removed from cart!');
            },
            error: function(xhr, status, error) {
                console.error('Error removing item from cart:', error);
            }
        });
    };

    // Function to update cart count
    function updateCartCount(cart) {
        let itemCount = Object.keys(cart).length;  // Count items in cart
        $('#cart-count').text(itemCount);  // Update the cart count in the navbar
    }
});
