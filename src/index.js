"use strict";
exports.__esModule = true;
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this._events = {};
    }
    EventEmitter.prototype.on = function (type, callback) {
        this._events[type]
            ? this._events[type].push(callback)
            : (this._events[type] = [callback]);
    };
    EventEmitter.prototype.emit = function (type) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this._events[type]) {
            this._events[type].forEach(function (callback) {
                callback.apply(_this, args);
            });
        }
        else {
            console.warn("Event " + type + " dose not exist");
        }
    };
    EventEmitter.prototype.remove = function (type) {
        if (this._events[type]) {
            this._events[type] = [];
        }
    };
    EventEmitter.prototype.removeAll = function () {
        this._events = {};
    };
    return EventEmitter;
}());
exports["default"] = EventEmitter;
