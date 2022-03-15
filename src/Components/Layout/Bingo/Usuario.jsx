import Usuarios from "./Usuarios";
import UsuarioContex from "../../../contex/Usuarios/UsuariosContex";
import BingoContex from "../../../contex/Bingo/BingoContex";
import { useContext, useEffect } from "react";
const Usuario = () => {
  const usuariocontex = useContext(UsuarioContex);
  const bingocontex = useContext(BingoContex);
  const { select_user } = usuariocontex;
  const { listadobingo, ListadoBingoAlBingo } = bingocontex;

  useEffect(() => {
    ListadoBingoAlBingo();
  }, [ListadoBingoAlBingo]);
  return (
    <>
      <div className="container">
        <h2 className="fw-bold text-center text-uppercase">
          Jugadores en esta partida
        </h2>
        <table className="table">
          <thead className="bg-dark text-white text-center">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
            </tr>
          </thead>
          <tbody>
            {listadobingo.map((listado) => (
              <Usuarios key={listado.id} listado={listado} />
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <table className="table">
          <thead className="bg-dark text-white text-center">
            <tr>
              <th scope="col">B</th>
              <th scope="col">I</th>
              <th scope="col">N</th>
              <th scope="col">G</th>
              <th scope="col">0</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
};

export default Usuario;
/*<table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
        
        </tbody>
      </table>*/
