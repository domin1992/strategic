var strategic = angular.module('strategic', ['ngRoute', 'ngMaterial']);

strategic.config(function($routeProvider, $locationProvider, $mdThemingProvider) {
  // routes
  $routeProvider
    .when('/', {
      templateUrl: 'templates/project-list.html',
      controller: 'ProjectListController',
    })
    .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);

  // theme
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('blue');
});