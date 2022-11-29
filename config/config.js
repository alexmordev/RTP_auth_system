require('dotenv').config();
const AUTH = {
  user: process.env.DBAUTH_USERNAME,
  password: process.env.DBAUTH_PASSWORD,
  db: process.env.DBAUTH_DATABASE,
  host: process.env.DBAUTH_HOST,
  dialect: process.env.DBAUTH_DIALECT,
  dbURL:process.env.DATABASE_AUTH_URL,
  port: process.env.AUTH_PORT
}
const SGA = {
  user: process.env.DBSGA_USERNAME,
  password: process.env.DBSGA_PASSWORD,
  db: process.env.DBSGA_DATABASE,
  host: process.env.DBSGA_HOST,
  dialect: process.env.DBSGA_DIALECT,
  dbURL:process.env.DATABASE_SGA_URL,
  port: process.env.SGA_PORT
}

const JWT = {
    secret : process.env.JWT_SECRET,
    expires : process.env.AUTH_EXPIRES
}

module.exports = { AUTH, SGA, JWT };
