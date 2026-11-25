# Dipendra Dhami | Portfolio

Personal portfolio of Dipendra Dhami, computer engineer and founder of DhamiPlus Pvt. Ltd. Built with plain HTML, CSS and JavaScript (no build step) and deployed to GitHub Pages.

## Features

- Dark and light themes (remembered between visits), red and black palette
- Hero with typing role effect, photo, quick stats and CV download
- Experience timeline, project cards, grouped skills, education and contact sections
- Fully responsive with a mobile menu, scroll-reveal animations and a light particle background
- Respects `prefers-reduced-motion`

## Structure

```
index.html   page content
style.css    design tokens and styles
script.js    theme, menu, reveal, typing and background effects
assets/      photo.jpg and Dipendra_Dhami_CV.pdf
```

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Update content

- Text, projects and links: edit `index.html`
- Colors: change the variables at the top of `style.css`
- CV: replace `assets/Dipendra_Dhami_CV.pdf`
