/*
 * Uni-code / scenes/base.js
 * copyright (c) 2016 Susisu
 */

"use strict";

function end() {
    module.exports = SceneBase;
}

var pixi = require("pixi");
var ev   = require("electronvolt");

function SceneBase(canvas, editor) {
    ev.EventDispatcher.call(this);
    this._canvas = canvas;
    this._editor = editor;

    this._stage = new pixi.Container();
    this._canvas.stage.addChild(this._stage);
}

SceneBase.prototype = Object.create(ev.EventDispatcher.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: SceneBase
    },
    canvas: {
        configurable: true,
        get: function () {
            return this._canvas;
        }
    },
    editor: {
        configurable: true,
        get: function () {
            return this._editor;
        }
    },
    stage: {
        configurable: true,
        get: function () {
            return this._stage;
        }
    },
    openEditor: {
        writable    : true,
        configurable: true,
        value: function () {
            this._canvas.stop();
            this._editor.open();
        }
    },
    closeEditor: {
        writable    : true,
        configurable: true,
        value: function () {
            this._editor.close();
            this._canvas.start();
        }
    },
    close: {
        writable    : true,
        configurable: true,
        value: function () {
            this.closeEditor();
            this._canvas.stage.removeChild(this._stage);
        }
    }
});

end();
