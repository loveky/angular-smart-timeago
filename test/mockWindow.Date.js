window.___Date___ = window.Date;
window.Date = function(timestr) {
  if(typeof timestr === "undefined") {
    this.getTime = function() {
      // if timestr is not provided, always return 2014-05-30T10:00:00
      return 1401444000000;
    }
  }
  else {
    this.getTime = function() {
      // otherwise, return the real timestamp based on timestr
      return window.___Date___.prototype.getTime.apply(new window.___Date___(timestr));
    }
  }
};