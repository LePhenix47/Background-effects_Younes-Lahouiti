import { log } from "../utils/functions/console.functions";
import {
  WebComponentCssReset,
  WebComponentCssVariables,
  WebComponentCssDarkTheme,
} from "../utils/variables/web-components.variables";

const movingParticlesTemplateElement: HTMLTemplateElement =
  document.createElement("template");

const movingParticlesCssStyle: string = /* css */ `
 user-component{
  isolation: isolate;
  /* Other CSS styles here */
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

  connectedCallback() {
    const webComponentDomRect: DOMRect = this.getBoundingClientRect();
    log({ webComponentDomRect });
  }

  get isPlaying(): string {
    const attribute = this.getAttribute("is-playing");
    return JSON.parse(attribute);
  }
  set isPlaying(value: any) {
    const stringifiedValue = value.toString();
    this.setAttribute("is-playing", stringifiedValue);
  }

  disconnectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "": {
        //…
        break;
      }
      default:
        break;
    }
  }
}

customElements.define("moving-particles", MovingParticles);