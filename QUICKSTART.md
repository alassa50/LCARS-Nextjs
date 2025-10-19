# Quick Start Guide

Get the LCARS interface up and running in 5 minutes!

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Installation

```bash
# Clone the repository
git clone https://github.com/alassa50/LCARS-Nextjs.git
cd LCARS-Nextjs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## First Steps

### 1. Explore the Interface

The main dashboard shows 8 modules:
- **API Interface** - Test external API calls
- **SFTP Browser** - File browsing interface
- **Cloud Storage** - Bucket management
- **Kubernetes** - Cluster monitoring
- **GitHub** - Repository access
- **Google Drive** - File browser
- **Web Access** - Web navigation
- **AI Assistant** - Chat interface

### 2. Configure Environment (Optional)

For full functionality, copy the environment template:

```bash
cp .env.example .env.local
```

Add your API keys:
- OpenAI API key for AI Assistant
- GitHub token for repository access
- Google Drive API key for file access

### 3. Try Desktop Mode

Run as a desktop application:

```bash
npm run electron:dev
```

## Project Structure

```
LCARS-Nextjs/
├── src/
│   ├── app/              # Pages and routing
│   ├── components/       # React components
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript types
├── electron/             # Desktop app configuration
└── public/               # Static assets
```

## Key Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter
npm run electron:dev # Start desktop app (development)
```

## Customization

### Change LCARS Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  lcars: {
    orange: '#FF9900',  // Modify these values
    blue: '#9999FF',
    // ... more colors
  }
}
```

### Add a New Module

1. Create page: `src/app/modules/[name]/page.tsx`
2. Add to grid: `src/components/lcars/ModuleGrid.tsx`
3. Use LCARS components for styling

### Integrate Real APIs

Replace mock implementations in `src/lib/` with actual API calls:
- `api-client.ts` - Generic API calls
- `sftp-client.ts` - SFTP operations
- `storage-client.ts` - Cloud storage
- `k8s-client.ts` - Kubernetes

## Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### Build Errors

Clean install:

```bash
rm -rf node_modules .next
npm install
npm run build
```

### Electron Not Starting

Ensure Next.js dev server is running:

```bash
# Terminal 1
npm run dev

# Terminal 2 (after server starts)
npm run electron
```

## Next Steps

- Read [README.md](README.md) for detailed documentation
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment guides
- Review [CONTRIBUTING.md](CONTRIBUTING.md) to contribute

## Need Help?

- Check existing [GitHub Issues](https://github.com/alassa50/LCARS-Nextjs/issues)
- Review the code documentation
- Create a new issue if needed

Enjoy your LCARS interface! 🖖
