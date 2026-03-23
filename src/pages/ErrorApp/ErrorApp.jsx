import React from 'react';
import { useNavigate } from 'react-router';
import errorAppImg from '../../assets/App-Error.png';

const ErrorApp = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div>
        <img src={errorAppImg} alt="App Not Found" className="w-48 h-48 object-contain mb-6" />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">OPPS!! APP NOT FOUND</h2>
      <p className="text-gray-500 mb-6">
        The App you are requesting is not found on our system. please try another apps
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium"
      >
        Go Back!
      </button>
    </div>
  );

};

export default ErrorApp;