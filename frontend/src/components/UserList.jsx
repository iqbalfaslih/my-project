import React from "react";

const UserList = ({ users }) => {
  return (
    <ul className="max-w-md mx-auto mt-6 space-y-3">
      {users.map((user) => (
        <li
          key={user.id}
          className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm hover:shadow-md transition"
        >
          <p className="text-xs text-slate-500">#{user.id}</p>
          <p className="text-base font-semibold text-slate-800 capitalize">
            {user.name}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
