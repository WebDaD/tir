/**
 * @overview 	Route Index File
 * @module index
 * @author Dominik Sigmund
 * @version 1.0
 * @description	Exports all Routes
 * @memberof tir
 */
var fs = require('fs')
/** Exports Routes
* @param {object} app - Express app
*/
module.exports = function (app) {
  // Load Program Routes
  require('./programs.js')(app)

  // Load Slideshow Routes
  require('./slideshows.js')(app)

  // Load Admin-UI Routes
  require('./admin.js')(app)

  // Load Viewer Routes
  require('./viewer.js')(app)

  // Sends status information
  app.get('/status', function (req, res) {
    res.status(200).send({status: 'running'})
  })
  // Sends config
  app.get('/config', function (req, res) {
    res.status(200).send(app.config)
  })
  })
  /** Middleware to Catch Errors
  * @param {object} err - Express.err Object
  * @param {object} req - Express.req Object
  * @param {object} res - Express.res Object
  * @param {object} next - Express.next Object
  * @returns {undefined}
  */
  app.use(function (err, req, res, next) {
    console.error(err)
  })
}
