import axios from "../../config/axios.js";

const listarRacas = () => axios.get("/racas");

export {
    listarRacas
}