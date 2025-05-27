import React, { useState } from 'react';

export default function App() {
  const [amount, setAmount] = useState('');
  const [redirectUrl, setRedirectUrl] = useState(null);
  const [merchantOrderId, setMerchantOrderId] = useState(null);
  const [error, setError] = useState('');

  const createPayment = async () => {
    setError('');
    setRedirectUrl(null);
    setMerchantOrderId(null);

    const parsedAmount = parseInt(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a valid amount greater than 0.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: parsedAmount }),
      });

      if (!response.ok) {
        throw new Error('Payment initiation failed');
      }

      const data = await response.json();
      setRedirectUrl(data.redirectUrl);
      setMerchantOrderId(data.merchantOrderId);

      // Optional: redirect automatically
      window.location.href = data.redirectUrl;
    } catch (error) {
      setError(error.message || 'Payment initiation failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-lg shadow-md font-sans text-center">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">PhonePe Payment Gateway Demo</h1>

      <label className="block mb-2 text-left text-gray-700 font-medium">
        Enter Amount (in paise):
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g. 1000 for ₹10"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </label>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <button
        onClick={createPayment}
        className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors font-semibold w-full"
      >
        Pay Now
      </button>

      {merchantOrderId && (
        <p className="mt-6 text-gray-700">
          <strong>Order ID:</strong> {merchantOrderId}
        </p>
      )}

      {redirectUrl && (
        <p className="mt-4 text-gray-700 break-words">
          Redirecting to:{' '}
          <a
            href={redirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {redirectUrl}
          </a>
        </p>
      )}
    </div>
  );
}
