import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const createUsers = async (data) => {
  const res = await api.post("/users", data);
  return res.data;
};

export const deleteUser = async (id) => {
  try {
    await api.delete(`/users/${id}`);
  } catch (err) {
    throw new Error("Gagal menghapus user");
  }
};

export const updateUser = async (id, data) => {
  try {
    await api.put(`/users/${id}`, data);
  } catch (err) {
    throw new Error("Gagal mengupdate user");
  }
};
