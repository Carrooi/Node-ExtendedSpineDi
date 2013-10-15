BaseController = require 'extended-spine-di/Controller'

class Controller extends BaseController


	myArray: null


	constructor: (@el, @myArray) ->
		super


module.exports = Controller