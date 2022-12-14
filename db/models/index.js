const { Aplicacion, AplicacionSchema } = require('./aplicacion.model');
const { Permiso, PermisoSchema } = require('./permiso.model');
const { Rol, RolSchema } = require('./rol.model');
const { RolUsuario, RolUsuarioSchema } = require('./rolUsuario.model');
const { Usuario, UsuarioSchema } = require('./usuario.model');
const { PermisoRol, PermisoRolSchema } = require('./permisoRol.model');

// const { Trabajador, TrabajadorSGASchema } = require('./trabajador.model');

function setupModels(sequelizeAuth) {
    RolUsuario.init(RolUsuarioSchema, RolUsuario.config(sequelizeAuth));
    Usuario.init(UsuarioSchema, Usuario.config(sequelizeAuth));
    Rol.init(RolSchema, Rol.config(sequelizeAuth));
    Aplicacion.init(AplicacionSchema, Aplicacion.config(sequelizeAuth));
    Permiso.init(PermisoSchema, Permiso.config(sequelizeAuth));
    PermisoRol.init(PermisoRolSchema, PermisoRol.config(sequelizeAuth));

//   Trabajador.init( TrabajadorSGASchema, Trabajador.config(sequelizeSGA) );

    Usuario.associate(sequelizeAuth.models);
    RolUsuario.associate(sequelizeAuth.models);
    Rol.associate(sequelizeAuth.models);
    Aplicacion.associate(sequelizeAuth.models);
    Permiso.associate(sequelizeAuth.models);
    PermisoRol.associate(sequelizeAuth.models);

//   Trabajador.associate(sequelizeAuth.models);
  // UsuarRolUsuario.associate(sequelize.models);
  // Usuario.associate(sequelize.models);
}


module.exports = setupModels ;
