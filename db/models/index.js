const { Aplicacion, AplicacionSchema } = require('./aplicacion.model');


function setupModels(sequelize) {
  Aplicacion.init(AplicacionSchema, Aplicacion.config(sequelize));


  // Order.associate(sequelize.models);
}

module.exports = setupModels;
