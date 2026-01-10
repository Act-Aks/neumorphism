# ✨ Neumorphism UI Library

<div align="center">

![Version](https://img.shields.io/github/v/release/Act-Aks/neumorphism?style=for-the-badge&logo=github&label=Version)
![Neumorphism UI](https://img.shields.io/badge/UI-Neumorphism-blueviolet?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-06B6D4?style=for-the-badge&logo=tailwindcss)

**A modern, accessible UI component library with beautiful neumorphic design**

[🚀 **Live Demo**](https://neumorphism.akashsrivastava-git.workers.dev/) • [📚 **Storybook**](https://act-aks.github.io/neumorphism/?path=/story/components-button--default) • [📦 **NPM Package**](#installation)

</div>

---

## 🎯 Overview

Neumorphism UI is a comprehensive React component library that brings the elegant, soft UI aesthetic of neumorphism to your applications. Built with modern web standards, accessibility in mind, and powered by React 19, TypeScript, and Tailwind CSS.

### ✨ Key Features

- 🎨 **Neumorphic Design** - Soft, tactile UI elements with depth and dimension
- ♿ **Accessibility First** - WCAG compliant components with proper ARIA support
- 🔧 **Fully Customizable** - Easy theming with CSS variables and Tailwind utilities
- 📱 **Responsive** - Mobile-first design that works on all screen sizes
- 🚀 **Modern Stack** - React 19, TypeScript 5.9, Tailwind CSS 4.1
- 📖 **Storybook Integration** - Interactive component documentation
- 🎯 **Tree Shakeable** - Import only what you need

## 🌟 Component Showcase

### 🔘 Buttons
Interactive buttons with multiple variants, sizes, and states
```tsx
<Button variant="primary" size="large">Primary Action</Button>
<Button variant="default" shape="circle" size="icon">
  <Heart className="h-4 w-4" />
</Button>
```

### 🏷️ Badges  
Status indicators and labels for content categorization
```tsx
<Badge variant="primary">
  <Star className="mr-1 h-3 w-3" />
  Featured
</Badge>
```

### 📝 Form Controls
Beautiful form elements with neumorphic styling
```tsx
<Input placeholder="Enter your email..." />
<Switch checked={isOn} onCheckedChange={setIsOn} />
<Checkbox checked id="terms" />
```

### 📊 Interactive Elements
Sliders, progress bars, and navigation components
```tsx
<Slider value={volume} onValueChange={setVolume} max={100} />
<ProgressBar value={progress} max={100} />
<Tabs>
  <Tabs.TabList>
    <Tabs.Tab value="overview">Overview</Tabs.Tab>
    <Tabs.Tab value="features">Features</Tabs.Tab>
  </Tabs.TabList>
</Tabs>
```

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Act-Aks/neumorphism.git
cd neumorphism

# Install dependencies
bun install

# Start development server
bun run dev
```

### Using as a Package

```bash
# Install from GitHub Packages (coming soon)
npm install @act-aks/neumorphism
```

```tsx
import { Button, Card, Input } from '@act-aks/neumorphism';

function MyApp() {
  return (
    <Card className="p-6">
      <Card.Header>
        <Card.Title>Welcome</Card.Title>
      </Card.Header>
      <Card.Content>
        <Input placeholder="Enter your name" />
        <Button variant="primary" className="mt-4">
          Get Started
        </Button>
      </Card.Content>
    </Card>
  );
}
```

## 🛠️ Development

### Local Development
```bash
bun run dev          # Start development server
bun run build        # Build for production
bun run preview      # Preview production build
```

### Storybook
```bash
bun run storybook           # Start Storybook dev server
bun run build-storybook     # Build Storybook for deployment
```

### Code Quality
```bash
bun run cq:check     # Check code quality
bun run cq:fix       # Fix code quality issues
```

## 📦 Available Components

| Component | Description | Status |
|-----------|-------------|--------|
| **Button** | Interactive buttons with variants, sizes, and shapes | ✅ Ready |
| **Badge** | Status indicators and content labels | ✅ Ready |
| **Card** | Flexible containers for content organization | ✅ Ready |
| **Checkbox** | Accessible checkboxes with neumorphic styling | ✅ Ready |
| **Input** | Styled form input fields | ✅ Ready |
| **Nav** | Navigation bar component | ✅ Ready |
| **ProgressBar** | Animated progress indicators | ✅ Ready |
| **Slider** | Interactive range sliders | ✅ Ready |
| **Switch** | Toggle switches with smooth animations | ✅ Ready |
| **Tabs** | Tabbed navigation for content organization | ✅ Ready |

## 🎨 Customization

The library uses CSS custom properties for easy theming:

```css
:root {
  --color-primary: 220 100% 50%;
  --color-background: 220 13% 91%;
  --color-foreground: 220 9% 9%;
  --shadow-raised: /* neumorphic raised shadow */;
  --shadow-inset: /* neumorphic inset shadow */;
}
```

## 🌐 Live Examples

- **🚀 [Main Demo](https://neumorphism.akashsrivastava-git.workers.dev/)** - Interactive showcase of all components
- **📚 [Storybook](https://act-aks.github.io/neumorphism/?path=/story/components-button--default)** - Component documentation and playground

## 📋 Roadmap

- [x] 📦 NPM Package Release Setup
- [x] 🤖 Automated Semantic Releases
- [ ] 🎨 Theme Builder Tool  
- [ ] 📱 Mobile Components (Drawer, Sheet, etc.)
- [ ] 🔍 Search & Filter Components
- [ ] 📊 Data Visualization Components
- [ ] 🌙 Dark Mode Support Enhancement

## 🚀 Releases

This project uses [Semantic Release](https://semantic-release.gitbook.io/) for automated versioning and publishing. Releases are triggered automatically when commits are pushed to the main branch.

### Release Types

- **Patch Release** (1.0.1): Bug fixes (`fix:` commits)
- **Minor Release** (1.1.0): New features (`feat:` commits)
- **Major Release** (2.0.0): Breaking changes (`BREAKING CHANGE:` in commit)

### Installation from GitHub Packages

```bash
# Configure npm to use GitHub Packages
echo "@act-aks:registry=https://npm.pkg.github.com" >> .npmrc

# Install the package
npm install @act-aks/neumorphism
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Components based on [Base UI](https://base-ui.com/)
- Icons from [Lucide React](https://lucide.dev/)

---

<div align="center">

**Made with ❤️ by [Akash Srivastava](https://github.com/Act-Aks)**

⭐ Star this repo if you find it helpful!

</div>