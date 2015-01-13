/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
<<<<<<< HEAD
  app.use('/y', require('./api/review'));
  app.use('/y', require('./api/product'));
=======
  app.use('/api/carts', require('./api/cart'));
  app.use('/api/orderss', require('./api/orders'));
>>>>>>> 13ff70be0f7d632893e9907d269e86089c3b15e9
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};