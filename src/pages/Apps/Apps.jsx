import { useState, useMemo, Suspense } from "react";
import { useLoaderData } from "react-router";
import AppCardSingle from "../../components/AppCard/AppCardSingle";
import Loading from "../../utilities/Loading/Loading";
import ErrorApp from "../ErrorApp/ErrorApp";


const Apps = () => {
    const apps = useLoaderData();

    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("default");

    const displayApps = useMemo(() => {
        return apps
            .filter(app => app.title.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) =>
                sortOrder === "high-low" ? b.downloads - a.downloads :
                    sortOrder === "low-high" ? a.downloads - b.downloads : 0
            );
    }, [search, sortOrder, apps]);

    return (
        <div className="bg-gray-50 min-h-screen">

            <div className="text-center py-12 px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Our All Applications</h1>
                <p className="text-gray-500 text-sm">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 pb-14">

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <p className="font-semibold text-gray-700">({displayApps.length}) Apps Found</p>

                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                        >
                            <option value="default">Sort By Downloads</option>
                            <option value="high-low">High → Low</option>
                            <option value="low-high">Low → High</option>
                        </select>
                    </div>

                    <div className="relative w-full sm:w-64">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search Apps"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
                        />
                    </div>
                </div>


                <Suspense fallback={<Loading />}>
                    {displayApps.length === 0 ? (
                        <div className="text-center py-20">
                            <ErrorApp></ErrorApp>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {displayApps.map((app) => (
                                <AppCardSingle key={app.id} data={app} />
                            ))}
                        </div>
                    )}
                </Suspense>
            </div>
        </div>
    );
};

export default Apps;