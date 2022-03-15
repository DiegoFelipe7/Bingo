import {
  LISTADOREGISTRADOS,
  OBTENER_USUARIO,
  REGISTRO_EXITOSO,
  LOGIN_EXITOSO,
  REGISTRO_ERROR,
  ERROR_LOGIN,
  CERRARSECION,
  LISTADOBINGO,
} from "../../types";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case LISTADOREGISTRADOS:
      return {
        ...state,
        usuarios: action.payload,
      };

    case REGISTRO_EXITOSO:
      return {
        ...state,
        usuarios: [...state.usuarios, action.payload],
        mensaje: null,
      };
    case LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        mensaje_login: null,
      };
    case OBTENER_USUARIO:
      return {
        ...state,
        select_user: action.payload,
      };
    case REGISTRO_ERROR:
      return { ...state, mensaje: action.payload };
    case ERROR_LOGIN:
      return { ...state, mensaje_login: action.payload };
    case CERRARSECION:
      localStorage.removeItem("token");
    case LISTADOBINGO:
      return {
        ...state,
        listadobingo: [...state.listadobingo, action.payload],
      };
    default:
      return state;
  }
};
