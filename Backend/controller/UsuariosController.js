const UsuarioModel = require("../models/UsuariosModel");
const GenerarToken = require("../helpers/GenerarToken");
const GenerarId = require("../helpers/GenararId");
exports.getUsuarios = (req, res) => {
  UsuarioModel.find()
    .then((userResult) => {
      res.status(201).json(userResult);
    })
    .catch((error) => {
      res.status(500).json(error);
      console.log("ocurrio un error" + error);
    });
};

exports.saveUsuarios = (req, res) => {
  const { email } = req.body;
  UsuarioModel.findOne({ email: email })
    .then((emailResult) => {
      if (emailResult) {
        res.status(500).json({ msg: "Este usuario ya existe" });
      } else {
        const users = new UsuarioModel({
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          email: req.body.email,
          password: req.body.password,
          token: GenerarId(),
        });
        users
          .save()
          .then((userResult) => {
            res.status(201).json(userResult);
          })
          .catch((err) => {
            res.status(400).json({ msg: "Ocurrio un error" });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ msg: "Ocurrio un error" });
    });
};

exports.authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  const usuarios = await UsuarioModel.findOne({ email: email });
  if (!usuarios) {
    res.status(404).json({ msg: "Usuario no existe" });
  }
  if (await usuarios.comprobarPassword(password)) {
    const usu = {
      _id: usuarios.id,
      nombre: usuarios.nombre,
      email: usuarios.email,
      token: GenerarToken(usuarios.id),
    };
    res.status(201).json(usu);
  } else {
    res.status(404).json({ msg: "Contraseña incorrecta" });
  }
};
exports.Perfil = async (req, res) => {
  const { usuario } = req;
  res.json(usuario);
};
