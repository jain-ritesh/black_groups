import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { StandardCheckoutClient, Env, StandardCheckoutPayRequest } from 'pg-sdk-node';
import { randomUUID } from 'crypto';

dotenv.config(); // Load .env before anything else

const app = express();

// ----------------- CORS ------------------
const allowedOrigins = ['https://black-groups-front.onrender.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn('Blocked CORS request from:', origin);
      callback(new Error('CORS not allowed from this origin: ' + origin));
    }
  },
  credentials: true,
}));

app.use(bodyParser.json());

// ----------------- PHONEPE SETUP ------------------
const clientId = process.env.MERCHANT_ID || "M22SBE31INURY";
const clientSecret = process.env.SALT_KEY || "618fa17f-c54c-4aff-9f5b-8e10b3e835f2";
const clientVersion = parseInt(process.env.SALT_INDEX || '1', 10);
const frontendUrl = process.env.FRONTEND_URL || "https://black-groups-front.onrender.com";
const env = Env.PRODUCTION; // For live

const client = StandardCheckoutClient.getInstance(clientId, clientSecret, clientVersion, env);

// ----------------- CREATE PAYMENT ------------------
app.post('/api/create-payment', async (req, res) => {
  try {
    const merchantOrderId = randomUUID();
    const amount = req.body.amount || 100; // in paise
    const redirectUrl = `${frontendUrl}/payment-callback`;

    console.log("Creating payment with:");
    console.log("Amount:", amount);
    console.log("Order ID:", merchantOrderId);
    console.log("Redirect URL:", redirectUrl);

    const request = StandardCheckoutPayRequest.builder()
      .merchantOrderId(merchantOrderId)
      .amount(amount)
      .redirectUrl(redirectUrl)
      .build();

    const response = await client.pay(request);

    console.log("Payment link created:", response.redirectUrl);

    res.json({
      merchantOrderId,
      redirectUrl: response.redirectUrl,
    });
  } catch (error) {
    console.error("Error during /api/create-payment:", error);
    res.status(500).json({ error: "Failed to create payment", details: error?.message });
  }
});

// ----------------- ORDER STATUS ------------------
app.get('/api/order-status/:merchantOrderId', async (req, res) => {
  try {
    console.log("Checking status for order:", req.params.merchantOrderId);
    const statusResponse = await client.getOrderStatus(req.params.merchantOrderId);
    res.json(statusResponse);
  } catch (error) {
    console.error("Error fetching order status:", error);
    res.status(500).json({ error: "Failed to fetch order status", details: error?.message });
  }
});

// ----------------- CALLBACK HANDLER ------------------
// Optional: Validate callback if you configure it in PhonePe
app.post('/api/phonepe-callback', (req, res) => {
  try {
    const authorizationHeader = req.headers['authorization'];
    const callbackBody = JSON.stringify(req.body);

    // OPTIONAL — Only use if you enable basic auth in PhonePe callback settings
    const username = process.env.PHONEPE_CALLBACK_USERNAME || '';
    const password = process.env.PHONEPE_CALLBACK_PASSWORD || '';

    if (username && password) {
      const callbackResponse = client.validateCallback(
        username,
        password,
        authorizationHeader,
        callbackBody
      );
      console.log("Validated callback response:", callbackResponse);
    } else {
      console.log("Callback received (no validation):", req.body);
    }

    res.status(200).send("OK");
  } catch (error) {
    console.error("Invalid callback or validation error:", error);
    res.status(400).send("Invalid callback");
  }
});

// ----------------- START SERVER ------------------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
