import {cadastrarJogador, loginAll, pegarJogadorPorEmail} from "../Services/jogadorService.js";
import {validarCadastroJogador, validarLoginJogador} from "../Validators/Jogadores/jogadorValidator.js";

const cadastro = async (request, response) => {
    const objVazio = Object.keys(request.body).length === 0;
    if (!objVazio) {
        const dados = {
            data: {
                ...request.body
            }
        }
        try {

            await validarCadastroJogador().validate(request.body, {abortEarly: false});
            const jogadorExiste = await pegarJogadorPorEmail(request.body.email);
            const {meta} = jogadorExiste.data;
            if(meta.pagination.total > 0) {
                request.session.sessionFlash = {
                    type: "error",
                    style: "danger",
                    message: `O email ${request.body.email} já está cadastrado.`
                }
                return response.redirect("/cadastro")
            }
            const criarJogador = await cadastrarJogador(dados);
            request.session.user = {
                ...request.body
            }
            return response.redirect("/");
        } catch (e) {
            if (typeof e.inner !== 'undefined') {
                request.session.sessionFlash = {
                    type: "error",
                    style: "danger",
                    message: e.errors
                }
                return response.redirect("/cadastro")
            }
            console.log(e.errors)
        }

    }


    response.locals = {title: "Cadastro"};
    response.render("jogador/cadastro");
}

const login = async (request, response) => {
    const objVazio = Object.keys(request.body).length === 0;
    if (!objVazio) {
        const dados = {
            ...request.body
        }
        try {
            await validarLoginJogador().validate(request.body, {abortEarly: false});
            const logado = await loginAll(dados);
            const {user, status} = logado.data
            console.log(user, status);
            if (status === "success") {
                request.session.user = user;
                if (user.perfil === "jogador") {
                    return response.redirect("/");
                } else {
                    return response.redirect("/campanha");
                }
            } else {
                const { data } = logado.data
                request.session.sessionFlash = {
                    type: "error",
                    style: "danger",
                    message: data.message
                }
                return response.redirect("/login")
            }
        } catch (e) {
            if (typeof e.inner !== 'undefined') {
                request.session.sessionFlash = {
                    type: "error",
                    style: "danger",
                    message: e.errors
                }
                return response.redirect("/login")
            }
            console.log(e.errors)
        }
    }
    response.locals = {title: "Login"};
    response.render("autenticacao/login");
}

const logout = (request, response) => {
    request.session.destroy();
    return response.redirect("/login")
}

export {
    cadastro, login, logout
}