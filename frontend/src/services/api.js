import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const updateUser = async (id, data) => {
  try {
    const res = await api.put(`/users/${id}`, data);
    return res.data;
  } catch (err) {
    throw new Error("Gagal mengupdate user");
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await api.delete(`/users/${id}`);
    return res.data;
  } catch (err) {
    throw new Error("Gagal menghapus user");
  }
};
