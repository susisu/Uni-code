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

function Game(stage, editor) {
    ev.EventDispatcher.call(this);
    this._stage  = stage;
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
