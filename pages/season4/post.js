import axios from "axios";
import { useState, useEffect } from "react";

export default function Post() {
  const [name, setName] = useState("");
  const [ovog, setOvog] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [users, setUsers] = useState([]);
  
  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/createUsers", {
        first_name: name,
        last_name: ovog,
        email: email,
        age: age,
      })
      .then(() => {
        fetchUsers();
        setName("");
        setOvog("");
        setemail("");
        setage("");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:8080/deleteUser/${userId}`)
      .then(() => {
        fetchUsers();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:8080/getUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };


  return (
    <div className="ml-2 text-white">
      <div className="flex items-center">
        <p className="text-3xl font-bold">Post page:</p>
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
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="border rounded-lg bg-white ml-2 p-3 text-black"
            placeholder="Email оруулна уу"
          />
        </div>
        <div>
          <label>Нас:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setage(e.target.value)}
            className="border rounded-lg bg-white ml-2 p-3 text-black"
            placeholder="Нас оруулна уу"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="rounded-lg bg-green-400 border p-3 text-xl text-white"
        >
          Хадгалах
        </button>
      </div>

      <div className="mt-10 text-white">
        <h2 className="text-2xl font-bold mb-4">Хэрэглэгчдийн жагсаалт:</h2>
        <ul className="space-y-3">
          {users.map((user) => (
            <li key={user.id} className="bg-gray-100 p-4 rounded text-black flex justify-between items-center">
              <div>
                {user.first_name} {user.last_name} - {user.email}, {user.age} настай
              </div>
              <button
                onClick={() => handleDelete(user.id)}
                className="rounded-lg bg-red-400 border p-2 text-white"
              >
                Устгах
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}