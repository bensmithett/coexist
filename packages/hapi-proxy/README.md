# hapi-proxy

A tiny reverse proxy built with [hapi](https://hapi.dev/) and [h2o2](https://hapi.dev/module/h2o2/).

It sits between the browser and the [backend](../backend), mostly just forwarding requests and responses along transparently.

Only when it receives a JSON page from the backend does it transform the JSON into HTML — using the `render` function exported by [frontend](../frontend) — before passing the result along to the browser.
