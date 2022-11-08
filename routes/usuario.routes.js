const express = require('express');

const UsuarioService = require('../services/usuario.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createAplicacionSchema, updateAplicacionSchema, getAplicacionSchema } = require('../schemas/usuario.schema');

const router = express.Router();
const service = new UsuarioService();

router.get('/', async (req, res, next) => {
  try {
    const rol = await service.find();
    res.json(rol);
  } catch (error) {
    next(error);
  }
});

router.get('/trabajador', async (req, res, next) => {
  try {
    const rol = await service.findTrabajadores();
    res.json(rol);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getAplicacionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rol = await service.findOne(id);
      res.json(rol);
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
      const newRol = await service.create(body);
      res.status(201).json(newRol);
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
      const rol = await service.update(id, body);
      res.json(rol);
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
