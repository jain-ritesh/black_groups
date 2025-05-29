import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { StandardCheckoutClient, Env, StandardCheckoutPayRequest } from 'pg-sdk-node';
import { randomUUID } from 'crypto';

const app = express();
// app.use(cors());
// app.use(cors({
//     origin: process.env.FRONTEND_URL, // React frontend ka URL
//     credentials: true, 
// }));

const allowedOrigins = ['https://black-grapes-groups.onrender.com']; // replace with your actual domain

app.use(cors({
  origin: function (origin, callback) {
      
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed from this origin: ' + origin));
    }
  },
  credentials: true,
}));

app.use(bodyParser.json());

// Your PhonePe credentials here
const clientId = "TEST-M22SBE31INURY_25041";
const clientSecret = "NmYxMDllN2YtY2Q0YS00NTBkLTk0NDQtZjc5OGQ5NGFhNGZi";
const clientVersion = 1;
const env = Env.SANDBOX;  // Change to Env.PRODUCTION for live

const client = StandardCheckoutClient.getInstance(clientId, clientSecret, clientVersion, env);

// Endpoint to create a payment order
app.post('/api/create-payment', async (req, res) => {
  try {
    const merchantOrderId = randomUUID();
    const amount = req.body.amount || 100;  // amount in paise
    const redirectUrl = `${process.env.FRONTEND_URL}/payment-callback`;

    const request = StandardCheckoutPayRequest.builder()
      .merchantOrderId(merchantOrderId)
      .amount(amount)
      .redirectUrl(redirectUrl)
      .build();

    const response = await client.pay(request);

    res.json({
      merchantOrderId,
      redirectUrl: response.redirectUrl,
    });
  } catch (error) {
    console.error("Error creating payment:", error);
    res.status(500).json({ error: "Failed to create payment" });
  }
});

// Endpoint to check order status
app.get('/api/order-status/:merchantOrderId', async (req, res) => {
  try {
    const statusResponse = await client.getOrderStatus(req.params.merchantOrderId);
    res.json(statusResponse);
  } catch (error) {
    console.error("Error fetching order status:", error);
    res.status(500).json({ error: "Failed to fetch order status" });
  }
});

// Callback endpoint PhonePe calls (make sure to configure this URL in PhonePe dashboard)
app.post('/api/phonepe-callback', (req, res) => {
  try {
    const authorizationHeaderData = req.headers['authorization'];
    const callbackBodyString = JSON.stringify(req.body);

    const usernameConfigured = "YOUR_MERCHANT_USERNAME";
    const passwordConfigured = "YOUR_MERCHANT_PASSWORD";

    const callbackResponse = client.validateCallback(
      usernameConfigured,
      passwordConfigured,
      authorizationHeaderData,
      callbackBodyString
    );

    console.log("Callback received:", callbackResponse);

    // Process callbackResponse.payload.orderId, state, etc. here

    res.status(200).send("OK");
  } catch (error) {
    console.error("Invalid callback:", error);
    res.status(400).send("Invalid callback");
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
