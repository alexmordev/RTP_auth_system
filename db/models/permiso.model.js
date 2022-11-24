const {
    Model,
    DataTypes,
    Sequelize
} = require('sequelize');

const PERMISO_TABLE = 'permiso'; //definir nombre tabla;
const PermisoSchema = {
    idPermiso: {
        field: 'id_permiso',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    descripcion: {
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
    codigo: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'codigo',
    },
}
class Permiso extends Model {
    static associate(models) {
      //ASSOCIATIONS
        this.belongsToMany( models.Rol,{
            as: 'PermisosRoles',
            through: models.PermisoRol,
            foreignKey: 'id_permiso',
        } );
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERMISO_TABLE,
            modelName: 'Permiso',
            timestamps: true
        }
    }
}
module.exports = {
    PERMISO_TABLE,
    PermisoSchema,
    Permiso
};
