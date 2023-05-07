export class FallingParticle {
  /**
   * The canvas context.
   * @type {CanvasRenderingContext2D}
   * @memberof MovingParticle
   */
  context: CanvasRenderingContext2D;
  width: number;
  height: number;

  x: number;
  y: number;

  radius: number;

  private offsetX;
  private offsetY;

  private vectorX: number;
  private weight: number;
  private ORIGINAL_WEIGHT: number;

  constructor(context, width: number, height: number) {
    this.context = context;

    this.width = width;
    this.height = height;
    //Coordinates of the particle
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;

    this.updateOffset();

    //Size in pixels
    this.radius = 5;

    //X direction
    this.vectorX = Math.random() * 3 - 1.5;

    this.ORIGINAL_WEIGHT = 3;
    this.weight = 3;
  }

  updateOffset() {
    this.offsetX = this.x + this.radius;
    this.offsetY = this.y + this.radius;
  }

  update() {
    this.updateOffset();
  }

  draw() {}
}
