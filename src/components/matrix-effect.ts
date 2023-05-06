const templateElement = document.createElement("template");

const templateStyle = /* css */ `
 user-component{
  isolation: isolate;
  /* Other CSS styles here */
 }
`;
const templateContent = /*html */ `
 <figure>
  <slot name="title" />
  <slot name="image" />
 </figure>
`;

templateElement.innerHTML = /*html */ `
  <style>
    ${templateStyle}
  </style>
  
  ${templateContent}
`;

class MatrixEffect extends HTMLElement {
  constructor() {
    super();
    //We create the cotnainer that holds the web component
    const shadowRoot: ShadowRoot = this.attachShadow({ mode: "open" });

    //We clone the template
    const clonedTemplate: Node = templateElement.content.cloneNode(true);
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
      case "age": {
        //…
        break;
      }
      default:
        break;
    }
  }
}

customElements.define("matrix-effect", MatrixEffect);
