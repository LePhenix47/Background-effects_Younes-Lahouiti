import { MovingParticlesCreator } from "../utils/classes/effects/moving-particles-creator.class";
import {
  get2DContext,
  setCanvasSize,
} from "../utils/functions/canvas.functions";
import { log } from "../utils/functions/console.functions";
import {
  addClass,
  removeClass,
  selectQuery,
} from "../utils/functions/dom.functions";
import {
  WebComponentCssReset,
  WebComponentCssVariables,
  WebComponentCssDarkTheme,
} from "../utils/variables/web-components.variables";

const movingParticlesTemplateElement: HTMLTemplateElement =
  document.createElement("template");

const movingParticlesCssStyle: string = /* css */ `
  .web-component__canvas{
    position: absolute;

    width: 100%;
    height: 100%;
    filter: invert(100%) hue-rotate(180deg);

    transition: filter 600ms ease-in-out;
 }

 @media(prefers-color-scheme:dark) {
    .web-component__canvas{
       filter: invert(0%) hue-rotate(0deg);
    }
}
`;
const movingParticlesTemplateHtml: string = /*html */ `
    <canvas class="web-component__canvas"></canvas>
`;

movingParticlesTemplateElement.innerHTML = /*html */ `
  <style>
    /* Reset */
    ${WebComponentCssVariables}
    ${WebComponentCssReset}
    ${WebComponentCssDarkTheme}
    /* Actual style */
    ${movingParticlesCssStyle}
  </style>
  
  ${movingParticlesTemplateHtml}
`;

/**
 * A custom element that creates and animates moving particles in a canvas element.
 * @extends HTMLElement
 */
class MovingParticles extends HTMLElement {
  /**
   * The canvas element used for rendering the particles.
   * @type {HTMLCanvasElement}
   */
  canvas: HTMLCanvasElement;

  /**
   * The 2D context of the canvas element.
   * @type {CanvasRenderingContext2D}
   */
  context: CanvasRenderingContext2D;

  /**
   * The object responsible for creating and animating the particles.
   * @type {MovingParticlesCreator}
   */
  effectHandler: MovingParticlesCreator;

  /**
   * The ID of the current animation frame. Useful to cancel the animation loop when needed
   * @type {number}
   */
  animationId: number;

  /**
   * Creates a new instance of the `MovingParticles` class.
   *
   * @constructor
   */

  constructor() {
    super();

    // bind the context of animateCanvas to this
    /**
     * We bind the `this` keyword with the `animateCanvas()` method
     * to make sure that the method has access to its values.
     * @function
     */
    this.animateCanvas = this.animateCanvas.bind(this);

    /**
     * We bind the `this` keyword with the `resetCanvasToMatchScreen()` method
     * to make sure that the method has access to its values.
     * @function
     */
    this.resetCanvasToMatchScreen = this.resetCanvasToMatchScreen.bind(this);

    const shadowRoot: ShadowRoot = this.attachShadow({ mode: "open" });

    //We clone the template
    const clonedTemplate: Node =
      movingParticlesTemplateElement.content.cloneNode(true);
    //We add it as a child of our web component
    shadowRoot.appendChild(clonedTemplate);

    /**
     * The canvas element used for rendering the particles.
     * @type {HTMLCanvasElement}
     */
    this.canvas = selectQuery("canvas", this.shadowRoot);

    /**
     * The 2D context of the canvas element.
     * @type {CanvasRenderingContext2D}
     */
    this.context = get2DContext(this.canvas);

    /**
     * The object responsible for creating and animating the particles.
     * @type {MovingParticlesCreator}
     */
    this.effectHandler = new MovingParticlesCreator(this.canvas, 100);
    // this.resizeCanvas();
  }

  /**
   * An array of attribute names to observe for changes.
   * @returns {string[]}
   * @static
   */
  static get observedAttributes(): string[] {
    //We indicate the list of attributes that the custom element wants to observe for changes.
    return ["is-playing"];
  }

  /**
   * Getter returing the current value of the `is-playing` attribute.
   * @returns {boolean}
   */
  get isPlaying(): boolean {
    const attribute: string = this.getAttribute("is-playing");
    return JSON.parse(attribute);
  }

  /**
   * Setter that changes the current value of the `is-playing` attribute.
   * @param {boolean} value - The new value of the `is-playing` attribute.
   */
  set isPlaying(value: boolean) {
    const stringifiedValue = value.toString();
    this.setAttribute("is-playing", stringifiedValue);
  }

  /**
   * Called when the element is inserted into the DOM.
   */
  connectedCallback() {
    this.resizeCanvas();
    this.effectHandler = new MovingParticlesCreator(this.canvas, 100);

    setCanvasSize(this.canvas, this.clientWidth, this.clientHeight);

    window.addEventListener("resize", this.resetCanvasToMatchScreen);

    this.animateCanvas();
  }

  /**
   * Resizes the canvas element to match the current screen size.
   *
   * @returns {void}
   */
  resizeCanvas(): void {
    setCanvasSize(this.canvas, this.clientWidth, this.clientHeight);
  }

  /**
   * Resets the canvas element to match the current screen size and restarts the particles animation.
   *
   * @returns {void}
   */
  resetCanvasToMatchScreen(): void {
    const isNotPlaying: boolean = !this.isPlaying;
    if (isNotPlaying) {
      return;
    }
    //We set a new width and height to our canvas
    this.resizeCanvas();
    //We cancel the animation loop
    this.cancelCanvasAnimation();
    //We create a new effect
    this.effectHandler = new MovingParticlesCreator(this.canvas, 100);
    //We restart the animation loop
    this.animateCanvas();
  }

  /**
   * Animates the particles effect on the canvas element.
   *
   * @returns {void}
   */
  animateCanvas(): void {
    this.context.fillStyle = `rgba(0,0,0,10%)`;

    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.effectHandler.animateParticles();

    this.animationId = requestAnimationFrame(this.animateCanvas);
  }

  /**
   * Cancels the current animation frame request to stop the animation loop.
   *
   * @returns {void}
   */
  cancelCanvasAnimation(): void {
    cancelAnimationFrame(this.animationId);
  }

  /**
   * Called when the element is remove from the DOM.
   *
   * @returns {void}
   */
  disconnectedCallback(): void {
    this.cancelCanvasAnimation();
    window.removeEventListener("resize", this.resetCanvasToMatchScreen);
  }

  /**
   * Method called whenever an attribute is added, changed or deleted from our web component
   *
   * @param {string} name - Name of the attribute that changed
   * @param {string} oldValue - Old value of the attribute before a change
   * @param {string} newValue - New value of the attribute after a change
   *
   * @returns {void}
   */
  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    switch (name) {
      case "is-playing": {
        const isPlaying: boolean = newValue === "true";
        if (isPlaying) {
          this.animateCanvas();
        } else {
          this.cancelCanvasAnimation();
        }
        //…
        break;
      }
      default:
        break;
    }
  }
}

customElements.define("neon-particles", MovingParticles);
