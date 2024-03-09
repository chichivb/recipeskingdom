import "dotenv/config";
import express from "express";
import stripe from "stripe";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;
const smyStripe = new stripe(STRIPE_SECRET_KEY);

const app = express();
app.use(express.json());

app.post("/api/create-paymentintent", async (req, res) => {
  const { amount } = req.body;
  console.log("payment abouto create > ", amount);
  try {
    const paymentIntent = await smyStripe.paymentIntents.create({
      amount: amount,
      currency: "EUR",
      automatic_payment_methods: { enabled: true },
    });
    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/config", (req, res) => {
  console.log("/api/config requests");
  res.send({
    publishableKey: STRIPE_PUBLISHABLE_KEY,
  });
});

app.listen(4242, () => {
  console.log("Server is listening on port 4242");
});
