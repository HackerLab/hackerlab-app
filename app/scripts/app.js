'use strict';

angular.module('hackerlabAppApp', [])
  .config(function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'});
    $routeProvider.when('/service', {templateUrl: 'views/service.html', controller: 'ServiceRequestController'});
    $routeProvider.otherwise({ redirectTo: '/'});
  });
