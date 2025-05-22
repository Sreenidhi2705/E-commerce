import AdmZip from 'adm-zip';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const zip = new AdmZip();

// Files and directories to include
const filesToInclude = [
  'src',
  'public',
  'index.html',
  'package.json',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.node.json',
  'vite.config.ts',
  'postcss.config.js',
  'tailwind.config.js',
  'eslint.config.js'
];

// Files and directories to exclude
const excludePatterns = [
  'node_modules',
  'dist',
  '.git',
  '.bolt',
  'scripts'
];

function shouldInclude(path) {
  return !excludePatterns.some(pattern => path.includes(pattern));
}

function addDirectoryToZip(dirPath, zipPath = '') {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = join(dirPath, file);
    const relativePath = join(zipPath, file);

    if (shouldInclude(fullPath)) {
      if (fs.statSync(fullPath).isDirectory()) {
        addDirectoryToZip(fullPath, relativePath);
      } else {
        zip.addLocalFile(fullPath, zipPath);
      }
    }
  }
}

// Add specified files and directories
for (const file of filesToInclude) {
  const fullPath = join(projectRoot, file);
  if (fs.existsSync(fullPath)) {
    if (fs.statSync(fullPath).isDirectory()) {
      addDirectoryToZip(fullPath, file);
    } else {
      zip.addLocalFile(fullPath);
    }
  }
}

// Create README.md with setup instructions
const readmeContent = `# ShopEase - E-Commerce Website

This is a modern e-commerce website built with React, TypeScript, and Tailwind CSS.

## Setup Instructions

1. Extract all files from the ZIP archive
2. Open a terminal in the project directory
3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
4. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
5. Open your browser and navigate to the URL shown in the terminal

## Features

- Responsive design
- Product filtering and sorting
- Shopping cart functionality
- Beautiful UI with animations
- TypeScript for type safety
- Tailwind CSS for styling

## Project Structure

- \`src/\` - Source code
  - \`components/\` - React components
  - \`context/\` - React context providers
  - \`data/\` - Mock data and types
- \`public/\` - Static assets
- Configuration files for TypeScript, Vite, etc.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons
`;

zip.addFile('README.md', Buffer.from(readmeContent));

// Save the zip file
zip.writeZip(join(projectRoot, 'shopease.zip'));

console.log('Project has been zipped successfully! You can find shopease.zip in the project root directory.');