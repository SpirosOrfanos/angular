'use strict';

var basicCntrl = angular.module('basicCntrl', []);

basicCntrl.controller('DataCntrl', function ($scope) {
	  $scope.person = {
		'firstName':'John',
		'lastName':'Doe'};
	  $scope.phones = [
	    {'name': 'Nexus S',
	     'snippet': 'Fast just got faster with Nexus S.'},
	    {'name': 'Motorola XOOM™ with Wi-Fi',
	     'snippet': 'The Next, Next Generation tablet.'},
	    {'name': 'MOTOROLA XOOM™',
	     'snippet': 'The Next, Next Generation tablet.'}
	  ];
	});

basicCntrl.controller('BorderCntrl', function ($scope) {
	  $scope.person = {
		'firstName':'Johnss',
		'lastName':'Doess'};
	  
	});

                 