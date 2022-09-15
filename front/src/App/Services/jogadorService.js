import axios from "../../config/axios.js";

const cadastrarJogador = (dados) => axios.post("/jogadores", dados);
const loginAll = (dados) => axios.post("/jogadores/login", dados);
const pegarJogadorPorEmail = (email) => axios.get(`/jogadores?filters[email]=${email}`);
const pegarJogadorPorToken = (token) => axios.get(`/jogadores?filters[token]=${token}`);
const alterarJogador = (jogador, id) => axios.get(`/jogadores/${id}`, jogador);

export {
    cadastrarJogador,
    loginAll,
    pegarJogadorPorEmail,
    pegarJogadorPorToken,
    alterarJogador
}