# cubelinux Website

The Angular site for the upcoming cubelinux distribution, published at
[cubelinux.github.io](https://cubelinux.github.io/). The project is in early
development; it does not publish an ISO or installation image yet.

The site uses the cubelinux logo palette, opens in light mode, and includes a
light/dark theme switch.

Brand colors come from the cubelinux brand guideline. The header switches
between externally hosted light and dark logo variants configured in
`src/app/brand-assets.ts`. Social previews use the hosted primary social image,
and browser, Apple touch, and Android icons are loaded from the guideline CDN
through the document head and `site.webmanifest`. Keep image and icon files out
of this repository.

## Develop locally

Install Node.js 24 or newer and npm, then run:

```sh
npm install
npm start
```

Open <http://localhost:4200/>. Create a production build with `npm run build`.

## Deploy

Every push to `main` builds the Angular app and deploys it to GitHub Pages.
The workflow can also be started manually from the repository's Actions tab.
In repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**.
