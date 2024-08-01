const stripe = Stripe('pk_test_51PgSnVRsrfQt3d8QY0W9pHINYt7CO85KN89VFIa2bY6ph2qka6ukJxF2G3CaG9CwtayQNx9U2D1KJJKt5ouzJ0fY00IIcXbKOg');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });