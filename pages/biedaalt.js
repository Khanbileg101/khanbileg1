import { useState } from "react";

const usersdata = [
  { id: 1, name: "Amartuvshin", email: "Aquapor@gmail.com" },
  { id: 2, name: "Anar", email: "Anar@gmail.com" },
  { id: 3, name: "Anar-Erdene", email: "Anar-Erdene@gmail.com" },
  { id: 4, name: "Batmend", email: "Batmend@gmail.com" },
  { id: 5, name: "Tugs-Asralt", email: "Tugs-Asralt@gmail.com" },
  { id: 6, name: "B.Temuujin", email: "Temka@gmail.com" },
  { id: 7, name: "SH.Temuujin", email: "Temka@gmail.com" },
  { id: 8, name: "E.Temuujin", email: "Temka@gmail.com" },
  { id: 9, name: "Temuulen", email: "temuulen@gmail.com" },
  { id: 10, name: "Tergel", email: "Trgl@gmail.com" },
  { id: 11, name: "Khanbileg", email: "khanbileg7@gmail.com" },
  { id: 12, name: "Tselmeg", email: "Tselmeg@gmail.com" },
  { id: 13, name: "Choi-odser", email: "Choi-Odser@gmail.com" },
  { id: 14, name: "Shine-Erdene", email: "Shinee@gmail.com" },
  { id: 15, name: "Enkhjav", email: "Reverra@gmail.com" },
  { id: 16, name: "Enkhtugs", email: "Enktugs@gmail.com" },
  { id: 17, name: "Enkh-Uchral", email: "Moon@gmail.com" },
  { id: 18, name: "Emily", email: "Emily@gmail.com" },
  { id: 19, name: "Dalaisuren", email: "Dalaisuren@gmail.com" },
  { id: 20, name: "Ochir-Erdene", email: "Ochir-Erdene@gmail.com" },
];

export default function Student() {
  const [users, setUsers] = useState(usersdata);
  const [search, setSearch] = useState("");
  const [isGridView, setIsGridView] = useState(true);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log("search", search);
   console.log("filtered", filteredUsers);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900 drop-shadow-lg">
        Ангийн мэйл хаягууд
      </h1>

      <div className="mb-8 flex items-center justify-between">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Хэрэглэгчийн нэрээр хайна уу ..."
          className="flex-grow p-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setIsGridView(!isGridView)}
          className="ml-4 flex items-center px-5 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          {isGridView ? "List View ээр харах" : "Grid View ээр хара"}
        </button>
      </div>

      <div
        className={
          isGridView
            ? "grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : "space-y-6"
        }
      >
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-xl rounded-lg p-6 transform hover:scale-105 transition-transform border border-gray-200"
            >
              <div>
                <p className="text-xl font-semibold text-gray-800">
                  {user.name}
                </p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 text-lg font-medium">
            Хэрэглэгч олдсонгүй.
          </p>
        )}
      </div>
    </div>
  );
}
