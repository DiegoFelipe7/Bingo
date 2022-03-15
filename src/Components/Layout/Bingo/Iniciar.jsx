import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsuarioContex from "../../../contex/Usuarios/UsuariosContex";
import BingoContex from "../../../contex/Bingo/BingoContex";
const Iniciar = () => {
  let navegacion = useNavigate();
  const usuariocontex = useContext(UsuarioContex);
  const bingocontex = useContext(BingoContex);
  const { select_user, ValidateToken } = usuariocontex;
  const { GuardarUsuarioBingo, CrearTarjeton } = bingocontex;
  const [estado, setEstado] = useState(true);
  const [minutos, setMinutos] = useState(4);
  const [segundos, setsegundos] = useState(59);
  useEffect(() => {
    if (select_user == null) {
      ValidateToken();
    }
  });
  useEffect(() => {
    var timer;
    timer = setInterval(() => {
      setsegundos(segundos - 1);
      if (segundos === 0) {
        setMinutos(minutos - 1);
        setsegundos(59);
      }
      if (minutos === 0 || segundos === 0) {
        setEstado(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  });
  const JugadoresJugando = () => {
    CrearTarjeton(select_user);
    GuardarUsuarioBingo(select_user);
    navegacion("/menu/usuario");
  };
  return (
    <>
      {select_user != null ? (
        <div className="container m-5">
          <h1 className="text-center fw-bold mb-2">BINGO AL BINGO</h1>
          <h3 className="text-center fw-bold text-uppercase mb-5">
            Sala de espera para jugadores
          </h3>

          {estado ? (
            <div className="d-flex justify-content-evenly align-content-center mb-5 ">
              <div className=" w-25 bg-white border shadow h-50 text-center">
                <h1 className="fw-bold">{minutos} </h1>
                <h2 className="text-center fw-bold">Minutos</h2>
              </div>
              <div className="w-25 bg-white border shadow text-center">
                <h1 className="fw-bold ">{segundos} </h1>
                <h2>Segundos</h2>
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-md-auto">
                  <button
                    className="btn btn-dark fw-bold w-100"
                    onClick={() => JugadoresJugando()}
                  >
                    Iniciar el juego
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        navegacion("/")
      )}
    </>
  );
};

export default Iniciar;
