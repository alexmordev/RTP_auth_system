const { AUTH } = require('../config/config');

const USER = encodeURIComponent( AUTH.user );
const PASSWORD = encodeURIComponent( AUTH.password );
const URL = `postgres://${USER}:${PASSWORD}@${AUTH.host}:${AUTH.port}/${AUTH.db}`;

module.exports = {
  production:{
    url:URL,
    dialect: 'postgres',
  },
  development:{
      url:URL,
      dialect: 'postgres',
  },

}
