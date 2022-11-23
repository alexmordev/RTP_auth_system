'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
    async up (queryInterface) {
        await queryInterface.addColumn('rol', 'nombre',{
                allowNull: true,
                type: DataTypes.STRING,
        })
    },
    async down (queryInterface) {
        await queryInterface.removeColumn( 'rol', 'nombre');
    }
  };
