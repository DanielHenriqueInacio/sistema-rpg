import {listarRacas} from "../Services/racaService.js";
import {listarClasse} from "../Services/classeService.js";
import {listarIdioma} from "../Services/idiomasService.js";
import {listarArmaduras, listarArmas, listarOrnamentos} from "../Services/equipamentoService.js";
import {listarMagias} from "../Services/magiaService.js";
import {listarItens, listarPericias} from "../Services/complementoService.js";
import {
    pegarCampanhaPorJogador,
    pegarPersonagemPorJogador
} from "../Services/personagemService.js";

const Home = (request, response) => {
    response.locals = {title: "Home"};
    response.render("jogador/home");
}

const informacaoPersonagem = async (request, response) => {
    const racas = await listarRacas();
    const classes = await listarClasse();
    response.locals = {title: "Ver tela do Jogador"};
    response.render("jogador/modals/informacoes-personagem", {racas: racas?.data, classes: classes?.data});
}

const caracteristicasBasicas = (request, response) => {
    response.locals = {title: "abc"};
    response.render("jogador/modals/caracteristicas-basicas");
}

const idiomas = async (request, response) => {
    const idiomas = await listarIdioma();
    response.locals = {title: "idiomas"};
    response.render("jogador/modals/idiomas", {idiomas: idiomas?.data});
}

const dinheirBens = async (request, response) => {
    response.locals = {title: "Dinheiro e Bens"};
    response.render("jogador/modals/dinheiro-bens");
}

const atributosPersonagem = (request, response) => {
    response.locals = {title: "Atributos"};
    response.render("jogador/modals/atributos-personagem");
}

const subAtributos = (request, response) => {
    response.locals = {title: "Sub Atributos"};
    response.render("jogador/modals/sub-atributos");
}

const armas = async (request, response) => {
    const armas = await listarArmas();
    response.locals = {title: "Armas"};
    response.render("jogador/modals/armas", {armas: armas?.data, apiUrl: process.env.BASE_URL});
}

const armaduras = async (request, response) => {
    const armaduras = await listarArmaduras();
    response.locals = {title: "Armaduras"};
    response.render("jogador/modals/armaduras", {armaduras: armaduras?.data, apiUrl: process.env.BASE_URL});
}

const ornamentos = async (request, response) => {
    const ornamentos = await listarOrnamentos();
    response.locals = {title: "Ornamentos"};
    response.render("jogador/modals/ornamentos", {ornamentos: ornamentos?.data, apiUrl: process.env.BASE_URL});
}

const magias = async (request, response) => {
    const magias = await listarMagias();
    response.locals = {title: "Magias"};
    response.render("jogador/modals/magias", {magias: magias?.data});
}

const pericias = async (request, response) => {
    const pericias = await listarPericias()
    response.locals = {title: "Pericias"};
    response.render("jogador/modals/pericias", {pericias: pericias?.data});
}

const itensGerais = async (request, response) => {
    const itens = await listarItens()
    response.locals = {title: "Itens"};
    response.render("jogador/modals/itens-gerais", {itens: itens?.data});
}

const cadastroPersonagem = (request, response) => {
    response.locals = {title: "Cadastro"};
    response.render("jogador/personagens/cadastro-de-personagem");
}

const cadastroAtributos = (request, response) => {
    response.locals = {title: "Cadastro"};
    response.render("jogador/personagens/cadastro-atributos");
}

const meusPersonagem = async (request, response) => {
    const idJogador = request.session?.user?.id;
    const personagens = await pegarPersonagemPorJogador(idJogador);
    response.locals = {title: "Personagens"};
    response.render("jogador/personagens/meus-personagens", {personagens: personagens?.data});
}

const minhasCampanhas = async (request, response) => {
    const jogadorId = request.session?.user?.id;
    const campanhas = await pegarCampanhaPorJogador(jogadorId);
    response.locals = {title: "Campanhas"};
    response.render("jogador/minhas-campanhas", {campanhas: campanhas?.data});
}


export {
    Home,
    informacaoPersonagem,
    caracteristicasBasicas,
    idiomas,
    dinheirBens,
    atributosPersonagem,
    subAtributos,
    armas,
    armaduras,
    ornamentos,
    magias,
    pericias,
    itensGerais,
    cadastroPersonagem,
    cadastroAtributos,
    meusPersonagem,
    minhasCampanhas
}
