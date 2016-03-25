"use strict";

let path = require("path");
let webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: ["./src/js/main.js"],
    output: {
        path    : path.join(__dirname, "app", "js"),
        filename: "main.js"
    },
    externals: {
        "window"      : true,
        "pixi"        : "PIXI",
        "createjs"    : true,
        "preloadjs"   : "createjs.PreloadJS",
        "soundjs"     : "createjs.SoundJS",
        "loquat"      : true,
        "electronvolt": true
    },
    plugins:
        process.env.DEBUG ? [] : [
            new webpack.optimize.UglifyJsPlugin()
        ]
};
