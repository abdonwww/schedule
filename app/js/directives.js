'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('dateCell', [function() {
    var directiveDefinitionObject = {
      restrict: 'E',
      replace: true,
      template: '<div class="test">HelloWOrld</div>'
    };
    return directiveDefinitionObject;
  }])
  .directive('ngWindowResize', ['$window', '$timeout', function($window, $timeout) {
    return function(scope, element, attr) {
      angular.element($window).bind('resize', function(){
          $timeout(function() {
            scope.$eval(attr.ngWindowResize);
          }, 0);
      });
    };
  }])
  .directive('ngLoad', ['$timeout', function($timeout) {
    return function(scope, element, attr) {
      if (scope.$last){
        $timeout(function(){
          scope.$emit('dataLoaded')
        }, 0);
      }
    };
  }])
  .directive('ngWheelScroller', [function() {
    return function(scope, element, attr) {
      var xAxis = angular.element('[ng-wheel-col]');
      var yAxis = angular.element('[ng-wheel-row]');

      element.bind('scroll', function(e){
        scope.scrollLeft = element.scrollLeft()
        scope.scrollTop = element.scrollTop()
        xAxis.prop('scrollLeft', scope.scrollLeft);
        yAxis.prop('scrollTop', scope.scrollTop);
        scope.$eval(attr.ngScroll);
      });
    };
  }])
  .directive('ngWheelTable', [function() {
    var directiveDefinitionObject = {
      priority: -1,
      link: function postLink(scope, element, attr) {

        var xAxis = angular.element('[ng-wheel-col]');
        var yAxis = angular.element('[ng-wheel-row]');
        scope.scrollLeft = 0;
        scope.scrollTop = 0;

        scope.$on('dataLoaded', function(){
          scope.scrollWidth = xAxis.prop('scrollWidth');
          scope.scrollHeight = yAxis.prop('scrollHeight');
          scope.maxLeft = scope.scrollWidth - xAxis.prop('clientWidth');
          scope.maxTop = scope.scrollHeight - yAxis.prop('clientHeight');
        });

        element.bind('mousewheel', function(e, delta, deltaX, deltaY) {

          scope.scrollWidth = xAxis.prop('scrollWidth');
          scope.scrollHeight = yAxis.prop('scrollHeight');

          scope.maxLeft = xAxis.prop('scrollWidth') - xAxis.prop('clientWidth');
          scope.maxTop = yAxis.prop('scrollHeight') - yAxis.prop('clientHeight');

          scope.scrollLeft += deltaX;
          scope.scrollTop -= deltaY;

          scope.scrollLeft = scope.scrollLeft > 0 ? scope.scrollLeft : 0;
          scope.scrollLeft = scope.scrollLeft < scope.maxLeft ? scope.scrollLeft : scope.maxLeft;
          scope.scrollTop = scope.scrollTop > 0 ? scope.scrollTop : 0;
          scope.scrollTop = scope.scrollTop < scope.maxTop ? scope.scrollTop : scope.maxTop;

          xAxis.prop('scrollLeft', scope.scrollLeft);
          yAxis.prop('scrollTop', scope.scrollTop);

          e.preventDefault();
          
        });
      }
    };
    return directiveDefinitionObject;
  }]);


