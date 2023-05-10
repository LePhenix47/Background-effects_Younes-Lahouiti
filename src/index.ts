/**
 * Import all web components
 */
import "./components/cube-warp.component";
import "./components/falling-particles.component";
import "./components/fire-effect.component";
import "./components/matrix-effect.component";
import "./components/metaballs-effect.component";
import "./components/moving-particles.component";

/**
 * Import utility functions
 */
import { log, table } from "./utils/functions/console.functions";
import {
  addClass,
  appendChildToParent,
  getChildren,
  modifyAttribute,
  replaceChildInParent,
  selectQuery,
  selectQueryAll,
} from "./utils/functions/dom.functions";
import { formatText, replaceText } from "./utils/functions/string.functions";

/**
 * Select the main effect element on the page
 * @type {HTMLElement}
 */
const indexEffectElement: HTMLElement = selectQuery(".index__effect");

/**
 * Select an array of input elements
 * @type {Array<HTMLInputElement>}
 */
const inputsArray: HTMLInputElement[] = selectQueryAll(".index__input");

/**
 * Attach an event listener to each input in the inputsArray
 */
function addEventListeners() {
  for (const input of inputsArray) {
    input.addEventListener("change", setBackgroundEffect);
  }
}
addEventListeners();

/**
 * Set the background effect based on the input that was changed
 * @param {Event} event - The event object
 */
function setBackgroundEffect(event: Event) {
  log("change", event.target);
  //@ts-ignore
  const labelOfInput = event.target.nextElementSibling;

  let webComponentName: string = getWebComponentName(labelOfInput.innerText);
  createAndInsertWebComponent(webComponentName, indexEffectElement);

  log({ labelOfInput, webComponentName });
}

/**
 * Create a new instance of a web component and insert it into a container
 * @param {string} webComponentName - The name of the web component to create
 * @param {HTMLElement} container - The container element to insert the web component into
 */
function createAndInsertWebComponent(
  webComponentName: string,
  container: HTMLElement
) {
  const webComponent: HTMLElement = document.createElement(webComponentName);

  modifyAttribute(webComponent, "is-playing", "true");
  addClass(webComponent, "index__web-component");

  const childIndexEffectElements: HTMLElement[] = getChildren(container);

  const hasNoChild: boolean = !childIndexEffectElements.length;

  if (hasNoChild) {
    appendChildToParent(webComponent, container);
  } else {
    replaceChildInParent(container, webComponent, childIndexEffectElements[0]);
  }
}

function getWebComponentName(labelText) {
  let webComponentName: string = formatText(labelText, "lowercase");
  webComponentName = replaceText(webComponentName, " ", "-");
  return webComponentName;
}
