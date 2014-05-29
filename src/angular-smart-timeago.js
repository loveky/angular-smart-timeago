var ngSmartTimeago = angular.module("ngSmartTimeago", []);

ngSmartTimeago.directive("timeago", [function() {
  return {
    restrict: "E",
    scope: {
      dir: "@",
      suffix: "@"
    },
    link: function(scope, element, attrs) {
      element.timeago({selector: "timeago"});
      scope.$on('$destroy', function() {
        element.data("timeago").stopTimer();
      });
    }
  };
}]);
