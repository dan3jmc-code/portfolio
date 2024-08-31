// Replace with your Stripe public key
const stripe = Stripe('pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'); 

document.getElementById('checkout-button').addEventListener('click', () => {
    // Redirect to Stripe Checkout
    stripe.redirectToCheckout({
        lineItems: [{price: 'price_XXXXXXXXXXXXXXXX', quantity: 1}], // Replace with your price ID
        mode: 'payment',
        successUrl: 'https://yourdomain.com/success', // Replace with your success URL
        cancelUrl: 'https://yourdomain.com/cancel',   // Replace with your cancel URL
    }).then(function (result) {
        if (result.error) {
            alert(result.error.message);
        }
    });
});