import {Router} from "express";
import {cadastro, login, logout, validarEmailJogador} from "../App/Controllers/autenticacaoController.js";
const defaultRouter = new Router();

defaultRouter.use((req, res, next) => {
    req.app.set('layout', 'layout-branco');
    next();
});

defaultRouter.get("/cadastro", cadastro);
defaultRouter.post("/cadastro", cadastro);
defaultRouter.get("/login", login);
defaultRouter.post("/login", login);
defaultRouter.get("/logout", logout);
defaultRouter.get("/validar-email-jogador/:token", validarEmailJogador)

export default defaultRouter;