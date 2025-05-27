const express = require('express');
const axios = require('axios');
const crypto = require('crypto');

const router = express.Router();

const {
  MERCHANT_ID,
  SALT_KEY,
  SALT_INDEX,
  CALLBACK_URL,
} = process.env;

// Helper to generate checksum
const generateChecksum = (data) => {
  const payload = JSON.stringify(data);
  const base64Payload = Buffer.from(payload).toString('base64');
  const signature = crypto
    .createHmac('sha256', SALT_KEY)
    .update(base64Payload)
    .digest('hex');

  return { base64Payload, signature };
};

// INITIATE PAYMENT
router.post('/initiate', async (req, res) => {
  const { amount, mobile, email, transactionId } = req.body;

  const payload = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: transactionId,
    merchantUserId: mobile,
    amount: amount * 100, // in paisa
    redirectUrl: CALLBACK_URL,
    redirectMode: 'POST',
    callbackUrl: CALLBACK_URL,
    mobileNumber: mobile,
    paymentInstrument: {
      type: 'PAY_PAGE'
    }
  };

  const { base64Payload, signature } = generateChecksum(payload);

  try {
    const response = await axios.post(
      'https://api.phonepe.com/apis/hermes/pg/v1/pay',
      { request: base64Payload },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': `${signature}###${SALT_INDEX}`,
          'accept': 'application/json',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

// VERIFY PAYMENT STATUS
router.get('/status/:transactionId', async (req, res) => {
  const { transactionId } = req.params;
  const url = `/pg/v1/status/${MERCHANT_ID}/${transactionId}`;
  const fullUrl = `https://api.phonepe.com/apis/hermes${url}`;

  const signature = crypto
    .createHmac('sha256', SALT_KEY)
    .update(url + SALT_KEY)
    .digest('hex');

  try {
    const response = await axios.get(fullUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': `${signature}###${SALT_INDEX}`,
        'accept': 'application/json',
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

module.exports = router;
