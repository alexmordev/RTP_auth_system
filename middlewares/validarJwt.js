const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const { JWT } = require('../config/config');
const UsuarioService = require('../services/usuario.service');
const service = new UsuarioService();
const Boom = require('@hapi/boom');

const validarJWT = async (req = request, res = response, next) => {

    if (!req.headers.authorization) {
        return res.status(401).send(Boom.badData(error));
    }

    let token = req.headers.authorization.split(" ")[1];
    try {

        const { credencial } = jwt.verify(token, JWT.secret, { maxAge: JWT.expires });
        const usuario = await service.findOne(credencial);

        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        }

        req.usuario = usuario;
        next();

    } catch (error) {
        return res.status(401).send(Boom.badData(error));
    }

}

module.exports = {
    validarJWT
}