# Neomorphism UI Library

This repository contains a modern UI component library built with React, TypeScript, and Tailwind CSS. The components are designed with a neumorphic aesthetic and are fully customizable, accessible, and ready to use in your projects.

## Features

- **Neumorphic Design**: Beautiful, soft UI components with a modern look.
- **React + TypeScript**: Fully typed components for better developer experience.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Storybook Integration**: Preview and test components in isolation.
- **GitHub Pages Deployment**: Showcase your components with ease.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (for package management)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/neomorphism.git
   cd neomorphism
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

### Development

To start the development server:
```bash
bun run dev
```

This will launch the app at `http://localhost:3000`.

### Storybook

To view the components in isolation:
```bash
bun run storybook
```

Storybook will be available at `http://localhost:6006`.

## Deployment

### Deploying to GitHub Pages

This repository is configured to deploy both the app and Storybook to GitHub Pages. Simply push changes to the `main` branch, and the GitHub Actions workflow will handle the deployment.

### Manual Deployment

1. Build the app:
   ```bash
   bun run build
   ```

2. Build Storybook:
   ```bash
   bun run build-storybook
   ```

3. Deploy the `dist` and `storybook-static` directories to your hosting provider.

## Components

### Available Components

- **Button**: Customizable buttons with various shapes, sizes, and variants.
- **Card**: Flexible card components for displaying content.
- **Checkbox**: Accessible checkboxes with neumorphic styling.
- **Input**: Styled input fields for forms.
- **Nav**: Navigation bar for your application.
- **ProgressBar**: Animated progress indicators.
- **Slider**: Interactive sliders for selecting values.
- **Switch**: Toggle switches with smooth animations.
- **Tabs**: Tabbed navigation for organizing content.

### Usage

Here’s an example of how to use the `Button` component:

```tsx
import { Button } from '@/components';

function Example() {
  return (
    <Button variant="primary" size="large">
      Click Me
    </Button>
  );
}
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
