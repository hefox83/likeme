const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "likeme_desafio",
    password: "1234",
    allowExitOnIdle: true,
});

const leerPost = async () => {
    const { rows } = await pool.query("SELECT * FROM posts;");
    return rows;
};
const escribirPost = async (titulo, url, descripcion) => {
    const consulta = "INSERT INTO posts (titulo, img, url, descripcion) VALUES ($1,$2,$3,0)";
    const values = [titulo, url, descripcion];
    const result = await pool.query(consulta, values);
    console.log("Post fue agregado con exito");
};


module.exports = { leerPost, escribirPost }; 