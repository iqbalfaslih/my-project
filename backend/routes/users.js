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

  users = users.map(user =>
    user.id === id ? { ...user, name } : user
  );

  res.json({ message: "User berhasil diupdate" });
});

module.exports = router;
