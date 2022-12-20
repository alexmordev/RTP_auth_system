const nodemailer = require("nodemailer");
const boom = require( '@hapi/boom' )
const bcrypt = require('bcrypt')
const jwt = require( 'jsonwebtoken' );
const { JWT }= require('../config/config');
const UsuarioService = require('./usuario.service');
const service = new UsuarioService();

class AuthService {
  async getUser( email, password ){
    const user =  await service.findByEmail( email );

    if(!user){
      throw boom.unauthorized();
    }
    const isMatch =  await bcrypt.compare(password, user.contraseña);
    if(!isMatch){
      throw boom.unauthorized();
    }
    delete user.dataValues.password
    return user;
  }

  signToken(user) {

      const payload = {
        credencial: user,
      }
      const token = jwt.sign(payload, JWT.secret,{  expiresIn: JWT.expires });
    
      return({
        user,
        token
      })
    }

  async sendRecovery(email){
    const user =  await service.findByEmail( email );
    if(!user){
      throw boom.unauthorized();
    }
    const payload = {sub: user.id_usuario};
    const token =  jwt.sign(payload, JWT.secret, {expiresIn: '10min'});
    const link = `${ process.env.MAIL_URL_RECOVERY }?token=${token}`;
    const mail = {
      from: process.env.MAIL_USERNAME, // sender address
      to: user.email, // list of receivers
      subject: 'Servicio de Recuperación de Contraseña', // Subject line
      html:
      `<h1>Cambio Contraseña</h1>
        <p>
          <br>Por favor ingresa al siguiente link para recuperar tu contraseña:
          <b><a href=${link}>RECUPERAR CONTRASEÑA<a></b>
          <br>Cuentas con 10 minutos para hacerlo una vez recibas este mail, después de ese tiempo el link dejará de funcionar
        </p>`,
    }
    return this.sendMail(mail);
  }

  async sendMail(infoMail){
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USERNAME, // generated ethereal user
        pass: process.env.MAIL_PASSWORD, // generated ethereal password
      },
    });

    await transporter.sendMail(infoMail);
    return { message: 'mail sent'};
  }

  async changePassword(user, newPassword){
    try{
      const userAut =  await service.findOne(user);
      if(!userAut){
        throw boom.unauthorized();
      }
      const res = await service.update( user,{contraseña: newPassword} )
      return {message: 'password changed'}

    }catch(error){
      throw boom.unauthorized();
    }
  }
}

module.exports = AuthService
