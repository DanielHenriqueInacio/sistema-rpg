import axios from "../../config/axios.js";

const listarMagias = () => axios.get("/magias");

export {
    listarMagias
}