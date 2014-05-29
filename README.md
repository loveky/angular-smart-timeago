### Installation
You can choose your preferred method of installation:
- Through bower `bower install angular-moment --save`
- Download from GitHub [angular-smart-timeago.js](https://raw.githubusercontent.com/loveky/angular-smart-timeago/master/src/angular-smart-timeago.js)

### Usage
Include both timeago.js and angular-smart-timeago.js in your application.

```html
<script src="components/smart-time-ago/lib/timeago.js"></script>
<script src="components/angular-smart-timeago/src/angular-smart-timeago.js"></script>
```

Add the module `ngSmartTimeago` as a dependency to your app module:

```js
var myapp = angular.module('myapp', ['ngSmartTimeago']);
```

### Timeago directive
You can use `timeago` directive to display a user friendly time. By default, smart-time-ago will check the value of `datatime` property for the ISO8601 timesting:
```html
<timeago datetime="2014-05-28T18:01:50Z+0800"></timeago>
```

If you are using another property to specify the ISO8601 time string other than `datatime`, you can tell the directive which property you are using by `attr` property:
```html
<timeago attr="datastring" datestring="2014-05-28T18:01:50Z+0800"></timeago>
```

### Configuration
If you want to change the default property name which specifies the ISO8601 time string for all directive instance. You can do it with:

```js
angular.module('myapp').constant('ngSmartTimeagoConfig', {
  attr: 'datastring'
});
```
