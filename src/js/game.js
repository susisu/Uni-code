/*
 * Uni-code / game.js
 * copyright (c) 2016 Susisu
 */

"use strict";

function end() {
    module.exports = Game;
}

var pixi = require("pixi");
var ev   = require("electronvolt");

function Game(canvas, editor) {
    ev.EventDispatcher.call(this);
    this._canvas = canvas;
    this._editor = editor;
}

Game.prototype = Object.create(ev.EventDispatcher.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: Game
    }
});

end();
