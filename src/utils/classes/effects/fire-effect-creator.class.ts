import { spliceArray } from "../../functions/array.functions";
import { get2DContext } from "../../functions/canvas.functions";
import { FireParticle } from "../particles/fire-particles.class";

export class FireEffectCreator {
  /**
   * The canvas element.
   * @type {HTMLCanvasElement}
   * @memberof FireEffectCreator
   */
  canvas: HTMLCanvasElement;

  /**
   * The number of particles to be created.
   * @type {number}
   * @memberof FireEffectCreator
   */
  particlesAmount: number;

  /**
   * The canvas context.
   * @type {CanvasRenderingContext2D}
   * @memberof FireEffectCreator
   */
  context: CanvasRenderingContext2D;

  /**
   * An array containing the particles.
   * @type {MetaballParticle[]}
   * @memberof FireEffectCreator
   */
  private particlesArray: FireParticle[];

  /**
   * Creates an instance of FireEffectCreator.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element.
   * @param {number} particlesAmount - The number of particles to be created.
   * @memberof FireEffectCreator
   */
  constructor(
    canvas: HTMLCanvasElement,

    particlesAmount: number
  ) {
    this.canvas = canvas;
    this.context = get2DContext(this.canvas);
    this.particlesAmount = particlesAmount;

    this.initialize();
  }

  /**
   * Initializes the particles by creating and storing them in an array.
   * @private
   * @memberof FireEffectCreator
   */
  private initialize() {
    this.particlesArray = [];
    for (let i = 0; i < this.particlesAmount; i++) {
      const particle = new FireParticle(
        this.context,
        this.canvas.width,
        this.canvas.height
      );
      this.particlesArray.push(particle);
    }
  }

  /**
   * Animates the particles by updating and drawing them.
   * @memberof FireEffectCreator
   */
  animateParticles() {
    for (let i = 0; i < this.particlesArray.length; i++) {
      const particle: FireParticle = this.particlesArray[i];
      particle.update();
      particle.draw();

      //   const hasShrunkTooMuch: boolean = particle.radius < 0.1;
      //   if (hasShrunkTooMuch) {
      //     spliceArray(this.particlesArray, i, 1);
      //     i--;
      //   }
    }
  }
}
