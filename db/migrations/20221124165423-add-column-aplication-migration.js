'use strict';
const { DataTypes } = require('sequelize');
const { APLICACION_TABLE } = require('../models/aplicacion.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(APLICACION_TABLE, 'image', {
      allowNull: true,
      type: DataTypes.STRING,
      field: 'image',
      unique: true
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn(APLICACION_TABLE, 'image', {});
  }
};
