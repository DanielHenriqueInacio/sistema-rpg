import {response} from "express";

const Home = (request, response) => {
    response.locals = {title: "Home"};
    response.render("jogador/home");
}

const informacaoPersonagem = (request, response) => {
   response.locals = {title: "Ver tela do Jogador"};
   response.render("jogador/modals/informacoes-personagem");
}

const caracteristicasBasicas = (request, response) => {
    response.locals = {title: "abc"};
    response.render("jogador/modals/caracteristicas-basicas");
}

const idiomasEBens = (request, response) => {
    response.locals = {title: "idiomas"};
    response.render("jogador/modals/idiomas-dinheiro-bens");
}

const atributosPersonagem = (request, response) => {
    response.locals = {title: "idiomas"};
    response.render("jogador/modals/atributos-personagem");
}

const subAtributos = (request, response) => {
    response.locals = {title: "idiomas"};
    response.render("jogador/modals/sub-atributos");
}

const armasArmaduras = (request, response) => {
    response.locals = {title: "idiomas"};
    response.render("jogador/modals/armas-armaduras");
}

const magias = (request, response) => {
    response.locals = {title: "idiomas"};
    response.render("jogador/modals/magias");
}

const pericias = (request, response) => {
    response.locals = {title: "idiomas"};
    response.render("jogador/modals/pericias");
}

const itensGerais = (request, response) => {
    response.locals = {title: "idiomas"};
    response.render("jogador/modals/itens-gerais");
}

const meusPersonagem = (request, response) => {
    response.locals = {title: "idiomas"};
    response.render("jogador/meus-personagens");
}

const minhasCampanhas = (request, response) => {
    response.locals = {title: "idiomas"};
    response.render("jogador/minhas-campanhas");
}


export {
    Home,
    informacaoPersonagem,
    caracteristicasBasicas,
    idiomasEBens,
    atributosPersonagem,
    subAtributos,
    armasArmaduras,
    magias,
    pericias,
    itensGerais,
    meusPersonagem,
    minhasCampanhas
}
