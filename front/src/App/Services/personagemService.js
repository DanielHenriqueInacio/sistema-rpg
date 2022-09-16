import axios from "../../config/axios.js";

const pegarPersonagemPorJogador = (id) => axios.get(`/personagens?filters[jogador]=${id}&populate=*`);
const pegarCampanhaPorJogador = (id) => axios.get(`/campanha?filters[jogadores]=${id}&populate=*`);

export {
    pegarPersonagemPorJogador,
    pegarCampanhaPorJogador
}