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
    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    },
    IdAplicacion: {
        field: 'id_aplicacion',
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
class Rol extends Model {
    static associate() {
      //ASSOCIATIONS
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ROL_TABLE,
            modelName: 'Rol',
            timestamps: true
        }
    }
}
module.exports = { ROL_TABLE, RolSchema, Rol };
