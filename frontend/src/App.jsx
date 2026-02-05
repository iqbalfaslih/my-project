import React, { useEffect, useState } from "react";
import { fetchUsers, createUsers, deleteUser, updateUser } from "./services/api";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  // Ambil data awal saat load
  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  // Tambah user
  const handleAddUser = async () => {
    const name = prompt("Masukkan nama user baru:");
    if (!name) {
      alert("Nama tidak boleh kosong");
      return;
    }

    try {
      const newUser = await createUsers({ name });
      setUsers((prev) => [...prev, newUser]);
    } catch (err) {
      alert("Gagal menambahkan user");
      console.error(err);
    }
  };

  // Hapus user
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      alert("Gagal menghapus user");
      console.error(err);
    }
  };

  // Edit user
  const handleEdit = async (user) => {
    const newName = prompt("Masukkan nama baru:", user.name);
    if (!newName) return;

    try {
      await updateUser(user.id, { name: newName });
      setUsers((prev) =>
        prev.map((u) => (u.id === user.id ? { ...u, name: newName } : u))
      );
    } catch (err) {
      alert("Gagal mengupdate user");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
        Daftar Users
      </h1>

      <button
        onClick={handleAddUser}
        className="mb-6 px-6 py-2 bg-green-500 text-white font-semibold rounded-xl shadow hover:bg-green-600 transition"
      >
        Tambah User
      </button>

      <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
