'use strict';
const { DataTypes } = require('sequelize');
const { PERMISO_TABLE } = require('../models/permiso.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(PERMISO_TABLE, 'codigo', {
      allowNull: true,
      type: DataTypes.STRING,
      field: 'codigo',
      unique: true
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn(PERMISO_TABLE, 'codigo', {});
  }
};
