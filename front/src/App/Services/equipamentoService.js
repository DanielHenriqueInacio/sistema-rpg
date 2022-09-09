import axios from "../../config/axios.js";

const listarArmas = () => axios.get("/equipamentos?filters[tipo_equipamento][$eq]=arma&populate=deep");
const listarArmaduras = () => axios.get("/equipamentos?filters[tipo_equipamento][$eq]=armadura&populate=deep");
const listarOrnamentos = () => axios.get("/equipamentos?filters[tipo_equipamento][$eq]=ornamento&populate=deep");

export {
    listarArmas,
    listarArmaduras,
    listarOrnamentos
}