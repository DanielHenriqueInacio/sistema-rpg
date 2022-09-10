import * as url from 'url';
import express from "express";
import session from "express-session";
import expressLayouts from "express-ejs-layouts";
import {resolve} from 'path';
import routers from "./routes/routes.js";
import "dotenv/config";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(session({
    secret: "ghost",
    resave: true,
    saveUninitialized: true
}));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(expressLayouts);
app.use('/static', express.static(resolve(__dirname, '..', 'public')));
app.use((req, res, next) => {
    res.locals.jogador = {nome: "jubileu"};
    next();
})

for(const router of routers) {
    app.use(router)
}
const port = process.env.APP_PORT;
app.listen(port, () => {console.log(`A aplicacao esta rodando na porta ${port}...`)});