# LCARS-Nextjs

A Star Trek LCARS-inspired interface built with Next.js and TypeScript. This advanced computer interface provides access to various systems and services through an authentic LCARS design.

![LCARS Interface](https://github.com/user-attachments/assets/737b6c42-4c28-415f-830a-1a371ca547c7)

## Features

- **🎨 Authentic LCARS Design**: True-to-series Star Trek LCARS interface with custom colors, fonts, and styling
- **⚡ API Interface**: Call and manage external APIs
- **📁 SFTP Browser**: Access and manage SFTP files
- **☁️ Cloud Storage**: Manage cloud buckets and storage
- **⚙️ Kubernetes**: Monitor and manage GCP K8s clusters
- **🔧 GitHub**: Access GitHub repositories
- **📄 Google Drive**: Access Google Drive files
- **🌐 Web Access**: Browse and access web resources
- **🤖 AI Assistant**: Interact with AI intelligence

![AI Module](https://github.com/user-attachments/assets/f9ab91a8-7706-4945-a2d6-ab6edeb176f2)

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 19** - Latest React features

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alassa50/LCARS-Nextjs.git
cd LCARS-Nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Desktop Application

To run as a desktop application on Windows, Mac, or Linux, use Electron:

### Install Electron dependencies:
```bash
npm install --save-dev electron electron-builder
```

### Run as desktop app:
```bash
npm run electron:dev
```

### Build desktop app:
```bash
npm run electron:build
```

## Module Overview

### API Interface
Call and test external APIs with configurable endpoints and methods (GET, POST, PUT, DELETE).

### SFTP Browser
Connect to SFTP servers and browse files and directories with a familiar file browser interface.

### Cloud Storage
Manage cloud storage buckets with file listings and metadata.

### Kubernetes
Monitor Kubernetes clusters on GCP with pod status, namespace information, and restart counts.

### GitHub
Access and browse GitHub repositories with star counts and language information.

### Google Drive
Browse Google Drive files and folders with type icons and file metadata.

### Web Access
Browse external web resources with a built-in navigation interface.

### AI Assistant
Interact with AI intelligence through a conversational interface (requires API configuration).

## Configuration

To enable full functionality for each module, configure the following:

1. **API Keys**: Add your API keys in `.env.local`:
```env
OPENAI_API_KEY=your_key_here
GITHUB_TOKEN=your_token_here
GOOGLE_DRIVE_API_KEY=your_key_here
```

2. **SFTP**: Configure connection details in the module
3. **Cloud Storage**: Set up cloud provider credentials
4. **Kubernetes**: Configure GCP credentials and cluster access

## Customization

### LCARS Colors

The interface uses authentic LCARS colors defined in `tailwind.config.ts`:
- Orange: `#FF9900`
- Blue: `#9999FF`
- Purple: `#CC99CC`
- Red: `#CC6666`
- Yellow: `#FFCC99`

### Components

Reusable LCARS components are located in `src/components/lcars/`:
- `LCARSButton` - Styled buttons with color variants
- `LCARSHeader` - Page header with LCARS branding
- `LCARSPanel` - Content panels with borders
- `ModuleGrid` - Module selection grid

## Development

### Project Structure

```
LCARS-Nextjs/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── modules/      # Module pages
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   └── lcars/        # LCARS design system
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript types
├── public/               # Static assets
└── package.json
```

### Adding New Modules

1. Create a new page in `src/app/modules/[module-name]/page.tsx`
2. Add the module to the grid in `src/components/lcars/ModuleGrid.tsx`
3. Use LCARS components for consistent styling

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- Inspired by Star Trek's LCARS interface design
- Built with modern web technologies for both web and desktop platforms
