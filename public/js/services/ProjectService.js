strategic.service('ProjectService', function(moment){
  this.prepareDisplay = function(project){
    project.time_spent_display = moment.duration(project.time_spent, 's').format('hh:mm:ss');
    project.deadline_display = moment(project.deadline).format('DD.MM.YYYY r.');
    return project;
  }
});