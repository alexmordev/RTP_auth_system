const passport =  require( 'passport' );
const JwtStrategy = require('./auth/strategies/jwt.strategy');
const LocalStrategy = require( './auth/strategies/local.strategy' );

passport.use(LocalStrategy);
passport.use(JwtStrategy);
