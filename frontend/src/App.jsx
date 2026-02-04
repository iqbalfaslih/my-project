import React, {useEffect, useState} from "react";
import { fetchUsers } from "./services/api";
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


  return(
    <div className="bg-green-600">
      <h1>Daftar Users</h1>
      <h1>Daftar Users</h1>
      <h1>Daftar Users</h1>
      <h1>Daftar Users</h1>
      <h1>Daftar Users</h1>
      <h1>Daftar Users</h1>
      <h1>Daftar Users</h1>
      <UserList users={users}/>
    </div>
  );
}

export default App;