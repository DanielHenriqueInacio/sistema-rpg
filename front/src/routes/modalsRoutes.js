import {Router} from "express";
import {
    armasArmaduras,
    atributosPersonagem,
    caracteristicasBasicas,
    idiomasEBens,
    informacaoPersonagem, itensGerais,
    magias, pericias,
    subAtributos
} from "../App/Controllers/JogadorController.js";
const modalRouter = new Router();

modalRouter.use((req, res, next) => {
    req.app.set('layout', 'layout-branco');
    next();
});

modalRouter.get("/personagem/informacoes", informacaoPersonagem);
modalRouter.get("/personagem/caracteristicas-basicas", caracteristicasBasicas);
modalRouter.get("/personagem/idiomas-bens", idiomasEBens);
modalRouter.get("/personagem/atributos", atributosPersonagem);
modalRouter.get("/personagem/sub-atributos", subAtributos);
modalRouter.get("/personagem/armas-armaduras", armasArmaduras);
modalRouter.get("/personagem/magias", magias);
modalRouter.get("/personagem/pericias", pericias);
modalRouter.get("/personagem/itens-gerais", itensGerais);

export default modalRouter;