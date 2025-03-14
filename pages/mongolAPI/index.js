import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Json() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isGridView, setIsGridView] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const endpoints = [
                    "clothes",
                    "instruments",
                    "HistoricalTools",
                    "EthnicGroups",
                    "Provinces",
                    "HistoricalFigures",
                    "TouristAttractions"
                ];

                const requests = endpoints.map(endpoint => 
                    fetch(`https://mongol-api-rest.vercel.app/${endpoint}`).then(res => res.json())
                );

                const results = await Promise.all(requests);
                const mergedData = results.flatMap(result => {
                    const key = Object.keys(result)[0];
                    return result[key] || [];
                });

                setData(mergedData);

            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    const filteredData = (data || []).filter(item => 
        item?.name?.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div className="min-h-screen bg-red-100 p-5 flex flex-col items-center">
            <div className="mb-8 flex items-center justify-between w-full">
                <input 
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search clothes..."
                    className="flex-grow mb-4 p-2 rounded border shadow-lg focus:outline-none focus:ring-2 focus:ring-red-200 text-black"
                />
                <button
                    onClick={() => setIsGridView(!isGridView)}
                    className="ml-4 flex items-center px-5 py-3 bg-red-300 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                    {isGridView ? "List View ээр харах" : "Grid View ээр харах"}
                </button>
            </div>

            {(filteredData || []).length > 0 ? (
                isGridView ? (
                    <div className="grid grid-cols-4 gap-4 m-4">
                        {filteredData.map((item) => (
                            <div key={item.id} className="border-2 text-black bg-white shadow rounded-lg p-4 text-center">
                                <img 
                                    src={item?.images?.[0]} 
                                    className="w-full h-64 rounded-xl"                   
                                />
                                <p className="font-bold">{item.name}</p>
                                <p>{item.description}</p>
                                <p className="font-bold">{item.timePeriod}</p>
                                <p className="font-bold">{item?.materials}</p>
                                <p className="font-semibold">{item.linguistic}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4 m-4 w-full">
                        {filteredData.map((item) => (
                            <div key={item.id} className="flex flex-col items-start border-2 text-black bg-white shadow rounded-lg p-4">
                                <img 
                                    src={item?.images?.[0]} 
                                    className="w-32 h-32 rounded-xl"                   
                                />
                                <p className="font-bold">{item.name}</p>
                                <p>{item.description}</p>
                                <p className="font-bold">{item.timePeriod}</p>
                                <p className="font-bold">{item?.materials}</p>
                            </div>
                        ))}
                    </div>
                )
            ) : (
                <p className="text-center text-gray-700 font-bold mt-10">not found</p>
            )}
        </div>
    );
}
