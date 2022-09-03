import axios from "../../config/axios.js";

const listarIdioma = () => axios.get("/idiomas");

export {
    listarIdioma
}