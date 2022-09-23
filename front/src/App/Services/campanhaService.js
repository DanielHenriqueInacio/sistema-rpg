import axios from "../../config/axios.js";

const pegarCampanhaPorJogador = (id) => axios.get(`/campanha?filters[personagens][jogador]=${id}&populate=*`);
const pegarCampanhaPorId = (id) => axios.get(`/campanha/${id}?populate=deep`);


export {
    pegarCampanhaPorJogador,
    pegarCampanhaPorId
}
