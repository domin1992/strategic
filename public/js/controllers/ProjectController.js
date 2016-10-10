strategic.controller('ProjectController', function($scope, $routeParams, $http, $location, moment, ProjectService){
  $http.get('/data/projects.json').success(function(response){
    var project;
    for(var i = 0; i < response.length; i++){
      if(response[i].id == $routeParams.id){
        project = response[i];
      }
    }
    $scope.project = ProjectService.prepareDisplay(project);
  });

  $scope.back = function(){
    $location.path('/');
  }
});