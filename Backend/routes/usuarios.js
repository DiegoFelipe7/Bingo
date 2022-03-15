const express = require("express");
const routes = express.Router();
const usuariosController = require("../controller/UsuariosController");
const CheckAut = require("../middleware/CheckAut");
routes.get("/", usuariosController.getUsuarios);
routes.post("/", usuariosController.saveUsuarios);
routes.post("/login", usuariosController.authenticateUser);
routes.get("/perfil", CheckAut, usuariosController.Perfil);
module.exports = routes;
