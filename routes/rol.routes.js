const express = require('express');

const RolService = require('../services/rol.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
    createRolSchema,
    updateRolSchema,
    getRolSchema
} = require('../schemas/rol.schema');

const router = express.Router();
const service = new RolService();

router.get('/', async (req, res, next) => {
  try {
    const rol = await service.find();
    res.json(rol);
  } catch (error) {
    next(error);
  }
});
router.get('/:idRol',
  validatorHandler(getRolSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idRol } = req.params;
      const rol = await service.findOne(idRol);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  }
);
router.post('/',
  validatorHandler(createRolSchema, 'body'),
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
router.patch('/:idRol',
  validatorHandler(getRolSchema, 'params'),
  validatorHandler(updateRolSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idRol } = req.params;
      const body = req.body;
      const rol = await service.update(idRol, body);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  }
);
router.delete('/:idRol',
  validatorHandler(getRolSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idRol } = req.params;
      await service.delete(idRol);
      res.status(201).json({idRol});
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
