const express = require('express');
const aplicacionRouter = require('./aplicacion.routes');
const permisorolRouter = require('./permiso-rol.routes');
const permisoRouter = require('./permiso.routes');
const rolusuarioRouter = require('./rol-usuario.routes');
const rolRouter = require('./rol.routes');
const usuarioRouter = require('./usuarios.routes');

function routerApi(app) {
  const router = express.Router();
  app.use('/auth', router)
  router.use('/aplicacion', aplicacionRouter);
  router.use('/permiso-rol', permisorolRouter);
  router.use('/permiso', permisoRouter);
  router.use('/rol-usuario', rolusuarioRouter);
  router.use('/rol', rolRouter);
  router.use('/usuario', usuarioRouter);
}

module.exports = routerApi;
