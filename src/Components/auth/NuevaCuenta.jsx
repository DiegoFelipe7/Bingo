import { useContext, useEffect, useState } from "react";
import Correo from "../../icons/Correo";
import Password from "../../icons/Password";
import Iniciar from "../../icons/Iniciar";
import Nombre from "../../icons/Nombre";
import { Link } from "react-router-dom";
import UsuarioContex from "../../contex/Usuarios/UsuariosContex";
import Swal from "sweetalert2";
const NuevaCuenta = () => {
  const usuariocontex = useContext(UsuarioContex);
  const { SaveUsers, mensaje } = usuariocontex;
  const [usuario, setusuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    if (mensaje) {
      Swal.fire(`${mensaje}`);
    }
  }, [mensaje]);
  const { nombre, apellido, email, password } = usuario;
  const SaveUsuario = (e) => {
    e.preventDefault();
    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      Swal.fire("Todos los campos son obligatorios");
    } else {
      SaveUsers(usuario);
      setusuario({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
      });
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
        <form
          className="w-50  border p-5 bg-white shadow rounden mt-5"
          autoComplete="off"
          onSubmit={SaveUsuario}
        >
          <h3 className="text-dark  fw-bold">Registro Usuarios</h3>
          <hr></hr>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              <Nombre /> Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) =>
                setusuario({ ...usuario, [e.target.name]: e.target.value })
              }
            />
          </div>{" "}
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label fw-bold">
              <Nombre /> Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              name="apellido"
              value={apellido}
              onChange={(e) =>
                setusuario({ ...usuario, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              <Correo /> Correo Electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) =>
                setusuario({ ...usuario, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              <Password /> Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) =>
                setusuario({ ...usuario, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="mt-2">
            <button className="btn btn-dark w-100 fw-bold">
              <Iniciar /> Registrarse
            </button>
          </div>
          <div className="mb-2 float-end">
            <Link
              className="btn btn-link text-dark text-decoration-none"
              to={"/"}
            >
              Inicio
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default NuevaCuenta;
/*<Link
className="btn btn-link text-dark text-decoration-none"
to={"nuevo-registro"}
>
Registro
</Link>*/
