import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, cartItems, total } = body;

    // Generate full image URLs if imageSrc contains relative paths
    const lineItems = cartItems.map((item) => {
      const imageUrl = item.imageSrc.startsWith("http")
        ? item.imageSrc
        : `${process.env.NEXT_PUBLIC_BASE_URL}${item.imageSrc}`; // Convert to full URL

      return {
        price_data: {
          currency: "pln",
          product_data: {
            name: item.name,
            images: [imageUrl], // Use the absolute URL here
          },
          unit_amount: item.price * 100, // Convert to cents
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      customer_email: email,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout?canceled=true`,
    });

    return new Response(JSON.stringify({ sessionUrl: session.url }), { status: 200 });
  } catch (error) {
    console.error("Stripe session creation error:", error);
    return new Response(JSON.stringify({ error: "Unable to create Stripe session" }), {
      status: 500,
    });
  }
}
