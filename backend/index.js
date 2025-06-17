import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { randomUUID } from 'crypto';
import axios from 'axios';
import crypto from 'crypto';

dotenv.config();

const app = express();

// ----------------- CORS ------------------
const allowedOrigins = ['https://blackgrapesgroup.com'];
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

// ----------------- ENV VARIABLES ------------------
const MERCHANT_ID = process.env.MERCHANT_ID || "M22SBE31INURY";
const SALT_KEY = process.env.SALT_KEY || "618fa17f-c54c-4aff-9f5b-8e10b3e835f2";
const SALT_INDEX = process.env.SALT_INDEX || "1";
const FRONTEND_URL = "https://blackgrapesgroup.com";
const PHONEPE_API_HOST = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

// ----------------- CREATE PAYMENT ------------------
app.post('/api/create-payment', async (req, res) => {
  try {
    const merchantTransactionId = randomUUID();
    const rupeeAmount = parseFloat(req.body.amount);

    if (isNaN(rupeeAmount) || rupeeAmount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const amountInPaise = Math.round(rupeeAmount * 100);
    const redirectUrl = `${FRONTEND_URL}/payment-callback`;

    const payload = {
      merchantId: MERCHANT_ID,
      merchantTransactionId,
      merchantUserId: "user_" + merchantTransactionId,
      amount: amountInPaise,
      redirectUrl,
      redirectMode: "POST",
      callbackUrl: redirectUrl,
      paymentInstrument: {
        type: "PAY_PAGE"
      }
    };

    const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
    const xVerify = crypto
      .createHash('sha256')
      .update(base64Payload + "/pg/v1/pay" + SALT_KEY)
      .digest("hex") + `###${SALT_INDEX}`;

    const response = await axios.post(PHONEPE_API_HOST, {
      request: base64Payload
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': xVerify,
        'X-MERCHANT-ID': MERCHANT_ID
      }
    });

    const redirectUrlResp = response?.data?.data?.instrumentResponse?.redirectInfo?.url;

    if (!redirectUrlResp) {
      throw new Error("PhonePe did not return a redirect URL");
    }

    res.json({ merchantTransactionId, redirectUrl: redirectUrlResp });

  } catch (error) {
    console.error("❌ Error during /api/create-payment:", error.response?.data || error.message);
    res.status(500).json({
      error: "Payment initiation failed",
      details: error.response?.data || error.message
    });
  }
});

// ----------------- SERVER ------------------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server live at https://blackgrapesgroup.com:${PORT}`);
});
