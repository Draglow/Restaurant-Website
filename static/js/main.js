$(document).ready(function () {
    // Handle "Add to Cart" button click
    $('.add-to-cart-btn').on('click', function (e) {
        e.preventDefault();
        
        // Get the slug from data attribute
        const productSlug = $(this).data('slug');

        // Send AJAX request to add the item to the cart
        $.ajax({
            url: `/add-to-cart/${productSlug}/`, // Django URL pattern for adding to the cart
            type: 'POST',
            data: {
                csrfmiddlewaretoken: '{{ csrf_token }}' // Add CSRF token
            },
            success: function (response) {
                // Update cart count dynamically
                $('#mini-cart-count').text(response.cart_count);

                // Show a success message
                alert(response.message || 'Item added to cart!');
            },
            error: function (xhr, status, error) {
                alert('Error: Could not add to cart.');
            }
        });
    });
});
