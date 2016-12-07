/* global angular */
;(function () {
  angular.module('tir', ['ngRoute', 'ngTable', 'ui.bootstrap', 'angular-web-notification'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/programs', {
          controller: 'programController',
          controllerAs: 'ctrl',
          templateUrl: 'templates/programs.html'
        })
        .otherwise({ redirectTo: '/programs' })
    }])
}())
