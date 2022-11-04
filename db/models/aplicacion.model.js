const { Model, DataTypes, Sequelize } = require('sequelize');

<<<<<<< HEAD
const APLICACION_TABLE = 'aplicacion';

const AplicacionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  estatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updateAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  },
}


class Aplicacion extends Model {

  static associate() {
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

module.exports = { Aplicacion, AplicacionSchema, APLICACION_TABLE };
=======
const APLICAION_TABLE = 'aplicacion'; //definir nombre tabla;
const AplicacionSchema = {
    
    IdAplicacion: {
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
>>>>>>> 1ac734644f1568c60fd15ada2c8e98e57112cfcb
