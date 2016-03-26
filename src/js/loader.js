/*
 * Uni-code / loader.js
 * copyright (c) 2016 Susisu
 */

"use strict";

function end() {
    module.exports = Loader;
}

var pixi = require("pixi");

var Config = require("./config.js");
var Utils  = require("./utils.js");

function Loader() {
    pixi.Container.call(this);

    this._text = new pixi.Text(
        "",
        {
            font : "18px " + Config.FONT_FACE + ", sans-serif",
            fill : 0xf0f0f0
        }
    );
    this._text.resolution = Config.RESOLUTION;
    this._text.x = Utils.center(this._text);
    this._text.y = Utils.vcenter(this._text) - 18;
    this.addChild(this._text);

    this._bar = new pixi.Graphics();
    this._bar.beginFill(0xf0f0f0, 1)
        .drawRect(0, 0, Config.CANVAS_WIDTH, 2)
        .endFill();
    this._bar.x = 0;
    this._bar.y = Utils.vcenter(this._bar);
    this._bar.scale.x = 0;
    this.addChild(this._bar);
}

Loader.prototype = Object.create(pixi.Container.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: Loader
    },
    setProgress: {
        writable    : true,
        configurable:true,
        value: function (progress) {
            this._bar.scale.x = progress;
        }
    },
    setText: {
        writable    : true,
        configurable:true,
        value: function (text) {
            this._text.text = text;
            this._text.x = Utils.center(this._text);
            this._text.y = Utils.vcenter(this._text) - 18;
        }
    }
});

end();
