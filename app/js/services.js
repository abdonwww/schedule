'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .value('version', '0.1')
  .value('timeInfo', {
  	today: (new Date().getTime()),
  	from: (new Date().getTime()) - 1000 * 60 * 60 * 24 * 30,
  	to: (new Date().getTime()) + 1000 * 60 * 60 * 24 * 30
  });
  
