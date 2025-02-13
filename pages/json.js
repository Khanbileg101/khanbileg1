import { useEffect, useState } from "react";

export default function Json() {
    const [color, setColor] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://mongol-api-rest.vercel.app/Instruments");
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={`bg-${color}-800 h-screen`}>
            {data && data.map((item) => (
                <div key={item?.id}>{item?.id}</div>
            ))}
            <button className="bg-red-800 border p-4 m-4"
            onClick={() => setColor("red")}>
                red
            </button>

            <button className="bg-green-800 border p-4 m-4"
            onClick={() => setColor("green")}>
                green
            </button>

            <button className="bg-blue-800 border p-4 m-4"
            onClick={() => setColor("blue")}>
                blue
            </button>
        </div>
    )
}