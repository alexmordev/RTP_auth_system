const express = require('express');

const CategoryService = require('../services/aplicacion.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createAplicacionSchema, updateAplicacionSchema, getAplicacionSchema } = require('../schemas/aplicacion.schema');

const router = express.Router();
const service = new CategoryService();

router.get('/', async (req, res, next) => {
  try {
    const aplicacion = await service.find();
    res.json(aplicacion);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getAplicacionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const aplicaion = await service.findOne(id);
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

router.patch('/:id',
  validatorHandler(getAplicacionSchema, 'params'),
  validatorHandler(updateAplicacionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const aplicacion = await service.update(id, body);
      res.json(aplicacion);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getAplicacionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
