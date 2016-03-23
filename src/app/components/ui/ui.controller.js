export class UIController {
  constructor ($log, $scope, settings) {
    'ngInject';
    $log.debug('UI Ctrl');

    $scope.master = {};
    $scope.config = {
      scale: settings.scale,
      directions: settings.directions,
      rooms: settings.rooms,
      center: settings.center
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
      settings.scale = config.scale;
      settings.directions = config.directions;
      settings.center = config.center;
      settings.rooms = config.rooms;
    }
  }

}
