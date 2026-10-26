# CubeLinux Website

The Angular site for the upcoming CubeLinux distribution, published at
[cubelinux.github.io](https://cubelinux.github.io/). The project is in early
development; it does not publish an ISO or installation image yet.

Brand colors come from the CubeLinux brand guideline. The primary logo URL is
configured in `src/app/brand-assets.ts`; when the logo is hosted, put its public
URL there. The favicon from the guideline is served from `public/favicon.ico`.
Keep other image and icon files out of this repository.

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
