/*
 * Uni-code / main.js
 * copyright (c) 2016 Susisu
 */

"use strict";

var window = require("window");
var pixi   = require("pixi");

var Config = require("./config.js");
var Canvas = require("./canvas.js");
var Loader = require("./loader.js");
var Events = require("./events.js");
var Assets = require("./assets.js");
var Editor = require("./editor.js");
var Game   = require("./game.js");

window.addEventListener("load", function () {
    // initialize canvas
    var canvas = new Canvas(window.document.getElementById("game"));
    var editor = new Editor(window.document.getElementById("editor-window"));

    // preloading
    var loader = new Loader();
    canvas.stage.addChild(loader);
    loader.setText("読み込み中");
    // wait for loading font
    var observer = new FontFaceObserver(Config.FONT_FACE);
    observer.check(null, 15000).then(
        loadAssets,
        function () { loader.setText("アセットの読み込みに失敗しました"); }
    );

    function loadAssets() {
        loader.setText("読み込み中...");
        var assets = new Assets(Config.ASSETS_MANIFEST);

        function onAssetsProgress(event) {
            loader.setProgress(event.progress);
        }

        function onAssetsError(event) {
            assets.removeEventListener(Events.PROGRESS, onAssetsProgress);
            assets.removeEventListener(Events.ERROR, onAssetsError);
            assets.removeEventListener(Events.COMPLETE, onAssetsComplete);
            loader.setText("アセットの読み込みに失敗しました");
        }

        function onAssetsComplete(event) {
            assets.removeEventListener(Events.PROGRESS, onAssetsProgress);
            assets.removeEventListener(Events.ERROR, onAssetsError);
            assets.removeEventListener(Events.COMPLETE, onAssetsComplete);
            canvas.stage.removeChild(loader);

            startGame();
        }

        assets.addEventListener(Events.PROGRESS, onAssetsProgress);
        assets.addEventListener(Events.ERROR, onAssetsError);
        assets.addEventListener(Events.COMPLETE, onAssetsComplete);
    }

    function startGame() {
        var game = new Game(canvas, editor);
    }
});
