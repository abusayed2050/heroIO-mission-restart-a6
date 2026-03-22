import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { formatNumbers } from '../../utilities/FormatNumber/FormatNumber';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ErrorApp from '../ErrorApp/ErrorApp';

const AppDetails = () => {
    const {appId} = useParams();
    const data = useLoaderData(); 
    const singleApp = data.find(app => app.id === parseInt(appId));
    
   if (!singleApp){
    return <ErrorApp></ErrorApp>
   };
    
    const { id, image, title, companyName, description, size, reviews, downloads, ratingAvg, ratings } = singleApp;
    
    const [installed, setInstalled] = useState(false);
    
    useEffect(() => {
        if (!singleApp) return;
        const stored = JSON.parse(localStorage.getItem("installedapps") || "[]");
        const isInstalled = stored.some(app => app.id === singleApp.id);
        setInstalled(isInstalled);
     }, [singleApp]);
    const handleInstall = () => {
        if (installed) return;
        const stored = JSON.parse(localStorage.getItem("installedapps") || "[]");
        stored.push(singleApp);
        localStorage.setItem("installedapps",JSON.stringify(stored));
        setInstalled(true);
         alert('App installed successfully!');
    };

    const chartData = [...ratings].reverse();


    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="w-64 h-64 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{title}</h1>
            <p className="text-sm text-gray-500 mb-5">
              Developed by{" "}
              <span className="text-purple-600 font-medium">{companyName}</span>
            </p>

            <hr className="mb-5" />

            <div className="flex gap-10 mb-6">
              <div>
                <div className="flex items-center gap-1 text-teal-500 mb-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M13 5v6h1.17L12 13.17 9.83 11H11V5h2zm2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-400">Downloads</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumbers(downloads)}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-orange-400 mb-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-400">Average Ratings</p>
                <p className="text-2xl font-bold text-gray-900">{ratingAvg}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-purple-500 mb-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-400">Total Reviews</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumbers(reviews)}</p>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={installed}
              className={`px-6 py-2.5 rounded-lg text-white text-sm font-medium transition-colors ${
                installed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-teal-500 hover:bg-teal-600"
              }`}
            >
              {installed ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
            </div>
            <hr className="mb-8" />
             <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Ratings</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              layout="vertical"
              data={chartData}
              margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={45} />
              <Tooltip />
              <Bar dataKey="count" fill="#f97316" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

            <hr className="mb-8" />
            <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Description</h2>
          {description.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-600 text-sm leading-relaxed mb-4">
              {para}
            </p>
          ))}
        </div>
        </div> 
    );
}; 

export default AppDetails;