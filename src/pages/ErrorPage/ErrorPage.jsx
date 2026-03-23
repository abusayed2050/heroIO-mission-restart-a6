import React, { useState } from 'react';
import Error404 from '../../assets/Error-404.png';
import { useNavigate } from 'react-router';
import Loading from '../../utilities/Loading/Loading';

const ErrorPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleNavigate = () => {
        setLoading(true);
        setTimeout(() => navigate("/"), 1000);
    };

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <div>
                <img src={Error404} alt="Page Not Found" className="w-48 h-48 object-contain mb-6" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-3">Oops, page not found!</h2>
            <p className="text-gray-400 mb-8 text-sm">The page you are looking for is not available.</p>

            {loading ? (
                <Loading />
            ) : (
                <button
                    onClick={handleNavigate}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                    Go Back!
                </button>
            )}
        </div>
    );
};

export default ErrorPage;