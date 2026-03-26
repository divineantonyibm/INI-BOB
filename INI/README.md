# INI

A minimal React + Vite (TypeScript) project configured with Carbon Design System v11.

## Features

- ⚡️ **Vite** - Fast build tool and dev server
- ⚛️ **React 19** with TypeScript
- 🎨 **Carbon Design System v11** - IBM's open-source design system
  - `@carbon/react` - Core Carbon components
  - `@carbon/icons-react` - Carbon icon library
  - `@carbon/ibm-products` - Extended enterprise components
  - `@carbon/themes` - Carbon theming system
- 💅 **Sass** - CSS preprocessor for Carbon styles
- 🚀 **GitHub Pages** deployment ready

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
cd INI
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Deploy to GitHub Pages

Deploy the built application to GitHub Pages:

```bash
npm run deploy
```

**Note:** Before deploying, make sure to:
1. Initialize a git repository: `git init`
2. Create a GitHub repository
3. Update the `base` in `vite.config.ts` to match your repository name
4. Push your code to GitHub

## Project Structure

```
INI/
├── src/
│   ├── styles/
│   │   └── theme.scss          # Carbon theme configuration
│   ├── App.tsx                 # Main application component
│   └── main.tsx                # Application entry point
├── public/                     # Static assets
├── dist/                       # Production build output
├── package.json
├── vite.config.ts              # Vite configuration
└── tsconfig.json               # TypeScript configuration
```

## Carbon Theme Configuration

The project uses Carbon's theme system configured in [`src/styles/theme.scss`](src/styles/theme.scss:1). The default theme is applied, but you can customize it by modifying the SCSS file or using the `Theme` component in your React code.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Learn More

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [Carbon Design System](https://carbondesignsystem.com/)
- [Carbon React Components](https://react.carbondesignsystem.com/)

## License

MIT
