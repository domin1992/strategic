strategic.service('TaskService', function(moment){
  this.prepareDisplay = function(tasks){
    for(var i = 0; i < tasks.length; i++){
      tasks[i].time_spent_display = moment.duration(tasks[i].time_spent, 's').format('hh:mm:ss');
      tasks[i].deadline_display = moment(tasks[i].deadline).format('DD.MM.YYYY r.');
      tasks[i].running = false;
    }
    return tasks;
  }

  this.updateTimeSpentDisplay = function(timeSpent){
    return moment.duration(timeSpent, 's').format('hh:mm:ss');
  }
});