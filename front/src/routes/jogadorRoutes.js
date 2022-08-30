import {Router} from "express";
import {Home, meusPersonagem, minhasCampanhas} from "../App/Controllers/JogadorController.js";
const jogadorRouter = new Router();

jogadorRouter.use((req, res, next) => {
    req.app.set('layout', 'layout-jogador');
    next();
});

jogadorRouter.get("/", Home);
jogadorRouter.get("/meus-personagens", meusPersonagem);
jogadorRouter.get("/minhas-campanhas", minhasCampanhas);

export default jogadorRouter;

