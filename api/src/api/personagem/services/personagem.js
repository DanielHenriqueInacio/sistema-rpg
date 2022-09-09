'use strict';

/**
 * personagem service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personagem.personagem');
