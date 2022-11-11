const {
    Model,
    DataTypes,
    Sequelize
} = require('sequelize');

const ROL_TABLE = 'rol'; //definir nombre tabla;
const RolSchema = {
    idRol: {
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
    idAplicacion: {
        field: 'id_aplicacion',
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{
            model: 'aplicacion',
            key: 'id_aplicacion',
        },
    },
    fechaIncio: {
        allowNull: true,
        field: 'fecha_Incio',
        type: DataTypes.DATE
    },
    fechaFin: {
        allowNull: true,
        field: 'fecha_fin',
        type: DataTypes.DATE
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
    static associate(models) {
      //ASSOCIATIONS
        this.belongsTo( models.Aplicacion,{foreignKey: 'id_aplicacion'} )
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
module.exports = {
    ROL_TABLE,
    RolSchema,
    Rol,
};
