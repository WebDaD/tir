/* global angular */
;(function () {
  angular.module('tir')
    .provider('TIRAPI', function TIRAPI () {
      var restURL = '/api/' // From Testing
      this.setURL = function (url) {
        restURL = url
      }
      this.$get = function ($http) {
        return {
          programs: function () {
            return $http({method: 'GET', url: restURL + 'programs.json'})
          }
        }
      }
    })
}())
