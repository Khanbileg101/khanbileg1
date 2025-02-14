import { useEffect, useState } from "react";

export default function Json() {
    const [color, setColor] = useState("");
    const [data, setData] = useState([]);

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

    console.log(data.clothes);

    return (
        <div className="min-h-screen bg-red-100 p-5 flex flex-col items-center">
          <div className=" grid grid-cols-4 gap-4 m-4">
            {data?.clothes?.map((item) => (
                <div  key={item.id} className=" border-2 text-black bg-white shadow rounded p-4 items-center text-center">
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
        </div>
    )
}