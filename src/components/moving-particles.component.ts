import { MovingParticlesCreator } from "../utils/classes/effects/moving-particles-creator.class";
import {
  get2DContext,
  setCanvasSize,
} from "../utils/functions/canvas.functions";
import { log } from "../utils/functions/console.functions";
import { selectQuery } from "../utils/functions/dom.functions";
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

class MovingParticles extends HTMLElement {
  canvas: HTMLCanvasElement;

  context: CanvasRenderingContext2D;

  effectHandler: MovingParticlesCreator;

  constructor() {
    super();
    //We create the cotnainer that holds the web component
    const shadowRoot: ShadowRoot = this.attachShadow({ mode: "open" });

    //We clone the template
    const clonedTemplate: Node =
      movingParticlesTemplateElement.content.cloneNode(true);
    //We add it as a child of our web component
    shadowRoot.appendChild(clonedTemplate);
  }

  static get observedAttributes() {
    //We indicate the list of attributes that the custom element wants to observe for changes.
    return ["is-playing"];
  }

  get isPlaying(): any {
    const attribute = this.getAttribute("is-playing");
    return JSON.parse(attribute);
  }
  set isPlaying(value: any) {
    const stringifiedValue = value.toString();
    this.setAttribute("is-playing", stringifiedValue);
  }

  connectedCallback() {
    this.canvas = selectQuery("canvas", this.shadowRoot);
    this.context = get2DContext(this.canvas);

    log(this.context);

    this.effectHandler = new MovingParticlesCreator(this.canvas, 100);

    setCanvasSize(this.canvas, this.clientWidth, this.clientHeight);

    window.addEventListener("resize", () => {
      //We're using a callback function to have access to the width and height of our web component
      this.resizeCanvas();
    });

    this.animateCanvas();
  }

  resizeCanvas() {
    setCanvasSize(this.canvas, this.clientWidth, this.clientHeight);
  }

  animateCanvas() {
    //Undefined after the first rAF loop
    log(
      `What is "this" in the %canimateCanvas() method?`,
      "font-weight: bold;",
      this
    );
    this.context.fillStyle = `rbga(0,0,0,10%)`;

    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.effectHandler.animateParticles();

    //We make a loop
    requestAnimationFrame(this.animateCanvas);
  }

  // private cancelCanvasAnimation() {
  //   cancelAnimationFrame(this.animateCanvas);
  // }

  disconnectedCallback() {
    window.removeEventListener("resize", () => {
      this.resizeCanvas();
    });
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case "is-playing": {
        const isPlaying: boolean = newValue === "true";
        if (isPlaying) {
        } else {
        }
        //…
        break;
      }
      default:
        break;
    }
  }
}

customElements.define("moving-particles", MovingParticles);
