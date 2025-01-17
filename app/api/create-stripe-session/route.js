import Stripe from "stripe";

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

if (!stripe) {
  console.error("Stripe secret key is missing.");
  throw new Error("Stripe is not configured properly.");
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, cartItems, total } = body;

    // Validate email
    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
      });
    }

    // Generate line items for Stripe checkout
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const lineItems = cartItems.map((item) => {
      if (typeof item.price !== "number" || typeof item.quantity !== "number") {
        throw new Error("Invalid cart item data. Price and quantity must be numbers.");
      }

      const imageUrl = item.imageSrc.startsWith("http")
        ? item.imageSrc
        : `${baseUrl}${item.imageSrc}`;

      return {
        price_data: {
          currency: "pln",
          product_data: {
            name: item.name,
            images: [imageUrl],
          },
          unit_amount: Math.round(item.price * 100), // Ensure unit amount is an integer
        },
        quantity: Math.max(1, item.quantity), // Ensure quantity is at least 1
      };
    });

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      customer_email: email,
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/checkout?canceled=true`,
    });

    return new Response(JSON.stringify({ sessionUrl: session.url }), { status: 200 });
  } catch (error) {
    console.error("Stripe session creation error:", error.message, error.stack);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
