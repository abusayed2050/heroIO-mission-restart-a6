import React, { Suspense } from 'react';
import Loading from '../../utilities/Loading/Loading';
import AppCardSingle from '../../components/AppCard/AppCardSingle';
import { useLoaderData } from 'react-router';

const Apps = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className="text-center py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our All Applications</h1>
        <p className="text-gray-500 text-sm">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <Suspense  fallback={<div><Loading></Loading></div>}>
                {data.map((app) => (<AppCardSingle key={app.id} data={app}></AppCardSingle>))}
          </Suspense>
          </div>
        </div>
    );
};

export default Apps;