module.exports = {
  routes: [
    { // Path defined with a regular expression
      method: 'POST',
      path: '/jogadores/login', // Only match when the URL parameter is composed of lowercase letters
      handler: 'jogador.login',
    }
  ]
}
