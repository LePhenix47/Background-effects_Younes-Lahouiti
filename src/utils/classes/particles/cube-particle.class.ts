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
  growthExponent: number;

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
    this.growthExponent = 0;

    this.x = this.width / 2;
    this.y = this.height / 2;

    this.rotation = 0;
  }

  /**
   * Updates the state of the cube particle.
   */
  update() {
    this.length += 1 + this.growthExponent;
    this.rotation += 0.1;

    this.growthExponent++;

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
      this.growthExponent = 0;
    }
  }

  /**
   * Draws the cube particle on the canvas.
   */
  draw() {
    this.context.save();

    // Translate to the center of the canvas
    this.context.translate(this.width / 2, this.height / 2);

    // Rotate the canvas by the rotation angle in radians
    this.context.rotate((this.rotation * Math.PI) / 180);

    // Set the stroke color and width for the square
    this.context.strokeStyle = "white";
    this.context.lineWidth = 5;

    //Must use variables (not class properties) to compute the center of the square
    const middleSquareX: number = (-1 * this.length) / 2;
    const middleSquareY: number = (-1 * this.length) / 2;

    this.context.strokeStyle = `white`;
    // Draw the square with a stroke
    this.context.strokeRect(
      middleSquareX,
      middleSquareY,
      this.length,
      this.length
    );

    this.context.restore();
  }
}
