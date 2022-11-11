const {
    Model,
    DataTypes,
    Sequelize
} = require('sequelize');

const APLICACION_TABLE = 'aplicacion'; //definir nombre tabla;
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
    static associate(models) {
        //ASSOCIATIONS
        this.hasMany( models.Rol,{foreignKey: 'id_aplicacion', as: 'roles'} );
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: APLICACION_TABLE,
            modelName: 'Aplicacion',
            timestamps: true
        }
    }
}
module.exports = {
    APLICACION_TABLE,
    AplicacionSchema,
    Aplicacion
};
