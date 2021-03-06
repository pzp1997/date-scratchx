(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    var datetimeFactory = function(methodName) {
      return function () {
        return (new Date())[methodName]();
      };
    };

    ext.get_day_of_month = datetimeFactory('getDate');
    ext.get_month_number = datetimeFactory('getMonth');
    ext.get_month = function () {
      var months = ['January','February','March','April','May','June','July', 'August','September','October','November','December'];
      return months[(new Date()).getMonth()];
    };
    ext.get_year = datetimeFactory('getFullYear');
    ext.get_day_of_week_number = datetimeFactory('getDay');
    ext.get_day_of_week = function() {
      var daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      return daysOfTheWeek[(new Date()).getDay()];
    };
    ext.get_date = datetimeFactory('toLocaleDateString');

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          ['r', 'day of month', 'get_day_of_month'],
          ['r', 'month', 'get_month'],
          ['r', 'month (number)', 'get_month_number'],
          ['r', 'year', 'get_year'],
          ['r', 'day of week', 'get_day_of_week'],
          ['r', 'day of week (number)', 'get_day_of_week_number'],
          ['r', 'date', 'get_date']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Date', descriptor, ext);
})({});
