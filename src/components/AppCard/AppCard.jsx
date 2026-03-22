import React, { Suspense } from 'react';
import AppCardSingle from './AppCardSingle';
import Loading from '../../utilities/Loading/Loading';
import { useNavigate } from 'react-router';

const AppCard = ({ data }) => {
  const navigate = useNavigate();
  const topApps = data.slice(0,8);
    return (
        
           <>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Trending Apps</h2>
            <p className="text-gray-500 text-sm">Explore All Trending Apps on the Market developed by us</p>
          </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <Suspense  fallback={<div><Loading></Loading></div>}>
                {topApps.map((app) => (<AppCardSingle key={app.id} data={app}></AppCardSingle>))}
          </Suspense>
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/apps")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Show All
            </button>
          </div>
        </>
        
    );
};

export default AppCard;