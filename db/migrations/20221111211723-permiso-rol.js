'use strict';
const { PERMISO_ROL_TABLE, PermisoRolSchema } = require('../models/permisoRol.model');

module.exports = {
  up: async (queryInterface) => {
        await queryInterface.createTable(PERMISO_ROL_TABLE, PermisoRolSchema);
  },

  down: async (queryInterface) => {
        await queryInterface.dropTable(PERMISO_ROL_TABLE,PermisoRolSchema);
  }
};
