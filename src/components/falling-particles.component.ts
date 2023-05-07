import {
  WebComponentCssReset,
  WebComponentCssVariables,
  WebComponentCssDarkTheme,
} from "../utils/variables/web-components.variables";

const fallingParticlesTemplateElement: HTMLTemplateElement =
  document.createElement("template");

const fallingParticlesCssStyle: string = /* css */ `
 .web-component__canvas{
    position: absolute;

    width: 100%;
    height: 100%;
 }
`;
const fallingParticlesTemplateHtml: string = /*html */ `
 <canvas class="web-component__canvas"></canvas>
`;

fallingParticlesTemplateElement.innerHTML = /*html */ `
  <style>
    /* Reset */
    ${WebComponentCssVariables}
    ${WebComponentCssReset}
    ${WebComponentCssDarkTheme}
    /* Actual style */
    ${fallingParticlesCssStyle}
  </style>
  
  ${fallingParticlesTemplateHtml}
`;

class FallingParticles extends HTMLElement {
  constructor() {
    super();
    //We create the cotnainer that holds the web component
    const shadowRoot: ShadowRoot = this.attachShadow({ mode: "open" });

    //We clone the template
    const clonedTemplate: Node =
      fallingParticlesTemplateElement.content.cloneNode(true);
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

  connectedCallback() {}

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

customElements.define("falling-particles", FallingParticles);
