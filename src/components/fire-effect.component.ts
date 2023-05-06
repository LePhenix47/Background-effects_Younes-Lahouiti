import {
  WebComponentCssReset,
  WebComponentCssVariables,
  WebComponentCssDarkTheme,
} from "../utils/variables/web-components.variables";

const fireEffectTemplateElement: HTMLTemplateElement =
  document.createElement("template");

const fireEffectCssStyle: string = /* css */ `
 user-component{
  isolation: isolate;
  /* Other CSS styles here */
 }
`;
const fireEffectTemplateHtml: string = /*html */ `
 <canvas class="web-component__canvas"></canvas>
`;

fireEffectTemplateElement.innerHTML = /*html */ `
  <style>
    /* Reset */
    ${WebComponentCssVariables}
    ${WebComponentCssReset}
    ${WebComponentCssDarkTheme}
    /* Actual style */
    ${fireEffectCssStyle}
  </style>
  
  ${fireEffectTemplateHtml}
`;

class FireEffect extends HTMLElement {
  constructor() {
    super();
    //We create the cotnainer that holds the web component
    const shadowRoot: ShadowRoot = this.attachShadow({ mode: "open" });

    //We clone the template
    const clonedTemplate = fireEffectTemplateElement.content.cloneNode(true);
    //We add it as a child of our web component
    shadowRoot.appendChild(clonedTemplate);
  }

  static get observedAttributes() {
    //We indicate the list of attributes that the custom element wants to observe for changes.
    return [];
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

customElements.define("fire-effect", FireEffect);