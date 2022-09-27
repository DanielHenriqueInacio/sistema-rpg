import * as url from 'url';
import express from "express";
import session from "express-session";
import expressLayouts from "express-ejs-layouts";
import {resolve} from 'path';
import routers from "./routes/routes.js";
import cookieParser from "cookie-parser";
import sessionFlash from "./App/Middlewares/sessionFlashMiddleware.js";
import sessionUser from "./App/Middlewares/sessionUserMiddleware.js";
import "dotenv/config";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const timeLimit = (1000 * 60 * 60 * 24) * 30;

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(session({
    secret: "c6cd6f179d4c5b660a60ee9381f564c5",
    resave: false,
    cookie: { maxAge: timeLimit },
    saveUninitialized: true
}));
app.use(cookieParser());

app.use(sessionFlash);
app.use(sessionUser);

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(expressLayouts);
app.use('/static', express.static(resolve(__dirname, '..', 'public')));

if (process.env.DEBUG_SESSION === true) {
    app.use((request, response, next) => {
        console.log("LOCALS", request.app.locals);
        console.log("SESSION", request.session)
        next();
    });
}

for(const router of routers) {
    app.use(router)
}
const port = process.env.APP_PORT;
app.listen(port, () => {console.log(`A aplicacao esta rodando na porta ${port}...`)});