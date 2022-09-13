import {Router} from "express";
import {
    armaduras, armas, atributosPersonagem,
    caracteristicasBasicas, dinheirBens, idiomas,
    informacaoPersonagem, itensGerais,
    magias, ornamentos, pericias,
    subAtributos
} from "../App/Controllers/JogadorController.js";
import authMiddleware from "../App/Middlewares/authMiddleware.js";
const modalRouter = new Router();

modalRouter.use((req, res, next) => {
    req.app.set('layout', 'layout-branco');
    next();
});

modalRouter.get("/personagem/informacoes", authMiddleware, informacaoPersonagem);
modalRouter.get("/personagem/caracteristicas-basicas", authMiddleware, caracteristicasBasicas);
modalRouter.get("/personagem/idiomas", authMiddleware, idiomas);
modalRouter.get("/personagem/dinheiro-bens", authMiddleware, dinheirBens);
modalRouter.get("/personagem/atributos", authMiddleware, atributosPersonagem);
modalRouter.get("/personagem/sub-atributos", authMiddleware, subAtributos);
modalRouter.get("/personagem/armas", authMiddleware, armas);
modalRouter.get("/personagem/armaduras", authMiddleware, armaduras);
modalRouter.get("/personagem/ornamentos", authMiddleware, ornamentos);
modalRouter.get("/personagem/magias", authMiddleware, magias);
modalRouter.get("/personagem/pericias", authMiddleware, pericias);
modalRouter.get("/personagem/itens-gerais", authMiddleware, itensGerais);

export default modalRouter;