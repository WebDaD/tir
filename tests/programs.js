/* global it, describe, before, after, beforeEach, afterEach*/
var assert = require('assert')
var path = require('path')
var MOCK = require('./mock')
var mock
var Programs = require(path.join(__dirname, '../libs/programs'))
var proverb
describe('UT01: Programs', function () {
  before('UT01-00-Prep: Creating Mock Database', function () {
    mock = new MOCK()
    mock.addProperty('database', path.join(__dirname, '../tests/database'))
  })
  after('UT01-99-Clean: Removing Mock Database', function () {
    mock.destroyDatabase()
  })
  beforeEach(function () {
    mock.save('tir')
  })
  afterEach(function (done) {
    mock.restore('tir')
    programs = new Programs(mock.getProperty('database'), function (error, tir) {
      if (error) {
        done(new Error(error))
      } else {
        programs = tir
        done()
      }
    })
  })
  describe('UT01-01: create Object', function () {
    it('UT01-01-01: should throw error without callback', function (done) {
      try {
        programs = new Programs(mock.getProperty('database'))
        done(new Error('Error: no Error'))
      } catch (e) {
        done()
      }
    })
    it('UT01-01-02: should callback with error with wrong path', function (done) {
      try {
        programs = new Programs(undefined, function (error, tir) {
          if (error) {
            done()
          } else {
            done(new Error('Error: no Error'))
          }
        })
      } catch (e) {
        done()
      }
    })
    it('UT01-01-03: should callback with error with defective database (no programs.json)')
    it('UT01-01-04: should callback error with defective programs.json')
    it('UT01-01-05: should callback self with good database')
  })
})
