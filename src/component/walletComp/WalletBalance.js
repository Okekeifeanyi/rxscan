import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Settings, ArrowUpCircle, ArrowDownCircle, Clipboard } from 'lucide-react';

const DUMMY_WALLET_ADDRESS = 'ralex1q9l8dfk32js8df9832jsdfk9q23jsdfk9q23jsdfk9q2';
const MASKED_ADDRESS = 'ralex1q9l8***************q23jsdfk9q2';

const DUMMY_TRANSACTIONS = [
  {
    id: 1,
    type: 'sent',
    amount: -20,
    from: DUMMY_WALLET_ADDRESS,
    to: 'ralex1abcxyz9876543210wallet',
    timestamp: '2025-06-07 13:45:22',
    description: 'Payment for groceries',
    fee: 0.01,
  },
  {
    id: 2,
    type: 'received',
    amount: 50,
    from: 'ralex1friendwallet1234567890',
    to: DUMMY_WALLET_ADDRESS,
    timestamp: '2025-06-06 10:20:05',
    description: 'Salary deposit',
    fee: 0,
  },
  {
    id: 3,
    type: 'received',
    amount: 320,
    from: 'ralex1companywallet987654321',
    to: DUMMY_WALLET_ADDRESS,
    timestamp: '2025-06-05 08:15:30',
    description: 'Payment received',
    fee: 0,
  },
];

const WalletBalance = () => {
  const [copied, setCopied] = useState(false);
  const [showFullAddress, setShowFullAddress] = useState(false);
  const [selectedTx, setSelectedTx] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [receiveOpen, setReceiveOpen] = useState(false); // <-- Receive popup state

  const walletAddress = showFullAddress ? DUMMY_WALLET_ADDRESS : MASKED_ADDRESS;

  const copyAddress = () => {
    navigator.clipboard.writeText(DUMMY_WALLET_ADDRESS);
    setCopied(true);
    setShowFullAddress(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyReceiveAddress = () => {
    navigator.clipboard.writeText(DUMMY_WALLET_ADDRESS);
    alert('Wallet address copied!');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-darkblue">Wallet Balance</h2>
        <div className="flex space-x-4 items-center">
          <button
            aria-label="Notifications"
            className="p-2 rounded-full hover:bg-gray-200"
            onClick={() => alert('No new notifications')}
          >
            <Bell className="w-6 h-6 text-gray-600" />
          </button>
          <button
            aria-label="Settings"
            className="p-2 rounded-full hover:bg-gray-200"
            onClick={() => setSettingsOpen(true)}
          >
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Wallet Address and Actions */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6 text-center relative">
        <p className="font-mono text-lg break-all select-text">{walletAddress}</p>
        <button
          onClick={copyAddress}
          className="absolute top-3 right-3 flex items-center space-x-1 text-darkblue hover:text-blue-700"
          aria-label="Copy wallet address"
        >
          <Clipboard className="w-5 h-5" />
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Send and Receive Buttons */}
      <div className="flex justify-center space-x-8 mb-8">
        <Link
          to="/send"
          className="flex items-center space-x-2 bg-darkblue text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          <ArrowUpCircle className="w-6 h-6" />
          <span>Send</span>
        </Link>
        <button
          className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          onClick={() => setReceiveOpen(true)} // Open receive popup on click
        >
          <ArrowDownCircle className="w-6 h-6" />
          <span>Receive</span>
        </button>
      </div>

      {/* Transaction History */}
      <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
      <ul className="divide-y divide-gray-300">
        {DUMMY_TRANSACTIONS.map((tx) => (
          <li
            key={tx.id}
            className="flex items-center justify-between py-4 cursor-pointer hover:bg-gray-50 px-3 rounded"
            onClick={() => setSelectedTx(tx)}
          >
            <div className="flex items-center space-x-4">
              {tx.type === 'sent' ? (
                <ArrowUpCircle className="w-8 h-8 text-red-500" />
              ) : (
                <ArrowDownCircle className="w-8 h-8 text-green-500" />
              )}
              <div>
                <p
                  className={`font-semibold ${
                    tx.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {tx.amount > 0 ? `+${tx.amount}` : tx.amount} Ralex
                </p>
                <p className="text-sm text-gray-600">
                  {tx.type === 'sent' ? (
                    <>
                      To: <span className="font-mono">{tx.to}</span>
                    </>
                  ) : (
                    <>
                      From: <span className="font-mono">{tx.from}</span>
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-500">{tx.timestamp}</div>
          </li>
        ))}
      </ul>

      {/* Transaction Detail Popup */}
      {selectedTx && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedTx(null)}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedTx(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              aria-label="Close transaction details"
            >
              ✕
            </button>

            {/* Ralex Logo - You can replace with actual logo */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-3xl font-bold select-none">
                R
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 text-center">
              Transaction Details
            </h3>
            <p className="text-center font-semibold mb-4 text-green-600">
              {selectedTx.type === 'received' ? 'Payment Received' : 'Payment Sent'}
            </p>

            <p className="text-3xl font-bold mb-2 text-center text-green-700">
              {selectedTx.amount > 0 ? `+${selectedTx.amount}` : selectedTx.amount} Ralex
            </p>

            <p className="text-center text-gray-500 mb-6">{selectedTx.timestamp}</p>

            <div className="mb-4">
              <p className="font-semibold">From:</p>
              <p className="font-mono break-words">{selectedTx.from}</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold">To:</p>
              <p className="font-mono break-words">{selectedTx.to}</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold">Description:</p>
              <p>{selectedTx.description}</p>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Fee paid by sender: {selectedTx.fee} Ralex
            </p>

            <div className="flex justify-between items-center">
              <a
                href={`https://bloclexplorer.ralex.com/tx/${selectedTx.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-darkblue font-bold hover:underline"
              >
                View on Bloclexplorer
              </a>
              <button
                onClick={() => setSelectedTx(null)}
                className="bg-darkblue text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Receive Address Popup */}
      {receiveOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setReceiveOpen(false)}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setReceiveOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              aria-label="Close receive popup"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4 text-center">Receive Ralex</h3>

            <p className="font-mono text-lg break-all text-center mb-4">
              {DUMMY_WALLET_ADDRESS}
            </p>

            <div className="flex justify-center">
              <button
                onClick={copyReceiveAddress}
                className="bg-darkblue text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Copy Address
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Popup */}
      {settingsOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSettingsOpen(false)}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSettingsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              aria-label="Close settings popup"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">Settings</h3>
            <p>Settings options coming soon.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletBalance;
