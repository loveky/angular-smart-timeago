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
          if(angular.isDefined(element.data("timeago"))){
            element.data("timeago").refresh();
          }
        });

        // Clear timer before destroying scope
        scope.$on('$destroy', function() {
          element.data("timeago").stopTimer();
        });
      }
    };
  }
]);
