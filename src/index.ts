class EventEmitter {
  _events: object;
  constructor() {
    this._events = {};
  }

  on(type: string, callback: Function) {
    this._events[type]
      ? this._events[type].push(callback)
      : (this._events[type] = [callback]);
  }

  emit(type: string, ...args: []) {
    if (this._events[type]) {
      this._events[type].forEach((callback) => {
        callback.apply(this, args);
      });
    } else {
      console.warn(`Event ${type} dose not exist`);
    }
  }

  remove(type: string) {
    if (this._events[type]) {
      this._events[type] = [];
    }
  }

  removeAll() {
    this._events = {};
  }
}

export default EventEmitter;
