import { useReducer } from "react";
import BingoContex from "./BingoContex";
import BingoReducer from "./BingoReducer";
import { LISTADOBINGO, GUARDARLISTADOBINGO } from "../../types";
import clienteaxiosJava from "../../config/axiosJava";
const BingoState = (props) => {
  const initialValues = {
    listadobingo: [],
  };

  const ListadoBingoAlBingo = async () => {
    try {
      const respuesta = await clienteaxiosJava.get("/usuarios");
      dispatch({
        type: LISTADOBINGO,
        payload: respuesta.data,
      });
    } catch (error) {}
  };
  const GuardarUsuarioBingo = async (usu) => {
    try {
      const respuesta = await clienteaxiosJava.post("/usuarios", usu);
      dispatch({
        type: GUARDARLISTADOBINGO,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const CrearTarjeton = async (usu) => {
    try {
      const data = {
        _id: usu._id,
      };
      await clienteaxiosJava.post("/tarjeton", data);
    } catch (error) {
      console.log(error);
    }
    /*try {
      const respuesta = "http://localhost:9090/tarjeton";
      const resultado = await fetch(respuesta, {
        method: "POST",
        body: new URLSearchParams({
          _id: usu._id,
        }),
        headers: { "content-type": "application/x-www-form-urlencoded" },
      });
    } catch (error) {}*/
  };
  const [state, dispatch] = useReducer(BingoReducer, initialValues);

  return (
    <BingoContex.Provider
      value={{
        listadobingo: state.listadobingo,
        ListadoBingoAlBingo,
        GuardarUsuarioBingo,
        CrearTarjeton,
      }}
    >
      {props.children}
    </BingoContex.Provider>
  );
};

export default BingoState;
