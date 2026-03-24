import React from 'react';
import { formatNumbers } from '../../utilities/FormatNumber/FormatNumber';

const AppStatus = ({ data }) => {

    const [downloads, reviews] = data;

    const totalDownloads = data.reduce((acc, curr) => acc + curr.downloads, 0);
    const totalReviews = data.reduce((acc, curr) => acc + curr.reviews, 0);

    return (
        <div>
            <div className="bg-purple-600 py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-white text-2xl font-bold mb-8">
                        Trusted By Millions, Built For You
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <p className="text-purple-200 text-xs mb-1">Total Downloads</p>
                            <p className="text-white text-3xl font-bold">{formatNumbers(totalDownloads)}</p>
                            <p className="text-purple-200 text-xs mt-1">21% More Than Last Month</p>
                        </div>
                        <div>
                            <p className="text-purple-200 text-xs mb-1">Total Reviews</p>
                            <p className="text-white text-3xl font-bold">{formatNumbers(totalReviews)}</p>
                            <p className="text-purple-200 text-xs mt-1">46% More Than Last Month</p>
                        </div>
                        <div>
                            <p className="text-purple-200 text-xs mb-1">Active Apps</p>
                            <p className="text-white text-3xl font-bold">{data.length}+</p>
                            <p className="text-purple-200 text-xs mt-1">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppStatus;