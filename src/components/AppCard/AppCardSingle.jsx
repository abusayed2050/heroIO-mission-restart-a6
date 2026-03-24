import React from 'react';
import { formatNumbers } from '../../utilities/FormatNumber/FormatNumber'; //number কে string এ রূপান্তর করে যেমন 1000000 কে 1M এ রূপান্তর করে
import { useNavigate } from 'react-router';

const AppCardSingle = ({ data }) => {
  const { id, image, title, downloads, ratingAvg } = data;
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/apps/${id}`)}
        className="bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200 border border-gray-100"
      >
        <div className="bg-gray-200 aspect-auto overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
        <div className="p-3">
          <p className="text-sm font-medium text-gray-800 mb-2 line-clamp-1">{title}</p>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-xs text-teal-500 font-semibold">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <path d="M13 5v6h1.17L12 13.17 9.83 11H11V5h2zm2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z" />
              </svg>
              {formatNumbers(downloads)}
            </span>
            <span className="flex items-center gap-1 text-xs text-orange-400 font-semibold">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCardSingle;