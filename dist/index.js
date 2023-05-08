(()=>{"use strict";(()=>{const{log:t,error:n,table:e,time:i,timeEnd:a,timeStamp:s,timeLog:o,assert:r,clear:c,count:h,countReset:l,group:d,groupCollapsed:v,groupEnd:m,trace:b,profile:u,profileEnd:g,warn:p,debug:f,info:C,dir:w,dirxml:y}=console;function x(t){return t.getContext("2d")}function k(t,n,e){t.width=n,t.height=e}function A(t,n,e,i){t.arc(n,e,i,0,2*Math.PI)}function S(t,n,e=!0,i=!0){if(t>n||n<t)throw new Error("Unexpected error occured in the passed argument values: min > max or max < min");const a=e&&!i,s=!e&&i;return e&&i?Math.floor(Math.random()*(n-t+1))+t:a?Math.floor(Math.random()*(n-t))+t:s?Math.floor(Math.random()*(n-t))+t+1:Math.floor(Math.random()*(n-t-1))+t+1}class H{constructor(n,e,i,a){this.context=n,this.width=e,this.height=i,this.title=a,this.titleDomRect=this.title.getBoundingClientRect(),this.x=S(0,e),this.y=S(0,i),t(this.titleDomRect.top,this.y),this.radius=5,this.vectorX=S(-5,5)/2,this.ORIGINAL_WEIGHT=3,this.weight=3}update(){this.x+=this.vectorX,this.y+=this.weight,this.weight+=.05,this.checkCanvasSideCollision(),this.checkCanvasBottomCollision(),this.checkTopTitleCollision(),this.checkHorizontalSidesCollision()}checkCanvasSideCollision(){const t=this.x-this.radius<0,n=this.x+this.radius>this.width;(t||n)&&(this.vectorX*=-1)}checkCanvasBottomCollision(){this.y>=this.height&&(this.y=0,this.weight=this.ORIGINAL_WEIGHT)}checkTopTitleCollision(){const t=this.x<this.titleDomRect.x+this.titleDomRect.width&&this.x>this.titleDomRect.x,n=this.y<this.titleDomRect.y+this.titleDomRect.height&&this.y>this.titleDomRect.y;t&&n&&(this.y=this.titleDomRect.y-this.titleDomRect.height,this.vectorX=0,this.weight=0)}checkHorizontalSidesCollision(){}draw(){this.context.fillStyle="cyan",this.context.beginPath(),A(this.context,this.x,this.y,this.radius),this.context.fill()}}class M{constructor(t,n,e){this.canvas=t,this.context=x(this.canvas),this.title=n,this.particlesAmount=e,this.initialize()}initialize(){this.particlesArray=[];for(let t=0;t<this.particlesAmount;t++){const t=new H(this.context,this.canvas.width,this.canvas.height,this.title);this.particlesArray.push(t)}}animateParticles(){for(const t of this.particlesArray)t.update(),t.draw()}}function T(t,n){var e;if(!n)return document.querySelector(t);return(null===(e=null==n?void 0:n.tagName)||void 0===e?void 0:e.includes("-"))?n.shadowRoot.querySelector(t):n.querySelector(t)}const z="\n:host {\n    --bg-primary: #fafafa;\n    --color-primary: #323232;\n    --semi-transparent-bg: hsla(0, 0%, 100%, .7);\n    --border-color: #dbdbdb;\n    --scrollbar-track-bg-color: #fff;\n    --scrollbar-thumb-bg-color: #545454;\n    --scrollbar-thumb-bg-color--hover: #757575;\n    --scrollbar-thumb-bg-color--active: #b0b0b0\n}\n\n::backdrop {\n    --backdrop-bg-color: hsla(0, 0%, 100%, .5);\n    --scrollbar-track-bg-color: #fff;\n    --scrollbar-thumb-bg-color: #545454;\n    --scrollbar-thumb-bg-color--hover: #757575;\n    --scrollbar-thumb-bg-color--active: #b0b0b0\n}\n",R="\n\n@media(prefers-color-scheme:dark) {\n    :host {\n        --bg-primary: #050505;\n        --color-primary: #cdcdcd;\n        --semi-transparent-bg: rgba(0, 0, 0, .7);\n        --scrollbar-track-bg-color: #000;\n        --scrollbar-thumb-bg-color: #ababab;\n        --scrollbar-thumb-bg-color--hover: #8a8a8a;\n        --scrollbar-thumb-bg-color--active: #4f4f4f;\n        --selection-bg: #838383;\n        --selection-color: #fff\n    }\n\n    ::backdrop {\n        --backdrop-bg-color: rgba(0, 0, 0, .5);\n        --scrollbar-track-bg-color: #000;\n        --scrollbar-thumb-bg-color: #ababab;\n        --scrollbar-thumb-bg-color--hover: #8a8a8a;\n        --scrollbar-thumb-bg-color--active: #4f4f4f\n    }\n}\n",E="\n@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap);\n\n@media(prefers-reduced-motion:reduce) {\n    *, :after, :before {\n        animation: none !important;\n        transition: none !important\n    }\n}\n\n*, :after, :before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0\n}\n\n::-moz-selection {\n    -webkit-text-stroke: transparent;\n    background-color: var(--selection-bg-color);\n    color: currentColor\n}\n\n::selection {\n    -webkit-text-stroke: transparent;\n    background-color: var(--selection-bg-color);\n    color: currentColor\n}\n\n:is(ul, ol) {\n    list-style-type: none\n}\n\nbutton {\n    background-color: transparent;\n    border-color: transparent;\n    color: inherit;\n    font-family: inherit\n}\n\nbutton:hover {\n    cursor: pointer\n}\n\nbutton:hover:disabled {\n    cursor: not-allowed\n}\n\ninput {\n    font-family: inherit\n}\n\ninput, input:focus {\n    border-color: transparent\n}\n\ninput:focus {\n    outline: transparent\n}\n\ntextarea {\n    font-family: inherit\n}\n\ntextarea, textarea:focus {\n    border-color: transparent\n}\n\ntextarea:focus {\n    outline: transparent\n}\n\na {\n    color: inherit;\n    text-decoration: none\n}\n\na:visited {\n    color: currentColor\n}\n\nlabel:hover {\n    cursor: pointer\n}\n\nfieldset {\n    border-color: transparent\n}\n\nlegend {\n    position: static\n}\n\ndialog {\n    inset: 50%;\n    margin: 0;\n    padding: 0;\n    position: fixed;\n    translate: -50% -50%;\n    z-index: 0\n}\n\ndialog, select {\n    border: transparent\n}\n\nselect {\n    font-family: inherit\n}\n\nselect:hover {\n    cursor: pointer\n}\n\noption {\n    font-family: inherit\n}\n\n:is(p, h1, h2, h3, h4, h5, h6, span):empty {\n    display: none !important\n}\n\n\n::-webkit-scrollbar {\n    background-color: var(--scrollbar-track-bg-color);\n    border-radius: 100vmax;\n    margin-block: 15px;\n    width: 10px\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: var(--scrollbar-thumb-bg-color);\n    border: 3px solid var(--bg-primary);\n    border-radius: 100vmax\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background-color: var(--scrollbar-thumb-bg-color--hover)\n}\n\n::-webkit-scrollbar-thumb:active {\n    background-color: var(--scrollbar-thumb-bg-color--active)\n}\n\n@supports(scrollbar-color:black white) {\n    :root {\n        scrollbar-color: var(--scrollbar-thumb-bg-color) var(--scrollbar-track-bg-color);\n        scrollbar-width: thin\n    }\n}\n",_=document.createElement("template");_.innerHTML=`\n  <style>\n    /* Reset */\n    ${z}\n    ${E}\n    ${R}\n    /* Actual style */\n    \n .web-component__canvas{\n    position: absolute;\n\n    width: 100%;\n    height: 100%;\n     filter: invert(100%) hue-rotate(270deg);\n\n     transition: filter 600ms ease-in-out;\n }\n\n .web-component__title{\n  text-align: center;\n\n  position: relative;\n\n  inset:50%;\n\n  width: 50%;\n  translate: -50% -50%;\n\n  z-index: 69420;\n\n  padding: 15px;\n\n  font-size: 3vw;\n  border: 3px solid currentColor;\n  border-bottom: transparent;\n }\n\n \n @media(prefers-color-scheme:dark) {\n    .web-component__canvas{\n       filter: invert(0%) hue-rotate(0deg);\n    }\n}\n\n  </style>\n  \n  \n <canvas class="web-component__canvas"></canvas>\n <h2 class="web-component__title">Boucing effect</h2> \n\n`;class L extends HTMLElement{constructor(){super(),this.animateCanvas=this.animateCanvas.bind(this),this.resetCanvasToMatchScreen=this.resetCanvasToMatchScreen.bind(this);const t=this.attachShadow({mode:"open"}),n=_.content.cloneNode(!0);t.appendChild(n),this.canvas=T("canvas",this.shadowRoot),this.context=x(this.canvas),this.webComponent=T("falling-particles"),this.titleHeading=T("h2",this.shadowRoot),this.effectHandler=new M(this.canvas,this.titleHeading,100),this.resizeCanvas()}static get observedAttributes(){return["is-playing"]}get isPlaying(){const t=this.getAttribute("is-playing");return JSON.parse(t)}set isPlaying(t){const n=t.toString();this.setAttribute("is-playing",n)}connectedCallback(){this.effectHandler=new M(this.canvas,this.titleHeading,100),k(this.canvas,this.clientWidth,this.clientHeight),window.addEventListener("resize",this.resetCanvasToMatchScreen)}resizeCanvas(){k(this.canvas,this.clientWidth,this.clientHeight)}resetCanvasToMatchScreen(){!this.isPlaying||(this.resizeCanvas(),this.cancelCanvasAnimation(),this.effectHandler=new M(this.canvas,this.titleHeading,100),this.animateCanvas())}animateCanvas(){this.context.fillStyle="rgba(0,0,0,10%)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.effectHandler.animateParticles(),this.animationId=requestAnimationFrame(this.animateCanvas)}cancelCanvasAnimation(){cancelAnimationFrame(this.animationId)}disconnectedCallback(){window.removeEventListener("resize",this.resetCanvasToMatchScreen)}attributeChangedCallback(t,n,e){switch(t){case"is-playing":"true"===e?this.animateCanvas():this.cancelCanvasAnimation();break}}}customElements.define("falling-particles",L);class P{}const I=document.createElement("template");I.innerHTML=`\n  <style>\n    /* Reset */\n    ${z}\n    ${E}\n    ${R}\n    /* Actual style */\n    \n .web-component__canvas{\n    position: absolute;\n\n    width: 100%;\n    height: 100%;\n }\n\n  </style>\n  \n  \n <canvas class="web-component__canvas"></canvas>\n\n`;class $ extends HTMLElement{constructor(){super(),this.animateCanvas=this.animateCanvas.bind(this),this.resetCanvasToMatchScreen=this.resetCanvasToMatchScreen.bind(this);const t=this.attachShadow({mode:"open"}),n=I.content.cloneNode(!0);t.appendChild(n),this.canvas=T("canvas",this.shadowRoot),this.context=x(this.canvas),this.effectHandler=new P,this.resizeCanvas()}static get observedAttributes(){return["is-playing"]}get isPlaying(){const t=this.getAttribute("is-playing");return JSON.parse(t)}set isPlaying(t){const n=t.toString();this.setAttribute("is-playing",n)}connectedCallback(){this.effectHandler=new P,k(this.canvas,this.clientWidth,this.clientHeight),window.addEventListener("resize",this.resetCanvasToMatchScreen)}resizeCanvas(){k(this.canvas,this.clientWidth,this.clientHeight)}resetCanvasToMatchScreen(){!this.isPlaying||(this.resizeCanvas(),this.cancelCanvasAnimation(),this.effectHandler=new P,this.animateCanvas())}animateCanvas(){this.context.fillStyle="rgba(0,0,0,10%)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.animationId=requestAnimationFrame(this.animateCanvas)}cancelCanvasAnimation(){cancelAnimationFrame(this.animationId)}disconnectedCallback(){window.removeEventListener("resize",this.resetCanvasToMatchScreen)}attributeChangedCallback(t,n,e){T("fire-effect");switch(t){case"is-playing":"true"===e?this.animateCanvas():this.cancelCanvasAnimation();break}}}customElements.define("fire-effect",$);class N{}const W=document.createElement("template");W.innerHTML=`\n  <style>\n    /* Reset */\n    ${z}\n    ${E}\n    ${R}\n    /* Actual style */\n    \n  .web-component__canvas{\n    position: absolute;\n\n    width: 100%;\n    height: 100%;\n }\n\n  </style>\n  \n  \n <canvas class="web-component__canvas"></canvas>\n\n`;class D extends HTMLElement{constructor(){super(),this.animateCanvas=this.animateCanvas.bind(this),this.resetCanvasToMatchScreen=this.resetCanvasToMatchScreen.bind(this);const t=this.attachShadow({mode:"open"}),n=W.content.cloneNode(!0);t.appendChild(n),this.canvas=T("canvas",this.shadowRoot),this.context=x(this.canvas),this.effectHandler=new N,this.resizeCanvas()}static get observedAttributes(){return["is-playing"]}get isPlaying(){const t=this.getAttribute("is-playing");return JSON.parse(t)}set isPlaying(t){const n=t.toString();this.setAttribute("is-playing",n)}connectedCallback(){this.effectHandler=new N,k(this.canvas,this.clientWidth,this.clientHeight),window.addEventListener("resize",this.resetCanvasToMatchScreen)}resizeCanvas(){k(this.canvas,this.clientWidth,this.clientHeight)}resetCanvasToMatchScreen(){!this.isPlaying||(this.resizeCanvas(),this.cancelCanvasAnimation(),this.effectHandler=new N,this.animateCanvas())}animateCanvas(){this.context.fillStyle="rgba(0,0,0,10%)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.animationId=requestAnimationFrame(this.animateCanvas)}cancelCanvasAnimation(){cancelAnimationFrame(this.animationId)}disconnectedCallback(){window.removeEventListener("resize",this.resetCanvasToMatchScreen)}attributeChangedCallback(t,n,e){T("matrix-effect");switch(t){case"is-playing":"true"===e?this.animateCanvas():this.cancelCanvasAnimation();break}}}customElements.define("matrix-effect",D);class F{}const q=document.createElement("template");q.innerHTML=`\n  <style>\n    /* Reset */\n    ${z}\n    ${E}\n    ${R}\n    /* Actual style */\n    \n  .web-component__canvas{\n    position: absolute;\n\n    width: 100%;\n    height: 100%;\n }\n\n  </style>\n  \n  \n <canvas class="web-component__canvas"></canvas>\n\n`;class O extends HTMLElement{constructor(){super(),this.animateCanvas=this.animateCanvas.bind(this),this.resetCanvasToMatchScreen=this.resetCanvasToMatchScreen.bind(this);const t=this.attachShadow({mode:"open"}),n=q.content.cloneNode(!0);t.appendChild(n),this.canvas=T("canvas",this.shadowRoot),this.context=x(this.canvas),this.effectHandler=new F,this.resizeCanvas()}static get observedAttributes(){return["is-playing"]}get isPlaying(){const t=this.getAttribute("is-playing");return JSON.parse(t)}set isPlaying(t){const n=t.toString();this.setAttribute("is-playing",n)}connectedCallback(){this.effectHandler=new F,k(this.canvas,this.clientWidth,this.clientHeight),window.addEventListener("resize",this.resetCanvasToMatchScreen)}resizeCanvas(){k(this.canvas,this.clientWidth,this.clientHeight)}resetCanvasToMatchScreen(){!this.isPlaying||(this.resizeCanvas(),this.cancelCanvasAnimation(),this.effectHandler=new F,this.animateCanvas())}animateCanvas(){this.context.fillStyle="rgba(0,0,0,10%)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.animationId=requestAnimationFrame(this.animateCanvas)}cancelCanvasAnimation(){cancelAnimationFrame(this.animationId)}disconnectedCallback(){window.removeEventListener("resize",this.resetCanvasToMatchScreen)}attributeChangedCallback(t,n,e){T("metaballs-effect");switch(t){case"is-playing":"true"===e?this.animateCanvas():this.cancelCanvasAnimation();break}}}customElements.define("metaballs-effect",O);class X{constructor(t,n,e){this.context=t,this.width=n,this.height=e,this.x=S(0,n),this.y=S(0,e),this.radius=S(.5,3),this.vectorX=S(-5,5)/2,this.vectorY=S(-5,5)/2}update(){this.x+=this.vectorX,this.y+=this.vectorY,this.checkHorizontalCollisions(),this.checkVerticalCollisions()}checkHorizontalCollisions(){const t=this.x-this.radius<=0,n=this.x+this.radius>=this.width;(t||n)&&(this.vectorX*=-1)}checkVerticalCollisions(){const t=this.y+this.radius>=this.height;(this.y-this.radius<=0||t)&&(this.vectorY*=-1)}draw(){this.context.fillStyle="white",this.context.beginPath(),A(this.context,this.x,this.y,2*this.radius),this.context.closePath(),this.context.fill()}}class J{constructor(t,n){this.canvas=t,this.context=x(this.canvas),this.particlesArray=[],this.particlesAmount=n,this.initializeArray()}initializeArray(){for(let t=0;t<this.particlesAmount;t++){const t=new X(this.context,this.canvas.width,this.canvas.height);this.particlesArray.push(t)}}animateParticles(){for(const t of this.particlesArray)t.update(),t.draw()}}const B=document.createElement("template");B.innerHTML=`\n  <style>\n    /* Reset */\n    ${z}\n    ${E}\n    ${R}\n    /* Actual style */\n    \n  .web-component__canvas{\n    position: absolute;\n\n    width: 100%;\n    height: 100%;\n    filter: invert(100%) hue-rotate(180deg);\n\n    transition: filter 600ms ease-in-out;\n }\n\n @media(prefers-color-scheme:dark) {\n    .web-component__canvas{\n       filter: invert(0%) hue-rotate(0deg);\n    }\n}\n\n  </style>\n  \n  \n    <canvas class="web-component__canvas"></canvas>\n\n`;class G extends HTMLElement{constructor(){super(),this.animateCanvas=this.animateCanvas.bind(this),this.resetCanvasToMatchScreen=this.resetCanvasToMatchScreen.bind(this);const t=this.attachShadow({mode:"open"}),n=B.content.cloneNode(!0);t.appendChild(n),this.canvas=T("canvas",this.shadowRoot),this.context=x(this.canvas),this.effectHandler=new J(this.canvas,100),this.resizeCanvas()}static get observedAttributes(){return["is-playing"]}get isPlaying(){const t=this.getAttribute("is-playing");return JSON.parse(t)}set isPlaying(t){const n=t.toString();this.setAttribute("is-playing",n)}connectedCallback(){this.effectHandler=new J(this.canvas,100),k(this.canvas,this.clientWidth,this.clientHeight),window.addEventListener("resize",this.resetCanvasToMatchScreen),this.animateCanvas()}resizeCanvas(){k(this.canvas,this.clientWidth,this.clientHeight)}resetCanvasToMatchScreen(){!this.isPlaying||(this.resizeCanvas(),this.cancelCanvasAnimation(),this.effectHandler=new J(this.canvas,100),this.animateCanvas())}animateCanvas(){this.context.fillStyle="rgba(0,0,0,10%)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.effectHandler.animateParticles(),this.animationId=requestAnimationFrame(this.animateCanvas)}cancelCanvasAnimation(){cancelAnimationFrame(this.animationId)}disconnectedCallback(){window.removeEventListener("resize",this.resetCanvasToMatchScreen)}attributeChangedCallback(t,n,e){const i=T("moving-particles");switch(t){case"is-playing":"true"===e?(this.animateCanvas(),a="hide",i.classList.remove(a)):(this.cancelCanvasAnimation(),function(t,n){t.classList.add(n)}(i,"hide"));break}var a}}customElements.define("moving-particles",G),t("hello world")})()})();