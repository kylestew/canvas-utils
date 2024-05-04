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
export declare function createCanvas(width: number, height: number, canvasId?: string): CanvasRenderingContext2D;
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
export declare function createOffscreenCanvas(width: number, height: number, clearColor?: string): OffscreenCanvasRenderingContext2D;
/**
 * Sets the canvas range for a given CanvasRenderingContext2D.
 * This function scales and translates the canvas to fit the range [min, max] into the canvas dimensions.
 *
 * @param ctx - The CanvasRenderingContext2D to set the range for.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 */
export declare function setCanvasRange(ctx: CanvasRenderingContext2D, min: number, max: number): {
    min: [number, number];
    max: [number, number];
};
//# sourceMappingURL=canvas-util.d.ts.map