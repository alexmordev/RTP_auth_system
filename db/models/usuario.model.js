const { Model, DataTypes, Sequelize } = require('sequelize');

const USUARIO_TABLE = 'usuario'; //definir nombre tabla;
const UsuarioSchema = {
    idUsuario: {
        field: 'id_usuario',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombreUsuario: {
        field: 'nombre_usuario',
        allowNull: false,
        type: DataTypes.STRING
    },
    contraseña: {
        field: 'contraseña',
        allowNull: false,
        type: DataTypes.STRING
    },
    token: {
        allowNull: true,
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
class Usuario extends Model {
    static associate() {
      //ASSOCIATIONS
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: USUARIO_TABLE,
            modelName: 'Usuario',
            timestamps: true
        }
    }
}
module.exports = { USUARIO_TABLE, UsuarioSchema, Usuario };
