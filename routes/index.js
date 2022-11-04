const express = require('express');
const aplicacionRouter = require('./aplicacion.routes');
const permisoRolRouter = require('./permisoRol.routes');
const permisoRouter = require('./permiso.routes');
const rolUsuarioRouter = require('./rolUsuario.routes');
const rolRouter = require('./rol.routes');
const usuarioRouter = require('./usuario.routes');

function routerApi(app) {
  const router = express.Router();
  app.use('/auth', router)
  router.use('/aplicacion', aplicacionRouter);
  router.use('/permisoRol', permisoRolRouter);
  router.use('/permiso', permisoRouter);
  router.use('/rolUsuario', rolUsuarioRouter);
  router.use('/rol', rolRouter);
  router.use('/usuario', usuarioRouter);
}

module.exports = routerApi;
