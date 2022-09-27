import {listarIdioma} from "../Services/idiomasService.js";
import {listarRacas} from "../Services/racaService.js";
import {listarClasse} from "../Services/classeService.js";
import {cadastrarPersonagem} from "../Services/personagemService.js";
import {validarCadastroPersonagem} from "../Validators/Personagens/personagensValidator.js";



const cadastroPersonagem = async (request, response) => {
    const idiomas = await listarIdioma();
    const racas = await listarRacas();
    const classes = await listarClasse();

    const objVazio = Object.keys(request.body).length === 0;
    if (!objVazio) {
        const dados = {
            data: {
                ...request.body,
                jogador: request.session.user.id,
                nivel: 1,
                pontos_experiencia: 0
            }
        }
        console.log("DEPOIS DATA REQUEST", dados);

        try {

            await validarCadastroPersonagem().validate(request.body, {abortEarly: false});

            const criarPersonagem = await cadastrarPersonagem(dados);

            const idUltimoPersonagemCadastrado = criarPersonagem.data.data.id;

            request.session.sessionFlash = {
                type: "success",
                style: "success",
                message: `Personagem ${dados.data.nome} foi cadastrado com sucesso!`
            }

            return response.redirect("/cadastro-personagem/");
        } catch (e) {
            if (typeof e.inner !== 'undefined') {
                request.session.sessionFlash = {
                    type: "error",
                    style: "danger",
                    message: e.errors
                }
                return response.redirect("/cadastro-personagem")
            }
            console.log(e.errors)
        }
    }

        response.locals = {title: "Cadastro"};
        response.render("jogador/personagens/cadastro-de-personagem", {
            idiomas: idiomas?.data,
            racas: racas?.data,
            classes: classes?.data
        });
    }

    export {
        cadastroPersonagem
    }