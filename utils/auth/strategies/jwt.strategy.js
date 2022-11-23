const { Strategy,  ExtractJwt } =  require('passport-jwt');
const { JWT } = require('../../../config/config');

const options = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey : JWT.secret,
}

const JwtStrategy =  new Strategy( options, (payload, done) => {
  return done( null, payload );
});

module.exports = JwtStrategy;
