const { Model, DataTypes, Sequelize } = require('sequelize');

const PERMISO_TABLE = 'permiso'; //definir nombre tabla;
const PermisoSchema = {
    IdPermiso: {
        field: 'id_permiso',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    },

    descripcion: {
        allowNull: false,
        type: DataTypes.STRING
    },
  
}
class Permiso extends Model {
    static associate(models) {
      //ASSOCIATIONS
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERMISO_TABLE,
            modelName: 'Permiso',
            createdAt: false,
            timestamps: false
        }
    }
}
module.exports = { PERMISO_TABLE, PermisoSchema, Permiso };