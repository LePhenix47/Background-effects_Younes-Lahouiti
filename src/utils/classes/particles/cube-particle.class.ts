import { log } from "../../functions/console.functions";

/**
 * Represents a cube particle in a canvas.
 *
 * @class
 */
export class CubeParticle {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
  x: number;
  y: number;
  private length: number;
  private rotation: number;

  /**
   * Creates a new instance of the `CubeParticle` class.
   * @param {CanvasRenderingContext2D} context - The canvas rendering context.
   * @param {number} width - The width of the canvas.
   * @param {number} height - The height of the canvas.
   *
   * @constructor
   */
  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    this.context = context;
    this.width = width;
    this.height = height;

    this.length = 1;

    this.x = this.width / 2;
    this.y = this.height / 2;

    this.rotation = 0;
  }

  /**
   * Updates the state of the cube particle.
   */
  update() {
    this.length += 1;
    this.rotation += 0.1;

    this.checkGrowthOverflow();

    // Set the origin to the center of the canvas
  }

  /**
   * Resets the squre when it grows too much
   */
  private checkGrowthOverflow() {
    const isTooBig = this.length >= this.width && this.height;
    if (isTooBig) {
      this.length = 1;
    }
  }

  /**
   * Draws the cube particle on the canvas.
   */
  draw() {
    this.context.strokeStyle = `white`;

    //Must use variables (not class properties) to compute the center of the square
    const middleSquareX: number = this.x - this.length / 2;
    const middleSquareY: number = this.y - this.length / 2;

    this.context.strokeRect(
      middleSquareX,
      middleSquareY,
      this.length,
      this.length
    );

    this.context.stroke();
  }
}
