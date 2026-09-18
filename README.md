# Futuristic Cyber-Dark Portfolio

A modern, high-performance, and futuristic single-page personal portfolio built with **React 18** and **Vite**. This project features a striking cyber-dark aesthetic, glassmorphic UI elements, dynamic animations, and an interactive terminal interface.

## Features

- **Cyber-Dark Aesthetic**: Glowing neon accents, custom scrollbars, and a dark canvas layout.
- **Glassmorphic UI**: Semi-transparent panels with backdrop blurs and glowing borders.
- **Interactive Terminal**: A functional CLI widget that allows visitors to explore your skills, projects, and bio by typing commands (e.g., `help`, `skills`, `bio`).
- **Dynamic Background**: An HTML5 Canvas ambient background with an animated grid and proximity-connected particles.
- **Project Showcase**: A grid of featured deployments with category filtering and full-detail modal dialogs.
- **Animated Loading Screen**: A custom loading sequence featuring your logo and a glowing progress bar.
- **Responsive Layout**: Fluidly adapts to mobile, tablet, and desktop screens.

## Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS with CSS variables (`src/index.css`)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone or download this repository.
2. Open your terminal in the project directory.
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Development Server

To run the application locally and see your changes in real-time:
```bash
npm run dev
```
The application will usually be available at `http://localhost:3000` or `http://localhost:5173`.

### Production Build

To compile the application for production:
```bash
npm run build
```
This will generate optimized, minified files in the `dist/` directory. You can preview the production build using:
```bash
npm run preview
```

## Customization

All personal data, skills, projects, and experiences are centralized in a single file to make updates incredibly easy.

To update your details, simply edit the following file:
- **`src/data/portfolioData.js`**

### Updating Images
- **Logo / Loading Screen**: Replace `public/IMG_0460.png` with your new image (keep the name or update the paths in `App.jsx` and `Navbar.jsx`).
- **Hero Photo**: Replace `public/avater.png` with your new portrait (keep the name or update the path in `Hero.jsx`).

## License
&copy; 2026 Mominul Islam Miad. All rights reserved.
