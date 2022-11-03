const express = require('express');
const aplicacionRouter = require('./aplicacion.routes');
const permisorolRouter = require('./permisoRol.routes');
const permisoRouter = require('./permiso.routes');
const rolusuarioRouter = require('./rolUsuario.routes');
const rolRouter = require('./rol.routes');
const usuarioRouter = require('./usuarios.routes');

function routerApi(app) {
  const router = express.Router();
  app.use('/auth', router)
  router.use('/aplicacion', aplicacionRouter);
  router.use('/permisoRol', permisorolRouter);
  router.use('/permiso', permisoRouter);
  router.use('/rolUsuario', rolusuarioRouter);
  router.use('/rol', rolRouter);
  router.use('/usuario', usuarioRouter);
}

module.exports = routerApi;
