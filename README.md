# extended-spine-di

Extended [spine](https://npmjs.org/package/spine) framework with [dependency-injection](https://npmjs.org/package/dependency-injection).
It gives you ability to instantiate controllers almost like in [Angular](http://angularjs.org/).

You can use it for example with [SimQ](https://npmjs.org/package/simq).

## Installation

```
$ npm install extended-spine-di
```

## Setup

```
Controller = require 'extended-spine-di'
Controller.init($, diContainer)
```

## Usage

```
Controller = require 'extended-spine-di/Controller'

class MyController extends Controller

	constructor: (@el, http, jQuery) ->
		super


module.exports = MyController
```

Now your controller will have got `http` and `jQuery` services from your di container.

* Documentation of [dependency-inject](https://npmjs.org/package/dependency-injection).
* Documentation of base [extended-spine](https://npmjs.org/package/extended-spine).

## Tests

```
$ npm test
```

## Changelog

* 1.0.3
	+ Some updates

* 1.0.2
	+ Bug with inheritance

* 1.0.1
	+ Typo in tests

* 1.0.0
	+ Initial version