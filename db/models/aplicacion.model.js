const { Model, DataTypes, Sequelize } = require('sequelize');

const APLICAION_TABLE = 'aplicacion'; //definir nombre tabla;
const AplicacionSchema = {
    idAplicacion: {
        field: 'id_aplicacion',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    },
    estatus: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    path: {
        allowNull: false,
        type: DataTypes.STRING
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
class Aplicacion extends Model {
    static associate() {
      //ASSOCIATIONS
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: APLICAION_TABLE,
            modelName: 'Aplicacion',
            timestamps: true
        }
    }
}
module.exports = {
    APLICAION_TABLE,
    AplicacionSchema,
    Aplicacion
};
