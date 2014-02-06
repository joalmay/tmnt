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
      controller: "MainCtrl"
    })
    .state('team', {
      url: '/team/:teamId',
      templateUrl: 'views/team.html',
      controller: "TeamCtrl"
    })
});