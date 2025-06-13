import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CreateWallet = () => {
  const navigate = useNavigate();

  const handleGenerateWallet = () => {
    // You can add any pre-navigation logic here later
    navigate('/wallet-created');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg text-center">
      <h1 className="text-3xl font-bold mb-4 text-darkblue">Create your Wallet</h1>
      <p className="mb-8 text-gray-700 font-semibold">
        Do not press back button until you finish the whole process!
      </p>

      <button
        onClick={handleGenerateWallet}
        className="bg-darkblue text-white rounded-full py-3 px-6 font-semibold mb-6 hover:bg-white hover:text-darkblue border-2 border-darkblue transition-colors duration-300"
        type="button"
      >
        Generate New Wallet
      </button>

      <br />

      <Link
        to="/wallet"
        className="text-darkblue font-bold cursor-pointer hover:underline"
      >
        Already created wallet?
      </Link>
    </div>
  );
};

export default CreateWallet;
