import yup from "../../../config/yup.js";

export const validarCadastroPersonagem = () => {
    return yup.object().shape({
        nome: yup.string().required(),
        raca: yup.string().required(),
        classe: yup.string().required(),
        idade: yup.string().required(),
        peso: yup.string().required(),
        altura: yup.string().required(),
        historia: yup.string().min(50)
    })
}