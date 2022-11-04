<<<<<<< HEAD
const { Aplicacion, AplicacionSchema } = require('./aplicacion.model');


function setupModels(sequelize) {
  Aplicacion.init(AplicacionSchema, Aplicacion.config(sequelize));


  // Order.associate(sequelize.models);
=======
const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Category, CategorySchema } = require('./category.model');
const { Product, ProductSchema } = require('./product.model');
const { Order, OrderSchema } = require('./order.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');
const { Aplicacion, AplicacionSchema } = require('./aplicacion.model');
const { Permiso, PermisoSchema } = require('./permiso.model');
const { PermisoRol, PermisoRolSchema } = require('./permisoRol.model');
const { Rol, RolSchema } = require('./rol.model');
const { UsuarRolUsuario, RolUsuarioSchema } = require('./rolUsuario.model');
const { Usuario, UsuarioSchema } = require('./usuario.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));
  Aplicacion.init(AplicacionSchema, Aplicacion.config(sequelize));
  Permiso.init(PermisoSchema, Permiso.config(sequelize));
  PermisoRol.init(PermisoRolSchema, PermisoRol.config(sequelize));
  Rol.init(RolSchema, Rol.config(sequelize));
  UsuarRolUsuario.init(RolUsuarioSchema, UsuarRolUsuario.config(sequelize));
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));


  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
  Aplicacion.associate(sequelize.models);
  Permiso.associate(sequelize.models);
  PermisoRol.associate(sequelize.models);
  Rol.associate(sequelize.models);
  UsuarRolUsuario.associate(sequelize.models);
  Usuario.associate(sequelize.models);
>>>>>>> 1ac734644f1568c60fd15ada2c8e98e57112cfcb
}

module.exports = setupModels;
