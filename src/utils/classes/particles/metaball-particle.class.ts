import { createCircle } from "../../functions/canvas.functions";
import { getRandomNumber } from "../../functions/number.functions";

export class MetaballParticle {
  /**
   * The canvas context.
   * @type {CanvasRenderingContext2D}
   * @memberof MovingParticle
   */
  context: CanvasRenderingContext2D;

  /**
   * The width of the canvas.
   * @type {number}
   * @memberof MovingParticle
   */
  width: number;

  /**
   * The height of the canvas.
   * @type {number}
   * @memberof MovingParticle
   */
  height: number;

  /**
   * The x coordinate of the particle.
   * @type {number}
   * @memberof MovingParticle
   */
  x: number;

  /**
   * The y coordinate of the particle.
   * @type {number}
   * @memberof MovingParticle
   */
  y: number;

  /**
   * The radius of the particle.
   * @type {number}
   * @memberof MovingParticle
   */
  private radius: number;

  /**
   * The velocity vector in the x direction.
   * @type {number}
   * @memberof MovingParticle
   */
  private vectorX: number;

  /**
   * The velocity vector in the y direction.
   * @type {number}
   * @memberof MovingParticle
   */
  private vectorY: number;

  /**
   * Creates an instance of MovingParticle.
   * @param {CanvasRenderingContext2D} context The canvas context.
   * @param {number} width The width of the canvas.
   * @param {number} height The height of the canvas.
   *
   * @memberof MovingParticle
   */
  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    this.context = context;
    this.width = width;
    this.height = height;

    this.x = getRandomNumber(0, width);
    this.y = getRandomNumber(0, height);

    this.radius = getRandomNumber(20, 50);

    this.vectorX = getRandomNumber(-15, 15) / this.radius;

    this.vectorY = getRandomNumber(-15, 15) / this.radius;
  }

  /**
   * Update the position of the particle
   *
   * @returns {void}
   * @memberof MovingParticle
   */
  update(): void {
    this.x += this.vectorX;
    this.y += this.vectorY;

    this.checkHorizontalCollisions();

    this.checkVerticalCollisions();
  }

  private checkHorizontalCollisions() {
    // Check if the particle has reached the left edge of the canvas
    const leftSideOverflow: boolean = this.x - this.radius <= 0;
    // Check if the particle has reached the right edge of the canvas
    const rightSideOverflow: boolean = this.x + this.radius >= this.width;
    if (leftSideOverflow || rightSideOverflow) {
      this.vectorX *= -1; // Reverse the x direction
    }
  }

  /**
   * Checks for collisions with the top and bottom edges of the canvas, and reverses the y direction if necessary.
   * @memberof MovingParticle
   */
  private checkVerticalCollisions() {
    // Check if the particle has reached the bottom edge of the canvas
    const bottomSideOverflow: boolean = this.y + this.radius >= this.height;
    // Check if the particle has reached the top edge of the canvas
    const topSideOverflow: boolean = this.y - this.radius <= 0;
    if (topSideOverflow || bottomSideOverflow) {
      this.vectorY *= -1; // Reverse the y direction
    }
  }

  /**
   * Draw the particle on the canvas
   *
   * @returns {void}
   * @memberof MovingParticle
   */
  draw(): void {
    this.context.fillStyle = `white`;
    this.context.beginPath();

    createCircle(this.context, this.x, this.y, this.radius);
    this.context.fill();
  }
}
