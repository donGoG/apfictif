export function CircleCreatorDirective() {
  'ngInject';

  let directive = {
    restrict: 'A',
    link: linkFunc,
    controller: CircleCreatorController
  };

  return directive;

  function linkFunc(scope) {
    if (scope.$last){
      scope.$emit('last circle');
    }
  }
}

class CircleCreatorController {
  constructor ($scope) {
    'ngInject';

    $scope.$emit('circle ready');
  }
}
