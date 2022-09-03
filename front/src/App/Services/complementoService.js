import axios from "../../config/axios.js";

const listarPericias = () => axios.get("/complementos?filters[tipo][$eq]=pericia");
const listarItens = () => axios.get("/complementos?filters[tipo][$eq]=itens");

export {
    listarPericias,
    listarItens,
}