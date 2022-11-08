const { Sequelize } = require('sequelize');
const { SGA } = require('./../config/config');
const {setupSGAModels} = require('./../db/models');

const options = {
    dialect: 'postgres',
    logging: true,
}

const SGAPASSWORD = encodeURIComponent( SGA.password );
const SGAURL = `postgres://${SGA.user}:${SGAPASSWORD}@${SGA.host}:${SGA.port}/${SGA.db}`;
const sequelizeSGA =  new Sequelize(SGAURL, options )
setupSGAModels(sequelizeSGA);

module.exports = sequelizeSGA;
