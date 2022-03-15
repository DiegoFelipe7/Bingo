import axios from "axios";
const clienteaxiosJava = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL_JAVA,
});
export default clienteaxiosJava;
