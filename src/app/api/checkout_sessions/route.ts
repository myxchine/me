import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { Product } from "@/server/interface";

export async function POST(req: NextApiRequest) {
  const cartDetailsArray = Object.values(req);

  console.log(cartDetailsArray);

  const lineItems = cartDetailsArray.map((product: Product) => ({
    price_data: {
      currency: "eur",
      product_data: {
        name: product.name,
        images: [product.image],
        description: product.description,
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.quantity,
  }));

  console.log(lineItems);

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      payment_method_types: ["card"],

      billing_address_collection: "required",
      shipping_address_collection: { allowed_countries: ["PT"] },
      line_items: [
        {
          price_data: {
            product_data: {
              name: "test",
              images: ["test"],
              description: "test",
            },
            unit_amount: Math.round(100 * 100),

            currency: "eur",
          },

          quantity: 100,
        },
      ],
      mode: "payment",
      return_url: `http://localhost:3000/return?session_id={CHECKOUT_SESSION_ID}`,
      automatic_tax: { enabled: true },
    });

    console.log("Stripe checkout session created:", session);

    return NextResponse.json(
      { clientSecret: session.client_secret },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);

    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function GET(req: NextApiRequest) {
  console.log(req);

  let url = req.url;

  const parsedUrl = new URL(url);
  const sessionId = parsedUrl.searchParams.get("session_id");

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      status: session.status,
      customer_email: session.customer_details.email,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
