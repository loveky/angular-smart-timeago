### Installation
You can choose your preferred method of installation:
- Through bower `bower install angular-smart-timeago --save`
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

### Directive
You can use `timeago` directive to display a user friendly time. By default, `smart-time-ago` will check the value of `datatime` property for the ISO8601 timesting:
```html
<timeago datetime="2014-05-28T18:01:50Z+0800"></timeago>
```

### Filter
If you just want to tranform the time string to a user friendly format but do not need to periodly refresh, you can use the `timeago` filter to perform a one-time convert:
```html
<h1>{{"2014-05-29T12:01:50+0800" | timeago}}</h1>
```

### Configuration
If you want to change the default property name which specifies the ISO8601 time string for all directive instance. You can do it with:

```js
angular.module('myapp').constant('ngSmartTimeagoConfig', {
  attr: 'datastring'
});
```
Then you could write like this:
```html
<timeago datastring="2014-05-28T18:01:50Z+0800"></timeago>
```

### TODO
1. Add unit test
