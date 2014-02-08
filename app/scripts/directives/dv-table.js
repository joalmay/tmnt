'use strict';

angular.module('tmntApp')
  .directive('dvTable', function () {
    return {
      templateUrl: '/scripts/directives/dv-table.html',
      restrict: 'A',
      scope: {
        dvTable: '=', //Binding equal - You have to specify the scope
        dvTableHeaders: '=' 
      }
    };
  });