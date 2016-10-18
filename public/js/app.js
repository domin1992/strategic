var strategic = angular.module('strategic', ['ngRoute', 'ngMaterial', 'angularMoment']);

strategic.config(function($routeProvider, $locationProvider, $mdThemingProvider) {
  // routes
  $routeProvider
    .when('/', {
      templateUrl: 'templates/project-list.html',
      controller: 'ProjectListController',
    })
    .when('/project/:id', {
      templateUrl: 'templates/project.html',
      controller: 'ProjectController',
    })
    .when('/tasks/:id', {
      templateUrl: 'templates/task-list.html',
      controller: 'TaskListController',
    })
    .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(false);

  // theme
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('blue');
});

strategic.run(function(amMoment){
  amMoment.changeLocale('pl');
});