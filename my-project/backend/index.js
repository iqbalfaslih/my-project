const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) =>{
    res.send("Backend berhasil");
});

app.listen(PORT, () => {
    console.log(`server berjalan di http://localhost:${PORT}`);
});