/*
 * Uni-code / canvas.js
 * copyright (c) 2016 Susisu
 */

"use strict";

function end() {
    module.exports = Canvas;
}

var pixi = require("pixi");

var Config = require("./config.js");

function Canvas(canvasWrapper) {
    this._canvas = window.document.createElement("canvas");
    this._canvas.width  = Config.CANVAS_WIDTH;
    this._canvas.height = Config.CANVAS_HEIGHT;
    canvasWrapper.appendChild(this._canvas);
    this._renderer = pixi.autoDetectRenderer(Config.CANVAS_WIDTH, Config.CANVAS_HEIGHT, {
        view       : this._canvas,
        antialias  : true,
        autoResize : true,
        resolution : Config.RESOLUTION,
        transparent: false
    });
    this._stage = new pixi.Container();
    this._rendering = true;

    var self = this;
    function animate() {
        window.requestAnimationFrame(animate);
        if (self._rendering) {
            self._renderer.render(self._stage);            
        }
    }
    window.requestAnimationFrame(animate);
}

Canvas.prototype = Object.create(Object.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: Canvas
    },
    stage: {
        configurable: true,
        get: function () {
            return this._stage;
        }
    },
    start: {
        writable    : true,
        configurable: true,
        value: function () {
            this._rendering = true;
        }
    },
    stop: {
        writable    : true,
        configurable: true,
        value: function () {
            this._rendering = false;
        }
    },
});

end();
