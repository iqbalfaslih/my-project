const express = require("express");
const router = express.Router();

const users = [
    {id: 1, name: "agus"},
    {id: 2, name: "dwi"},
    {id: 3, name: "wijaya"},
];

// GET semua users
router.get("/", (req, res) => {
    res.json(users);
});

// GET user berdasarkan ID
router.get("/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({message: "user tidak ditemukan"});
    res.json(user);
});

module.exports = router;
