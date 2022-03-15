const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const conectarDB = require("./config/db");
const usuario = require("./routes/usuarios");
const cors = require("cors");
const app = express();
conectarDB();
app.use(cors());
//HABLITAR EXPRESS JSON
app.use(logger("dev"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Definicio de las rutas
app.use("/usuarios", usuario);
module.exports = app;
