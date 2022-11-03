const express = require('express');

const productsRouter = require('./products.routes');
const categoriesRouter = require('./categories.routes');
const usersRouter = require('./users.routes');
const orderRouter = require('./orders.routes');
const customersRouter = require('./customers.routes');
const aplicacionRouter = require('./aplicacion.routes');
const permisorolRouter = require('./permiso-rol.routes');
const permisoRouter = require('./permiso.routes');
const rolusuarioRouter = require('./rol-usuario.routes');
const rolRouter = require('./rol.routes');
const usuarioRouter = require('./usuarios.routes');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
  router.use('/customers', customersRouter);
  router.use('/aplicacion', aplicacionRouter);
  router.use('/permiso-rol', permisorolRouter);
  router.use('/permiso', permisoRouter);
  router.use('/rol-usuario', rolusuarioRouter);
  router.use('/rol', rolRouter);
  router.use('/usuario', usuarioRouter);
}

module.exports = routerApi;
