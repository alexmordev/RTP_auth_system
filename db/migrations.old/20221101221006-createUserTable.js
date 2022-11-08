'use strict';
const { AplicacionSchema,  APLICACION_TABLE } = require('../models/aplicacion.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable( APLICACION_TABLE , AplicacionSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(APLICACION_TABLE);
  }
};
