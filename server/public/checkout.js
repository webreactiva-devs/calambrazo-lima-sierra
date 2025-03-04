// This is your test secret API key.
const stripe = Stripe("pk_test_51QueL6D7pSTbO4zVIBivXU2GrbgfAkA6AOohKvoUNQR2UuBOxzk55iRJdjQILx8bqEPsVOF7jd7E85ztDRPpEYDN00bbRPV1eV");

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}