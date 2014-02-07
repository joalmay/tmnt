'use strict';

var app = angular.module('tmntApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: 'views/main.html',
      controller: "MainCtrl",
      resolve: {
  			teams: function(TurtleService) {
          //console.log("TurtleService Teams => ", TurtleService.getTeams);
           
           return TurtleService.getTeams();
	 	 	   }

         /*
      resolve: {
        teams: function(TurtleService) {
           return TurtleService.getTeams();
         }
         */
		  }
    })
    .state('team', {
      url: '/team/:teamId',
      templateUrl: 'views/team.html',
      controller: "TeamCtrl",
      resolve: {
        team: function(TurtleService, $stateParams) {
           return TurtleService.getTeam($stateParams.teamId);
         }
       }

    });
});