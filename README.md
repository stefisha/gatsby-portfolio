# Stefan Veličković · Portfolio

[![Deployment](https://github.com/stefisha/gatsby-portfolio/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/stefisha/gatsby-portfolio/actions/workflows/deploy-pages.yml)

Source code for [stefisha.me](https://stefisha.me), my personal portfolio. The site presents selected projects, engineering experience, technical interests and contact links.

Built with **Gatsby 5, React 18 and TypeScript**, using the [Cara theme by LekoArts](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara). Content is written in MDX, with local component overrides for the footer and 404 page. The original theme supplies the colourful project cards, parallax illustrations and light/dark modes.

## Run locally

Use **Node.js 24**, matching `.nvmrc` and the deployment workflow:

```sh
git clone https://github.com/stefisha/gatsby-portfolio.git
cd gatsby-portfolio
nvm use
npm ci
npm run develop
```

Open [localhost:8000](http://localhost:8000). If you do not use nvm, install Node.js 24 before running the npm commands. The checked-in lockfile and `.npmrc` are used together; the theme's dependency tree currently requires `legacy-peer-deps=true`.

## Verify a production build

```sh
npm run typecheck
npm run build
npm run check:build
npm run serve
```

The production preview runs at [localhost:9000](http://localhost:9000). `check:build` verifies the generated homepage, 404 document, metadata, custom domain, manifest and local browser resources. Use `npm run clean` if a Gatsby cache needs to be rebuilt.

The deployed site is static. Node.js is needed for development and builds, not for serving the finished website.

## Edit the content

Gatsby theme shadowing lets this repository customize Cara without copying or editing its dependencies.

| File | Content |
| --- | --- |
| `src/@lekoarts/gatsby-theme-cara/sections/intro.mdx` | Name and introduction |
| `src/@lekoarts/gatsby-theme-cara/sections/projects.mdx` | Project descriptions and repository links |
| `src/@lekoarts/gatsby-theme-cara/sections/about.mdx` | Background and technical experience |
| `src/@lekoarts/gatsby-theme-cara/sections/contact.mdx` | Contact, scheduling and CV links |
| `src/@lekoarts/gatsby-theme-cara/components/footer.tsx` | Footer and theme toggle |
| `src/pages/404.tsx` | Page-not-found screen and metadata |
| `gatsby-config.ts` | Site metadata, theme and manifest configuration |
| `static/` | Favicons, social image, SVG symbols and custom domain |

The `src/types/theme-ui.d.ts` declaration bridges the installed theme's older JSX types with React 18 and TypeScript 5.1 or later. It changes type checking only.

## Deployment

GitHub Actions checks TypeScript, builds the site and validates the generated files. Pull requests run the checks without deploying. Successful builds from `main` publish `public/` to GitHub Pages.

The existing domain is configured through `static/CNAME` and `siteMetadata.siteUrl`. Keep those values aligned if the domain changes. A manual deployment can also be started from the Actions tab.

## Dependency maintenance

Install with `npm ci` and review dependency changes alongside a production build. Some upstream Gatsby and theme-tooling advisories remain; see [dependency notes](docs/dependencies.md) for the verified scope and current limitations.

## Credits and license

The portfolio is customized from **LekoArts' Gatsby Starter Cara**. The theme and its dependencies retain their own licenses.

This repository uses the [BSD Zero Clause license (0BSD)](LICENSE), as stated in its existing license file.
