/**
 * @overview 	Programs-Object, contains all programs for use
 * @module programs
 * @author Dominik Sigmund
 * @version 0.2
 * @description	Creates an Object. Has specific methods to show and manipulate data
 * @memberof tir
 * @requires module:fs
 * @requires module:path
 * @requires module:jsonfile
 */

 /** Creates a instance of class Proverb
 * @class Programs
 * @param {string} database - A path to the database
 * @param {Programs~contructorCallback} callback - A Callback with an error or the object
 * @returns {Programs} The Object
 * */
function Programs (database, callback) {
  if (typeof callback === 'undefined' || typeof callback !== 'function') {
    throw new Error({status: 501, message: 'Callback missing'})
  } else {
    var self = {}
    var fs = require('fs')
    var path = require('path')
    try {
      fs.accessSync(database, fs.F_OK)
      if (fs.statSync(database).isFile()) {
        return callback({status: 501, message: file + ' is not a folder'})
      } else {
        //load programs.json from folder
      }
    } catch (e) {
      throw e
    }
  }
}

module.exports = Proverb
/**
  * This callback is displayed as part of the Proverb class.
  * @callback Programs~contructorCallback
  * @param {object} Error or null
  * @param {object.status} Number of Error (Uses HTTP-Status)
  * @param {object.message} Custom Error Message
  * @param {Programs} Instance of Class Programs
  */
