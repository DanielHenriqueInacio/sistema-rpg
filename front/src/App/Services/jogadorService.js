import axios from "../../config/axios.js";

const cadastrarJogador = (dados) => axios.post("/jogadores", dados);
const loginAll = (dados) => axios.post("/jogadores/login", dados);
const pegarJogadorPorEmail = (email) => axios.get(`/jogadores?filters[email]=${email}`);

export {
    cadastrarJogador,
    loginAll,
    pegarJogadorPorEmail
}