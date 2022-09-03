import axios from "../../config/axios.js";

const listarClasse = () => axios.get("/classes");

export {
    listarClasse
}