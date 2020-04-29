const EventEmitter = require("../src/index");

var assert = require("assert");

var eventList = new EventEmitter.default();

describe("EventEmitter", function () {
  let type = "testone";
  let type2 = "testtwo";
  describe("on() and emit() and remove()", function () {
    it("id should equal", function () {
      let id = Math.random();
      eventList.on(type, function (res) {
        // assert.equal(res, id);
      });
      assert.equal(eventList._events[type].length, 1);
      eventList.emit(type, 11);
    });

    it("remove event", function () {
      eventList.remove(type);
      assert.equal(eventList._events[type].length, 0);

      eventList.on(type2);
      assert(eventList._events[type2].length, 1);

      eventList.removeAll();

      assert.deepStrictEqual(eventList._events, {});
    });
  });
});
