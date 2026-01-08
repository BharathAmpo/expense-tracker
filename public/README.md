# Public Assets

This directory contains static files that are served **as-is** by Vite.

## Usage Guidelines

- Files here are available at the root URL (`/`)
- Do NOT import files from this directory in JavaScript or CSS
- Use this directory only for:
  - Static files that must keep their exact path
  - Assets referenced directly in `index.html`
  - Public metadata (favicons, robots.txt, etc.)

## Notes

Most application assets (images, videos, icons) should live in `src/assets/`
and be imported explicitly into components.

Use this directory sparingly.
