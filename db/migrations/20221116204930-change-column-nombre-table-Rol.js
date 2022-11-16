'use strict';
const { DataTypes } = require('sequelize');
const { ROL_TABLE } = require('../models/rol.model');

module.exports = {
    async up (queryInterface) {
        await queryInterface.changeColumn(ROL_TABLE, 'nombre',{
                allowNull: false,
                type: DataTypes.STRING,
        })
    },
    async down (queryInterface) {
        await queryInterface.removeColumn(ROL_TABLE, 'nombre');
    }
  };
