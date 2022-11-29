const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const { JWT }= require('../config/config');
const UsuarioService = require('../services/usuario.service');
const service = new UsuarioService();


const validarJWT = async( req = request, res = response, next ) => {

    let token = req.headers.authorization;

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const { credencial } = jwt.verify( token, JWT.secret,{maxAge: JWT.expires} );

        // leer el usuario que corresponde al uid
        const usuario = await service.findOne( credencial );

        if( !usuario ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        }
       
        req.usuario = usuario;
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}




module.exports = {
    validarJWT
}