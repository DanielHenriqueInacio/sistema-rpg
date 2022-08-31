import {Router} from "express";
import {campanhaMestre, historiaMestre} from "../App/Controllers/MestreControllers.js";
const mestreRouter = new Router();

mestreRouter.use((req, res, next) => {
    req.app.set('layout', 'layout-mestre');
    next();
});

mestreRouter.get("/campanha", campanhaMestre);
mestreRouter.get("/historia", historiaMestre);

export default mestreRouter;