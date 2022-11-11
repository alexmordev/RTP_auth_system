const {
    Model,
    DataTypes,
    Sequelize
} = require('sequelize');
// const { USUARIO_TABLE } = require('./usuario.model')

const ROL_USUARIO_TABLE = 'rol_usuario'; //definir nombre tabla;
const RolUsuarioSchema = {
    idRolUsuario: {
        field: 'id_rol_usuario',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    idRol: {
        field: 'id_rol',
        allowNull: false,
        type: DataTypes.INTEGER
    },
    idUsuario: {
        field: 'id_usuario',
        allowNull: false,
        type: DataTypes.INTEGER,
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
class RolUsuario extends Model {
    static associate(models) {
        this.hasMany( models.Usuario,{as: 'usuario',  foreignKey: "id_usuario"})
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ROL_USUARIO_TABLE,
            modelName: 'RolUsuario',
            timestamps: true
        }
    }
}
module.exports = {
    ROL_USUARIO_TABLE,
    RolUsuarioSchema,
    RolUsuario
};
