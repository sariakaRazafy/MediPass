// backend/index.js
const express = require("express");
const app = express();
const PORT = 5000;

// Route racine ajoutée
app.get("/", (req, res) => {
    res.json({ msg: "Backend MediPass OK ✅", info: "Utilise /api/test pour vérifier l'API" });
});

app.get("/api/test", (req, res) => {
    res.json({ msg: "API MediPass OK ✅" });
});

app.listen(PORT, () => {
    console.log(`Serveur backend lancé sur http://localhost:${PORT}`);
});
