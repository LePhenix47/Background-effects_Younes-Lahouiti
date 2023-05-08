import { createCircle } from "../../functions/canvas.functions";
import { log } from "../../functions/console.functions";
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

  title: HTMLHeadingElement;
  private titleDomRect: DOMRect;

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
   * The current weight of the particle.
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
    title: HTMLHeadingElement
  ) {
    this.context = context;

    this.width = width;
    this.height = height;

    this.title = title;

    this.titleDomRect = this.title.getBoundingClientRect();

    // Coordinates of the particle
    this.x = getRandomNumber(0, width);
    this.y = getRandomNumber(0, height);

    log(this.titleDomRect.top, this.y);
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
    //We update their velocity
    this.x += this.vectorX;
    this.y += this.weight;

    //We make them fall
    this.weight += 0.05;

    this.checkCanvasSideCollision();

    this.checkCanvasBottomCollision();

    this.checkTopTitleCollision();

    this.checkHorizontalSidesCollision();
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

  private checkCanvasBottomCollision() {
    const hasHitTheBottom: boolean = this.y >= this.height;
    if (hasHitTheBottom) {
      this.y = 0;
      this.weight = this.ORIGINAL_WEIGHT;
    }
  }

  //Here, needs to be fixed
  private checkTopTitleCollision() {
    const isBetweenXCoordsOfTitle: boolean =
      this.x < this.titleDomRect.x + this.titleDomRect.width &&
      this.x > this.titleDomRect.x;

    const hasSameTopYCoordsOfTitle: boolean =
      this.y < this.titleDomRect.y + this.titleDomRect.height &&
      this.y > this.titleDomRect.y;

    const hasHitTopOfTitle: boolean =
      isBetweenXCoordsOfTitle && hasSameTopYCoordsOfTitle;

    if (hasHitTopOfTitle) {
      this.y = this.titleDomRect.y - this.titleDomRect.height;
      this.vectorX = 0;
      this.weight = 0;
      // this.y -=1;
      // this.weight *= -0.75;
    }
  }

  private checkHorizontalSidesCollision() {}

  /**
   * Draws the particle on the canvas.
   * @memberof FallingParticle
   */
  draw() {
    this.context.fillStyle = `cyan`;
    this.context.beginPath();

    createCircle(this.context, this.x, this.y, this.radius);
    this.context.fill();
  }
}
