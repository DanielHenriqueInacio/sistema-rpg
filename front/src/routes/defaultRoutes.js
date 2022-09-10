import {Router} from "express";
import {cadastro, login} from "../App/Controllers/autenticacaoController.js";
const defaultRouter = new Router();

defaultRouter.use((req, res, next) => {
    req.app.set('layout', 'layout-branco');
    next();
});

defaultRouter.get("/cadastro", cadastro);
defaultRouter.post("/cadastro", cadastro);
defaultRouter.get("/login", login);
defaultRouter.post("/login", login);

export default defaultRouter;