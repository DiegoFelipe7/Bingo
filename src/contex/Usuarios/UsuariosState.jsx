import UsuarioContex from "./UsuariosContex";
import UsuariosReducer from "./UsuariosReducer";
import {
  LOGIN_EXITOSO,
  REGISTRO_EXITOSO,
  ERROR_LOGIN,
  OBTENER_USUARIO,
  LISTADOREGISTRADOS,
  REGISTRO_ERROR,
  CERRARSECION,
} from "../../types";
import { useReducer } from "react";
import clienteaxios from "../../config/axios";
const UsuariosState = (props) => {
  const initialValues = {
    usuarios: [],
    select_user: null,
    mensaje: null,
    mensaje_login: null,
  };
  const ValidateToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Token no existe");
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const resultado = await clienteaxios.get("/usuarios/perfil", config);
      dispatch({
        type: OBTENER_USUARIO,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const listUser = async () => {
    try {
      const respuesta = await clienteaxios.get("/usuarios");
      dispatch({
        type: LISTADOREGISTRADOS,
        payload: respuesta.data,
      });
    } catch (error) {}
  };
  const SaveUsers = async (user) => {
    try {
      const respuesta = await clienteaxios.post("/usuarios", user);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });
    } catch (err) {
      console.log(err.response.data.msg);
      dispatch({
        type: REGISTRO_ERROR,
        payload: err.response.data.msg,
      });
    }
  };
  const LoginUser = async (user) => {
    try {
      const respuesta = await clienteaxios.post("/usuarios/login", user);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data,
      });
      await ValidateToken();
    } catch (err) {
      dispatch({
        type: ERROR_LOGIN,
        payload: err.response.data.msg,
      });
    }
  };
  const exitGame = () => {
    dispatch({
      type: CERRARSECION,
      payload: null,
    });
  };

  const [state, dispatch] = useReducer(UsuariosReducer, initialValues);

  return (
    <UsuarioContex.Provider
      value={{
        usuarios: state.usuarios,
        select_user: state.select_user,
        mensaje: state.mensaje,
        mensaje_login: state.mensaje_login,
        listadobingo: state.listadobingo,
        SaveUsers,
        LoginUser,
        ValidateToken,
        listUser,
        exitGame,
      }}
    >
      {props.children}
    </UsuarioContex.Provider>
  );
};

export default UsuariosState;
