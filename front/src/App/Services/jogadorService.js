import axios from "../../config/axios.js";

const listarTodasArmas = () => axios.get("/armas");

export {
    listarTodasArmas
}