# Zourba Media Static Site

This repository now contains a pure HTML/CSS/JS build of the Zourba Media landing page so it can be hosted anywhere (including GitHub Pages) without Java/Spring Boot tooling.

## Local preview

1. Clone or download the repo.
2. Open `index.html` directly in your browser, or serve it with any static server (for example `python -m http.server`).

## Deploy to GitHub Pages

1. Commit and push the three files (`index.html`, `styles.css`, `main.js`) to a GitHub repository.
2. In GitHub, open **Settings → Pages**.
3. Under *Source*, choose `Deploy from a branch`, pick the default branch, and set the folder to `/ (root)`.
4. Save. GitHub will build automatically; once the status badge shows **Published**, use the provided Pages URL to view the site.

### Updating later

- Edit `index.html` for copy/structure changes.
- Adjust colors or layout in `styles.css`.
- Update animation or interactivity logic in `main.js`.
- After editing, commit/push again and GitHub Pages will redeploy automatically.

