const { Sequelize } = require('sequelize');
const { SGA } = require('./../config/config');

const options = {
    dialect: 'postgres',
    logging: true,
}

const SGAPASSWORD = encodeURIComponent( SGA.password );
const SGAURL = `postgres://${SGA.user}:${SGAPASSWORD}@${SGA.host}:${SGA.port}/${SGA.db}`;
const sequelizeSGA =  new Sequelize(SGAURL, options )
sequelizeSGA.dialect.supports.schemas = true;

module.exports = sequelizeSGA;
