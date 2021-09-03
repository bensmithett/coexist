# Development

## Setup

- Clone the repo
- `yarn`
- `cd packages/backend && bundle install`

## Dev servers

```bash
# Rails
yarn workspace @coexist/backend dev
# Hapi proxy
yarn workspace @coexist/hapi-proxy dev
# Cloudflare worker
yarn workspace @coexist/cloudflare-worker dev
# Frontend Storybook
yarn workspace @coexist/frontend storybook
```

## Deployment

`backend` (Rails) and `hapi-proxy` (Hapi) packages are manually deployed to Heroku as per [this guide](https://medium.com/inato/how-to-setup-heroku-with-yarn-workspaces-d8eac0db0256) (free Dynos, please don't DoS me 🙂)

```bash
# Rails
git subtree push --prefix packages/backend heroku-remote-rails main
# Hapi proxy
git push heroku-remote-hapi main
```

`cloudflare-worker` is manually deployed to Cloudflare using Wrangler.

```bash
yarn workspace @coexist/cloudflare-worker deploy
```
