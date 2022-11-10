const { Sequelize } = require('sequelize');
const {  AUTH } = require('../config/config');

const options = {
    dialect: 'postgres',
    logging: true,
}

const AUHTPASSWORD = encodeURIComponent( AUTH.password );
const AUTHURL = `postgres://${AUTH.user}:${AUHTPASSWORD}@${AUTH.host}:${AUTH.port}/${AUTH.db}`;
const sequelizeAUTH =  new Sequelize(AUTHURL, options )

module.exports = sequelizeAUTH;
