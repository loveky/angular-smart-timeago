describe('directives', function() {
  beforeEach(module('ngSmartTimeago'));

  describe('timeago', function() {
    beforeEach(inject(function($rootScope, $compile, $injector, $timeout) {
      var parentScope = $rootScope.$new()
      element = $compile(angular.element('<timeago datetime="2014-05-30T09:59:50+00:00"></timeago>'))(parentScope);
      scope = element.isolateScope();
      $timeout.flush();
    }));

    it('should be able to use smart-time-ago to convert timestring', inject(function($timeout) {
      expect(element.text()).toContain("less than a minute ago");
    }));

    it('should watch on the timestr to update time correspondingly', inject(function($timeout) {
      scope.datetime = "2014-05-30T09:58:50+00:00";
      element.attr("datetime", "2014-05-30T09:58:50+00:00");
      scope.$apply();
      $timeout.flush();
      expect(element.text()).toContain("1 minute ago");
    }));
  })
});