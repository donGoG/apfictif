export class MainController {
  constructor ($log, $scope, $window, settings) {
    'ngInject';
    $log.debug('main Ctrl');

    $scope.calculated = 0;

    this.initFirstRoom($scope, settings, $window);

    $scope.$on('circle ready', function(){
      $scope.calculated ++;
    });

    $scope.$on('room ready', function(e, id){
      if(id<settings.rooms.length-1) this.createRoom($scope, settings, id+1);
    }.bind(this));

    $scope.$on('new config', function(e, config){
      settings.directions = config.directions;
      for(var i=0; i<settings.rooms.length; i++){
        settings.rooms[i].size = config.rooms[i].size;
      }
      this.resetRooms($scope);
      this.initFirstRoom($scope, settings, $window);
    }.bind(this));

    $scope.$on('new colours', function(e, config){
      for(var i=0; i<settings.rooms.length; i++){
        $scope.$broadcast('room '+i+' config', config.rooms[i]);
      }
    }.bind(this));

  }

  initFirstRoom($scope, settings, $window){

    $scope.rooms = [
      {
        id: 0,
        radius: settings.rooms[0].size * settings.scale,
        circles: [{
          posX: $window.innerWidth/2,
          posY: $window.innerHeight/2
        }],
        class: 'room-0',
        name: settings.rooms[0].name
      }
    ];
  }

  resetRooms($scope){
    $scope.calculated = 0;
    $scope.rooms = [];
  }

  createRoom($scope, settings, id){
      
    var previousRoom = $scope.rooms[id-1];
    var newCircles = [];

    for(var c=0; c < previousRoom.circles.length; c++){ 
    // ITERATE OVER CIRCLES OF THE PREVIOUS ROOM

      var parentCircle = $scope.rooms[id-1].circles[c];
      
      for(var step=0; step<settings.directions; step++){ 
      // CREATE CIRCLES OF THE CURRENT PARENT CIRCLE

        var newX = parentCircle.posX + previousRoom.radius * Math.cos(2 * Math.PI * step / settings.directions);
        var newY = parentCircle.posY + previousRoom.radius * Math.sin(2 * Math.PI * step / settings.directions);
        newCircles.push({
          posX: newX,
          posY: newY
        });

      }
    }

    $scope.rooms.push({
      id: id,
      radius: settings.rooms[id].size * settings.scale,
      circles: newCircles,
      class: 'room-'+id,
      name: settings.rooms[id].name
    });

  }

}
