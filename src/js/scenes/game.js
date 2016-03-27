/*
 * Uni-code / scenes/game.js
 * copyright (c) 2016 Susisu
 */

"use strict";

function end() {
    module.exports = GameScene;
}

var pixi = require("pixi");
var ev   = require("electronvolt");

var SceneBase = require("./base.js");

function GameScene(canvas, editor) {
    SceneBase.call(this, canvas, editor);
}

GameScene.QUIT_GAME = "quitGame";

GameScene.prototype = Object.create(SceneBase.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: GameScene
    }
});

end();
