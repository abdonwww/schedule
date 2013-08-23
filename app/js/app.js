'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute', 'ngResource', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/staff', {templateUrl: 'partials/staff.html', controller: 'StaffController'});
    $routeProvider.when('/project', {templateUrl: 'partials/project.html', controller: 'ProjectController'});
    $routeProvider.otherwise({redirectTo: '/staff'});

    // $locationProvider.html5Mode(true);
  }]);
