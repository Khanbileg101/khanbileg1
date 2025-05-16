import axios from "axios";
import { useState } from "react";

export default function Post() {
  const [name, setName] = useState("");
  const [ovog, setOvog] = useState("");

  const handleSubmit = () => {
    axios.post("http://localhost:8080/createUser", {
      name,
      ovog,
    });
  };
  console.log(name, ovog);

  return (
    <div className="ml-2">
      <div className="flex items-center">
        <p className="text-3xl font-bold">Post page:</p>
        <button className="bg-blue-400 rounded-2xl p-3 m-4 text-2xl text-white cursor-pointer">
          Create users
        </button>
      </div>
      <div className="text-3xl space-y-4">
        <div>
          <label>Нэр:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="border rounded-lg bg-white ml-2 p-3 text-black"
            placeholder="Нэр оруулна уу"
          />
        </div>
        <div>
          <label>Овог:</label>
          <input
            type="text"
            value={ovog}
            onChange={(e) => setOvog(e.target.value)}
            className="border rounded-lg bg-white ml-2 p-3 text-black"
            placeholder="Овог оруулна уу"
          />
        </div>
        <button
          onClick={() => handleSubmit()}
          className="rounded-lg bg-green-400 border p-3 text-xl text-white"
        >
          Хадгалах
        </button>
      </div>
    </div>
  );
}