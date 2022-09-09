import {Router} from "express";
import {
    armaduras, armas, atributosPersonagem,
    caracteristicasBasicas, dinheirBens, idiomas,
    informacaoPersonagem, itensGerais,
    magias, ornamentos, pericias,
    subAtributos
} from "../App/Controllers/JogadorController.js";
const modalRouter = new Router();

modalRouter.use((req, res, next) => {
    req.app.set('layout', 'layout-branco');
    next();
});

modalRouter.get("/personagem/informacoes", informacaoPersonagem);
modalRouter.get("/personagem/caracteristicas-basicas", caracteristicasBasicas);
modalRouter.get("/personagem/idiomas", idiomas);
modalRouter.get("/personagem/dinheiro-bens", dinheirBens);
modalRouter.get("/personagem/atributos", atributosPersonagem);
modalRouter.get("/personagem/sub-atributos", subAtributos);
modalRouter.get("/personagem/armas", armas);
modalRouter.get("/personagem/armaduras", armaduras);
modalRouter.get("/personagem/ornamentos", ornamentos);
modalRouter.get("/personagem/magias", magias);
modalRouter.get("/personagem/pericias", pericias);
modalRouter.get("/personagem/itens-gerais", itensGerais);

export default modalRouter;