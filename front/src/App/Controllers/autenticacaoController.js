const cadastro = (request, response) => {
    response.locals = {title: "Cadastro"};
    response.render("jogador/cadastro");
}

const login = (request, response) => {
    response.locals = {title: "Login"};
    response.render("autenticacao/login");
}

export {
    cadastro, login
}