/**
 * Gets the 2D rendering context for a given HTML canvas element.
 * @param {HTMLCanvasElement} canvas - The HTML canvas element.
 * @returns {CanvasRenderingContext2D } The 2D rendering context for the canvas.
 */
export function get2DContext(
  canvas: HTMLCanvasElement
): CanvasRenderingContext2D {
  return canvas.getContext("2d");
}

/**
 * Set the width and height of a canvas element.
 * @param {HTMLCanvasElement} canvas - The HTML canvas element.
 * @param {number} width - The new width of the canvas.
 * @param {number} height - The new height of the canvas.
 *
 * @returns {void}
 */
export function setCanvasSize(
  canvas: HTMLCanvasElement,
  width: number,
  height: number
): void {
  canvas.width = width;
  canvas.height = height;
}

/**
 * Create a canvas gradient object given a canvas 2D rendering context, starting and ending coordinates,
 *  and an array of colors (any color model accepted).
 *
 * @param {CanvasRenderingContext2D} canvasContext - The canvas 2D rendering context.
 * @param {number} startX - The x-coordinate of the start point for the gradient.
 * @param {number} startY - The y-coordinate of the start point for the gradient.
 * @param {number} endX - The x-coordinate of the end point for the gradient.
 * @param {number} endY - The y-coordinate of the end point for the gradient.
 * @param {string[]} arrayOfColors - An array of colors to use in the gradient.
 *
 * @returns {CanvasGradient} The canvas gradient object.
 */
export function createCanvasGradient(
  canvasContext: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  arrayOfColors: string[]
): CanvasGradient {
  // Create a linear gradient for a canvas
  const canvasGradient: CanvasGradient = canvasContext.createLinearGradient(
    startX,
    startY,
    endX,
    endY
  );

  for (let i = 0; i < arrayOfColors.length; i++) {
    const color: string = arrayOfColors[i];

    canvasGradient.addColorStop(i, color);
  }

  return canvasGradient;
}
