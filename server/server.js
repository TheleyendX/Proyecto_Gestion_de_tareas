const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

//Permite procesar JSON
app.use(bodyParser.json());

//Ruta de prueba
app.get("/", (req, res)=> {
    res.send("Servidor funcionando ");
});

//Inicia el servidor
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});