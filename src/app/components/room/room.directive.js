
export function RoomDirective(settings) {
  'ngInject';

  let directive = {
    replace: true,
    restrict: 'E',
    templateUrl: 'app/components/room/room.html',
    scope: {
      room: '='
    },
    link: linkFunc,
    controller: RoomController
  };

  function linkFunc(scope, elem) {

    angular.element(elem)[0].style.stroke = settings.rooms[scope.room.id].colour;
    angular.element(elem)[0].style.fill = settings.rooms[scope.room.id].colour;
    angular.element(elem)[0].style.opacity = settings.rooms[scope.room.id].opacity;

    scope.$on('room '+scope.room.id+' config', function(e, data){
      if(data.colour != '') {
        angular.element(elem)[0].style.stroke = data.colour;
        angular.element(elem)[0].style.opacity = data.opacity;
      }
    });

    scope.$on('last circle', function(){
      scope.$emit('room ready', scope.room.id);
    });
  }

  return directive;
}

class RoomController {
  constructor ($scope, $window) {
    'ngInject';

    $scope.svg = {
      width: $window.innerWidth,
      height: $window.innerHeight
    };

  }
}
