import { useContext } from "react";
import UsuarioContex from "../../contex/Usuarios/UsuariosContex";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Lateral = () => {
  const navegacion = useNavigate();
  const usuariocontex = useContext(UsuarioContex);
  const { exitGame, select_user } = usuariocontex;
  //hook de la locacion
  const location = useLocation();
  const urlActual = location.pathname;
  const { nombre, apellido } = select_user;
  const cerrarSesion = () => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Estas apunto de salir del aplicativo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si,salir",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        exitGame();
        navegacion("/");
      }
    });
  };
  const enviarUser = (select_user) => {
    navegacion("/menu/iniciar");
  };
  return (
    <>
      <div className="col-3 bg-dark vh-100 ">
        <h3 className="text-center text-white fw-bold mb-5">
          Hola {nombre} {apellido}{" "}
        </h3>
        <h5 className="text-center text-white fw-bold ">
          BIENVENIDO A BINGO AL BINGO
        </h5>
        <nav className="nav flex-column justify-content-center align-items-center ">
          <br></br>
          <button
            className="btn btn-dark fw-bold"
            onClick={() => enviarUser(select_user)}
          >
            Inicar Juego
          </button>

          <button
            className="btn btn-dark fw-bold"
            onClick={() => cerrarSesion()}
          >
            Cerrar Sesión
          </button>
        </nav>
      </div>
    </>
  );
};

export default Lateral;
