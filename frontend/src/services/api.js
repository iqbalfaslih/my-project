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
  await api.delete(`/users/${id}`);
};

export const updateUser = async (id, data) => {
  await api.put(`/users/${id}`, data);
};
