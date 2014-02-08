'use strict';

angular.module('tmntApp')
  .directive('dvPopup', function () {
    return {
      restrict: 'A',
      transclude: true,
      template: '<div class="popup" style="display: none" ng-transclude></div>',
      link: function postLink(scope, element, attrs) {

        var selector = attrs.dvPopup,
        targets = angular.element(document.body).find(selector);
//debugger;
        targets.on('click', function () {
        element.find('.popup').toggle();
        //debugger;
        });
      }
    };
  });
