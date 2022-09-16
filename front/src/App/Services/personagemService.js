import axios from "../../config/axios.js";

const pegarPersonagemPorJogador = (id) => axios.get(`/personagens?filters[jogador]=${id}&populate=*`);

export {
    pegarPersonagemPorJogador
}