const { Aplicacion, AplicacionSchema } = require('./aplicacion.model');
const { Permiso, PermisoSchema } = require('./permiso.model');
const { Rol, RolSchema } = require('./rol.model');
const { UsuarRolUsuario, RolUsuarioSchema } = require('./rolUsuario.model');
const { Usuario, UsuarioSchema } = require('./usuario.model');
const { Trabajador, TrabajadorSGASchema } = require('./trabajador.model');

function setupModels(sequelizeSGA, sequelizeAuth) {
  Aplicacion.init(AplicacionSchema, Aplicacion.config(sequelizeAuth));
  Permiso.init(PermisoSchema, Permiso.config(sequelizeAuth));
  Rol.init(RolSchema, Rol.config(sequelizeAuth));
  UsuarRolUsuario.init(RolUsuarioSchema, UsuarRolUsuario.config(sequelizeAuth));
  Trabajador.init( TrabajadorSGASchema, Trabajador.config(sequelizeSGA) );
  Usuario.init(UsuarioSchema, Usuario.config(sequelizeAuth));

//   Usuario.associate(sequelizeSGA.models);
//   Trabajador.associate(sequelizeAuth.models);
  // Aplicacion.associate(sequelize.models);
  // Permiso.associate(sequelize.models);
  // PermisoRol.associate(sequelize.models);
  // Rol.associate(sequelize.models);
  // UsuarRolUsuario.associate(sequelize.models);
  // Usuario.associate(sequelize.models);
}


module.exports = setupModels ;
