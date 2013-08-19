'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('dateCell', [function factory(injectables) {
    var directiveDefinitionObject = {
      restrict: 'E',
      replace: true,
      template: '<div class="test">HelloWOrld</div>'
    };
    return directiveDefinitionObject;
  }])
  .directive('ngScroll', ['$window', function factory($window) {
    var top = 0,
        left = 0;

    return function(scope, element, attr) {
      var header = angular.element('#x-axis').get(0);
      var body = angular.element('#rows').get(0);
      var cells = angular.element('#cells').get(0);

      element.bind('mousewheel', function(e, delta, deltaX, deltaY) {
        left += deltaX;
        top -= deltaY;

        left = left > 0 ? left : 0;
        top = top > 0 ? top : 0;

        scope.left = left;
        scope.top = top;

        header.scrollLeft = left;
        cells.scrollLeft = left;
        body.scrollTop = top;

        e.preventDefault();
        
      });
    };
  }]);


