import { useEffect, useState } from "react";

export default function Json() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(" ");
    const [isGridView, setIsGridView] = useState(true);

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mongol-api-rest.vercel.app/clothes');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mongol-api-rest.vercel.app/instruments');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mongol-api-rest.vercel.app/HistoricalTools');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mongol-api-rest.vercel.app/EthnicGroups');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mongol-api-rest.vercel.app/Provinces');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mongol-api-rest.vercel.app/HistoricalFigures');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mongol-api-rest.vercel.app/TouristAttractions');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const filteredClothes = data?.clothes?.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    console.log(data.clothes);
    console.log(data.intsruments);
    console.log(data.HistoricalTools);
    console.log(data.EthnicGroups);
    console.log(data.Provinces);
    console.log(data.HistoricalFigures);
    console.log(data.TouristAttractions);

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

            {isGridView ? (
                <div className="grid grid-cols-4 gap-4 m-4">
                    {filteredClothes?.map((item) => (
                        <div key={item.id} className="border-2 text-black bg-white shadow rounded-lg p-4 items-center text-center">
                            <img 
                                src={item?.images[0]} 
                                className="w-full h-64 rounded-xl"                  
                            />
                            <p className="font-bold text-center">{item.name}</p>
                            <p>{item.description}</p>
                            <p className="font-bold">{item.timePeriod}</p>
                            <p className="font-bold">{item?.materials}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="space-y-4 m-4 w-full items-center justify-center">
                    {filteredClothes?.map((item) => (
                        <div key={item.id} className="flex flex-col items-start border-2 text-black bg-white shadow rounded-lg p-4">
                            <img 
                                src={item?.images[0]} 
                                className="w-32 h-32 rounded-xl"                  
                            />
                            <p className="font-bold text-center">{item.name}</p>
                            <p>{item.description}</p>
                            <p className="font-bold">{item.timePeriod}</p>
                            <p className="font-bold">{item?.materials}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}