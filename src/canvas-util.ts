import { installSaveCanvasCommand } from './canvas-save'

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
export function createCanvas(width: number, height: number, canvasId: string = 'mainCanvas'): CanvasRenderingContext2D {
    const canvas = document.createElement('canvas')
    canvas.id = canvasId
    document.body.appendChild(canvas)

    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d')
    if (!ctx) {
        throw new Error('Canvas not supported in this browser!')
    }

    installSaveCanvasCommand(ctx.canvas)

    return ctx
}

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
export function createOffscreenCanvas(
    width: number,
    height: number,
    clearColor: string = 'black'
): OffscreenCanvasRenderingContext2D {
    const offscreenCanvas = new OffscreenCanvas(width, height)
    const offCtx = offscreenCanvas.getContext('2d', { willReadFrequently: true })

    if (!offCtx) {
        throw new Error('Could not create OffscreenCanvasRenderingContext2D')
    }

    offCtx.fillStyle = clearColor
    offCtx.fillRect(0, 0, width, height)

    return offCtx
}

/**
 * Sets the canvas range for a given CanvasRenderingContext2D.
 * This function scales and translates the canvas to fit the range [min, max] into the canvas dimensions.
 *
 * @param ctx - The CanvasRenderingContext2D to set the range for.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 */
export function setCanvasRange(ctx: CanvasRenderingContext2D, min: number, max: number): void {
    // Retrieve the canvas dimensions from the context
    const width = ctx.canvas.width
    const height = ctx.canvas.height

    // Determine the shortest side
    const size = Math.min(width, height)

    // Calculate the scale factor to fit [min, max] into the shortest side
    const scaleFactor = size / (max - min)

    // Reset transformations to default
    ctx.resetTransform()

    // Set up scaling
    ctx.scale(scaleFactor, scaleFactor)

    // Determine if width or height is the shortest dimension and calculate translation
    if (size === width) {
        // Width is the shortest, center vertically
        const excessHeight = height / scaleFactor - (max - min)
        ctx.translate(-min, -min + excessHeight / 2)
    } else {
        // Height is the shortest, center horizontally
        const excessWidth = width / scaleFactor - (max - min)
        ctx.translate(-min + excessWidth / 2, -min)
    }
}

/*
// keep canvas centered and scaled
// TODO: finish this
function adjustCanvasSize() {
    const canvas = document.querySelector('#app canvas') as HTMLCanvasElement
    if (!canvas) return

    // // Calculate height as 80% of viewport height
    // const height = window.innerHeight * 0.8

    // // Calculate width based on the aspect ratio
    // const width = height * aspectRatio

    // // Set canvas width and height
    // canvas.style.height = `${height}px`
    // canvas.style.width = `${width}px`
}

// Adjust canvas size on load and window resize
window.addEventListener('load', adjustCanvasSize)
window.addEventListener('resize', adjustCanvasSize)

// TODO: CMD+S to save output on sketch
*/
