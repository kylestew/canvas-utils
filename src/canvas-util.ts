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

    // preserve buffer to CMD+S saving
    const ctx = canvas.getContext('2d')
    if (!ctx) {
        throw new Error('Canvas not supported in this browser!')
    }

    // installSaveCanvasCommand(gl.canvas)

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

/*


// EVIL MONKEY PATCHING IN SOME METHODS
if (typeof OffscreenCanvasRenderingContext2D.prototype.background === 'undefined') {
    OffscreenCanvasRenderingContext2D.prototype.background = function (color) {
        this.fillStyle = color
        this.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }
}
*/

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
