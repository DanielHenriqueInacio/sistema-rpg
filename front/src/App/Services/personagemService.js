import axios from "../../config/axios.js";

const pegarPersonagemPorJogador = (id) => axios.get(`/personagens?filters[jogador]=${id}&populate=*`);
const cadastrarPersonagem = (dados) => axios.post(`/personagens`, dados);

export {
    pegarPersonagemPorJogador,
    cadastrarPersonagem
}