(()=>{"use strict";(()=>{const{log:t,error:n,table:i,time:e,timeEnd:s,timeStamp:a,timeLog:h,assert:o,clear:r,count:c,countReset:l,group:d,groupCollapsed:v,groupEnd:m,trace:u,profile:b,profileEnd:g,warn:p,debug:f,info:w,dir:C,dirxml:y}=console;function x(t){return t.getContext("2d")}function A(t,n,i){t.width=n,t.height=i}function S(t,n,i,e){t.arc(n,i,e,0,2*Math.PI)}function k(t,n,i=!0,e=!0){if(t>n||n<t)throw new Error("Unexpected error occured in the passed argument values: min > max or max < min");const s=i&&!e,a=!i&&e;return i&&e?Math.floor(Math.random()*(n-t+1))+t:s?Math.floor(Math.random()*(n-t))+t:a?Math.floor(Math.random()*(n-t))+t+1:Math.floor(Math.random()*(n-t-1))+t+1}class z{constructor(t,n,i,e){this.context=t,this.width=n,this.height=i,this.title=e,this.titleDomRect=this.title.getBoundingClientRect(),this.x=k(0,n),this.y=k(0,i),this.radius=5,this.vectorX=k(-5,5)/2,this.ORIGINAL_WEIGHT=3,this.weight=3}update(){this.x+=this.vectorX,this.y+=this.weight,this.weight+=.05,this.checkCanvasSideCollision(),this.checkCanvasBottomCollision(),this.checkTopTitleCollision()}checkCanvasSideCollision(){const t=this.x-this.radius<0,n=this.x+this.radius>this.width;(t||n)&&(this.vectorX*=-1)}checkCanvasBottomCollision(){this.y>=this.height&&(this.y=0,this.weight=this.ORIGINAL_WEIGHT)}checkTopTitleCollision(){const t=this.x<this.titleDomRect.x+this.titleDomRect.width&&this.x>this.titleDomRect.x,n=115-this.radius,i=this.y<this.titleDomRect.y-n+this.titleDomRect.height&&this.y>this.titleDomRect.y-n;t&&i&&(this.y-=1,this.weight*=-.75)}draw(){this.context.fillStyle="cyan",this.context.beginPath(),S(this.context,this.x,this.y,this.radius),this.context.fill()}}class H{constructor(t,n,i){this.canvas=t,this.context=x(this.canvas),this.title=n,this.particlesAmount=i,this.initialize()}initialize(){this.particlesArray=[];for(let t=0;t<this.particlesAmount;t++){const t=new z(this.context,this.canvas.width,this.canvas.height,this.title);this.particlesArray.push(t)}}animateParticles(){for(const t of this.particlesArray)t.update(),t.draw()}}function M(t,n){var i;if(!n)return document.querySelector(t);return(null===(i=null==n?void 0:n.tagName)||void 0===i?void 0:i.includes("-"))?n.shadowRoot.querySelector(t):n.querySelector(t)}const T="\n:host {\n    --bg-primary: #fafafa;\n    --color-primary: #323232;\n    --semi-transparent-bg: hsla(0, 0%, 100%, .7);\n    --border-color: #dbdbdb;\n    --scrollbar-track-bg-color: #fff;\n    --scrollbar-thumb-bg-color: #545454;\n    --scrollbar-thumb-bg-color--hover: #757575;\n    --scrollbar-thumb-bg-color--active: #b0b0b0\n}\n\n::backdrop {\n    --backdrop-bg-color: hsla(0, 0%, 100%, .5);\n    --scrollbar-track-bg-color: #fff;\n    --scrollbar-thumb-bg-color: #545454;\n    --scrollbar-thumb-bg-color--hover: #757575;\n    --scrollbar-thumb-bg-color--active: #b0b0b0\n}\n",E="\n\n@media(prefers-color-scheme:dark) {\n    :host {\n        --bg-primary: #050505;\n        --color-primary: #cdcdcd;\n        --semi-transparent-bg: rgba(0, 0, 0, .7);\n        --scrollbar-track-bg-color: #000;\n        --scrollbar-thumb-bg-color: #ababab;\n        --scrollbar-thumb-bg-color--hover: #8a8a8a;\n        --scrollbar-thumb-bg-color--active: #4f4f4f;\n        --selection-bg: #838383;\n        --selection-color: #fff\n    }\n\n    ::backdrop {\n        --backdrop-bg-color: rgba(0, 0, 0, .5);\n        --scrollbar-track-bg-color: #000;\n        --scrollbar-thumb-bg-color: #ababab;\n        --scrollbar-thumb-bg-color--hover: #8a8a8a;\n        --scrollbar-thumb-bg-color--active: #4f4f4f\n    }\n}\n",P="\n@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap);\n\n@media(prefers-reduced-motion:reduce) {\n    *, :after, :before {\n        animation: none !important;\n        transition: none !important\n    }\n}\n\n*, :after, :before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0\n}\n\n::-moz-selection {\n    -webkit-text-stroke: transparent;\n    background-color: var(--selection-bg-color);\n    color: currentColor\n}\n\n::selection {\n    -webkit-text-stroke: transparent;\n    background-color: var(--selection-bg-color);\n    color: currentColor\n}\n\n:is(ul, ol) {\n    list-style-type: none\n}\n\nbutton {\n    background-color: transparent;\n    border-color: transparent;\n    color: inherit;\n    font-family: inherit\n}\n\nbutton:hover {\n    cursor: pointer\n}\n\nbutton:hover:disabled {\n    cursor: not-allowed\n}\n\ninput {\n    font-family: inherit\n}\n\ninput, input:focus {\n    border-color: transparent\n}\n\ninput:focus {\n    outline: transparent\n}\n\ntextarea {\n    font-family: inherit\n}\n\ntextarea, textarea:focus {\n    border-color: transparent\n}\n\ntextarea:focus {\n    outline: transparent\n}\n\na {\n    color: inherit;\n    text-decoration: none\n}\n\na:visited {\n    color: currentColor\n}\n\nlabel:hover {\n    cursor: pointer\n}\n\nfieldset {\n    border-color: transparent\n}\n\nlegend {\n    position: static\n}\n\ndialog {\n    inset: 50%;\n    margin: 0;\n    padding: 0;\n    position: fixed;\n    translate: -50% -50%;\n    z-index: 0\n}\n\ndialog, select {\n    border: transparent\n}\n\nselect {\n    font-family: inherit\n}\n\nselect:hover {\n    cursor: pointer\n}\n\noption {\n    font-family: inherit\n}\n\n:is(p, h1, h2, h3, h4, h5, h6, span):empty {\n    display: none !important\n}\n\n\n::-webkit-scrollbar {\n    background-color: var(--scrollbar-track-bg-color);\n    border-radius: 100vmax;\n    margin-block: 15px;\n    width: 10px\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: var(--scrollbar-thumb-bg-color);\n    border: 3px solid var(--bg-primary);\n    border-radius: 100vmax\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background-color: var(--scrollbar-thumb-bg-color--hover)\n}\n\n::-webkit-scrollbar-thumb:active {\n    background-color: var(--scrollbar-thumb-bg-color--active)\n}\n\n@supports(scrollbar-color:black white) {\n    :root {\n        scrollbar-color: var(--scrollbar-thumb-bg-color) var(--scrollbar-track-bg-color);\n        scrollbar-width: thin\n    }\n}\n",_=document.createElement("template");_.innerHTML=`\n  <style>\n    /* Reset */\n    ${T}\n    ${P}\n    ${E}\n    /* Actual style */\n    \n .web-component__canvas{\n    position: absolute;\n\n    width: 100%;\n    height: 100%;\n     filter: invert(100%) hue-rotate(270deg);\n\n     transition: filter 600ms ease-in-out;\n }\n\n .web-component__title{\n  position: relative;\n\n  inset:50%;\n\n  width: 50%;\n  translate: -50% -50%;\n\n  text-align: center;\n\n  z-index: 69420;\n\n  padding: 15px;\n  font-size: 3vw;\n\n  border: 3px solid currentColor;\n  border-bottom: transparent;\n }\n\n \n @media(prefers-color-scheme:dark) {\n    .web-component__canvas{\n       filter: invert(0%) hue-rotate(0deg);\n    }\n}\n\n  </style>\n  \n  \n <canvas class="web-component__canvas"></canvas>\n <h2 class="web-component__title">Boucing effect</h2> \n\n`;class R extends HTMLElement{constructor(){super(),this.animateCanvas=this.animateCanvas.bind(this),this.resetCanvasToMatchScreen=this.resetCanvasToMatchScreen.bind(this);const t=this.attachShadow({mode:"open"}),n=_.content.cloneNode(!0);t.appendChild(n),this.canvas=M("canvas",this.shadowRoot),this.context=x(this.canvas),this.webComponent=M("falling-particles"),this.titleHeading=M("h2",this.shadowRoot),this.effectHandler=new H(this.canvas,this.titleHeading,100),this.resizeCanvas()}static get observedAttributes(){return["is-playing"]}get isPlaying(){const t=this.getAttribute("is-playing");return JSON.parse(t)}set isPlaying(t){const n=t.toString();this.setAttribute("is-playing",n)}connectedCallback(){this.effectHandler=new H(this.canvas,this.titleHeading,100),A(this.canvas,this.clientWidth,this.clientHeight),window.addEventListener("resize",this.resetCanvasToMatchScreen)}resizeCanvas(){A(this.canvas,this.clientWidth,this.clientHeight)}resetCanvasToMatchScreen(){!this.isPlaying||(this.resizeCanvas(),this.cancelCanvasAnimation(),this.effectHandler=new H(this.canvas,this.titleHeading,100),this.animateCanvas())}animateCanvas(){this.context.fillStyle="rgba(0,0,0,10%)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.effectHandler.animateParticles(),this.animationId=requestAnimationFrame(this.animateCanvas)}cancelCanvasAnimation(){cancelAnimationFrame(this.animationId)}disconnectedCallback(){window.removeEventListener("resize",this.resetCanvasToMatchScreen)}attributeChangedCallback(t,n,i){switch(t){case"is-playing":"true"===i?this.animateCanvas():this.cancelCanvasAnimation();break}}}function L(t,n,i,...e){let s=(a=t,Array.from(a));var a;let h=[];return h=!!e.length?s.splice(n,i,...e):s.splice(n,i),{removedItems:h,newArray:s}}customElements.define("falling-particles",R);class I{constructor(t,n,i){this.context=t,this.width=n,this.height=i,this.x=k(10,n),this.y=this.height,this.radius=k(50,100),this.vectorX=k(1.5,3),this.vectorY=k(0,n)}update(){this.x+=this.vectorX,this.y-=this.vectorY;this.radius>=65&&(this.y=0,this.vectorY=k(.1,.5),this.vectorX=.01),this.checkTopCollision(),this.checkHorizontalSidesCollision()}checkTopCollision(){this.y-this.radius<=0&&this.resetParticle()}checkHorizontalSidesCollision(){const t=this.y-this.radius<0,n=this.y+this.radius>this.width;(t||n)&&this.resetParticle()}resetParticle(){this.y=this.height,this.radius=k(50,100),this.vectorY=k(-.5,.5),this.vectorX=k(-.5,.5)}draw(){this.context.fillStyle="orange",this.context.beginPath(),S(this.context,this.x,this.y,this.radius),this.context.fill()}}class ${constructor(t,n){this.canvas=t,this.context=x(this.canvas),this.particlesAmount=n,this.initialize()}initialize(){this.particlesArray=[];for(let t=0;t<this.particlesAmount;t++){const t=new I(this.context,this.canvas.width,this.canvas.height);this.particlesArray.push(t)}}animateParticles(){for(let t=0;t<this.particlesArray.length;t++){const n=this.particlesArray[t];n.update(),n.draw();n.radius<.1&&(L(this.particlesArray,t,1),t--)}}}const N=document.createElement("template");N.innerHTML=`\n  <style>\n    /* Reset */\n    ${T}\n    ${P}\n    ${E}\n    /* Actual style */\n    \n .web-component__canvas{\n   background-color: white;\n   \n   position: absolute;\n    width: 100%;\n    height: 100%;\n\n    filter: invert(100%) hue-rotate(180deg) blur(20px) contrast(8);\n     \n    transition: filter 600ms ease-in-out;\n }\n\n  @media(prefers-color-scheme:dark) {\n    .web-component__canvas{\n        filter: invert(0%) hue-rotate(0deg) blur(20px) contrast(8);\n    }\n  }\n\n  </style>\n  \n  \n <canvas class="web-component__canvas"></canvas>\n\n`;class W extends HTMLElement{constructor(){super(),this.animateCanvas=this.animateCanvas.bind(this),this.resetCanvasToMatchScreen=this.resetCanvasToMatchScreen.bind(this);const t=this.attachShadow({mode:"open"}),n=N.content.cloneNode(!0);t.appendChild(n),this.canvas=M("canvas",this.shadowRoot),this.context=x(this.canvas),this.effectHandler=new $(this.canvas,50),this.resizeCanvas()}static get observedAttributes(){return["is-playing"]}get isPlaying(){const t=this.getAttribute("is-playing");return JSON.parse(t)}set isPlaying(t){const n=t.toString();this.setAttribute("is-playing",n)}connectedCallback(){this.effectHandler=new $(this.canvas,50),A(this.canvas,this.clientWidth,this.clientHeight),window.addEventListener("resize",this.resetCanvasToMatchScreen)}resizeCanvas(){A(this.canvas,this.clientWidth,this.clientHeight)}resetCanvasToMatchScreen(){!this.isPlaying||(this.resizeCanvas(),this.cancelCanvasAnimation(),this.effectHandler=new $(this.canvas,50),this.animateCanvas())}animateCanvas(){this.context.fillStyle="rgba(0,0,0,10%)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.effectHandler.animateParticles(),this.animationId=requestAnimationFrame(this.animateCanvas)}cancelCanvasAnimation(){cancelAnimationFrame(this.animationId)}disconnectedCallback(){window.removeEventListener("resize",this.resetCanvasToMatchScreen)}attributeChangedCallback(t,n,i){M("fire-effect");switch(t){case"is-playing":"true"===i?this.animateCanvas():this.cancelCanvasAnimation();break}}}function X(t,n){const i=[];for(let e=t;e<=n;e++){const t=String.fromCodePoint(e);i.push(t)}return i}function F(){const t=function(){const t=X(65,90),n=X(97,122);return t.concat(n)}(),n=X(12352,12447);return{letters:t.concat(n),numberDigits:X(48,57),symbols:X(33,47).concat(X(58,64),X(91,96),X(123,126),X(155,159))}}function O(t){return JSON.parse(t)}customElements.define("fire-effect",W);class Y{constructor(t,n,i,e,s,a){this.context=t,this.x=e,this.y=s,this.fontSize=a,this.text="",this.width=n,this.height=i,this.characterSets=F()}update(){this.text=this.getRandomString();this.y*this.fontSize>this.height?this.y=Math.floor(5*Math.random()):this.y++}draw(){const t=function(t,n,i,e,s,a){const h=t.createLinearGradient(n,i,e,s);for(let t=0;t<a.length;t++){const n=a[t];h.addColorStop(t,n)}return h}(this.context,0,this.height,this.width,0,["#0aff0a","cyan"]);this.context.fillStyle=t,this.context.font=`${this.fontSize}px Consolas`,this.context.textAlign="center",this.context.fillText(this.text,this.x*this.fontSize,this.y*this.fontSize)}getRandomString(){const t=["letters","numberDigits","symbols"],n=t[k(0,t.length-1)],i=this.characterSets[n];return i[k(0,i.length-1)]}}class q{constructor(t){this.canvas=t,this.context=x(this.canvas),this.fontSize=20,this.columns=this.canvas.width/this.fontSize,this.symbolsArray=[],this.initialize()}initialize(){for(let t=0;t<this.columns;t++){const n=t,i=Math.random()*this.canvas.height,e=new Y(this.context,this.canvas.width,this.canvas.height,n,i,this.fontSize);this.symbolsArray.push(e),this.columns=this.canvas.width/this.fontSize}}animateSymbols(){for(const t of this.symbolsArray)t.update(),t.draw()}resize(t,n){this.canvas.width=t,this.canvas.height=n,this.symbolsArray=[],this.initialize()}}const D=document.createElement("template");D.innerHTML=`\n  <style>\n    /* Reset */\n    ${T}\n    ${P}\n    ${E}\n    /* Actual style */\n    \n  .web-component__canvas{\n    position: absolute;\n\n    width: 100%;\n    height: 100%;\n }\n\n  </style>\n  \n  \n <canvas class="web-component__canvas"></canvas>\n\n`;class G extends HTMLElement{constructor(){super(),this.animateCanvas=this.animateCanvas.bind(this),this.resetCanvasToMatchScreen=this.resetCanvasToMatchScreen.bind(this);const t=this.attachShadow({mode:"open"}),n=D.content.cloneNode(!0);t.appendChild(n),this.canvas=M("canvas",this.shadowRoot),this.context=x(this.canvas),this.effectHandler=new q(this.canvas),this.resizeCanvas()}static get observedAttributes(){return["is-playing"]}get isPlaying(){const t=this.getAttribute("is-playing");return JSON.parse(t)}set isPlaying(t){const n=t.toString();this.setAttribute("is-playing",n)}connectedCallback(){this.effectHandler=new q(this.canvas),A(this.canvas,this.clientWidth,this.clientHeight),window.addEventListener("resize",this.resetCanvasToMatchScreen)}resizeCanvas(){A(this.canvas,this.clientWidth,this.clientHeight)}resetCanvasToMatchScreen(){!this.isPlaying||(this.resizeCanvas(),this.effectHandler.resize(this.canvas.width,this.canvas.height))}animateCanvas(){this.context.fillStyle="rgba(0,0,0,10%)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.effectHandler.animateSymbols();setTimeout((()=>{this.animationId=requestAnimationFrame(this.animateCanvas)}),1e3/30)}cancelCanvasAnimation(){cancelAnimationFrame(this.animationId)}disconnectedCallback(){window.removeEventListener("resize",this.resetCanvasToMatchScreen)}attributeChangedCallback(n,i,e){M("matrix-effect"),O(i);const s=O(e);switch(t("New value:",s),n){case"is-playing":{const n=!!s;t({isPlaying:n}),n?this.animateCanvas():this.cancelCanvasAnimation();break}}}}customElements.define("matrix-effect",G);class J{constructor(t,n,i){this.context=t,this.width=n,this.height=i,this.x=k(0,n),this.y=k(0,i),this.radius=k(20,50),this.vectorX=k(-.5,.5),this.vectorY=k(-.5,.5)}update(){this.x+=this.vectorX,this.y+=this.vectorY,this.checkHorizontalCollisions(),this.checkVerticalCollisions()}checkHorizontalCollisions(){const t=this.x-this.radius<=0,n=this.x+this.radius>=this.width;(t||n)&&(this.vectorX*=-1)}checkVerticalCollisions(){const t=this.y+this.radius>=this.height;(this.y-this.radius<=0||t)&&(this.vectorY*=-1)}draw(){this.context.fillStyle="white",this.context.beginPath(),S(this.context,this.x,this.y,this.radius),this.context.fill()}}class B{constructor(t,n){this.canvas=t,this.context=x(this.canvas),this.particlesAmount=n,this.initialize()}initialize(){this.particlesArray=[];for(let t=0;t<this.particlesAmount;t++){const t=new J(this.context,this.canvas.width,this.canvas.height);this.particlesArray.push(t)}}animateParticles(){for(const t of this.particlesArray)t.update(),t.draw()}}const V=document.createElement("template");V.innerHTML=`\n  <style>\n    /* Reset */\n    ${T}\n    ${P}\n    ${E}\n    /* Actual style */\n    \n  .web-component__canvas{\n    position: absolute;\n\n    width: 100%;\n    height: 100%;\n\n    filter: invert(100%) hue-rotate(180deg) blur(5px) contrast(20);\n\n    transition: \n      filter 600ms ease-in-out;\n }\n\n @media(prefers-color-scheme:dark) {\n    .web-component__canvas{\n       filter: invert(0%) hue-rotate(0deg) blur(5px) contrast(20);\n    }\n}\n\n  </style>\n  \n  \n <canvas class="web-component__canvas"></canvas>\n\n`;class U extends HTMLElement{constructor(){super(),this.animateCanvas=this.animateCanvas.bind(this),this.resetCanvasToMatchScreen=this.resetCanvasToMatchScreen.bind(this);const t=this.attachShadow({mode:"open"}),n=V.content.cloneNode(!0);t.appendChild(n),this.canvas=M("canvas",this.shadowRoot),this.context=x(this.canvas),this.effectHandler=new B(this.canvas,100),this.resizeCanvas()}static get observedAttributes(){return["is-playing"]}get isPlaying(){const t=this.getAttribute("is-playing");return JSON.parse(t)}set isPlaying(t){const n=t.toString();this.setAttribute("is-playing",n)}connectedCallback(){this.effectHandler=new B(this.canvas,100),A(this.canvas,this.clientWidth,this.clientHeight),window.addEventListener("resize",this.resetCanvasToMatchScreen)}resizeCanvas(){A(this.canvas,this.clientWidth,this.clientHeight)}resetCanvasToMatchScreen(){!this.isPlaying||(this.resizeCanvas(),this.cancelCanvasAnimation(),this.effectHandler=new B(this.canvas,100),this.animateCanvas())}animateCanvas(){this.context.fillStyle="rgba(0,0,0,10%)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.effectHandler.animateParticles(),this.animationId=requestAnimationFrame(this.animateCanvas)}cancelCanvasAnimation(){cancelAnimationFrame(this.animationId)}disconnectedCallback(){window.removeEventListener("resize",this.resetCanvasToMatchScreen)}attributeChangedCallback(t,n,i){M("metaballs-effect");switch(t){case"is-playing":"true"===i?this.animateCanvas():this.cancelCanvasAnimation();break}}}customElements.define("metaballs-effect",U);class j{constructor(t,n,i){this.context=t,this.width=n,this.height=i,this.x=k(0,n),this.y=k(0,i),this.radius=k(.5,3),this.vectorX=k(-5,5)/2,this.vectorY=k(-5,5)/2}update(){this.x+=this.vectorX,this.y+=this.vectorY,this.checkHorizontalCollisions(),this.checkVerticalCollisions()}checkHorizontalCollisions(){const t=this.x-this.radius<=0,n=this.x+this.radius>=this.width;(t||n)&&(this.vectorX*=-1)}checkVerticalCollisions(){const t=this.y+this.radius>=this.height;(this.y-this.radius<=0||t)&&(this.vectorY*=-1)}draw(){this.context.fillStyle="white",this.context.beginPath(),S(this.context,this.x,this.y,2*this.radius),this.context.closePath(),this.context.fill()}}class K{constructor(t,n){this.canvas=t,this.context=x(this.canvas),this.particlesArray=[],this.particlesAmount=n,this.initializeArray()}initializeArray(){for(let t=0;t<this.particlesAmount;t++){const t=new j(this.context,this.canvas.width,this.canvas.height);this.particlesArray.push(t)}}animateParticles(){for(const t of this.particlesArray)t.update(),t.draw()}}const Q=document.createElement("template");Q.innerHTML=`\n  <style>\n    /* Reset */\n    ${T}\n    ${P}\n    ${E}\n    /* Actual style */\n    \n  .web-component__canvas{\n    position: absolute;\n\n    width: 100%;\n    height: 100%;\n    filter: invert(100%) hue-rotate(180deg);\n\n    transition: filter 600ms ease-in-out;\n }\n\n @media(prefers-color-scheme:dark) {\n    .web-component__canvas{\n       filter: invert(0%) hue-rotate(0deg);\n    }\n}\n\n  </style>\n  \n  \n    <canvas class="web-component__canvas"></canvas>\n\n`;class Z extends HTMLElement{constructor(){super(),this.animateCanvas=this.animateCanvas.bind(this),this.resetCanvasToMatchScreen=this.resetCanvasToMatchScreen.bind(this);const t=this.attachShadow({mode:"open"}),n=Q.content.cloneNode(!0);t.appendChild(n),this.canvas=M("canvas",this.shadowRoot),this.context=x(this.canvas),this.effectHandler=new K(this.canvas,100),this.resizeCanvas()}static get observedAttributes(){return["is-playing"]}get isPlaying(){const t=this.getAttribute("is-playing");return JSON.parse(t)}set isPlaying(t){const n=t.toString();this.setAttribute("is-playing",n)}connectedCallback(){this.effectHandler=new K(this.canvas,100),A(this.canvas,this.clientWidth,this.clientHeight),window.addEventListener("resize",this.resetCanvasToMatchScreen),this.animateCanvas()}resizeCanvas(){A(this.canvas,this.clientWidth,this.clientHeight)}resetCanvasToMatchScreen(){!this.isPlaying||(this.resizeCanvas(),this.cancelCanvasAnimation(),this.effectHandler=new K(this.canvas,100),this.animateCanvas())}animateCanvas(){this.context.fillStyle="rgba(0,0,0,10%)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.effectHandler.animateParticles(),this.animationId=requestAnimationFrame(this.animateCanvas)}cancelCanvasAnimation(){cancelAnimationFrame(this.animationId)}disconnectedCallback(){window.removeEventListener("resize",this.resetCanvasToMatchScreen)}attributeChangedCallback(t,n,i){const e=M("moving-particles");switch(t){case"is-playing":"true"===i?(this.animateCanvas(),s="hide",e.classList.remove(s)):(this.cancelCanvasAnimation(),function(t,n){t.classList.add(n)}(e,"hide"));break}var s}}customElements.define("moving-particles",Z);class tt{constructor(t,n,i,e){this.context=t,this.width=n,this.height=i,this.offset=e,this.length=e,this.growthExponent=0,this.x=this.width/2,this.y=this.height/2,this.rotation=0,this.colorLightness=0}update(){this.length+=this.growthExponent,this.rotation+=.5,this.growthExponent+=.075,this.colorLightness+=.75,this.checkGrowthOverflow()}checkGrowthOverflow(){this.length>=this.width&&this.length>=this.height&&(this.length=1,this.growthExponent=0,this.rotation=0,this.colorLightness=0)}draw(){this.context.save(),this.context.translate(this.width/2,this.height/2),this.context.rotate(this.rotation*Math.PI/180),this.context.strokeStyle=`hsl(0deg 0% ${this.colorLightness}%)`,this.context.lineWidth=5;const t=-1*this.length/2,n=-1*this.length/2;this.context.strokeRect(t,n,this.length,this.length),this.context.restore()}}class nt{constructor(t,n){this.canvas=t,this.context=x(this.canvas),this.particlesAmount=n,this.particlesArray=[],this.initialize()}initialize(){let t=0;for(let n=0;n<this.particlesAmount;n++){t=100*n;const i=new tt(this.context,this.canvas.width,this.canvas.height,t);this.particlesArray.push(i)}}animateParticles(){for(const t of this.particlesArray)t.update(),t.draw()}}const it=document.createElement("template");it.innerHTML=`\n  <style>\n    /* Reset */\n    ${T}\n    ${P}\n    ${E}\n    /* Actual style */\n    \n .web-component__canvas{\n    position: absolute;\n\n    width: 100%;\n    height: 100%;\n     filter: invert(100%) hue-rotate(270deg);\n\n     transition: filter 600ms ease-in-out;\n }\n \n@media(prefers-color-scheme:dark) {\n    .web-component__canvas{\n    filter: invert(0%) hue-rotate(0deg);\n    }\n}\n\n  </style>\n  \n  \n <canvas class="web-component__canvas"></canvas>\n\n`;class et extends HTMLElement{constructor(){super(),this.animateCanvas=this.animateCanvas.bind(this),this.resetCanvasToMatchScreen=this.resetCanvasToMatchScreen.bind(this);const t=this.attachShadow({mode:"open"}),n=it.content.cloneNode(!0);t.appendChild(n),this.canvas=M("canvas",this.shadowRoot),this.context=x(this.canvas),this.webComponent=M("cube-warp"),this.effectHandler=new nt(this.canvas,10),this.resizeCanvas()}static get observedAttributes(){return["is-playing"]}get isPlaying(){const t=this.getAttribute("is-playing");return JSON.parse(t)}set isPlaying(t){const n=t.toString();this.setAttribute("is-playing",n)}connectedCallback(){this.effectHandler=new nt(this.canvas,10),A(this.canvas,this.clientWidth,this.clientHeight),window.addEventListener("resize",this.resetCanvasToMatchScreen)}resizeCanvas(){A(this.canvas,this.clientWidth,this.clientHeight)}resetCanvasToMatchScreen(){!this.isPlaying||(this.resizeCanvas(),this.cancelCanvasAnimation(),this.effectHandler=new nt(this.canvas,10),this.animateCanvas())}animateCanvas(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.effectHandler.animateParticles(),this.animationId=requestAnimationFrame(this.animateCanvas)}cancelCanvasAnimation(){cancelAnimationFrame(this.animationId)}disconnectedCallback(){window.removeEventListener("resize",this.resetCanvasToMatchScreen)}attributeChangedCallback(t,n,i){switch(t){case"is-playing":"true"===i?this.animateCanvas():this.cancelCanvasAnimation();break}}}customElements.define("cube-warp",et),t("hello world")})()})();