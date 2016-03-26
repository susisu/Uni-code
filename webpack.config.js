"use strict";

let path = require("path");
let webpack = require("webpack");

const DEBUG = process.env.DEBUG === "true";

module.exports = {
    debug: DEBUG,
    devtool: DEBUG ? "#source-map" : "",
    context: __dirname,
    entry: "./src/js/main.js",
    output: {
        path      : path.join(__dirname, "app"),
        publicPath: "/",
        filename  : "js/main.js",
        pathInfo  : DEBUG
    },
    externals: {
        "window"      : true,
        "pixi"        : "PIXI",
        "createjs"    : true,
        "preloadjs"   : "createjs.PreloadJS",
        "soundjs"     : "createjs.SoundJS",
        "ace"         : true,
        "loquat"      : true,
        "electronvolt": true
    },
    plugins:
        DEBUG ? [] : [
            new webpack.optimize.UglifyJsPlugin()
        ]
};
