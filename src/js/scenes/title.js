/*
 * Uni-code / scenes/title.js
 * copyright (c) 2016 Susisu
 */

"use strict";

function end() {
    module.exports = TitleScene;
}

var pixi = require("pixi");
var ev   = require("electronvolt");

var SceneBase = require("./base.js");

function TitleScene(canvas, editor) {
    SceneBase.call(this, canvas, editor);
}

TitleScene.START_GAME = "startGame";

TitleScene.prototype = Object.create(SceneBase.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: TitleScene
    }
});

end();
