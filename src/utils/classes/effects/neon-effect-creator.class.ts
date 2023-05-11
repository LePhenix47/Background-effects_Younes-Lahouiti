import { get2DContext } from "../../functions/canvas.functions";
import { NeonParticle } from "../particles/neon-particle.class";

/**
 * Class representing a Moving Particles Creator.
 * @class
 */
export class NeonParticlesCreator {
  /**
   * HTMLCanvasElement where the particles will be rendered.
   * @type {HTMLCanvasElement}
   */
  canvas: HTMLCanvasElement;

  /**
   * Array of NeonParticle objects.
   * @private
   * @type {NeonParticle[]}
   */
  private particlesArray: NeonParticle[];

  /**
   * Number of particles to be created.
   * @type {number}
   */
  particlesAmount: number;

  /**
   * 2D rendering context for the canvas.
   * @type {CanvasRenderingContext2D}
   */
  context: CanvasRenderingContext2D;

  /**
   * Create a NeonParticlesCreator.
   * @constructor
   * @param {HTMLCanvasElement} canvas - HTMLCanvasElement where the particles will be rendered.
   * @param {number} particlesAmount - Number of particles to be created.
   */
  constructor(canvas: HTMLCanvasElement, particlesAmount: number) {
    this.canvas = canvas;
    this.context = get2DContext(this.canvas);

    this.particlesArray = [];

    this.particlesAmount = particlesAmount;

    this.initializeArray();
  }

  /**
   * Initializes the particlesArray with NeonParticle objects.
   * @private
   */
  private initializeArray() {
    for (let i = 0; i < this.particlesAmount; i++) {
      const neonParticle = new NeonParticle(
        this.context,
        this.canvas.width,
        this.canvas.height
      );

      this.particlesArray.push(neonParticle);
    }
  }

  /**
   * Animates the particles by updating and drawing each particle in the particlesArray.
   */
  animateParticles() {
    for (const particle of this.particlesArray) {
      particle.update();
      particle.draw();
    }
  }
}
