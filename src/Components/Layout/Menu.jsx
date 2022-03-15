import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UsuarioContex from "../../contex/Usuarios/UsuariosContex";
import Lateral from "./Lateral";
const Menu = () => {
  const navegacion = useNavigate();
  const usuariocontex = useContext(UsuarioContex);
  const { select_user, ValidateToken } = usuariocontex;
  useEffect(() => {
    if (select_user == null) {
      ValidateToken();
    }
  });

  return (
    <>
      {select_user != null ? (
        <div className=" w-100 row ">
          <Lateral />
          <div className="col-9 bg-light  ">
            <Outlet />
          </div>
        </div>
      ) : (
        navegacion("/")
      )}
    </>
  );
};

export default Menu;
