describe('filters', function() {
  beforeEach(module('ngSmartTimeago'));

  describe('timeago', function() {
    beforeEach(inject(function($filter) {
      timeago = $filter("timeago");
    }));

    it('should convert an ISO8601 time string to timeago format', function() {
      expect(timeago("2014-05-30T09:59:50+00:00")).toEqual("less than a minute ago");
    });
  })
});