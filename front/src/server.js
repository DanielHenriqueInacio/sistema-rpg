import * as url from 'url';
import express from "express";
import expressLayouts from "express-ejs-layouts";
import {resolve} from 'path';
import routers from "./routes/routes.js";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(expressLayouts);
app.use('/static', express.static(resolve(__dirname, '..', 'public')));

for(const router of routers) {
    app.use(router)
}

app.listen(3000, () => {console.log("A aplicacao esta rodando...")});