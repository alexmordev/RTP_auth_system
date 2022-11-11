const express = require('express');

const PermisoService = require('../services/permiso.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
    createPermisoSchema,
    updatePermisoSchema,
    getPermisoSchema
} = require('../schemas/permiso.schema');

const router = express.Router();
const service = new PermisoService();

router.get('/', async (req, res, next) => {
  try {
    const aplicacion = await service.find();
    res.json(aplicacion);
  } catch (error) {
    next(error);
  }
});
router.get('/:idPermiso',
  validatorHandler(getPermisoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idPermiso } = req.params;
      const permiso = await service.findOne(idPermiso);
      res.json(permiso);
    } catch (error) {
      next(error);
    }
  }
);
router.post('/',
  validatorHandler(createPermisoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPermiso = await service.create(body);
      res.status(201).json(newPermiso);
    } catch (error) {
      next(error);
    }
  }
);
router.patch('/:idPermiso',
  validatorHandler(getPermisoSchema, 'params'),
  validatorHandler(updatePermisoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idPermiso } = req.params;
      const body = req.body;
      const permiso = await service.update(idPermiso, body);
      res.json(permiso);
    } catch (error) {
      next(error);
    }
  }
);
router.delete('/:idPermiso',
  validatorHandler(getPermisoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idPermiso } = req.params;
      await service.delete(idPermiso);
      res.status(201).json({idPermiso});
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
