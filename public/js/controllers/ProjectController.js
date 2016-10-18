strategic.controller('ProjectController', function($scope, $routeParams, $http, $location, moment, ProjectService){
  var timeSpent = 0;

  $http.get('/data/tasks.json').success(function(response){
    for(var i = 0; i < response.length; i++){
      if(response[i].project_id == $routeParams.id){
        timeSpent += response[i].time_spent;
      }
    }
  });

  $http.get('/data/projects.json').success(function(response){
    var project;
    for(var i = 0; i < response.length; i++){
      if(response[i].id == $routeParams.id){
        project = response[i];
      }
    }
    project.time_spent = timeSpent;
    $scope.project = ProjectService.prepareDisplay(project);
  });

  $scope.back = function(){
    $location.path('/');
  }

  $scope.tasks = function(){
    $location.path('/tasks/' + $routeParams.id);
  }
});