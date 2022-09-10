import {cadastrarJogador, loginAll} from "../Services/jogadorService.js";

const cadastro = async (request, response) => {
    const objVazio = Object.keys(request.body).length === 0;
    if(!objVazio) {
        const dados = {
            data: {
                ...request.body
            }
        }
        try{
            const criarJogador = await cadastrarJogador(dados);
            request.session.user = {
                ...request.body
            }
            return response.redirect("/");
        } catch (e) {
            console.log(e)
        }

    }


    response.locals = {title: "Cadastro"};
    response.render("jogador/cadastro");
}

const login = async (request, response) => {
    const objVazio = Object.keys(request.body).length === 0;
    if(!objVazio) {
        const dados = {
            ...request.body
        }
        const logado = await loginAll(dados);
        const {user, status} = logado.data
        console.log(user, status);
        if(status === "success") {
            request.session.user = user;
            if(user.perfil === "jogador") {
                return response.redirect("/");
            } else {
                return response.redirect("/campanha");
            }
        }
    }
    response.locals = {title: "Login"};
    response.render("autenticacao/login");
}

export {
    cadastro, login,
}