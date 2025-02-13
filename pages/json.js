import { useEffect, useState } from "react";

export default function Json() {
    const [color, setColor] = useState("");

    useEffect(() => {
        const fechData = async () => {
            return await fetch("https://mongol-api-rest.vercel.app/clothes")
        };

        fechData();
    }, [color]);

    console.log("color -->", color);

    return (
        <div className={`bg-${color}-800 h-screen`}>
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
    )
}