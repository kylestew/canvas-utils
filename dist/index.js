"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawScreen = exports.useTexture = exports.useShader = exports.loadShader = exports.glClear = exports.createGLCanvas = exports.setCanvasRange = exports.createOffscreenCanvas = exports.createCanvas = void 0;
var canvas_util_1 = require("./canvas-util");
Object.defineProperty(exports, "createCanvas", { enumerable: true, get: function () { return canvas_util_1.createCanvas; } });
Object.defineProperty(exports, "createOffscreenCanvas", { enumerable: true, get: function () { return canvas_util_1.createOffscreenCanvas; } });
Object.defineProperty(exports, "setCanvasRange", { enumerable: true, get: function () { return canvas_util_1.setCanvasRange; } });
var gl_util_1 = require("./gl-util");
Object.defineProperty(exports, "createGLCanvas", { enumerable: true, get: function () { return gl_util_1.createGLCanvas; } });
Object.defineProperty(exports, "glClear", { enumerable: true, get: function () { return gl_util_1.glClear; } });
Object.defineProperty(exports, "loadShader", { enumerable: true, get: function () { return gl_util_1.loadShader; } });
Object.defineProperty(exports, "useShader", { enumerable: true, get: function () { return gl_util_1.useShader; } });
Object.defineProperty(exports, "useTexture", { enumerable: true, get: function () { return gl_util_1.useTexture; } });
Object.defineProperty(exports, "drawScreen", { enumerable: true, get: function () { return gl_util_1.drawScreen; } });
CanvasRenderingContext2D.prototype.background = function (color) {
    this.fillStyle = color;
    this.fillRect(0, 0, this.canvas.width, this.canvas.height);
};
OffscreenCanvasRenderingContext2D.prototype.background = function (color) {
    this.fillStyle = color;
    this.fillRect(0, 0, this.canvas.width, this.canvas.height);
};
