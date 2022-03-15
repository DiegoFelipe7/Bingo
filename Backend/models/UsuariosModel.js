const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SchemaUsuarios = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
      trim: true,
    },
    apellido: {
      type: String,
      require: true,
      trim: true,
    },

    email: {
      type: String,
      require: true,
      trim: true,
    },

    password: {
      type: String,
      require: true,
      trim: true,
    },
    token: {
      type: String,
    },
    estado: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);
SchemaUsuarios.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
SchemaUsuarios.methods.comprobarPassword = async function (passwordFormulario) {
  return await bcrypt.compare(passwordFormulario, this.password); //esta funcion retorna tru o false
};
module.exports = mongoose.model("usuario", SchemaUsuarios);
