const {
    Model,
    DataTypes,
    Sequelize
} = require('sequelize');

const PERMISO_ROL_TABLE = 'permiso_rol'; //definir nombre tabla;
const PermisoRolSchema = {
    idPermisoRol: {
        field: 'id_permiso_rol',
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
    idPermiso: {
        field: 'id_permiso',
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
class PermisoRol extends Model {
    static associate() {
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERMISO_ROL_TABLE,
            modelName: 'PermisoRol',
            timestamps: true
        }
    }
}
module.exports = {
    PERMISO_ROL_TABLE,
    PermisoRolSchema,
    PermisoRol
};
