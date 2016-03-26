/*
 * Uni-code / utils.js
 * copyright (c) 2016 Susisu
 */

function end() {
    module.exports = Object.freeze({
        center : center,
        vcenter: vcenter
    });
}

var Config = require("./config.js");

function center(object, width) {
    if (width === undefined) {
        width = Config.CANVAS_WIDTH;
    }
    return (width - object.width) * 0.5;
}

function vcenter(object, height) {
    if (height === undefined) {
        height = Config.CANVAS_HEIGHT;
    }
    return (height - object.height) * 0.5;
}

end();
