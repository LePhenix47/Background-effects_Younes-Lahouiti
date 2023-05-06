import {
  WebComponentCssReset,
  WebComponentCssVariables,
  WebComponentCssDarkTheme,
} from "../utils/variables/web-components.variables";

const metaballsEffectTemplateElement: HTMLTemplateElement =
  document.createElement("template");

const metaballsEffectCssStyle: string = /* css */ `
 user-component{
  isolation: isolate;
  /* Other CSS styles here */
 }
`;
const metaballsEffectTemplateHtml: string = /*html */ `
 <canvas class="web-component__canvas"></canvas>
`;

metaballsEffectTemplateElement.innerHTML = /*html */ `
  <style>
    /* Reset */
    ${WebComponentCssVariables}
    ${WebComponentCssReset}
    ${WebComponentCssDarkTheme}
    /* Actual style */
    ${metaballsEffectCssStyle}
  </style>
  
  ${metaballsEffectTemplateHtml}
`;

class MetaballsEffect extends HTMLElement {
  constructor() {
    super();
    //We create the cotnainer that holds the web component
    const shadowRoot = this.attachShadow({ mode: "open" });

    //We clone the template
    const clonedTemplate =
      metaballsEffectTemplateElement.content.cloneNode(true);
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

customElements.define("metaballs-effect", MetaballsEffect);
