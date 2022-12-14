const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routerApi = require( "./routes" );
const sequelize = require('./libs/sequelize')
const fileUpload = require('express-fileupload');
// const sequelizeSGA  = require('./libs/sequelize.sga');
// const sequelizeAUTH  = require('./libs/sequelize.auth');
// const setupModels = require('./db/models');

class Server {
  constructor() {

    this.app = express();
    this.middleware();
    this.app.use(express.json());
    this.routes();
    // setupModels( sequelizeAUTH );

  }
  middleware() {

    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(cors());
    require('./utils');
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/',
      createParentPath: true
    }));

  }
  routes() {

    routerApi(this.app);
  }

  listen () {

    this.app.listen(process.env.APP_PORT, async () => {
      await  sequelize.authenticate().then(() => {
          console.log(`Server port: ${process.env.APP_PORT} - Connected to database ${process.env.DBAUTH_DATABASE}`);
        }).catch(err =>{
        console.log({error: 'Error trying to connect to database', err});
      })
    //   await  sequelizeAUTH.authenticate().then(() => {
    //     console.log(`Server port: ${process.env.APP_PORT} - Connected to database ${process.env.DBAUTH_DATABASE}`);
    //   }).catch(err =>{
    //   console.log({error: 'Error trying to connect to database', err});
    // })
    })
  }
}
module.exports = Server;
