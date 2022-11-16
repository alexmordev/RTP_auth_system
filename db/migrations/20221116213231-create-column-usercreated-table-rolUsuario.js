'use strict';
const { DataTypes } = require('sequelize');
const { ROL_USUARIO_TABLE } = require('../models/rolUsuario.model');

module.exports = {
    async up (queryInterface) {
        await queryInterface.addColumn(ROL_USUARIO_TABLE, 'createdFor',{
            field: 'created_for',
            allowNull: false,
            type: DataTypes.INTEGER,
        })
    },
    async down (queryInterface) {
        await queryInterface.removeColumn(ROL_USUARIO_TABLE, 'createdFor');
    }
  };
