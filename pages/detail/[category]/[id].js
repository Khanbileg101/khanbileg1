import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function mongol() {
    const router = useRouter();
    const { category, id } = router.query;
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (!category || !id) return;
    
        const fetchData = async () => {
            try {
                const res = await fetch(`https://mongol-api-rest.vercel.app/${category}`);
                const data = await res.json();
                const key = Object.keys(data)[0];
                const foundItem = data[key]?.find(obj => obj.id.toString() === id);
    
                setItem(foundItem || null);
            } catch (error) {
                console.error("Error fetching details:", error);
            }
        };
    
        fetchData();
    }, [category, id]);

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="flex flex-col items-center text-gray-300">
                    <div className="w-16 h-16 border-4 border-gray-700 border-t-gray-400 rounded-full animate-spin"></div>
                    <p className="mt-4 text-lg font-semibold">Loading... Please wait</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-5 flex flex-col items-center bg-gray-900 text-gray-200">
            <h1 className="text-3xl font-bold text-gray-100">{item.name}</h1>
            <img 
                src={item?.images?.[0]} 
                className="w-96 h-96 rounded-xl my-4 border border-gray-700 shadow-md" 
                alt={item.name} 
            />
            <p className="text-lg text-gray-400">Description: {item.description}</p>
            <p className="font-semibold text-gray-300">Name: {item?.name}</p>
            <p className="font-semibold text-gray-300">Time Period: {item.timePeriod}</p>
            <p className="font-semibold text-gray-300">Materials: {item?.materials}</p>
            <p className="font-semibold text-gray-300">Accomplishment: {item?.accomplishment}</p>
            <p className="font-semibold text-gray-300">Area: {item?.area}</p>
            <p className="font-semibold text-gray-300">Population: {item?.population}</p>
            <p className="font-semibold text-gray-300">Address: {item?.address}</p>
            <p className="font-semibold text-gray-300">DateOfBirth: {item?.dateOfBirth}</p>
            <p className="font-semibold text-gray-300">DateOfDeath: {item?.dateOfDeath}</p>
            <button
                onClick={() => router.back()}
                className="mt-4 px-5 py-3 bg-gray-700 text-gray-200 font-medium rounded-lg shadow-md hover:bg-gray-600 transition"
            >
                Go Back
            </button>
        </div>
    );
}