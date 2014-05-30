var ngSmartTimeago = angular.module("ngSmartTimeago", []);

ngSmartTimeago.constant("ngSmartTimeagoConfig", {
  attr: "datetime"
});

ngSmartTimeago.directive("timeago", ["ngSmartTimeagoConfig", "$timeout",
  function(ngSmartTimeagoConfig, $timeout) {
    var scope_option = {};
    scope_option[ngSmartTimeagoConfig.attr] = "@";

    return {
      restrict: "E",
      scope: scope_option,
      link: function(scope, element, attrs) {
        var options = angular.extend(
          {},
          ngSmartTimeagoConfig,
          {selector: "timeago"}
        );

        $timeout(function() {
          element.timeago(options);
        });

        scope.$watch(ngSmartTimeagoConfig.attr, function() {
          $timeout(function() {
            element.data("timeago").refresh();
          })
        });

        // Clear timer before destroying scope
        scope.$on('$destroy', function() {
          element.data("timeago").stopTimer();
        });
      }
    };
  }
]);

ngSmartTimeago.filter('timeago',["smartTimeagoInstance", function(smartTimeagoInstance){
  return function (input) {
    return smartTimeagoInstance.timeAgoInWords(input);
  }
}]);

ngSmartTimeago.factory("smartTimeagoInstance", ["$window", function($window) {
  var instance = new $window.jQuery.fn.timeago.Constructor;

  return instance;
}]);
