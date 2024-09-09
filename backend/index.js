const {leerPost, escribirPost} = require("./funciones.js");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;
 app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto 3000`)});

app.use(express.json());
app.use(cors());

app.get("/posts", async (req, res) => {
    const obtenerPosts = await leerPost();
    res.json(obtenerPosts);
});

app.post("/posts", async (req, res) => {
    const {titulo, url, descripcion} = req.body;
    await escribirPost(titulo,url,descripcion);
    res.send("Post fue agregado con exito"); 
});
