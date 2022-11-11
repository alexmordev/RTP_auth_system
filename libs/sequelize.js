const { Sequelize } = require('sequelize');
const {  AUTH } = require('../config/config');
const setupModels = require('../db/models');

const options = {
    dialect: 'postgres',
    // logging: true,
}

const AUHTPASSWORD = encodeURIComponent( AUTH.password );
const AUTHURL = `postgres://${AUTH.user}:${AUHTPASSWORD}@${AUTH.host}:${AUTH.port}/${AUTH.db}`;
const sequelize =  new Sequelize(AUTHURL, options )
setupModels( sequelize );

module.exports = sequelize;
