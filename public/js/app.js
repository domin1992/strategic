var strategic = angular.module('strategic', ['ngRoute', 'ngMaterial']);

strategic.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/project-list.html',
      controller: 'ProjectListController',
    })
    .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);
});