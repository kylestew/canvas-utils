/**
 * Creates a WebGL canvas with the specified width and height.
 *
 * @param width - The width of the canvas.
 * @param height - The height of the canvas.
 * @param canvasId - The ID of the canvas element (optional, default is 'mainCanvasGL').
 *
 * @returns The WebGL rendering context.
 * @throws Error if WebGL is not supported in the browser.
 */
export declare function createGLCanvas(width: number, height: number, canvasId?: string): WebGLRenderingContext;
/**
 * Clears the WebGL context with the specified color.
 *
 * @param color - An array of four numbers representing the RGBA color values.
 */
export declare function glClear(color: number[]): void;
/**
 * Loads and compiles a shader program using the provided vertex and fragment shader sources.
 *
 * @param vertexShaderSource The source code of the vertex shader.
 * @param fragmentShaderSource The source code of the fragment shader.
 *
 * @returns The compiled shader program, or null if compilation fails.
 * @throws Error if the WebGL context has not been created yet.
 */
export declare function loadShader(vertexShaderSource: string, fragmentShaderSource: string): WebGLProgram | null;
/**
 * Sets the current WebGL program and uses it for rendering.
 *
 * @param program The WebGL program to use.
 */
export declare function useShader(program: WebGLProgram): void;
/**
 * Binds a texture to a WebGL context and connects it to a shader uniform.
 *
 * @param textureId - The texture unit to bind the texture to.
 * @param uniformName - The name of the shader uniform to connect the texture to.
 * @param data - The texture data to bind. Can be an HTMLCanvasElement, OffscreenCanvas, or a WebGLTexture object.
 *
 * @throws Error if the WebGL context or current program is not available.
 */
export declare function useTexture(textureId: number, uniformName: string, data: TexImageSource): void;
/**
 * Draws the screen using WebGL.
 *
 * @throws {Error} If WebGL context or current program is not created yet.
 */
export declare function drawScreen(): void;
//# sourceMappingURL=gl-util.d.ts.map