'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('StaffController', ['$scope', '$window', '$location', '$resource', '$http', '$filter', 'timeInfo', function($scope, $window, $location, $resource, $http, $filter, timeInfo) {
    $scope.timeInfo = timeInfo;

  	var dates = [];
  	for(var i=0; i<=90; i++) {
      var time = new Date().getTime() + 1000 * 60 * 60 * 24 * i;

  		dates.push({
  			date: $filter('date')(time, 'dd'),
  			day: $filter('date')(time, 'EEE')
  		})
  	}
  	$scope.dates = dates;

    $scope.tableReset = function(){
      $scope.rowNum = -1;
      $scope.colNum = -1;
    };
    $scope.rowRef = function(num){
      // $scope.rowNum = num;
    };
    $scope.colRef = function(num){
      // $scope.colNum = num;
    };
    $scope.tableReset();

    $scope.tableResize = function(){
      $scope.colWidth = $window.innerWidth - 14;
      $scope.rowHeight = $window.innerHeight - 104;
    }

    // $resource('data/members.json').get(function(data) {
    //   $scope.members = data;
    // });

    /*
      API 1: request members
        : page=0...

    */


  	$scope.members = [
      {
        name: '上野 直樹',
        schedule: dates,
        projects: [
          { name: 'Room Project', director: '佐藤', start: '4/23', delivery: '7/4', cost: 30, eyesId: '00017454', schedule: dates },
          { name: 'Entertainment Navi', director: '佐藤', start: '5/1', delivery: '6/4', cost: 15, eyesId: '00017454', schedule: dates },
          { name: 'Brazil Checkout', director: '佐藤', start: '5/10', delivery: '9/4', cost: 30, eyesId: '00017454', schedule: dates }
        ]
      },
      {
        name: '辻 亮介',
        schedule: dates,
        projects: [
          { name: 'Room Project', director: '佐藤', start: '4/23', delivery: '7/4', cost: 30, eyesId: '00017454', schedule: dates },
          { name: 'Entertainment Navi', director: '佐藤', start: '5/1', delivery: '6/4', cost: 15, eyesId: '00017454', schedule: dates },
          { name: 'Brazil Checkout', director: '佐藤', start: '5/10', delivery: '9/4', cost: 30, eyesId: '00017454', schedule: dates }
        ]
      },
      {
        name: '山田 信介',
        schedule: dates,
        projects: [
          { name: 'Room Project', director: '佐藤', start: '4/23', delivery: '7/4', cost: 30, eyesId: '00017454', schedule: dates },
          { name: 'Entertainment Navi', director: '佐藤', start: '5/1', delivery: '6/4', cost: 15, eyesId: '00017454', schedule: dates },
          { name: 'Brazil Checkout', director: '佐藤', start: '5/10', delivery: '9/4', cost: 30, eyesId: '00017454', schedule: dates }
        ]
      },
      {
        name: '相原 たけと',
        schedule: dates,
        projects: [
          { name: 'Room Project', director: '佐藤', start: '4/23', delivery: '7/4', cost: 30, eyesId: '00017454', schedule: dates },
          { name: 'Entertainment Navi', director: '佐藤', start: '5/1', delivery: '6/4', cost: 15, eyesId: '00017454', schedule: dates },
          { name: 'Brazil Checkout', director: '佐藤', start: '5/10', delivery: '9/4', cost: 30, eyesId: '00017454', schedule: dates }
        ]
      },
      {
        name: '佐藤 静香',
        schedule: dates,
        projects: [
          { name: 'Room Project', director: '佐藤', start: '4/23', delivery: '7/4', cost: 30, eyesId: '00017454', schedule: dates },
          { name: 'Entertainment Navi', director: '佐藤', start: '5/1', delivery: '6/4', cost: 15, eyesId: '00017454', schedule: dates },
          { name: 'Brazil Checkout', director: '佐藤', start: '5/10', delivery: '9/4', cost: 30, eyesId: '00017454', schedule: dates }
        ]
      },
      {
        name: '谷脇 もも',
        schedule: dates,
        projects: [
          { name: 'Room Project', director: '佐藤', start: '4/23', delivery: '7/4', cost: 30, eyesId: '00017454', schedule: dates },
          { name: 'Entertainment Navi', director: '佐藤', start: '5/1', delivery: '6/4', cost: 15, eyesId: '00017454', schedule: dates },
          { name: 'Brazil Checkout', director: '佐藤', start: '5/10', delivery: '9/4', cost: 30, eyesId: '00017454', schedule: dates }
        ]
      },
      {
        name: '松岡 ひろかず',
        schedule: dates,
        projects: [
          { name: 'Room Project', director: '佐藤', start: '4/23', delivery: '7/4', cost: 30, eyesId: '00017454', schedule: dates },
          { name: 'Entertainment Navi', director: '佐藤', start: '5/1', delivery: '6/4', cost: 15, eyesId: '00017454', schedule: dates },
          { name: 'Brazil Checkout', director: '佐藤', start: '5/10', delivery: '9/4', cost: 30, eyesId: '00017454', schedule: dates }
        ]
      },
      { name: 'Baknarazov Azamat',
        schedule: dates,
        projects: [
          { name: 'Room Project', director: '佐藤', start: '4/23', delivery: '7/4', cost: 30, eyesId: '00017454', schedule: dates },
          { name: 'Entertainment Navi', director: '佐藤', start: '5/1', delivery: '6/4', cost: 15, eyesId: '00017454', schedule: dates },
          { name: 'Brazil Checkout', director: '佐藤', start: '5/10', delivery: '9/4', cost: 30, eyesId: '00017454', schedule: dates }
        ]
      },
      {
        name: '筒井 かづき',
        schedule: dates,
        projects: [
          { name: 'Room Project', director: '佐藤', start: '4/23', delivery: '7/4', cost: 30, eyesId: '00017454', schedule: dates },
          { name: 'Entertainment Navi', director: '佐藤', start: '5/1', delivery: '6/4', cost: 15, eyesId: '00017454', schedule: dates },
          { name: 'Brazil Checkout', director: '佐藤', start: '5/10', delivery: '9/4', cost: 30, eyesId: '00017454', schedule: dates }
        ]
      },
      {
        name: 'Poore Amanda',
        schedule: dates,
        projects: [
          { name: 'Room Project', director: '佐藤', start: '4/23', delivery: '7/4', cost: 30, eyesId: '00017454', schedule: dates },
          { name: 'Entertainment Navi', director: '佐藤', start: '5/1', delivery: '6/4', cost: 15, eyesId: '00017454', schedule: dates },
          { name: 'Brazil Checkout', director: '佐藤', start: '5/10', delivery: '9/4', cost: 30, eyesId: '00017454', schedule: dates }
        ]
      }
  	];



  }])
  .controller('ProjectController', [function() {

  }]);