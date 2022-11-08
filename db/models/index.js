const { Aplicacion, AplicacionSchema } = require('./aplicacion.model');
const { Permiso, PermisoSchema } = require('./permiso.model');
const { Rol, RolSchema } = require('./rol.model');
const { UsuarRolUsuario, RolUsuarioSchema } = require('./rolUsuario.model');
const { Usuario, UsuarioSchema } = require('./usuario.model');
const { Trabajador, TrabajadorSGASchema } = require('./trabajador.model');
function setupSGAModels(sequelize) {
  Trabajador.init( TrabajadorSGASchema, Trabajador.config(sequelize) );
}

function setupAUTHModels(sequelize) {
  Aplicacion.init(AplicacionSchema, Aplicacion.config(sequelize));
  Permiso.init(PermisoSchema, Permiso.config(sequelize));
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


module.exports = {setupSGAModels,setupAUTHModels} ;
