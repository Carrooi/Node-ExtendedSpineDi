// Generated by CoffeeScript 1.6.3
(function() {
  var BaseController, Controller, DI, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BaseController = require('extended-spine/Controller');

  DI = require('dependency-injection');

  Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      _ref = Controller.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Controller.di = null;

    Controller.init = function(jQuery, di, scope) {
      if (scope == null) {
        scope = '[data-application]:first';
      }
      if (!(di instanceof DI)) {
        throw new Error('di container must be an instance of dependency-inject object.');
      }
      Controller.di = di;
      return Controller.__super__.constructor.init.call(this, jQuery, scope);
    };

    Controller.createController = function(name, el) {
      var controller;
      controller = require(name);
      return Controller.di.createInstance(controller, [el]);
    };

    return Controller;

  })(BaseController);

  module.exports = Controller;

}).call(this);
