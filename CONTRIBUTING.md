# Contributing to LCARS-Nextjs

Thank you for your interest in contributing to the LCARS-Nextjs project! This document provides guidelines for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/LCARS-Nextjs.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes: `npm run build`
6. Commit your changes: `git commit -m "Add feature: your feature description"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Create a Pull Request

## Code Style

- Use TypeScript for all new code
- Follow the existing code structure and naming conventions
- Use functional components with hooks
- Keep components small and focused
- Comment complex logic

## LCARS Design Guidelines

When adding or modifying UI components:

1. Use the LCARS color palette defined in `tailwind.config.ts`
2. Follow the established component patterns in `src/components/lcars/`
3. Maintain the Star Trek LCARS aesthetic:
   - Rounded pill-shaped buttons
   - High contrast colors on black background
   - Clear, bold typography
   - Geometric layouts

## Adding New Modules

To add a new module:

1. Create a new page in `src/app/modules/[module-name]/page.tsx`
2. Add the module to `ModuleGrid.tsx`
3. Follow the existing module structure
4. Use LCARS components for consistency
5. Update the README with module information

## Testing

Before submitting a PR:

```bash
# Build the project
npm run build

# Run linting
npm run lint

# Test in development
npm run dev

# Test Electron (if applicable)
npm run electron:dev
```

## Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Update documentation if needed
- Add screenshots for UI changes
- Reference any related issues
- Ensure all tests pass
- Follow the existing code style

## Module Integration Guidelines

When integrating external services:

1. Create a client in `src/lib/[service]-client.ts`
2. Use environment variables for sensitive data
3. Provide mock implementations for development
4. Document required API keys in `.env.example`
5. Add usage instructions in README

## Reporting Issues

When reporting bugs:

- Include your environment (OS, Node version, etc.)
- Provide steps to reproduce
- Include screenshots if applicable
- Check if the issue already exists

## Feature Requests

Feature requests are welcome! Please:

- Check if the feature already exists or is planned
- Provide a clear description of the feature
- Explain the use case
- Consider if it fits the LCARS theme

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow the project's guidelines

## Questions?

If you have questions, feel free to:
- Open an issue for discussion
- Review existing documentation
- Check closed issues for similar questions

Thank you for contributing to LCARS-Nextjs!
