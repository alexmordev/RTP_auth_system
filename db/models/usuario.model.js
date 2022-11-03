const { Model, DataTypes, Sequelize } = require('sequelize');

const USUARIO_TABLE = 'usuario'; //definir nombre tabla;
const UsuarioSchema = {
    IdUsuario: {
        field: 'id_usuario',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    NombreUsuario: {
        field: 'nombre_usuario',
        allowNull: false,
        type: DataTypes.STRING
    },

    constraseña: {
        field: 'constraseña',
        allowNull: false,
        type: DataTypes.STRING
    },
  
}
class Usuario extends Model {
    static associate(models) {
      //ASSOCIATIONS
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: USUARIO_TABLE,
            modelName: 'Usuario',
            createdAt: false,
            timestamps: false
        }
    }
}
module.exports = { USUARIO_TABLE, UsuarioSchema, Usuario };