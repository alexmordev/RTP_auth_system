const { Aplicacion, AplicacionSchema } = require('./aplicacion.model');
const { Permiso, PermisoSchema } = require('./permiso.model');
const { PermisoRol, PermisoRolSchema } = require('./permisoRol.model');
const { Rol, RolSchema } = require('./rol.model');
const { UsuarRolUsuario, RolUsuarioSchema } = require('./rolUsuario.model');
const { Usuario, UsuarioSchema } = require('./usuario.model');

function setupModels(sequelize) {
  Aplicacion.init(AplicacionSchema, Aplicacion.config(sequelize));
  Permiso.init(PermisoSchema, Permiso.config(sequelize));
  PermisoRol.init(PermisoRolSchema, PermisoRol.config(sequelize));
  Rol.init(RolSchema, Rol.config(sequelize));
  UsuarRolUsuario.init(RolUsuarioSchema, UsuarRolUsuario.config(sequelize));
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));


  // User.associate(sequelize.models);
  // Aplicacion.associate(sequelize.models);
  // Permiso.associate(sequelize.models);
  // PermisoRol.associate(sequelize.models);
  // Rol.associate(sequelize.models);
  // UsuarRolUsuario.associate(sequelize.models);
  // Usuario.associate(sequelize.models);
}

module.exports = setupModels;
