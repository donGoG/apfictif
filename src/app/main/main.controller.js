export class MainController {
  constructor ($log, $scope, $window) {
    'ngInject';
    $log.debug('main Ctrl');

    $scope.steps = [60, 30, 100, 60, 10, 80];
    $scope.rooms = [
      {
        radius: $scope.steps[0],
        circles: [{
          posX: $window.innerWidth/2,
          posY: $window.innerHeight/2
        }],
        class: 'room-0'
      }
    ];

    var precision = 4;

    for(var r=1; r<$scope.steps.length; r++){ 
    // ITERATE OVER ROOMS
      
      var newCircles = [];
      for(var c=0; c<$scope.rooms[r-1].circles.length; c++){ 
      // ITERATE OVER CIRCLES OF THE PREVIOUS ROOM
        
        for(var angle=0; angle <= 2*Math.PI - Math.PI/precision; angle+=Math.PI/precision){ 
        // CREATE CIRCLES OF THE CURRENT ROOM

          var newX = $scope.rooms[r-1].circles[c].posX + $scope.rooms[r-1].radius * Math.cos(angle);
          var newY = $scope.rooms[r-1].circles[c].posY + $scope.rooms[r-1].radius * Math.sin(angle);
          newCircles.push({
            posX: newX,
            posY: newY
          });

        }
      }

      $scope.rooms.push({
        radius: $scope.steps[r],
        circles: newCircles,
        class: 'room-'+r
      });

    }

  }
}
