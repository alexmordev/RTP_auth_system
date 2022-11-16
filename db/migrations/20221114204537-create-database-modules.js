'use strict';
const { APLICACION_TABLE, AplicacionSchema } = require('../models/aplicacion.model');
const { PERMISO_TABLE, PermisoSchema } = require('../models/permiso.model');
const { ROL_USUARIO_TABLE, RolUsuarioSchema } = require('../models/rolUsuario.model');
const { ROL_TABLE, RolSchema } = require('../models/rol.model');
const { USUARIO_TABLE, UsuarioSchema } = require('../models/usuario.model');
const { PERMISO_ROL_TABLE, PermisoRolSchema } = require('../models/permisoRol.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable( APLICACION_TABLE, AplicacionSchema );
    await queryInterface.createTable( PERMISO_TABLE, PermisoSchema );
    await queryInterface.createTable( ROL_USUARIO_TABLE, RolUsuarioSchema );
    await queryInterface.createTable( ROL_TABLE, RolSchema );
    await queryInterface.createTable( USUARIO_TABLE, UsuarioSchema );
    await queryInterface.createTable( PERMISO_ROL_TABLE, PermisoRolSchema);
  },
  async down (queryInterface) {
    await queryInterface.dropTable( APLICACION_TABLE );
    await queryInterface.dropTable( PERMISO_TABLE );
    await queryInterface.dropTable( ROL_USUARIO_TABLE );
    await queryInterface.dropTable( ROL_TABLE );
    await queryInterface.dropTable( USUARIO_TABLE );
    await queryInterface.dropTable( PERMISO_ROL_TABLE);
  }
};
