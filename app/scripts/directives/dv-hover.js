'use strict';

angular.module('tmntApp')
  .directive('dvHover', function () {
    return {
      restrict: 'A',
 //     template: '<div></div>',
      link: function postLink(scope, element, attrs) {
      	console.log("into", attrs);
      	//Hover function
        element.hover(function () {
      	  element.css("color", attrs.dvHover);
      	  //Mouse Leave
        }, function () {
      	  element.css("color", attrs.dvColor);
        });
      }
    };
  });
