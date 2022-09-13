import {Router} from "express";
import {Home, meusPersonagem, minhasCampanhas} from "../App/Controllers/JogadorController.js";
import authMiddleware from "../App/Middlewares/authMiddleware.js";
const jogadorRouter = new Router();

jogadorRouter.use((req, res, next) => {
    req.app.set('layout', 'layout-jogador');
    next();
});

jogadorRouter.get("/", authMiddleware, Home);
jogadorRouter.get("/meus-personagens", authMiddleware, meusPersonagem);
jogadorRouter.get("/minhas-campanhas", authMiddleware, minhasCampanhas);

export default jogadorRouter;

