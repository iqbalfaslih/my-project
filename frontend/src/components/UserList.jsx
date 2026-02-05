import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
        Daftar Users
      </h1>

      <ul className="w-full max-w-lg space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between rounded-2xl border border-white/30 bg-white/80 backdrop-blur-md p-5 shadow-lg hover:scale-105 transform transition"
          >
            <div>
              <p className="text-sm text-gray-600">#{user.id}</p>
              <p className="text-lg font-semibold text-gray-800 capitalize">
                {user.name}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => onEdit(user)}
                className="px-4 py-2 bg-yellow-400 text-white font-medium rounded-xl shadow hover:bg-yellow-500 transition"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className="px-4 py-2 bg-red-500 text-white font-medium rounded-xl shadow hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
