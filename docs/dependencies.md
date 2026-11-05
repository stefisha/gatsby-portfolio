# Dependency notes

Audit date: 5 November 2026.

Compatible dependency updates reduced the initial npm audit report from 72 advisories, including two critical findings, to 46 advisories with no critical findings. The remaining report contains 22 high, 15 moderate and 9 low findings. Counts include inherited dependency chains rather than 46 independent flaws.

Outstanding packages include Gatsby's GraphQL code-generation dependencies, its development middleware, the Sharp image-processing dependency and parts of the theme toolchain. The audit's suggested forced fixes include downgrading Gatsby and the manifest plugin to older major versions. Those replacements were not applied because they are not compatible maintenance updates.

The published site consists of static files on GitHub Pages. Gatsby's local development server, image processors and code-generation tools are not a production application server. Their advisories still matter for maintainers and build environments; the dependency tree should not be described as vulnerability-free.

Run `npm audit` to obtain the current report. A broader theme or framework migration should be evaluated separately, with production build and visual checks. Keep development servers local and review source and image inputs before building untrusted contributions.
