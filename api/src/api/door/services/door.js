'use strict';

/**
 * door service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::door.door');
