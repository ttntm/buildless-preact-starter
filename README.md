# buildless-preact-starter

A starter intended to showcase how I'm using Preact for SPAs in buildless environments.

## Preface

In the official docs, this is called the [No build tools route](https://preactjs.com/guide/v10/getting-started#no-build-tools-route).

At it's core, this approach leverages [HTM](https://github.com/developit/htm):

> HTM is a JSX-like syntax that works in standard JavaScript. Instead of requiring a build step, it uses JavaScript's own Tagged Templates syntax, which was added in 2015 and is supported in all modern browsers. This is an increasingly popular way to write Preact apps, since there are fewer moving parts to understand than a traditional front-end build tooling setup.

## Prerequisites

1. At least 1 HTML file
2. Browser support for `<script type="module">`
3. A server (or component in some low code system) that can execute and serve the code

## Project Structure

### `index.html`

The shell of your SPA. Can be used for static elements (header/footer) and server side code (if your environment provides that).

For the most minimal setup, this is where it ends: your Preact SPA is inlined in this file (please refer to the official docs linked above for an example).

`index.html` is also using some `<link rel="modulepreload">` statements in `<head>` to "significantly reduce the overall download and processing time" of the necessary dependencies listed below (see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/modulepreload)).

### `app.js`

Your SPA's entry point, kept in a separate file. Follow this approach if you can (i.e. if your environment supports it). 

The file uses a default export (`export default function App(config)`) that consumes a `config` object. A practical example: `config` could be used to pass data obtained from the server side to the SPA if the target system provides the functionality to run server side code in `index.html`.

### `components.js`

Uses a default export to provide reusable components. Use [Preact Hooks](https://preactjs.com/guide/v10/hooks) if you want to make use of stateful components.

NB: using components in a separate file (or even _files_) is a nice way to follow the separation of concerns and to remove (reusable) component code from `app.js`. It is not required though - components can (also) be defined in `app.js` and/or inline (`<script type="module">`) without any issues - check out the `Heading` component in `app.js` for an example.

### `config.js`

Entirely optional. I'm often using such config files for translations, lists used to populate `<select>` elements etc.

Follows the same intention as `app.js` and `components.js` - use if your environment supports doing it and if your app has the complexity/size to justify doing it.

### `styles.css`

Not sure if this needs to be mentioned separately, but you probably want your site (and SPA) not to look like browser defaults.

The styles used for this project were originally based on [water.css](https://github.com/kognise/water.css) but they got modified, extended and tinkered with over time.

## Using This Starter for Development

Fork, clone and start building your thing basically. Nothing to install, no `node_modules`, no dependencies for you to manage.

Well, that's not entirely true, but they're all loaded from [ESM](https://esm.sh/) CDN:

- https://esm.sh/preact@10.4.7
- https://esm.sh/preact@10.4.7/hooks
- https://esm.sh/htm@3.0.4

I've included one recommendation for VS Code users in the `.vscode` folder though:

- [Live Preview](https://open-vsx.org/extension/ms-vscode/live-server)

I've come to appreciate this extension for a variety of things, so go check it out if you haven't used it yet.

## Demo

A demo can be found here: [ttntm.me/demos/bps/](https://ttntm.me/demos/bps/)

## License

Made with 💛 by [ttntm](https://ttntm.me) and contributors.

Published under [MIT License](./LICENSE).
