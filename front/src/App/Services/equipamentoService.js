import axios from "../../config/axios.js";

const listarArmas = () => axios.get("/equipamentos?filters[tipo_equipamento][$eq]=arma");
const listarArmaduras = () => axios.get("/equipamentos?filters[tipo_equipamento][$eq]=armadura");
const listarOrnamentos = () => axios.get("/equipamentos?filters[tipo_equipamento][$eq]=ornamento");

export {
    listarArmas,
    listarArmaduras,
    listarOrnamentos
}