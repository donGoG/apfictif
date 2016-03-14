/* global moment:false */

import constants from './constants';

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { UIController } from './components/ui/ui.controller';
import { RoomDirective } from './components/room/room.directive';
import { CircleCreatorDirective } from './components/circle/circleCreator.directive';

angular.module('apfictif', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr'])
  .constant('moment', moment)
  .constant('settings', constants)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('UIController', UIController)
  .directive('circlecreator', CircleCreatorDirective)
  .directive('room', RoomDirective);
