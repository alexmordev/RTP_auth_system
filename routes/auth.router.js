const express = require('express');
const passport = require('passport');
const { validarJWT } = require('../middlewares/validarJwt');
const AuthService = require('../services/auth.service');
const UsuarioService = require('../services/usuario.service');

const service = new AuthService();
const userService = new UsuarioService();
const router = express.Router();

router.get('/',validarJWT,
 async (req, res, next) => {
  try {
    res.json('Token Valido');
  } catch (error) {
    next(error);
  }
});

router.post('/login',
//   limiter,
    passport.authenticate('local', {session:false} ),
    async (req, res, next) => {
        try {
        const {idUsuario} = await userService.findByEmail(req.body.email)
        const user =  idUsuario;
        res.status(201).json(service.signToken(user));
        } catch (error) {
        next(error);
        }
  }
);


router.post('/recovery',
  async (req, res, next) => {
    try {
      const {email} =  req.body
      const rta = await service.sendRecovery(email)
      res.json(rta)
    } catch (error) {
      next(error);
    }
  }
);

router.post('/change-password',validarJWT,
  async (req, res, next) => {
    try {
      const { user,newPassword } =  req.body;
      const rta = await service.changePassword(user,newPassword);
      res.json(rta)
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
