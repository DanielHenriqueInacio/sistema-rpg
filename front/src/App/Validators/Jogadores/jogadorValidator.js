import yup from "../../../config/yup.js";

export const validarCadastroJogador = () => {
    return yup.object().shape({
        nome: yup.string().required(),
        email: yup.string().required().email(),
        senha: yup.string().required().min(6),
    })
}
export const validarLoginJogador = () => {
    return yup.object().shape({
        email: yup.string().required().email(),
        senha: yup.string().required(),
    })
}

