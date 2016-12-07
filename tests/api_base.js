/* global it, describe, before, after */
var assert = require('assert')
var superagent = require('superagent')
var status = require('http-status')
var ip = require('ip')
var pack = require('../package.json')
const spawn = require('child_process').spawn
var server
describe('IT02: API base Functions Test', function () {
  const uri = 'http://' + ip.address() + ':' + pack.config.port
  before(function (done) {
    server = spawn('node', ['app.js'])
    setTimeout(function () {
      done()
    }, 1000)
  })

  after(function (done) {
    server.kill('SIGHUP')
    setTimeout(function () {
      done()
    }, 1000)
  })
  it('IT02-01: /status: Return Status', function (done) {
    superagent.get(uri + '/status').end(function (err, res) {
      assert.ifError(err)
      assert.equal(res.status, status.OK)
      var result = JSON.parse(res.text)
      assert.deepEqual({status: 'running'}, result)
      done()
    })
  })
  it('IT02-02: /config: Return Config', function (done) {
    superagent.get(uri + '/config').end(function (err, res) {
      assert.ifError(err)
      assert.equal(res.status, status.OK)
      var result = JSON.parse(res.text)
      assert('port' in result)
      assert('database' in result)
      done()
    })
  })
})
process.on('exit', function () {
  if (server) {
    server.kill('SIGHUP')
    server = null
  }
})
