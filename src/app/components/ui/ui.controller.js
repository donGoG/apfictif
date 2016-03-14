export class UIController {
  constructor ($log, $scope, settings) {
    'ngInject';
    $log.debug('UI Ctrl');

    $scope.master = {};
    $scope.config = {
      directions: 4,
      rooms: settings.rooms
    };

    $scope.update = function(config) {
      $scope.updateConf(config);
      $scope.$emit('new config', $scope.config);
    };

    $scope.updateColours = function(config) {
      $scope.updateConf(config);
      $scope.$emit('new colours', $scope.config);
    }

    $scope.updateConf = function(config){
      settings.rooms = config.rooms;
    }
  }

}
