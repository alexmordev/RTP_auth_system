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
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
    },
}
class UsuarRolUsuario extends Model {
    static associate() {
      //ASSOCIATIONS
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ROL_USUARIO_TABLE,
            modelName: 'UsuarRolUsuario',
            timestamps: true
        }
    }
}
module.exports = { ROL_USUARIO_TABLE, RolUsuarioSchema, UsuarRolUsuario };
