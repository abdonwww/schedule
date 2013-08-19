'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeController', ['$scope', '$window', '$location', '$resource', '$http', '$filter', function($scope, $window, $location, $resource, $http, $filter) {
  	var dates = [];
  	for(var i=0; i<=90; i++) {
      var time = new Date().getTime() + 1000 * 60 * 60 * 24 * i;

  		dates.push({
  			date: $filter('date')(time, 'dd'),
  			day: $filter('date')(time, 'EEE')
  		})
  	}
  	$scope.dates = dates;

    $scope.rowNum = -1;
    $scope.colNum = -1;

    $scope.rowRef = function(num){
      $scope.rowNum = num;
    };
    $scope.colRef = function(num){
      $scope.colNum = num;
    };
    $scope.tableReset = function(){
      $scope.rowNum = -1;
      $scope.colNum = -1;
    };


  	$scope.$window = $window;

    $scope.initHome = function(){
      $scope.rowHeight = $window.innerHeight - 100;
    }

    // $resource('data/members.json').get(function(data) {
    //   $scope.members = data;
    // });

  	$scope.members = [
  		{ name: 'Naoki Ueno', schedule: dates },
      { name: 'Naoki Ueno', schedule: dates },
      { name: 'Naoki Ueno', schedule: dates },
      { name: 'Naoki Ueno', schedule: dates },
      { name: 'Naoki Ueno', schedule: dates },
      { name: 'Naoki Ueno', schedule: dates },
  		{ name: 'Ryosuke Tsuji', schedule: dates },
      { name: 'Ryosuke Tsuji', schedule: dates },
      { name: 'Ryosuke Tsuji', schedule: dates },
      { name: 'Ryosuke Tsuji', schedule: dates },
      { name: 'Ryosuke Tsuji', schedule: dates },
      { name: 'Ryosuke Tsuji', schedule: dates },
      { name: 'Ryosuke Tsuji', schedule: dates },
      { name: 'Ryosuke Tsuji', schedule: dates },
      { name: 'Yosuke Sato', schedule: dates },
      { name: 'Yosuke Sato', schedule: dates },
      { name: 'Yosuke Sato', schedule: dates },
      { name: 'Yosuke Sato', schedule: dates },
      { name: 'Yosuke Sato', schedule: dates },
      { name: 'Yosuke Sato', schedule: dates },
      { name: 'Yosuke Sato', schedule: dates },
      { name: 'Yosuke Sato', schedule: dates },
      { name: 'Yosuke Sato', schedule: dates },
      { name: 'Yosuke Sato', schedule: dates },
      { name: 'Yosuke Sato', schedule: dates },
  		{ name: 'Momo Taniwaki', schedule: dates },
      { name: 'Momo Taniwaki', schedule: dates },
      { name: 'Momo Taniwaki', schedule: dates },
      { name: 'Momo Taniwaki', schedule: dates },
      { name: 'Momo Taniwaki', schedule: dates },
      { name: 'Momo Taniwaki', schedule: dates },
      { name: 'Momo Taniwaki', schedule: dates },
      { name: 'Momo Taniwaki', schedule: dates },
  		{ name: 'Poore Amanda', schedule: dates },
      { name: 'Poore Amanda', schedule: dates },
      { name: 'Poore Amanda', schedule: dates },
      { name: 'Poore Amanda', schedule: dates },
      { name: 'Poore Amanda', schedule: dates },
      { name: 'Poore Amanda', schedule: dates },
  		{ name: 'Taketo Aihara', schedule: dates },
      { name: 'Taketo Aihara', schedule: dates },
      { name: 'Taketo Aihara', schedule: dates },
      { name: 'Taketo Aihara', schedule: dates },
      { name: 'Taketo Aihara', schedule: dates }
  	];



  }])
  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);