# Deployment Guide

## Web Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Azure Static Web Apps
- Self-hosted with Node.js

## Desktop Deployment

### Prerequisites

- Node.js 18+
- npm or yarn

### Build for Desktop

#### Windows

```bash
npm run electron:build:win
```

This creates an installer in `dist-electron/` directory.

#### macOS

```bash
npm run electron:build:mac
```

Creates a `.dmg` file in `dist-electron/` directory.

#### Linux

```bash
npm run electron:build:linux
```

Creates an AppImage in `dist-electron/` directory.

### Development Mode

To test the desktop app in development:

```bash
npm run electron:dev
```

This starts both the Next.js dev server and Electron simultaneously.

## Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your API keys and configuration.

### Required API Keys

1. **OpenAI API Key**: For AI Assistant functionality
   - Get from: https://platform.openai.com/api-keys

2. **GitHub Token**: For GitHub integration
   - Get from: https://github.com/settings/tokens

3. **Google Drive API**: For Google Drive access
   - Set up in: https://console.cloud.google.com/

4. **GCP Credentials**: For Kubernetes monitoring
   - Configure in: https://console.cloud.google.com/

## Production Optimization

### Next.js Optimization

The application is already optimized with:
- Static page generation where possible
- Image optimization
- Code splitting
- Tree shaking

### Additional Optimizations

1. Enable caching in your deployment platform
2. Use a CDN for static assets
3. Configure compression
4. Set up monitoring and analytics

## Security Considerations

1. Never commit `.env.local` or API keys to version control
2. Use environment variables for all sensitive data
3. Implement rate limiting for API calls
4. Use HTTPS in production
5. Regularly update dependencies

## Troubleshooting

### Build Issues

If you encounter build errors:

```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

### Electron Issues

If Electron fails to start:

```bash
# Rebuild Electron
npm run electron:dev
```

### Port Conflicts

If port 3000 is already in use, change it in `package.json`:

```json
"dev": "next dev -p 3001"
```

## Support

For issues and questions:
- Check the README.md
- Review the code documentation
- Create an issue on GitHub
