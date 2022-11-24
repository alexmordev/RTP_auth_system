const Joi = require('joi');

const idPermiso = Joi.number().integer();
const nombre = Joi.string();
const descripcion = Joi.string().min(8);
const codigo = Joi.string();


const createPermisoSchema = Joi.object({
    nombre: nombre.required(),
    descripcion: descripcion.required(),
    codigo: codigo.required()
});

const updatePermisoSchema = Joi.object({
    nombre,
    descripcion,
    codigo
});

const getPermisoSchema = Joi.object({
    idPermiso,
});

module.exports = {
    createPermisoSchema,
    updatePermisoSchema,
    getPermisoSchema
}
