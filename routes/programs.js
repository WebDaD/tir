/**
 * @overview 	Route Programs File
 * @module index
 * @author Dominik Sigmund
 * @version 1.0
 * @description	Exports program Related Routes
 * @memberof tir
 */

/** Exports Routes
* @param {object} app - Express app
*/
module.exports = function (app) {
  app.get('/programs.json', function (req, res) {
    app.database.programs(function (error, programs) {
      if (error) {
        res.status(error.status).send(error)
      } else {
        res.status(200).send(programs)
      }
    })
  })
}
