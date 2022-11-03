const express = require('express');

const CategoryService = require('../services/aplicacion.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createPermisoSchema, updatePermisoSchema, getPermisoSchema } = require('../schemas/permiso.schema');

const router = express.Router();
const permiso = new CategoryService();

router.get('/', async (req, res, next) => {
  try {
    const aplicacion = await permiso.find();
    res.json(aplicacion);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getPermisoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const permiso = await permiso.findOne(id);
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
      const newPermiso = await permiso.create(body);
      res.status(201).json(newPermiso);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getPermisoSchema, 'params'),
  validatorHandler(updatePermisoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const permiso = await permiso.update(id, body);
      res.json(permiso);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getPermisoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await permiso.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
