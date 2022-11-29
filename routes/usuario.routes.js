const express = require('express');

const UsuarioService = require('../services/usuario.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createAplicacionSchema, updateAplicacionSchema, getAplicacionSchema } = require('../schemas/usuario.schema');
const { validarJWT } = require('../middlewares/validarJwt');

const router = express.Router();
const service = new UsuarioService();

router.get('/', validarJWT,
 async (req, res, next) => {
  try {
    const rol = await service.find();
    res.json(rol);
  } catch (error) {
    next(error);
  }
});

router.get('/trabajador',validarJWT,
 async (req, res, next) => {
  try {
    const rol = await service.findTrabajadores();
    res.json(rol);
  } catch (error) {
    next(error);
  }
});

router.get('/:idUsuario',validarJWT,
  validatorHandler(getAplicacionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idUsuario } = req.params;
      const rol = await service.findOne(idUsuario);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',validarJWT,
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
router.patch('/:idUsuario',validarJWT,
  validatorHandler(getAplicacionSchema, 'params'),
  validatorHandler(updateAplicacionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idUsuario } = req.params;
      const body = req.body;
      const rol = await service.update(idUsuario, body);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idUsuario',validarJWT,
  validatorHandler(getAplicacionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idUsuario } = req.params;
      await service.delete(idUsuario);
      res.status(201).json({idUsuario});
    } catch (error) {
      next(error);
    }s
  }
);

module.exports = router;
