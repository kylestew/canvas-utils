export { createCanvas, createOffscreenCanvas, setCanvasRange } from './canvas-util';
export { createGLCanvas, glClear, loadShader, useShader, useTexture, drawScreen } from './gl-util';
CanvasRenderingContext2D.prototype.background = function (color) {
    this.fillStyle = color;
    this.fillRect(0, 0, this.canvas.width, this.canvas.height);
};
OffscreenCanvasRenderingContext2D.prototype.background = function (color) {
    this.fillStyle = color;
    this.fillRect(0, 0, this.canvas.width, this.canvas.height);
};
