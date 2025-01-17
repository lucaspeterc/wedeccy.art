import Stripe from "stripe";

let stripe;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
} else {
  console.error("Stripe secret key is missing.");
  throw new Error("Stripe is not configured properly.");
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, cartItems, total } = body;

    if (!stripe) {
      return new Response(JSON.stringify({ error: "Stripe is not configured properly." }), {
        status: 500,
      });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "pln",
        product_data: {
          name: item.name,
          images: [item.imageSrc.startsWith("http") ? item.imageSrc : `${baseUrl}${item.imageSrc}`],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

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
