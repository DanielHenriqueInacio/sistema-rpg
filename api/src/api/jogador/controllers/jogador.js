'use strict';

const utils = require('@strapi/utils');
const bcrypt = require('bcryptjs');
/**
 * jogador controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::jogador.jogador', ({ strapi }) => ({
  async login(ctx, next) {
    const { email, senha } = ctx.request.body;

    const user = await strapi.db.query('api::jogador.jogador').findOne({
      where: { email }
    });

    if (user == null) {
      return {
        status: "fail",
        data: {
          message: "Jogador não foi encontrado"
        }
      }
    }

    const passwordMatch = await bcrypt.compare(senha, user.senha);

    if (!passwordMatch) {
      return {
        status: "fail",
        data: {
          message: "Jogador não foi encontrado"
        }
      }
    }

    delete user.senha;

    return {
      status: "success",
      user
    }

  },
}));
