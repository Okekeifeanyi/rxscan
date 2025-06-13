import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';  // <-- import useNavigate

const WalletUnlock = () => {
  const [selectedMethod, setSelectedMethod] = useState('passphrase');
  const [passphrase, setPassphrase] = useState('');
  const [warning, setWarning] = useState('');
  const navigate = useNavigate();

  const handleUnlockPassphrase = () => {
    if (passphrase.trim() === '') {
      setWarning('Input your Phrase');
    } else {
      setWarning('');
      // You can add actual passphrase validation here later
      // For now, route to wallet balance page
      navigate('/wallet-balance');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6 text-darkblue">Unlock Ralex Coin</h1>

      {/* Passphrase Input */}
      <div className="mb-4">
        <textarea
          placeholder="Enter your 24-word passphrase to unlock"
          rows="4"
          className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-darkblue"
          style={{ borderColor: warning ? 'red' : undefined }}
          value={passphrase}
          onChange={(e) => setPassphrase(e.target.value)}
          disabled={selectedMethod !== 'passphrase'}
        />
        {warning && (
          <p className="text-red-600 text-sm mt-1">{warning}</p>
        )}
      </div>

      {/* Unlock Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => {
            setSelectedMethod('passphrase');
            handleUnlockPassphrase();
          }}
          className={`flex-1 border-2 rounded-full py-2 px-4 font-medium transition duration-300 ${
            selectedMethod === 'passphrase'
              ? 'bg-darkblue text-white border-darkblue'
              : 'border-darkblue text-black hover:bg-darkblue hover:text-white'
          }`}
        >
          Unlock with Passphrase
        </button>
        <button
          onClick={() => setSelectedMethod('fingerprint')}
          className={`flex-1 border-2 rounded-full py-2 px-4 font-medium transition duration-300 ${
            selectedMethod === 'fingerprint'
              ? 'bg-darkblue text-white border-darkblue'
              : 'border-darkblue text-black hover:bg-darkblue hover:text-white'
          }`}
          disabled={true} // You can enable fingerprint functionality later
        >
          Unlock with Fingerprint
        </button>
      </div>

      {/* Warning Section */}
      <div className="flex items-start bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md">
        <AlertTriangle className="text-yellow-500 w-6 h-6 mr-3 mt-1" />
        <p className="text-sm text-gray-700">
          As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. Recovery of passphrase is currently impossible. <br /><br />
          <span className="text-red-600 font-bold">Lost your passphrase?</span>{' '}
          <Link
            to="/createwallet"
            className="text-darkblue font-bold cursor-pointer hover:underline"
          >
            You can create a new wallet
          </Link>
          . But all your Ralex in your previous wallet will be inaccessible from the new wallet.
        </p>
      </div>
    </div>
  );
};

export default WalletUnlock;
