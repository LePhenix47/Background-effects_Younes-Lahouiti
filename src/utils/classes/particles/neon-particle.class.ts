import { createCircle, rotateCanvas } from "../../functions/canvas.functions";
import { getRandomNumber } from "../../functions/number.functions";

export class NeonParticle {
  /**
   * The canvas context.
   * @type {CanvasRenderingContext2D}
   * @memberof NeonParticle
   */
  context: CanvasRenderingContext2D;

  /**
   * The width of the canvas.
   * @type {number}
   * @memberof NeonParticle
   */
  width: number;

  /**
   * The height of the canvas.
   * @type {number}
   * @memberof NeonParticle
   */
  height: number;

  /**
   * The x coordinate of the particle.
   * @type {number}
   * @memberof NeonParticle
   */
  x: number;

  /**
   * The y coordinate of the particle.
   * @type {number}
   * @memberof NeonParticle
   */
  y: number;

  /**
   * The size of the particle.
   * @type {number}
   * @memberof NeonParticle
   */
  private size: number;

  /**
   * The velocity vector in the x direction.
   * @type {number}
   * @memberof NeonParticle
   */
  private vectorX: number;

  private hue: number;
  private rotation: number;

  /**
   * Creates an instance of NeonParticle.
   * @param {CanvasRenderingContext2D} context The canvas context.
   * @param {number} width The width of the canvas.
   * @param {number} height The height of the canvas.
   *
   * @memberof NeonParticle
   */
  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    this.context = context;
    this.width = width;
    this.height = height;

    this.x = this.width / 2;
    this.y = this.height / 2;

    this.size = 1;

    this.vectorX = getRandomNumber(-2, 2) / getRandomNumber(1, 3);

    this.hue = 0;
    this.rotation = 60; //In degrees
  }

  resetParticle() {
    this.x = this.width / 2;
    this.y = this.height / 2;

    this.size = 1;
  }

  /**
   * Updates the position of the particle based on its velocity vector.
   * @memberof NeonParticle
   */
  update() {
    //We update their velocity
    this.x += this.vectorX;

    this.hue += 0.1;

    //We check for collisions
    this.checkHorizontalCollisions();
    this.checkVerticalCollisions();
  }

  /**
   * Checks if the particle has collided with the left or right edge of the canvas and reverses its x velocity if so.
   * @memberof NeonParticle
   */
  private checkHorizontalCollisions() {
    // Check if the particle has reached the left edge of the canvas
    const leftSideOverflow: boolean = this.x - this.size <= 0;
    // Check if the particle has reached the right edge of the canvas
    const rightSideOverflow: boolean = this.x + this.size >= this.width;
    if (leftSideOverflow || rightSideOverflow) {
      this.resetParticle();
    }
  }

  /**
   * Checks for collisions with the top and bottom edges of the canvas, and reverses the y direction if necessary.
   * @memberof NeonParticle
   */
  private checkVerticalCollisions() {
    // Check if the particle has reached the bottom edge of the canvas
    const bottomSideOverflow: boolean = this.y + this.size >= this.height;
    // Check if the particle has reached the top edge of the canvas
    const topSideOverflow: boolean = this.y - this.size <= 0;
    if (topSideOverflow || bottomSideOverflow) {
      this.resetParticle();
    }
  }

  private createCircle() {
    createCircle(this.context, this.x, this.y, this.size * 2);
  }

  /**
   * Draws the particle on the canvas.
   * @memberof NeonParticle
   */
  draw() {
    //We'll draw the particle

    //We start creating the line (arcs are considered as lines)
    //And lines can be connected
    this.context.save();
    this.context.beginPath();
    this.context.fillStyle = `hsl(${this.hue}deg 100% 50%)`;

    //We set the x,y, size, start and ending angle
    this.createCircle();

    //We fill the current path with the current fillStyle
    this.context.fill();
    this.context.restore();
  }
}
