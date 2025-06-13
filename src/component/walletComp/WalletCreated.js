import React, { useState } from 'react';
import { ClipboardIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const WalletCreated = () => {
  const passphrase = "coyote poverty divert ozone endorse avocado balance issue duck artefact cat mule cube casual flag able anxiety antenna meat output exhaust apple always course";

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(passphrase);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-2 text-darkblue text-center">
        Your wallet is successfully created! <br />
      </h1>
      <p className="text-center mb-6 text-gray-700 font-semibold">
        Store your passphrase, It unlocks your wallet. Keep it secret.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-center select-text">
        <p className="break-words text-gray-800 font-mono">{passphrase}</p>
      </div>

      <div className=" justif-right mb-6">
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-2 text-darkblue hover:text-blue-700 font-semibold"
          aria-label="Copy passphrase"
        >
          <ClipboardIcon className="w-5 h-5" />
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>

      <div className="flex items-start bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md mt-6">
        <ExclamationTriangleIcon className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
        <div>
          <p className="mb-2 font-semibold text-gray-700">
            Store your passphrase securely on your phone and use Fingerprint to unlock your wallet:
          </p>
          <p className="text-sm text-gray-600">
            Your passphrase was just randomly generated on your phone and is never sent to the Ralex servers. As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. If you store your passphrase in your phone's secure storage, you can retrieve it later with your approval.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletCreated;
