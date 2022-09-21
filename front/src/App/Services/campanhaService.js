import axios from "../../config/axios.js";

const pegarCampanhaPorJogador = (id) => axios.get(`/campanha?filters[jogadores]=${id}&populate=*`);
const pegarCampanhaPorId = (id) => axios.get(`/campanha/${id}?populate=*`);


export {
    pegarCampanhaPorJogador,
    pegarCampanhaPorId
}
