import { get2DContext } from "../../functions/canvas.functions";
import { NetworkParticle } from "../particles/network-particle.class";

/**
 * Class representing a Moving Particles Creator.
 * @class
 */
export class NetworkParticlesCreator {
  /**
   * HTMLCanvasElement where the particles will be rendered.
   * @type {HTMLCanvasElement}
   */
  canvas: HTMLCanvasElement;

  /**
   * Array of NetworkParticle objects.
   * @private
   * @type {NetworkParticle[]}
   */
  private particlesArray: NetworkParticle[];

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
   * Create a NetworkParticlesCreator.
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
   * Initializes the particlesArray with NetworkParticle objects.
   * @private
   */
  private initializeArray() {
    for (let i = 0; i < this.particlesAmount; i++) {
      const networkParticle = new NetworkParticle(
        this.context,
        this.canvas.width,
        this.canvas.height
      );

      this.particlesArray.push(networkParticle);
    }
  }

  /**
   * Draws a line between two points on the canvas.
   * @param {NetworkParticle} pointA - The starting point of the line.
   * @param {NetworkParticle} pointB - The ending point of the line.
   * @param {string} color - The color of the line.
   * @returns {void}
   */
  drawLine(
    pointA: NetworkParticle,
    pointB: NetworkParticle,
    color: string
  ): void {
    this.context.beginPath();
    this.context.strokeStyle = color;

    this.context.moveTo(pointA.x, pointA.y);
    this.context.lineTo(pointB.x, pointB.y);
    this.context.stroke();

    this.context.closePath();
  }

  /**
   * Animates the particles by updating and drawing each particle in the particlesArray.
   */
  animateParticles() {
    for (let i = 0; i < this.particlesArray.length; i++) {
      const particle1: NetworkParticle = this.particlesArray[i];
      particle1.update();
      particle1.draw();

      for (let j = 0; j < this.particlesArray.length; j++) {
        const particle2: NetworkParticle = this.particlesArray[j];

        const distanceX = particle2.x - particle1.x;
        const distanceY = particle2.y - particle1.y;

        const hypothenuse = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        const particlesAreClose = hypothenuse <= 100;
        if (particlesAreClose) {
          this.drawLine(
            particle1,
            particle2,
            `rgba(255, 255, 255, ${1 - hypothenuse / 100})`
          );
        }
      }
    }
  }
}
