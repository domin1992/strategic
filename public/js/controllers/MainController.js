strategic.controller('MainController', function($scope, $timeout, $mdSidenav, $mdDialog) {
  // sidenav
  $scope.toggleLeft = function(componentId){
    $mdSidenav(componentId).toggle();
  }

  // toolbar menu
  $scope.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };

  // preloader
  angular.element(document.getElementsByClassName("preloader")).css('visibility', 'hidden');
});