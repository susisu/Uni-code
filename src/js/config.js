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

    ASSETS_MANIFEST: [
        { id: "test", src:"assets/test.png" }
    ]
});
