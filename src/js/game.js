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

var TitleScene = require("./scenes/title.js");
var GameScene = require("./scenes/game.js");

function Game(canvas, editor) {
    ev.EventDispatcher.call(this);

    var currentScene = null;
    showTitleScene();

    function showTitleScene() {
        currentScene = new TitleScene(canvas, editor);
        currentScene.addEventListener(TitleScene.START_GAME, onStartGame);
    }

    function onStartGame() {
        currentScene.removeEventListener(TitleScene.START_GAME, onStartGame);
        currentScene.close();
        currentScene = null;
        showGameScene();
    }

    function showGameScene() {
        currentScene = new GameScene(canvas, editor);
        currentScene.addEventListener(GameScene.QUIT_GAME, onQuitGame);
    }

    function onQuitGame() {
        currentScene.removeEventListener(GameScene.QUIT_GAME, onQuitGame);
        currentScene.close();
        currentScene = null;
        showTitleScene();
    }
}

Game.prototype = Object.create(ev.EventDispatcher.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: Game
    }
});

end();
