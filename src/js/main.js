/*
 * Uni-code / main.js
 * copyright (c) 2016 Susisu
 */

"use strict";

var window = require("window");
var pixi   = require("pixi");

var Config = require("./config.js");
var Events = require("./events.js");
var Assets = require("./assets.js");

window.addEventListener("load", function () {
    var canvas = window.document.createElement("canvas");
    canvas.width  = Config.CANVAS_WIDTH;
    canvas.height = Config.CANVAS_HEIGHT;
    window.document.getElementById("game").appendChild(canvas);
    var renderer = pixi.autoDetectRenderer(Config.CANVAS_WIDTH, Config.CANVAS_HEIGHT, {
        view       : canvas,
        antialias  : true,
        autoResize : true,
        resolution : window.devicePixelRatio,
        transparent: false
    });
    var stage = new pixi.Container();

    var assets = new Assets(Config.ASSETS_MANIFEST);
    function onAssetsError(event) {
        assets.removeEventListener(Events.ERROR, onAssetsError);
        assets.removeEventListener(Events.COMPLETE, onAssetsComplete);
        console.log("error");
    }
    function onAssetsComplete(event) {
        assets.removeEventListener(Events.ERROR, onAssetsError);
        assets.removeEventListener(Events.COMPLETE, onAssetsComplete);
        console.log("complete");
    }
    assets.addEventListener(Events.ERROR, onAssetsError);
    assets.addEventListener(Events.COMPLETE, onAssetsComplete);
});
