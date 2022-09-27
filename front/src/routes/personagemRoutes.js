import {Router} from "express";
import {
    cadastroAtributos
} from "../App/Controllers/JogadorController.js";
import authMiddleware from "../App/Middlewares/authMiddleware.js";
import {cadastroPersonagem} from "../App/Controllers/personagemController.js";

const personagemRouter = new Router();

personagemRouter.use((req, res, next) => {
    req.app.set('layout', 'layout-jogador');
    next();
});

personagemRouter.get("/cadastro-personagem", authMiddleware, cadastroPersonagem);
personagemRouter.post("/cadastro-personagem", authMiddleware, cadastroPersonagem);
personagemRouter.get("/cadastro-atributos", authMiddleware, cadastroAtributos);

export default personagemRouter;