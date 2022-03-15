const jwt = require("jsonwebtoken");
const GenerarToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d", //tiempo en experar el json
  });
};
module.exports = GenerarToken;
