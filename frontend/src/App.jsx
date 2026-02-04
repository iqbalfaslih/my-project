import React, {useEffect, useState} from "react";
import { fetchUsers, createUsers, deleteUser, updateUser } from "./services/api";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  },[]);
  
  const handleAddUser = async()=>{
    await createUsers({name: "budi"});
    const data = await fetchUsers();
    setUsers(data);
  };

  const handleDelete = async (id) =>{
    await deleteUser(id);
    const data = await fetchUsers();
    setUsers(data);
  };

  const handleEdit = async(user) => {
    const newName = prompt("masukkan nama baru:", user.name);
    if (newName) {
      await updateUser(user.id, {name: newName});
      const data = await fetchUsers();
      setUsers(data);
    }
  };

  return(
    <div className="p-16 bg-red-500">
      <h1>Daftar Users</h1>
      <button onClick={handleAddUser} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" >
        tambah
      </button>
      <UserList users={users}
       onDelete={handleDelete}
       onEdit={handleEdit}/>
    </div>
  );
}

export default App;