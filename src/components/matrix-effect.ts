import {
  WebComponentCssReset,
  WebComponentCssVariables,
  WebComponentCssDarkTheme,
} from "../utils/variables/web-components.variables";

const matrixTemplateElement = document.createElement("template");

const matrixCssStyle = /* css */ `
 user-component{
  isolation: isolate;
  /* Other CSS styles here */
 }
`;
const matrixTemplateHtml = /*html */ `
 <figure>
  <slot name="title" />
  <slot name="image" />
 </figure>
`;

matrixTemplateElement.innerHTML = /*html */ `
  <style>
    ${WebComponentCssVariables}
    ${WebComponentCssReset}
    ${WebComponentCssDarkTheme}
    ${matrixCssStyle}
  </style>
  
  ${matrixTemplateHtml}
`;

class MatrixEffect extends HTMLElement {
  constructor() {
    super();
    //We create the cotnainer that holds the web component
    const shadowRoot = this.attachShadow({ mode: "open" });

    //We clone the template
    const clonedTemplate = matrixTemplateElement.content.cloneNode(true);
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

customElements.define("matrix-effect", MatrixEffect);
