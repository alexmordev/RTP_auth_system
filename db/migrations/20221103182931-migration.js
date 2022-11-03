'use strict';
const { APLICAION_TABLE, AplicacionSchema } = require('../models/aplicacion.model');
const { PERMISO_ROL_TABLE, PermisoRolSchema } = require('../models/permiso-rol.model');
const { PERMISO_TABLE, PermisoSchema } = require('../models/permiso.model');
const { ROL_USUARIO_TABLE, RolUsuarioSchema } = require('../models/rol-usuario.model');
const { ROL_TABLE, RolSchema } = require('../models/rol.model');
const { USUARIO_TABLE, UsuarioSchema } = require('../models/usuario.model');


module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable( APLICAION_TABLE, AplicacionSchema );
    await queryInterface.createTable( PERMISO_ROL_TABLE, PermisoRolSchema );
    await queryInterface.createTable( PERMISO_TABLE, PermisoSchema );
    await queryInterface.createTable( ROL_USUARIO_TABLE, RolUsuarioSchema );
    await queryInterface.createTable( ROL_TABLE, RolSchema );
    await queryInterface.createTable( USUARIO_TABLE, UsuarioSchema );


  },

  async down (queryInterface) {
    await queryInterface.dropTable( APLICAION_TABLE );    
    await queryInterface.dropTable( PERMISO_ROL_TABLE );    
    await queryInterface.dropTable( PERMISO_TABLE );    
    await queryInterface.dropTable( ROL_USUARIO_TABLE );    
    await queryInterface.dropTable( ROL_TABLE );    
    await queryInterface.dropTable( USUARIO_TABLE );    
 
  }
};