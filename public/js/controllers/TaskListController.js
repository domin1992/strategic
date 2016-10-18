strategic.controller('TaskListController', function($scope, $routeParams, $http, $location, $interval, moment, ProjectService, TaskService){
  var tasks = [];
  var counter;
  var runningTaskId = 0;

  $http.get('/data/projects.json').success(function(response){
    var project;
    for(var i = 0; i < response.length; i++){
      if(response[i].id == $routeParams.id){
        project = response[i];
      }
    }
    $scope.project = ProjectService.prepareDisplay(project);
  });

  $http.get('/data/tasks.json').success(function(response){
    for(var i = 0; i < response.length; i++){
      if(response[i].project_id == $routeParams.id){
        tasks.push(response[i]);
      }
    }
    $scope.tasks = TaskService.prepareDisplay(tasks);
  });

  $scope.back = function(){
    $location.path('/project/' + $routeParams.id);
  }

  $scope.runTask = function(taskId){
    if(runningTaskId == taskId){
      $interval.cancel(counter);
      runningTaskId = 0;
      return;
    }
    for(var i = 0; i < tasks.length; i++){
      if($scope.tasks[i].id != taskId){
        $scope.tasks[i].running = false;
      }
    }
    runningTaskId = taskId;
    $interval.cancel(counter);
    counter = $interval(function(){ startCountingTask(taskId); }, 1000);
  }

  var startCountingTask = function(taskId){
    var index = 0;
    for(var i = 0; i < $scope.tasks.length; i++){
      if($scope.tasks[i].id == taskId){
        index = i;
      }
    }
    $scope.tasks[index].time_spent++;
    $scope.tasks[index].time_spent_display = TaskService.updateTimeSpentDisplay($scope.tasks[index].time_spent);
  }
});

strategic.directive('dynamicModel', ['$compile', '$parse', function($compile, $parse){
  return {
    restrict: 'A',
    terminal: true,
    priority: 100000,
    link: function (scope, elem) {
      var name = $parse(elem.attr('dynamic-model'))(scope);
      elem.removeAttr('dynamic-model');
      elem.attr('ng-model', name);
      $compile(elem)(scope);
    }
  };
}]);