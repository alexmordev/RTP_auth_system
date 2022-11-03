const express = require('express');

const aplicacionRouter = require('./aplicacion.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/auth', router);
  router.use('/aplicacion', aplicacionRouter);

}

module.exports = routerApi;
