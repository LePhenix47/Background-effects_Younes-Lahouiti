import { get2DContext } from "../../functions/canvas.functions";
import { FallingParticle } from "../particles/falling-particles.class";

/**
 * A class for creating an effect of falling particles on a canvas.
 */
export class FallingEffectCreator {
  /**
   * The canvas element.
   * @type {HTMLCanvasElement}
   * @memberof FallingEffectCreator
   */
  canvas: HTMLCanvasElement;

  /**
   * The title element.
   * @type {HTMLHeadingElement}
   * @memberof FallingEffectCreator
   */
  title: HTMLHeadingElement;

  /**
   * The number of particles to be created.
   * @type {number}
   * @memberof FallingEffectCreator
   */
  particlesAmount: number;

  /**
   * The canvas context.
   * @type {CanvasRenderingContext2D}
   * @memberof FallingEffectCreator
   */
  context: CanvasRenderingContext2D;

  /**
   * An array containing the particles.
   * @type {FallingParticle[]}
   * @memberof FallingEffectCreator
   */
  private particlesArray: FallingParticle[];

  /**
   * Creates an instance of FallingEffectCreator.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element.
   * @param {HTMLHeadingElement} title - The title element.
   * @param {number} particlesAmount - The number of particles to be created.
   * @memberof FallingEffectCreator
   */
  constructor(
    canvas: HTMLCanvasElement,
    title: HTMLHeadingElement,
    particlesAmount: number
  ) {
    this.canvas = canvas;
    this.context = get2DContext(this.canvas);
    this.title = title;
    this.particlesAmount = particlesAmount;

    this.initialize();
  }

  /**
   * Initializes the particles by creating and storing them in an array.
   * @private
   * @memberof FallingEffectCreator
   */
  private initialize() {
    this.particlesArray = [];
    for (let i = 0; i < this.particlesAmount; i++) {
      const particle = new FallingParticle(
        this.context,
        this.canvas.width,
        this.canvas.height,
        this.title
      );
      this.particlesArray.push(particle);
    }
  }

  /**
   * Animates the particles by updating and drawing them.
   * @memberof FallingEffectCreator
   */
  animateParticles() {
    for (const particle of this.particlesArray) {
      particle.update();
      particle.draw();
    }
  }
}
