const express = require('express');

const PermisoRolService = require('../services/permisoRol.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
    createPermisoRolSchema,
    updatePermisoRolSchema,
    getPermisoRolSchema
} = require('../schemas/permisoRol.schema');

const router = express.Router();
const permisoRol = new PermisoRolService();

router.get('/', async (req, res, next) => {
  try {
    const aplicacion = await permisoRol.find();
    res.json(aplicacion);
  } catch (error) {
    next(error);
  }
});

router.get('/credencialAplicacion',
  validatorHandler(getPermisoRolSchema, 'params'),
  async (req, res, next) => {
    try {
      // const { idPermisoRol } = req.params;
      const aplicacion = await permisoRol.credencialAplicacion(req.query);
      res.json(aplicacion);
    } catch (error) {
      next(error);
    }
});

router.get('/:idPermisoRol',
  validatorHandler(getPermisoRolSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idPermisoRol } = req.params;
      const permiso = await permisoRol.findOne(idPermisoRol);
      res.json(permiso);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createPermisoRolSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPermiso = await permisoRol.create(body);
      res.status(201).json(newPermiso);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idPermisoRol',
  validatorHandler(getPermisoRolSchema, 'params'),
  validatorHandler(updatePermisoRolSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idPermisoRol } = req.params;
      const body = req.body;
      const permiso = await permisoRol.update(idPermisoRol, body);
      res.json(permiso);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idPermisoRol',
  validatorHandler(getPermisoRolSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idPermisoRol } = req.params;
      await permisoRol.delete(idPermisoRol);
      res.status(201).json({idPermisoRol});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
