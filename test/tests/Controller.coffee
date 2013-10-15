DI = require 'dependency-injection'

di = new DI
di.addService('myArray', ['hello', 'word']).setInstantiate(false)

Controller = require 'extended-spine-di/Controller'
Controller.init($, di, false)


describe 'Controller', ->

	describe '#createController()', ->
		it 'should create controller with autowired services', ->
			c = Controller.createController('/app/controllers/Controller', $('#test div'))
			expect(c.el.attr('data-controller')).to.be.equal('/app/controllers/Controller')
			expect(c.myArray).to.be.eql(['hello', 'word'])