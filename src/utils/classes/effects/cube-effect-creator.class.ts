import { get2DContext } from "../../functions/canvas.functions";
import { table } from "../../functions/console.functions";
import { CubeParticle } from "../particles/cube-particle.class";

/**
 * A class that creates and animates an array of `CubeParticle` objects.
 */
export class CubeEffectCreator {
  /**
   * The canvas element to draw the particles on.
   */
  canvas: HTMLCanvasElement;

  /**
   * The 2D rendering context of the canvas element.
   */
  context: CanvasRenderingContext2D;

  /**
   * The number of particles to create.
   */
  particlesAmount: number;

  /**
   * An array of `CubeParticle` objects.
   */
  private particlesArray: CubeParticle[];

  /**
   * Creates a new instance of `CubeEffectCreator`.
   *
   * @param canvas - The canvas element to draw the particles on.
   * @param particlesAmount - The number of particles to create.
   */
  constructor(canvas: HTMLCanvasElement, particlesAmount: number) {
    this.canvas = canvas;
    this.context = get2DContext(this.canvas);
    this.particlesAmount = particlesAmount;

    this.particlesArray = [];
    this.initialize();
  }

  /**
   * Initializes the `particlesArray` with `CubeParticle` objects.
   */
  private initialize(): void {
    let squareOffset: number = 0;
    for (let i = 0; i < this.particlesAmount; i++) {
      squareOffset = i * 100;

      const cubeParticle: CubeParticle = new CubeParticle(
        this.context,
        this.canvas.width,
        this.canvas.height,
        squareOffset
      );

      this.particlesArray.push(cubeParticle);
    }
  }

  /**
   * Updates and draws each `CubeParticle` in the `particlesArray`.
   */
  animateParticles(): void {
    for (const particle of this.particlesArray) {
      particle.update();
      particle.draw();
    }
  }
}
