const { Sequelize } = require('sequelize');
const {  AUTH } = require('../config/config');
const {setupAUTHModels} = require('../db/models');

const options = {
    dialect: 'postgres',
    logging: true,
}

const AUHTPASSWORD = encodeURIComponent( AUTH.password );
const AUTHURL = `postgres://${AUTH.user}:${AUHTPASSWORD}@${AUTH.host}:${AUTH.port}/${AUTH.db}`;
const sequelizeAUTH =  new Sequelize(AUTHURL, options )
setupAUTHModels(sequelizeAUTH);

module.exports = sequelizeAUTH;
