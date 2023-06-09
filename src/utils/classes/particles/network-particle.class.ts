import { createCircle } from "../../functions/canvas.functions";
import { getRandomNumber } from "../../functions/number.functions";

export class NetworkParticle {
  /**
   * The canvas context.
   * @type {CanvasRenderingContext2D}
   * @memberof NetworkParticle
   */
  context: CanvasRenderingContext2D;

  /**
   * The width of the canvas.
   * @type {number}
   * @memberof NetworkParticle
   */
  width: number;

  /**
   * The height of the canvas.
   * @type {number}
   * @memberof NetworkParticle
   */
  height: number;

  /**
   * The x coordinate of the particle.
   * @type {number}
   * @memberof NetworkParticle
   */
  x: number;

  /**
   * The y coordinate of the particle.
   * @type {number}
   * @memberof NetworkParticle
   */
  y: number;

  /**
   * The radius of the particle.
   * @type {number}
   * @memberof NetworkParticle
   */
  private radius: number;

  /**
   * The velocity vector in the x direction.
   * @type {number}
   * @memberof NetworkParticle
   */
  private vectorX: number;

  /**
   * The velocity vector in the y direction.
   * @type {number}
   * @memberof NetworkParticle
   */
  private vectorY: number;

  /**
   * Creates an instance of NetworkParticle.
   * @param {CanvasRenderingContext2D} context The canvas context.
   * @param {number} width The width of the canvas.
   * @param {number} height The height of the canvas.
   *
   * @memberof NetworkParticle
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

    this.radius = 3;

    this.vectorX = getRandomNumber(-2, 2) / getRandomNumber(1, 3);

    this.vectorY = getRandomNumber(-2, 2) / getRandomNumber(1, 3);
  }

  /**
   * Updates the position of the particle based on its velocity vector.
   * @memberof NetworkParticle
   */
  update() {
    //We update their velocity
    this.x += this.vectorX;
    this.y += this.vectorY;

    //We check for collisions
    this.checkHorizontalCollisions();
    this.checkVerticalCollisions();
  }

  /**
   * Checks if the particle has collided with the left or right edge of the canvas and reverses its x velocity if so.
   * @memberof NetworkParticle
   */
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
   * @memberof NetworkParticle
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
   * Draws the particle on the canvas.
   * @memberof NetworkParticle
   */
  draw() {
    //We'll draw the particle
    this.context.fillStyle = "white";

    //We start creating the line (arcs are considered as lines)
    //And lines can be connected
    this.context.beginPath();

    //We set the x,y, radius, start and ending angle
    createCircle(this.context, this.x, this.y, this.radius * 2);

    //We fill the current path with the current fillStyle
    this.context.fill();
  }
}
