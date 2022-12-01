const express = require('express');
const path = require('path');
const fs = require('fs');

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

router.get('/image/:id',
  async (req, res, next) => {
    try {
      const pathImagen = path.join( __dirname, '../image', 'aplicacion', req.params.id );
        if( fs.existsSync(pathImagen) ){
            return res.sendFile(pathImagen);
        }
    } catch (error) {
      next(error);
    }
  }
)

router.post('/',
  validatorHandler(createAplicacionSchema, 'body'),
  async (req, res, next) => {

    try {
      const body = req.body;  
      if (req.files) {

        const nombre =  req.files.imagen.name.split('.');
        const extension = nombre[ nombre.length -1];
        const nombreImagen = body.nombre.replaceAll(" ", "") + `.${ extension }`;
        await service.saveImage(req.files, nombreImagen );
        body.image = nombreImagen
      }
      
      const newAplicacion = await service.create(body);
      res.status(201).json(newAplicacion);
      res.status(201).json();

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

      const aplicacionAnt = await service.findOne(idAplicacion);
      if(!aplicacionAnt){
        throw "No existe la aplicacion"
      }
      if (req.files) {

        const pathImagen = path.join( __dirname, '../image', 'aplicacion', aplicacionAnt.image );
        if( fs.existsSync(pathImagen) ){
            fs.unlinkSync(pathImagen);
        }

        const nombre =  req.files.imagen.name.split('.');
        const extension = nombre[ nombre.length -1];
        const nombreImagen = body.nombre.replaceAll(" ", "") + `.${ extension }`;
        await service.saveImage(req.files, nombreImagen )
        body.image = nombreImagen
      }

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

      const aplicacionAnt = await service.findOne(idAplicacion);
      if(!aplicacionAnt){
        throw "No existe la aplicacion"
      }

      const pathImagen = path.join( __dirname, '../image', 'aplicacion', aplicacionAnt.image );
      if( fs.existsSync(pathImagen) ){
          fs.unlinkSync(pathImagen);
      }

      await service.delete(idAplicacion);
      res.status(201).json({idAplicacion});
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
