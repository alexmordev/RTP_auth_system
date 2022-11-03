const { Model, DataTypes, Sequelize } = require('sequelize');

const APLICAION_TABLE = 'aplicacion'; //definir nombre tabla;
const AplicacionSchema = {
    
    IdAplicacion: {
        field: 'id_aplicacion',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    name: {
        allowNull: false,
        type: DataTypes.STRING
    },

    estatus: {
        field: 'estatus',
        allowNull: false,
        type: DataTypes.INTEGER
    },

    path: {
        allowNull: false,
        type: DataTypes.STRING
    },
  
}
class Aplicacion extends Model {
    static associate(models) {
      //ASSOCIATIONS
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: APLICAION_TABLE,
            modelName: 'Aplicacion',
            createdAt: false,
            timestamps: false
        }
    }
}
module.exports = { APLICAION_TABLE, AplicacionSchema, Aplicacion };