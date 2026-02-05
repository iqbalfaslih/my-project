const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "agus" },
  { id: 2, name: "mantap" },
  { id: 3, name: "wijaya" },
];

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// POST create user
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Nama user dibutuhkan" });

  const newId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
  const newUser = { id: newId, name };
  users.push(newUser);

  res.status(201).json(newUser);
});

// DELETE user
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.json({ message: "User berhasil dihapus" });
});

// PUT update user
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const userExists = users.some(user => user.id === id);
  if (!userExists) return res.status(404).json({ message: "User tidak ditemukan" });
  if (!name) return res.status(400).json({ message: "Nama user dibutuhkan" });

  users = users.map(user =>
    user.id === id ? { ...user, name } : user
  );

  res.json({ message: "User berhasil diupdate" });
});

module.exports = router;
