import React from "react";

const UserList = ({users}) => {
    return(
        <ul>
            {users.map((user) =>(
            <li key={user.id}>
                <p>{user.id}</p>
                <p>{user.name}</p>
            </li>
            ))}
        </ul>
    );
};

export default UserList;