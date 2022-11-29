// const nodemailer = require("nodemailer");
const boom = require( '@hapi/boom' )
const bcrypt = require('bcrypt')
const jwt = require( 'jsonwebtoken' );
const { JWT }= require('../config/config');
const { validarJWT } = require('../middlewares/validarJwt');
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

   validarToken(token){
    try {
      const valida = validarJWT(token); 
      console.log(token)
      return valida
      
    } catch (error) {
      return error
    }


  
  }

  async sendRecovery(email){
    const user =  await service.findByEmail( email );
    if(!user){
      throw boom.unauthorized();
    }
    const payload = {sub: user.id, role: user.role};
    const token =  jwt.sign(payload, config.jwtSecret, {expiresIn: '10min'});
    const link = `http://front.com?token=${token}`;
    const mail = {
      from: 'alejandromorjim@gmail.com', // sender address
      to: `${user.email}`, // list of receivers
      subject: 'Servicio de Recuperación de Contraseña', // Subject line
      html:
      `<h1>Cambiar Contraseña</h1>
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
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'alejandromorjim@gmail.com', // generated ethereal user
        pass: `${config.smptGmail}`, // generated ethereal password
      },
    });

    await transporter.sendMail(infoMail);
    return { message: 'mail sent'};
  }

  async changePassword(newPassword, token){
    try{
      const payload = jwt.verify(token, config.jwtSecret)
      const user =  await service.findOne(payload.sub);
      if(!user){
        throw boom.unauthorized();
      }
      const hash =  await bcrypt.hash( newPassword, 10 );
      await service.update( user.id ,{password: hash} )
      return {message: 'password changed'}

    }catch(error){
      throw boom.unauthorized();
    }
  }

}

module.exports = AuthService
