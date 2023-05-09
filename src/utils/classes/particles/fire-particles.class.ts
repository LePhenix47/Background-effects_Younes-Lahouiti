import { createCircle } from "../../functions/canvas.functions";
import { log } from "../../functions/console.functions";
import { getRandomNumber } from "../../functions/number.functions";

export class FireParticle {
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
  radius: number;

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

    this.x = getRandomNumber(10, width);
    this.y = this.height;

    this.radius = getRandomNumber(50, 100);

    this.vectorX = getRandomNumber(1.5, 3);

    this.vectorY = getRandomNumber(0, width);
  }

  /**
   * Update the position of the particle
   *
   * @returns {void}
   * @memberof MovingParticle
   */
  update(): void {
    this.x += this.vectorX;

    this.y -= this.vectorY;

    const hasRadiusAndIsBig = this.radius >= 65;

    if (hasRadiusAndIsBig) {
      this.y = 0;
      this.vectorY = getRandomNumber(0.1, 0.5);
      this.vectorX = 0.01;
    }

    this.checkTopCollision();
    this.checkHorizontalSidesCollision();
  }

  private checkTopCollision() {
    const hasHitTop: boolean = this.y - this.radius <= 0;
    if (hasHitTop) {
      this.resetParticle();
    }
  }
  private checkHorizontalSidesCollision() {
    const hasHitLeft: boolean = this.y - this.radius < 0;
    const hasHitRight: boolean = this.y + this.radius > this.width;

    const hasHorizontalOverflow = hasHitLeft || hasHitRight;

    if (hasHorizontalOverflow) {
      this.resetParticle();
    }
  }

  private resetParticle() {
    this.y = this.height;
    this.radius = getRandomNumber(50, 100);

    this.vectorY = getRandomNumber(-0.5, 0.5);
    this.vectorX = getRandomNumber(-0.5, 0.5);
  }

  /**
   * Draw the particle on the canvas
   *
   * @returns {void}
   * @memberof MovingParticle
   */
  draw(): void {
    this.context.fillStyle = `orange`;
    this.context.beginPath();

    createCircle(this.context, this.x, this.y, this.radius);
    this.context.fill();
  }
}
