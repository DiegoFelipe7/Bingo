import { useContext, useEffect, useState } from "react";
import Correo from "../../icons/Correo";
import Password from "../../icons/Password";
import Iniciar from "../../icons/Iniciar";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UsuarioContex from "../../contex/Usuarios/UsuariosContex";
const Login = () => {
  const navegacion = useNavigate();
  const usuariocontex = useContext(UsuarioContex);
  const { LoginUser, select_user, mensaje_login } = usuariocontex;
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = login;
  useEffect(() => {
    if (mensaje_login) {
      Swal.fire(`${mensaje_login}`);
    }
  }, [mensaje_login]);

  const LoginUsuario = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      Swal.fire("Todos los campos son obligatorios");
    } else {
      LoginUser(login);
    }
  };
  return (
    <>
      {select_user ? navegacion("/menu") : null}
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark ">
        <form
          className="w-25  h-50 border p-5 bg-white shadow rounden "
          autoComplete="off"
          onSubmit={LoginUsuario}
        >
          <h3 className="text-dark fw-bold">Inicio de sesión</h3>
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
                setlogin({ ...login, [e.target.name]: e.target.value })
              }
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
                setlogin({ ...login, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="mt-2">
            <button className="btn btn-dark w-100 fw-bold">
              <Iniciar /> Iniciar
            </button>
          </div>
          <div className="mb-5 float-end">
            <Link
              className="btn btn-link text-dark text-decoration-none"
              to={"nuevo-registro"}
            >
              Registro
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
