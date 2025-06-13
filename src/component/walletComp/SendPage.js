import React, { useState } from 'react';

const DUMMY_WALLET_ADDRESS = 'ralex1q9l8dfk32js8df9832jsdfk9q23jsdfk9q2';

const SendPage = () => {
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [memo, setMemo] = useState('');
  const [setShowReceivePopup] = useState(false);

  const fee = 0.05;

  const isAmountValid = () => {
    const num = parseFloat(amount);
    return !isNaN(num) && num > 0;
  };

  const canSend = isAmountValid() && walletAddress.trim().length > 0;

  const handleAmountChange = (e) => {
    // Allow only numbers and dot, max 2 decimals
    const val = e.target.value;
    if (val === '' || /^\d*\.?\d{0,2}$/.test(val)) {
      setAmount(val);
    }
  };

  const handleMemoChange = (e) => {
    if (e.target.value.length <= 20) {
      setMemo(e.target.value);
    }
  };

  const sendTransaction = () => {
    alert(`Sending ${amount} Ralex to ${walletAddress}${memo ? ` with memo: ${memo}` : ''}`);
    // Reset inputs
    setAmount('');
    setWalletAddress('');
    setMemo('');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Send Ralex</h2>

      {/* Amount */}
      <div className="text-center mb-1">
        <input
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          className="text-4xl font-bold w-full text-center border-b-2 border-gray-300 focus:border-blue-600 outline-none"
          value={amount}
          onChange={handleAmountChange}
        />
        <div className="text-xl font-semibold mt-1">Ralex</div>
      </div>

      {/* Fee */}
      <div className="text-right text-sm text-gray-500 mb-6">Fee: {fee.toFixed(2)} Ralex</div>

      {/* Wallet Address Input */}
      <label className="block mb-2 font-semibold" htmlFor="walletAddress">
        Wallet Address
      </label>
      <input
        id="walletAddress"
        type="text"
        placeholder="Type in a wallet address"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-600 font-mono"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      />

      {/* Memo Input */}
      <label className="block mb-1 font-semibold" htmlFor="memo">
        Memo (optional)
      </label>
      <input
        id="memo"
        type="text"
        placeholder="Add a memo (max 20 chars)"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-1 focus:outline-none focus:border-blue-600"
        value={memo}
        onChange={handleMemoChange}
      />
      <div className="text-right text-xs text-gray-500 mb-6">{memo.length}/20</div>

      {/* Send Button */}
      <button
        disabled={!canSend}
        onClick={sendTransaction}
        className={`w-full py-3 rounded text-white font-semibold transition ${
          canSend ? 'bg-darkblue hover:bg-blue-700 cursor-pointer' : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        Send
      </button>

      {/* Note */}
      <p className="mt-6 text-sm text-gray-600 text-center">
        You can check your transaction progress on the{' '}
        <a
          href="https://bloclexplorer.ralex.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          bloclexplorer
        </a>{' '}
        using your wallet or receiver&apos;s wallet address.
      </p>

    </div>
  );
};

export default SendPage;
