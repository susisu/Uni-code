/*
 * Uni-code / editor.js
 * copyright (c) 2016 Susisu
 */

"use strict";

function end() {
    module.exports = Editor;
}

var window = require("window");
var ace    = require("ace");
var ev     = require("electronvolt");

function Editor(editorWindow) {
    ev.EventDispatcher.call(this);
    this._editorWindow = editorWindow;

    var editorElem = window.document.createElement("div");
    editorElem.className = "editor";
    editorWindow.appendChild(editorElem);
    this._editor = ace.edit(editorElem);
}

Editor.prototype = Object.create(ev.EventDispatcher.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: Editor
    },
    open: {
        writable    : true,
        configurable: true,
        value: function () {
            this._editorWindow.style.display = "block";
        }
    },
    close: {
        writable    : true,
        configurable: true,
        value: function () {
            this._editorWindow.style.display = "none";
        }
    }
});

end();
