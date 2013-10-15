BaseController = require 'extended-spine/Controller'
DI = require 'dependency-injection'

class Controller extends BaseController


	@di: null


	@init: (jQuery, di, scope = '[data-application]:first') ->
		if di !instanceof DI
			throw new Error 'di container must be an instance of dependency-inject object.'

		Controller.di = di

		super(jQuery, scope)


	@createController: (name, el) ->
		controller = require(name)
		return Controller.di.createInstance(controller, [el])


module.exports = Controller