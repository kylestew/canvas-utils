"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCanvasRange = exports.createOffscreenCanvas = exports.createCanvas = void 0;
const canvas_save_1 = require("./canvas-save");
/**
 * Creates a canvas element with the specified width and height, and returns its rendering context.
 * If a canvas ID is not provided, the default ID 'mainCanvas' is used.
 *
 * @param width - The width of the canvas.
 * @param height - The height of the canvas.
 * @param canvasId - The ID of the canvas element (optional).
 *
 * @returns The rendering context of the created canvas.
 * @throws {Error} If canvas is not supported in the browser.
 */
function createCanvas(width, height, canvasId = 'mainCanvas') {
    const canvas = document.createElement('canvas');
    canvas.id = canvasId;
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Canvas not supported in this browser!');
    }
    (0, canvas_save_1.installSaveCanvasCommand)(ctx.canvas);
    return ctx;
}
exports.createCanvas = createCanvas;
/**
 * Creates an offscreen canvas with the specified width and height.
 *
 * @param width - The width of the offscreen canvas.
 * @param height - The height of the offscreen canvas.
 * @param clearColor - The color used to clear the offscreen canvas. Defaults to 'black'.
 *
 * @returns The OffscreenCanvasRenderingContext2D object representing the offscreen canvas.
 * @throws Error if the OffscreenCanvasRenderingContext2D cannot be created.
 */
function createOffscreenCanvas(width, height, clearColor = 'black') {
    const offscreenCanvas = new OffscreenCanvas(width, height);
    const offCtx = offscreenCanvas.getContext('2d', { willReadFrequently: true });
    if (!offCtx) {
        throw new Error('Could not create OffscreenCanvasRenderingContext2D');
    }
    offCtx.fillStyle = clearColor;
    offCtx.fillRect(0, 0, width, height);
    return offCtx;
}
exports.createOffscreenCanvas = createOffscreenCanvas;
/**
 * Sets the canvas range for a given CanvasRenderingContext2D.
 * This function scales and translates the canvas to fit the range [min, max] into the canvas dimensions.
 *
 * @param ctx - The CanvasRenderingContext2D to set the range for.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 */
function setCanvasRange(ctx, min, max) {
    // Retrieve the canvas dimensions from the context
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    // Determine the shortest side
    const size = Math.min(width, height);
    // Calculate the scale factor to fit [min, max] into the shortest side
    const scaleFactor = size / (max - min);
    console.log('SCALE FACTOR', scaleFactor);
    // Reset transformations to default
    ctx.resetTransform();
    // Set up scaling
    ctx.scale(scaleFactor, scaleFactor);
    // Initialize translation values
    let translateX = 0;
    let translateY = 0;
    let excessWidth = 0;
    let excessHeight = 0;
    let xRange = [min, max];
    let yRange = [min, max];
    // Determine if width or height is the shortest dimension and calculate translation
    if (size === width) {
        // Width is the shortest, center vertically
        excessHeight = height - width;
        translateY = excessHeight / (2 * scaleFactor);
        ctx.translate(-min, -min + translateY);
        // Update yRange to reflect the actual range being displayed
        const rescaleFactor = height / (max - min) / scaleFactor;
        yRange = [min * rescaleFactor, max * rescaleFactor];
    }
    else {
        // Height is the shortest, center horizontally
        excessWidth = width - height;
        translateX = excessWidth / (2 * scaleFactor);
        ctx.translate(-min + translateX, -min);
        // Update yRange to reflect the actual range being displayed
        const rescaleFactor = width / (max - min) / scaleFactor;
        xRange = [min * rescaleFactor, max * rescaleFactor];
    }
    // Return new ranges describing how the canvas area is being used
    return {
        min: [xRange[0], yRange[0]],
        max: [xRange[1], yRange[1]],
    };
}
exports.setCanvasRange = setCanvasRange;
