import React, { useEffect, useState } from 'react';
import { formatNumbers } from '../../utilities/FormatNumber/FormatNumber';
import { toast } from 'react-toastify';


const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("installedapps") || "[]")
        setInstalledApps(stored);
    }, []);

    const [sortOrder, setSortOrder] = useState("default");

    const sorted = installedApps.sort((a, b) => {
        if (sortOrder === "high-low") {
            return b.size - a.size;
        } else if (sortOrder === "low-high") {
            return a.size - b.size;
        }
        return 0;
    });

    const handleUninstall = (id) => {
        const stored = JSON.parse(localStorage.getItem("installedapps") || "[]");
        const updated = stored.filter((app) => app.id !== id);
        localStorage.setItem("installedapps", JSON.stringify(updated));
        setInstalledApps(updated);
        toast.error("App Uninstalled Successfully!");
    }

    return (
        <div>
            <div className="text-center py-12 px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Installed Apps</h1>
                <p className="text-gray-500 text-sm">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-14">

                <div className="flex items-center justify-between mb-6">
                    <p className="font-semibold text-gray-700">{sorted.length} Apps Found</p>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                        <option value="default">Sort By Size</option>
                        <option value="high-low">High → Low</option>
                        <option value="low-high">Low → High</option>
                    </select>
                </div>

                {sorted.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">📦</div>
                        <p className="text-xl font-semibold text-gray-400">No Apps Installed</p>
                        <p className="text-gray-400 text-sm mt-2">
                            Go to the Apps page and install some apps
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {sorted.map((app) => (
                            <div
                                key={app.id}
                                className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4"
                            >
                                <div className="w-14 h-14 bg-gray-200 rounded-xl overflow-hidden shrink-0">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = "none";
                                        }}
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800 text-sm">{app.title}</p>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="flex items-center gap-1 text-xs text-teal-500 font-medium">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                <path d="M13 5v6h1.17L12 13.17 9.83 11H11V5h2zm2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z" />
                                            </svg>
                                            {formatNumbers(app.downloads)}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-orange-400 font-medium">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                            {app.ratingAvg}
                                        </span>
                                        <span className="text-xs text-gray-400">{app.size} MB</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleUninstall(app.id)}
                                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default Installation;