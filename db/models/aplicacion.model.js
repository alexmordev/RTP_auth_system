const { Model, DataTypes, Sequelize } = require('sequelize');

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
