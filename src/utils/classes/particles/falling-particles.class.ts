import { getRandomNumber } from "../../functions/number.functions";

/**
 * Represents a particle that falls on a canvas.
 */
export class FallingParticle {
  /**
   * The canvas context.
   * @type {CanvasRenderingContext2D}
   * @memberof FallingParticle
   */
  context: CanvasRenderingContext2D;

  /**
   * The width of the canvas.
   * @type {number}
   * @memberof FallingParticle
   */
  width: number;

  /**
   * The height of the canvas.
   * @type {number}
   * @memberof FallingParticle
   */
  height: number;

  titleX: number;

  titleY: number;

  titleWidth: number;

  titleHeight: number;

  /**
   * The x coordinate of the particle.
   * @type {number}
   * @memberof FallingParticle
   */
  x: number;

  /**
   * The y coordinate of the particle.
   * @type {number}
   * @memberof FallingParticle
   */
  y: number;

  /**
   * The radius of the particle.
   * @type {number}
   * @memberof FallingParticle
   */
  radius: number;

  /**
   * The x direction of the particle.
   * @type {number}
   * @memberof FallingParticle
   * @private
   */
  private vectorX: number;

  /**
   * The weight of the particle.
   * @type {number}
   * @memberof FallingParticle
   * @private
   */
  private weight: number;

  /**
   * The original weight of the particle.
   * @type {number}
   * @memberof FallingParticle
   * @private
   */
  private ORIGINAL_WEIGHT: number;

  /**
   * Creates a FallingParticle instance.
   * @param {CanvasRenderingContext2D} context - The canvas context.
   * @param {number} width - The width of the canvas.
   * @param {number} height - The height of the canvas.
   * @memberof FallingParticle
   */
  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    titleX: number,
    titleY: number,
    titleWidth: number,
    titleHeight: number
  ) {
    this.context = context;

    this.width = width;
    this.height = height;

    this.titleX = titleX;
    this.titleY = titleY;
    this.titleWidth = titleWidth;
    this.titleHeight = titleHeight;

    // Coordinates of the particle
    this.x = getRandomNumber(0, width);
    this.y = getRandomNumber(0, height);

    // Size in pixels
    this.radius = 5;

    // X direction
    this.vectorX = getRandomNumber(-5, 5) / 2;

    this.ORIGINAL_WEIGHT = 3;
    this.weight = 3;
  }

  /**
   * Updates the offset x and y coordinates of the particle.
   * @memberof FallingParticle
   */
  update() {
    this.x += this.vectorX;
    this.y += this.weight;

    this.weight += 0.1;

    this.checkCanvasSideCollision();
  }

  private checkCanvasSideCollision() {
    const leftSideOverflow: boolean = this.x - this.radius < 0;
    const rightSideOverflow: boolean = this.x + this.radius > this.width;

    const overflowsHorizontally: boolean =
      leftSideOverflow || rightSideOverflow;
    if (overflowsHorizontally) {
      this.vectorX *= -1; //We flip the X direction
    }
  }

  private checkTopTitleCollision() {}

  private checkHorizontalSidesCollision() {}

  /**
   * Draws the particle on the canvas.
   * @memberof FallingParticle
   */
  draw() {
    this.context;
  }
}
