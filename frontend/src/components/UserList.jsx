import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <ul className="max-w-md mx-auto mt-6 space-y-3">
      {users.map((user) => (
        <li
          key={user.id}
          className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm hover:shadow-md transition"
        >
          <div>
            <p className="text-xs text-slate-500">#{user.id}</p>
            <p className="text-base font-semibold text-slate-800 capitalize">
              {user.name}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(user)}
              className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
