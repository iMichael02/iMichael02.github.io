# Bùi Tuấn Minh – Portfolio

Personal portfolio site built with [React](https://react.dev), [Tailwind CSS v4](https://tailwindcss.com) and [Vite](https://vite.dev). Content is based on my CV (August 2026).

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build into dist/
npm run preview   # preview the production build
```

Requires Node.js 20+.

## Project structure

```
public/CV.pdf        CV served by the "Download CV" button
src/data.js          All portfolio content (profile, skills, projects, experience, education)
src/App.jsx          Page layout and sections
src/index.css        Tailwind import and theme (fonts, colors)
.github/workflows/   GitHub Pages deployment
```

To update the content, edit `src/data.js`. To change colors or fonts, edit the `@theme` block in `src/index.css`.

## Deploying to GitHub Pages

1. Create a repository named `<your-username>.github.io`.
2. Push this project to the `main` branch.
3. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` builds and deploys the site on every push to `main`. The site will be live at `https://<your-username>.github.io`.

`vite.config.js` uses `base: './'`, so the build also works from a repository with a different name.
