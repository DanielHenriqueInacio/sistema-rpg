import axios from "../../config/axios.js";

const pegarHistoricoPorCampanha = (id_campanha) => axios.get(`/historicos-de-campanhas?filters[campanha]=${id_campanha}&populate=*`)

export {
    pegarHistoricoPorCampanha
}