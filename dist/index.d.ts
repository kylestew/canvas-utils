export { createCanvas, createOffscreenCanvas, setCanvasRange } from './canvas-util';
export { createGLCanvas, glClear, loadShader, useShader, useTexture, drawScreen } from './gl-util';
declare global {
    interface CanvasRenderingContext2D {
        background(color: string): void;
    }
}
declare global {
    interface OffscreenCanvasRenderingContext2D {
        background(color: string): void;
    }
}
//# sourceMappingURL=index.d.ts.map