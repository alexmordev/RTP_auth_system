const { Model, DataTypes, Sequelize } = require('sequelize');

const ROL_USUARIO_TABLE = 'rol_usuario'; //definir nombre tabla;
const RolUsuarioSchema = {
    IdRolUsuario: {
        field: 'id_rol_usuario',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    IdRol: {
        field: 'id_rol',
        allowNull: false,
        type: DataTypes.INTEGER
    },

    IdUsuario: {
        field: 'id_usuario',
        allowNull: false,
        type: DataTypes.INTEGER
    },
  
}
class UsuarRolUsuario extends Model {
    static associate(models) {
      //ASSOCIATIONS
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ROL_USUARIO_TABLE,
            modelName: 'UsuarRolUsuario',
            createdAt: false,
            timestamps: false
        }
    }
}
module.exports = { ROL_USUARIO_TABLE, RolUsuarioSchema, UsuarRolUsuario }; 