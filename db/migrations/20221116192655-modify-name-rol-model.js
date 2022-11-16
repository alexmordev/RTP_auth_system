'use strict';
// const { DataTypes } = require('sequelize');
// const { ROL_TABLE } = require('../models/rol.model');

module.exports = {
    async up (queryInterface) {
        await queryInterface.removeColumn('rol', 'nombre')
    },
    // async down (queryInterface) {
    //     await queryInterface.changeColumn( ROL_TABLE, 'nombre',{
    //         allowNull: false,
    //         type: DataTypes.STRING,
    //     }, );

    // }
  };
