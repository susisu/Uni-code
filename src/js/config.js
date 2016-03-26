/*
 * Uni-code / config.js
 * copyright (c) 2016 Susisu
 */

"use strict";

var window = require("window");

module.exports = Object.freeze({
    CANVAS_WIDTH : 800,
    CANVAS_HEIGHT: 450,
    RESOLUTION   : window.devicePixelRatio,

    FONT_FACE: "Makinas-Scrap-5",

    ASSETS_MANIFEST: [
        { id: "test", src:"assets/test.png" }
    ]
});
