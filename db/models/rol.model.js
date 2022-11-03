const { Model, DataTypes, Sequelize } = require('sequelize');

const ROL_TABLE = 'rol'; //definir nombre tabla;
const RolSchema = {
    IdRol: {
        field: 'id_rol',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    name: {
        allowNull: false,
        type: DataTypes.STRING
    },

    IdAplicacion: {
        field: 'id_aplicacion',
        allowNull: false,
        type: DataTypes.INTEGER
    },
  
}
class Rol extends Model {
    static associate(models) {
      //ASSOCIATIONS
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ROL_TABLE,
            modelName: 'Rol',
            createdAt: false,
            timestamps: false
        }
    }
}
module.exports = { ROL_TABLE, RolSchema, Rol };