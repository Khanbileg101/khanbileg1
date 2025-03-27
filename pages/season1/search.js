import { useState } from "react";

const usersdata = [
    {id: 1, name: "Amartuvshin", email: "medhgu"},
    {id: 2, name: "Anar", email: "medhgu"},
    {id: 3, name: "Anar-Erdene", email: "medhgu"},
    {id: 4, name: "Batmend", email: "medhgu"},
    {id: 5, name: "Tugs-Asralt", email: "medhgu"},
    {id: 6, name: "B.Temuujin", email: "medhgu"},
    {id: 7, name: "SH.Temuujin", email: "medhgu"},
    {id: 8, name: "E.Temuujin", email: "medhgu"},
    {id: 9, name: "Temuulen", email: "temuulen@gmail.com"},
    {id: 10, name: "Tergel", email: "medhgu"},
    {id: 11, name: "Khanbileg", email: "khanbileg7@gmail.com"},
    {id: 12, name: "Tselmeg", email: "medhgu"},
    {id: 13, name: "Choi-odser", email: "medhgu"},
    {id: 14, name: "Shine-Erdene", email: "medhgu"},
    {id: 15, name: "Enkhjav", email: "medhgu"},
    {id: 16, name: "Enkhtugs", email: "medhgu"},
    {id: 17, name: "Enkhtugs", email: "medhgu"},
    {id: 18, name: "Emily", email: "medhgu"},
    {id: 19, name: "Dalaisuren", email: "medhgu"},
    {id: 20, name: "Ochir-Erdene", email: "medhgu"},
]


export default function Users() {
    const [users, setsUsers] = useState(usersdata);
    const [search, setSearch] = useState(" ");

   const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
   );

   console.log("search", search);
   console.log("filtered", filteredUsers);

   return(
    <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
            Хэрэглэгчийн жагсаалт
        </h1>
        <div className="mb-6">
            <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Хэрэглэгчийн нэрээр хайна уу ..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
        <div className="grid gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-medium text-gray-700">{user.name}</p> 
                <p className="text-sm text-black">{user.email}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-black">Хэрэглэгч олдсонгүй.</p>
        )}
        </div>
    </div>
   )
}
