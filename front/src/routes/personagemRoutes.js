import {Router} from "express";
import {
    cadastroAtributos,
    cadastroPersonagem,
} from "../App/Controllers/JogadorController.js";
import authMiddleware from "../App/Middlewares/authMiddleware.js";

const personagemRouter = new Router();

personagemRouter.use((req, res, next) => {
    req.app.set('layout', 'layout-jogador');
    next();
});

personagemRouter.get("/cadastro-personagem", authMiddleware, cadastroPersonagem);
personagemRouter.get("/cadastro-atributos", authMiddleware, cadastroAtributos);

export default personagemRouter;