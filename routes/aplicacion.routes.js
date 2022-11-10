const express = require('express');

const AplicacionService = require('../services/aplicacion.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
    createAplicacionSchema,
    updateAplicacionSchema,
    getAplicacionSchema
} = require('../schemas/aplicacion.schema');

const router = express.Router();
const service = new AplicacionService();

router.get('/', async (req, res, next) => {
  try {
    const aplicacion = await service.find();
    res.json(aplicacion);
  } catch (error) {
    next(error);
  }
});
router.get('/:idAplicacion',
  validatorHandler(getAplicacionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idAplicacion } = req.params;
      const aplicaion = await service.findOne(idAplicacion);
      res.json(aplicaion);
    } catch (error) {
      next(error);
    }
  }
);
router.post('/',
  validatorHandler(createAplicacionSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newAplicacion = await service.create(body);
      res.status(201).json(newAplicacion);
    } catch (error) {
      next(error);
    }
  }
);
router.patch('/:idAplicacion',
  validatorHandler(getAplicacionSchema, 'params'),
  validatorHandler(updateAplicacionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idAplicacion } = req.params;
      const body = req.body;
      const aplicacion = await service.update(idAplicacion, body);
      res.json(aplicacion);
    } catch (error) {
      next(error);
    }
  }
);
router.delete('/:idAplicacion',
  validatorHandler(getAplicacionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idAplicacion } = req.params;
      await service.delete(idAplicacion);
      res.status(201).json({idAplicacion});
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
