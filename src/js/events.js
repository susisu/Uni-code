/*
 * Uni-code / events.js
 * copyright (c) 2016 Susisu
 */

function end() {
    module.exports = Object.freeze({
        PROGRESS: "progress",
        ERROR   : "error",
        COMPLETE: "complete",

        ProgressEvent: ProgressEvent,
        ErrorEvent   : ErrorEvent
    });
}

var ev = require("electronvolt");

function ProgressEvent(type, bubbles, cancelable, loaded, total) {
    ev.Event.call(this, type, bubbles, cancelable);
    this.loaded   = loaded;
    this.total    = total;
}

ProgressEvent.prototype = Object.create(ev.Event.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: ProgressEvent
    },
    "toString": {
        writable    : true,
        configurable: true,
        value: function () {
            return this.formatToString("ProgressEvent", ["type", "bubbles", "cancelable", "loaded", "total"]);
        }
    },
    "clone": {
        writable    : true,
        configurable: true,
        value: function () {
            return new ProgressEvent(this.type, this.bubbles, this.cancelable, this.loaded, this.total);
        }
    },
    progress: {
        configurable: true,
        get: function () {
            return this.loaded / this.total;
        }
    }
});

function ErrorEvent(type, bubbles, cancelable, data) {
    ev.Event.call(this, type, bubbles, cancelable);
    this.data = data;
}

ErrorEvent.prototype = Object.create(ev.Event.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: ErrorEvent
    },
    "toString": {
        writable    : true,
        configurable: true,
        value: function () {
            return this.formatToString("ErrorEvent", ["type", "bubbles", "cancelable", "data"]);
        }
    },
    "clone": {
        writable    : true,
        configurable: true,
        value: function () {
            return new ErrorEvent(this.type, this.bubbles, this.cancelable, this.data);
        }
    },
});

end();
