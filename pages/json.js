import { useEffect, useState } from "react";

export default function Json() {
    const [color, setColor] = useState("");
    const [data, setData] = useState([]); // Add state for data

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
    }, []); // Remove color from dependency array unless you want to refetch on color change

    console.log("color -->", color);

    return (
        <div className={`${color === "red" ? "bg-red-800" : color === "blue" ? "bg-blue-800" : color === "green" ? "bg-green-800" : ""} h-screen`}>
            {data && data.map((item) => (
                <div key={item?.id}>{item?.id}</div>
            ))}
            <button className="bg-red-800 border p-4 m-4"
                onClick={() => setColor("red")}>
                red
            </button>

            <button className="bg-blue-800 border p-4 m-4"
                onClick={() => setColor("blue")}>
                blue
            </button>

            <button className="bg-green-800 border p-4 m-4"
                onClick={() => setColor("green")}>
                green
            </button>
        </div>
    );
}