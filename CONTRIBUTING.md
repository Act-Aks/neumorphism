# Contributing to Neumorphism UI

Thank you for your interest in contributing to Neumorphism UI! This document provides guidelines and information for contributors.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/neumorphism.git`
3. Install dependencies: `bun install`
4. Start development: `bun run dev`

## 📝 Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/) for automated versioning and changelog generation.

### Commit Types

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Examples

```bash
feat: add new Button component variant
fix: resolve accessibility issue in Checkbox
docs: update installation instructions
style: format code with prettier
refactor: simplify Card component structure
test: add unit tests for Slider component
chore: update dependencies
```

### Breaking Changes

For breaking changes, add `BREAKING CHANGE:` in the commit body or use `!` after the type:

```bash
feat!: redesign Button API
# or
feat: redesign Button API

BREAKING CHANGE: Button now uses different prop names
```

## 🔄 Development Workflow

1. Create a feature branch: `git checkout -b feat/new-component`
2. Make your changes
3. Run tests: `bun run cq:check && bun run lint`
4. Commit with conventional format
5. Push and create a Pull Request

## 📦 Release Process

Releases are automated using semantic-release:

- **Patch** (1.0.1): `fix:` commits
- **Minor** (1.1.0): `feat:` commits  
- **Major** (2.0.0): `BREAKING CHANGE:` commits

## 🎨 Component Guidelines

- Follow existing component patterns
- Include TypeScript types
- Add Storybook stories
- Ensure accessibility compliance
- Use neumorphic design principles
- Include proper documentation

## 🧪 Testing

- Run code quality checks: `bun run cq:check`
- Test Storybook build: `bun run build-storybook`

## 📚 Documentation

- Update component stories in Storybook
- Add JSDoc comments for props
- Update README if needed
- Include usage examples