# Svelte-Solid-Login


This provides login and registration functions that are modelled on those in Solid [react-components](https://github.com/solid/react-components) but using the [Svelte](https://svelte.dev) framework.

A live demo is here:

A Svelte app is built using [Sapper](https://sapper.svelte.dev) ([Github](https://github.com/sveltejs/sapper-template)).  It can be bundled using Rollup or webpack.  I have used Rollup.



## Structure (from [sapper-template](https://github.com/sveltejs/sapper-template))

Sapper expects to find two directories in the root of your project —  `src` and `static`.


### src

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.


#### src/routes

This is the heart of your Sapper app. There are two kinds of routes — *pages*, and *server routes*.

**Pages** are Svelte components written in `.svelte` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

**Server routes** are modules written in `.js` files, that export functions corresponding to HTTP methods. Each function receives Express `request` and `response` objects as arguments, plus a `next` function. This is useful for creating a JSON API, for example.


### static

The static directory contains any static assets that should be available. These are served using [sirv](https://github.com/lukeed/sirv).


## Structure (my additions)

I have a personal preference for structuring apps in terms of use-cases.  Each svelte component under src/routes is a template that loads the relevant use-case.  The use-cases are based on verbs:

- display home
- authenticate user
- register user
- display registration success



