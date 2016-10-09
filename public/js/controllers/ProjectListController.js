strategic.controller('ProjectListController', function($scope, $routeParams, $http, $location){
  $http.get('/data/projects.json').success(function(response){
    $scope.projects = response;
  });

  $scope.projectDetails = function(projectId){
    $location.path("/project/" + projectId);
  }
});