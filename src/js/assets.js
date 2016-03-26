/*
 * Uni-code / assets.js
 * copyright (c) 2016 Susisu
 */

function end() {
    module.exports = Assets;
}

var createjs = require("createjs");
var ev       = require("electronvolt");

var Events = require("./events.js");

function Assets(manifest) {
    ev.EventDispatcher.call(this);
    this._queue = new createjs.LoadQueue();
    this._queue.loadManifest(manifest);
    var self = this;
    this._queue.on("progress", function (event) {
        self.dispatchEvent(new Events.ProgressEvent(Events.PROGRESS, false, false, event.loaded, event.total));
    });
    this._queue.on("complete", function (event) {
        self.dispatchEvent(new ev.Event(Events.COMPLETE, false, false));
    });
    this._queue.on("error", function (event) {
        self.dispatchEvent(new Events.ErrorEvent(Events.ERROR, false, false, event.data));
    });
}

Assets.prototype = Object.create(ev.EventDispatcher.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: Assets
    },
    get: {
        writable    : true,
        configurable: true,
        value: function (id) {
            return this._queue.getResult(id);
        }
    }
});

end();
