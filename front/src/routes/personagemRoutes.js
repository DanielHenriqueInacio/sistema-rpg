import {Router} from "express";
import {
    cadastroAtributos,
    cadastroPersonagem,
    Home,
    meusPersonagem,
    minhasCampanhas
} from "../App/Controllers/JogadorController.js";

const personagemRouter = new Router();

personagemRouter.use((req, res, next) => {
    req.app.set('layout', 'layout-jogador');
    next();
});

personagemRouter.get("/cadastro-personagem", cadastroPersonagem);
personagemRouter.get("/cadastro-atributos", cadastroAtributos);

export default personagemRouter;