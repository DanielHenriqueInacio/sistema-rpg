import {Router} from "express";
import {cadastro, login} from "../App/Controllers/autenticacaoController.js";
const autenticacaoRouter = new Router();

autenticacaoRouter.use((req, res, next) => {
    req.app.set('layout', 'layout-branco');
    next();
});

autenticacaoRouter.get("/cadastro", cadastro);
autenticacaoRouter.get("/login", login);

export default autenticacaoRouter;