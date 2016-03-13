export function RoomDirective() {
  'ngInject';

  let directive = {
    replace: true,
    restrict: 'E',
    templateUrl: 'app/components/room/room.html',
    scope: {
      room: '='
    },
    controller: RoomController
  };

  return directive;
}

class RoomController {
  constructor ($log, $scope, $window) {
    'ngInject';

    $scope.svg = {
      width: $window.innerWidth,
      height: $window.innerHeight
    };
  }
}
