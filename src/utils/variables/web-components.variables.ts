/**
 * CSS variables for web components.
 */
export const WebComponentCssVariables: string = /*css */ `
:host {
    --bg-primary: #fafafa;
    --color-primary: #323232;
    --semi-transparent-bg: hsla(0, 0%, 100%, .7);
    --border-color: #dbdbdb;
    --scrollbar-track-bg-color: #fff;
    --scrollbar-thumb-bg-color: #545454;
    --scrollbar-thumb-bg-color--hover: #757575;
    --scrollbar-thumb-bg-color--active: #b0b0b0
}

::backdrop {
    --backdrop-bg-color: hsla(0, 0%, 100%, .5);
    --scrollbar-track-bg-color: #fff;
    --scrollbar-thumb-bg-color: #545454;
    --scrollbar-thumb-bg-color--hover: #757575;
    --scrollbar-thumb-bg-color--active: #b0b0b0
}
`;

/**
 * Dark theme CSS variables for web components.
 */
export const WebComponentCssDarkTheme: string = /*css */ `

@media(prefers-color-scheme:dark) {
    :host {
        --bg-primary: #050505;
        --color-primary: #cdcdcd;
        --semi-transparent-bg: rgba(0, 0, 0, .7);
        --scrollbar-track-bg-color: #000;
        --scrollbar-thumb-bg-color: #ababab;
        --scrollbar-thumb-bg-color--hover: #8a8a8a;
        --scrollbar-thumb-bg-color--active: #4f4f4f;
        --selection-bg: #838383;
        --selection-color: #fff
    }

    ::backdrop {
        --backdrop-bg-color: rgba(0, 0, 0, .5);
        --scrollbar-track-bg-color: #000;
        --scrollbar-thumb-bg-color: #ababab;
        --scrollbar-thumb-bg-color--hover: #8a8a8a;
        --scrollbar-thumb-bg-color--active: #4f4f4f
    }
}
`;

/**
 * CSS reset for web components.
 */
export const WebComponentCssReset: string = /* css */ `
@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap);

@media(prefers-reduced-motion:reduce) {
    *, :after, :before {
        animation: none !important;
        transition: none !important
    }
}

*, :after, :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0
}

::-moz-selection {
    -webkit-text-stroke: transparent;
    background-color: var(--selection-bg-color);
    color: currentColor
}

::selection {
    -webkit-text-stroke: transparent;
    background-color: var(--selection-bg-color);
    color: currentColor
}

:is(ul, ol) {
    list-style-type: none
}

button {
    background-color: transparent;
    border-color: transparent;
    color: inherit;
    font-family: inherit
}

button:hover {
    cursor: pointer
}

button:hover:disabled {
    cursor: not-allowed
}

input {
    font-family: inherit
}

input, input:focus {
    border-color: transparent
}

input:focus {
    outline: transparent
}

textarea {
    font-family: inherit
}

textarea, textarea:focus {
    border-color: transparent
}

textarea:focus {
    outline: transparent
}

a {
    color: inherit;
    text-decoration: none
}

a:visited {
    color: currentColor
}

label:hover {
    cursor: pointer
}

fieldset {
    border-color: transparent
}

legend {
    position: static
}

dialog {
    inset: 50%;
    margin: 0;
    padding: 0;
    position: fixed;
    translate: -50% -50%;
    z-index: 0
}

dialog, select {
    border: transparent
}

select {
    font-family: inherit
}

select:hover {
    cursor: pointer
}

option {
    font-family: inherit
}

:is(p, h1, h2, h3, h4, h5, h6, span):empty {
    display: none !important
}


::-webkit-scrollbar {
    background-color: var(--scrollbar-track-bg-color);
    border-radius: 100vmax;
    margin-block: 15px;
    width: 10px
}

::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb-bg-color);
    border: 3px solid var(--bg-primary);
    border-radius: 100vmax
}

::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-thumb-bg-color--hover)
}

::-webkit-scrollbar-thumb:active {
    background-color: var(--scrollbar-thumb-bg-color--active)
}

@supports(scrollbar-color:black white) {
    :root {
        scrollbar-color: var(--scrollbar-thumb-bg-color) var(--scrollbar-track-bg-color);
        scrollbar-width: thin
    }
}
`;
