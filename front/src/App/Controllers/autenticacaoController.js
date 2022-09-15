import {cadastrarJogador, loginAll, pegarJogadorPorEmail, pegarJogadorPorToken, alterarJogador} from "../Services/jogadorService.js";
import {validarCadastroJogador, validarLoginJogador} from "../Validators/Jogadores/jogadorValidator.js";
import mailer from "../../config/mailer.js";
import {uuid} from "uuidv4";

const cadastro = async (request, response) => {
    console.log(uuid())
    const objVazio = Object.keys(request.body).length === 0;
    if (!objVazio) {
        const token = uuid();
        const dados = {
            data: {
                ...request.body,
                token
            }
        }
        try {

            await validarCadastroJogador().validate(request.body, {abortEarly: false});
            const jogadorExiste = await pegarJogadorPorEmail(request.body.email);
            const {meta} = jogadorExiste.data;
            if (meta.pagination.total > 0) {
                request.session.sessionFlash = {
                    type: "error",
                    style: "danger",
                    message: `O email ${request.body.email} já está cadastrado.`
                }
                return response.redirect("/cadastro")
            }
            const criarJogador = await cadastrarJogador(dados);
            const url = `${process.env.FRONT_URL}/validar-email-jogador/${token}`;
            const mensagem = `<strong>Olá ${request.body.nome},<br><br></strong>
                  Para poder acessar o sistema de RPG, você precisa validar seu e-mail.<br>
                  Para isso, basta <a href="${url}">clicar aqui</a>.<br><br><br>
                  Caso não consiga clicar no link acima, copie e cole o endereço abaixo no navegador:<br><br>
                  <em>${url}</em><br><br><br>
                  Bons jogos!<br><br>
                  Equipe Sistema RPG`;
            const mail = await mailer.sendMail({
                from: 'Sistema RPG <sistema@teste.com.br>', // sender address
                to: `${request.body.nome} <${request.body.email}>`, // list of receivers
                subject: `${request.body.nome}, estamos quase lá!`, // Subject line
                html: mensagem, // html body

            });

            request.session.sessionFlash = {
                type: "success",
                style: "success",
                message: "Cadastro realizado com sucesso! Verifique seu e-mail para validar!"
            }
            return response.redirect("/cadastro");

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

            if (status === "success") {
                request.session.user = user;
                if (user.perfil === "jogador") {
                    return response.redirect("/");
                } else {
                    return response.redirect("/campanha");
                }
            } else {
                const {data} = logado.data
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

const validarEmailJogador = async (request, response) => {

    try {
        const token = request.params.token
        const resultado = await pegarJogadorPorToken(token);
        const jogador = {
            data: {
                ...resultado.data.data[0]
            }
        }

        jogador.data.email_verificado = true;
        const jogadorAlterado = await alterarJogador(jogador, jogador.data.id);
        request.session.user = jogadorAlterado.data.data

        const msg = `Parabéns ${jogadorAlterado.data.data.nome}. Já está tudo pronto para você usar o sistema. Você já pode
            criar seu primeiro personagem <a href="/cadastro-personagem"> clicando aqui. </a> <br><br> Aproveite!!!`;
        request.session.sessionFlash = {
            type: "success",
            style: "success",
            message: msg
        }

        return response.redirect("/")
    } catch (e) {
        console.log(e);
    }
}

export {
    cadastro, login, logout, validarEmailJogador
}