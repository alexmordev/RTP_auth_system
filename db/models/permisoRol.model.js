const { Model, DataTypes, Sequelize } = require('sequelize');

const PERMISO_ROL_TABLE = 'permiso_rol'; //definir nombre tabla;
const PermisoRolSchema = {
    IdPermisoRol: {
        field: 'id_permiso_rol',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    IdPermiso: {
        field: 'id_permiso',
        allowNull: false,
        type: DataTypes.INTEGER
    },

    IdRol: {
        field: 'id_rol',
        allowNull: false,
        type: DataTypes.INTEGER
    },
  
}
class PermisoRol extends Model {
    static associate(models) {
      //ASSOCIATIONS
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERMISO_ROL_TABLE,
            modelName: 'PermisoRol',
            createdAt: false,
            timestamps: false
        }
    }
}
module.exports = { PERMISO_ROL_TABLE,  PermisoRolSchema, PermisoRol };