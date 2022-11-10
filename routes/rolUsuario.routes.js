const express = require('express');

const RolUsuarioService = require('../services/rolUsuario.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createRolUsuarioSchema, updateRolUsuarioSchema, getRolUsuarioSchema } = require('../schemas/rolUsuario');

const router = express.Router();
const service = new RolUsuarioService();

router.get('/', async (req, res, next) => {
  try {
    const rol = await service.find();
    res.json(rol);
  } catch (error) {
    next(error);
  }
});
router.get('/:idRolUsuario',
  validatorHandler(getRolUsuarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idRolUsuario } = req.params;
      const rol = await service.findOne(idRolUsuario);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  }
);
router.post('/',
  validatorHandler(createRolUsuarioSchema, 'body'),
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
router.patch('/:idRolUsuario',
  validatorHandler(getRolUsuarioSchema, 'params'),
  validatorHandler(updateRolUsuarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idRolUsuario } = req.params;
      const body = req.body;
      const rol = await service.update(idRolUsuario, body);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  }
);
router.delete('/:idRolUsuario',
  validatorHandler(getRolUsuarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idRolUsuario } = req.params;
      await service.delete(idRolUsuario);
      res.status(201).json({idRolUsuario});
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
