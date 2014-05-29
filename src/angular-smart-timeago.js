var ngSmartTimeago = angular.module("ngSmartTimeago", []);

ngSmartTimeago.constant("ngSmartTimeagoConfig", {
  attr: "datetime"
});

ngSmartTimeago.directive("timeago", ["ngSmartTimeagoConfig",
  function(ngSmartTimeagoConfig) {
    return {
      restrict: "E",
      scope: {
        attr: "@"
      },
      link: function(scope, element, attrs) {
        var scope_options = {};
        if(angular.isDefined(scope.attr)) {
          scope_options["attr"] = scope.attr;
        }

        var options = angular.extend(
          {},
          ngSmartTimeagoConfig,
          scope_options,
          {selector: "timeago"}
        );
        element.timeago(options);

        // Clear timer before destroying scope
        scope.$on('$destroy', function() {
          element.data("timeago").stopTimer();
        });
      }
    };
  }
]);
