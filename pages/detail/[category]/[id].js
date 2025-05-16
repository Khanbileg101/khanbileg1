import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ID() {
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

    const renderValue = (value) => {
        if (typeof value === "object" && value !== null) {
            return JSON.stringify(value);
        }
        return value;
    };

    return (
        <div className="min-h-screen p-5 flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-900 text-gray-200">
            <h1 className="text-4xl font-extrabold text-[#CDCAC5] mb-6">{item.name}</h1>
            <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                {item?.images?.[0] && (
                    <img
                        src={item.images[0]}
                        className="w-full h-96 object-cover"
                        alt={item.name}
                    />
                )}
                <div className="p-6">
                    <p className="text-lg text-gray-400 mb-4">{item.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {item?.timePeriod && (
                            <p className="font-medium text-gray-300">
                                <span className="text-gray-400">Time Period:</span> {item.timePeriod}
                            </p>
                        )}
                        {item?.materials && (
                            <p className="font-medium text-gray-300">
                                <span className="text-gray-400">Materials:</span> {item.materials}
                            </p>
                        )}
                        {item?.accomplishment && (
                            <p className="font-medium text-gray-300">
                                <span className="text-gray-400">Accomplishment:</span> {item.accomplishment}
                            </p>
                        )}
                        {item?.area && (
                            <p className="font-medium text-gray-300">
                                <span className="text-gray-400">Area:</span> {item.area}
                            </p>
                        )}
                        {item?.population && (
                            <p className="font-medium text-gray-300">
                                <span className="text-gray-400">Population:</span> {item.population}
                            </p>
                        )}
                        {item?.address && (
                            <p className="font-medium text-gray-300">
                                <span className="text-gray-400">Address:</span> {renderValue(item.address)}
                            </p>
                        )}
                        {item?.dateOfBirth && (
                            <p className="font-medium text-gray-300">
                                <span className="text-gray-400">Date of Birth:</span> {item.dateOfBirth}
                            </p>
                        )}
                        {item?.dateOfDeath && (
                            <p className="font-medium text-gray-300">
                                <span className="text-gray-400">Date of Death:</span> {item.dateOfDeath}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <button
                onClick={() => router.back()}
                className="mt-6 px-8 py-3 bg-[#A38970] text-white font-semibold rounded-full shadow-lg hover:bg-[#A38970] hover:scale-105 transition-transform duration-300 ease-in-out"
            >
                ← Go Back
            </button>
        </div>
    );
}
