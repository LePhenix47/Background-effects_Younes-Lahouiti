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

    this.x = width / 2;
    this.y = height / 2;

    this.rotation = 0;

    this.context.translate(-this.length / 2, -this.length / 2);
    this.context.scale(this.x, this.y);
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
    // this.context.save()

    this.context.strokeStyle = `white`;

    this.context.strokeRect(this.x, this.y, this.length, this.length);

    // this.context.rotate(this.rotation);

    this.context.stroke();

    // this.context.restore()
  }
}
