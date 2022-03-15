import { LISTADOBINGO, GUARDARLISTADOBINGO } from "../../types";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case LISTADOBINGO:
      return { ...state, listadobingo: action.payload };
    case GUARDARLISTADOBINGO:
      return {
        ...state,
        listadobingo: [...state.listadobingo, action.payload],
      };
    default:
      return state;
  }
};
