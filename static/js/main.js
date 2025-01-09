$(document).ready(function() { 
    $('#add_too_cart').on("click", function() {
        let qty = $('#numberInput').val();  // Quantity input
        let price = $('.cardd-price').val(); // Price hidden input
        let title = $('.cardd-title').val(); // Title hidden input
        let product_id = $(".obj_id").val(); // Product ID hidden input
        let this_val = $(this);

        console.log("Quantity:", qty);
        console.log("Price:", price);
        console.log("Title:", title);
        console.log("Product ID:", product_id);
        console.log("Button:", this_val);

        $.ajax({
            url: '/add_too_cart',
            type: 'POST', // Specify the HTTP method, assuming it is a POST request
            data: {
                "id": product_id,
                "qty": qty,
                "price": price,
                "title": title,
            },
            dataType: 'json', // Moved dataType inside the $.ajax settings
            beforeSend: function() {
                console.log("Adding product to the cart...");
            },
            success: function(response) {
                console.log("Added product to the cart:", response);
            },
            error: function(xhr, status, error) {
                console.log("Error adding product to cart:", error);
            }
        });
    });
});
