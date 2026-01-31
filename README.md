# Portfolio - Jacques Duval Guegong

A modern, responsive developer portfolio showcasing full-stack development projects, technical skills, and AI/ML expertise. Built with React and featuring a professional dark theme optimized for showcasing software engineering capabilities.

## Project Overview

This portfolio website serves as a comprehensive showcase of my work as a Computer Science graduate and incoming AI/ML Master's student. It highlights my experience with modern web technologies, full-stack development, and my passion for building intelligent systems that solve real-world problems.

### Key Features

- **Responsive Design**: Mobile-first approach ensuring optimal viewing across all devices
- **Dark Theme**: Professional AI/ML-inspired dark theme with modern UI/UX
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **SEO Friendly**: Optimized meta tags and semantic structure for search engines

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with functional components and hooks
- **JavaScript (ES6+)** - Modern JavaScript features and syntax
- **HTML5** - Semantic markup
- **CSS3** - Custom CSS with CSS Variables for theming
- **Vite** - Fast build tool and development server

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Git** - Version control

### Design System
- **CSS Custom Properties** - Centralized design tokens
- **Mobile-First CSS** - Responsive breakpoints
- **Component-Based Architecture** - Reusable UI components

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher) or **yarn**

You can check your versions by running:
```bash
node --version
npm --version
```

## 🏃 Running Locally

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd My_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   npm start
   ```

4. **Open your browser**
   - The development server will start on `http://localhost:3000` (or the port shown in terminal)
   - The page will automatically reload when you make changes

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

This will:
- Create an optimized production build in the `dist/` directory
- Minify JavaScript and CSS
- Optimize assets for production

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🚢 Deployment

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project

### Option 2: Netlify

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Option 3: GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Option 4: Traditional Web Hosting

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist/` folder to your web server

3. Configure your server to serve `index.html` for all routes (for React Router compatibility)

## 📁 Project Structure

```
My_Portfolio/
├── public/
│   └── assets/
│       └── images/          # Static assets
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer, Navigation
│   │   ├── sections/       # Hero, About, Projects, Skills, etc.
│   │   └── ui/             # Reusable UI components
│   ├── data/               # Static data (projects, skills, etc.)
│   ├── pages/              # Page components
│   ├── styles/             # Global styles and CSS variables
│   ├── App.jsx             # Main app component
│   └── index.jsx           # React entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🎨 Customization

### Updating Content

- **Personal Information**: Edit `src/data/personal.js`
- **Projects**: Edit `src/data/projects.js`
- **Skills**: Edit `src/data/skills.js`
- **Education**: Edit `src/data/education.js`
- **About Section**: Edit `src/data/about.js`

### Styling

- **Theme Colors**: Modify CSS variables in `src/styles/variables.css`
- **Component Styles**: Each component has its own CSS file in its directory
- **Global Styles**: Edit `src/styles/main.css` and `src/styles/typography.css`

## 🧪 Development

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Jacques Duval Guegong**

- **Title**: Computer Science Graduate | Incoming AI/ML Master's Student
- **Email**: Jamesduval1991@gmail.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

## Acknowledgments

- Built with [React](https://react.dev/)
- Bundled with [Vite](https://vitejs.dev/)
- Inspired by modern developer portfolios and AI/ML design aesthetics

---

**Note**: This portfolio is continuously updated with new projects and improvements. Feel free to reach out for collaboration opportunities or questions about my work.
