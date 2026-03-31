# Building and Publishing a React Loader Overlay to npm — A Complete Guide

> **Published:** March 2026 · **Reading time:** 12 min · **Tags:** React, npm, Open Source, TypeScript

---

## Introduction

Have you ever wanted to publish your own React component to npm? In this post, I'll walk you through the complete journey of building `loader-overlay` — a fully-featured loader overlay component for React — and publishing it to npm, yarn, and pnpm registries.

By the end of this guide you'll understand:

- How to scaffold a publishable React component library
- How to configure Rollup/Vite for dual ESM + CJS builds
- How to write TypeScript definitions
- How to publish to npm and make it available on yarn and pnpm

---

## What We're Building

`loader-overlay` is a zero-dependency React component that renders a customisable overlay with animated loaders. Key features:

- 5 animation types: **spinner**, **dots**, **pulse**, **ring**, **bar**
- 5 overlay variants: **dark**, **light**, **blur**, **transparent**, **gradient**
- Progress bar with shimmer animation
- Outside-click dismissal
- Auto-dismiss timeout
- Full TypeScript support
- Zero runtime dependencies

Here's what the final API looks like:

```jsx
<LoaderOverlay
  show={loading}
  type="spinner"
  variant="dark"
  color="#a78bfa"
  message="Loading data..."
  showProgress
  progress={uploadPercent}
  closeOnOutsideClick
  onClose={() => setLoading(false)}
/>
```

---

## Step 1 — Project Setup

Start by creating a new project folder and initialising it:

```bash
mkdir loader-overlay
cd loader-overlay
npm init -y
```

Your initial `package.json` should look like:

```json
{
  "name": "loader-overlay",
  "version": "1.0.0",
  "description": "A fully-featured React loader overlay component",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "sideEffects": false,
  "keywords": ["react", "loader", "overlay", "spinner", "loading"],
  "author": "Your Name",
  "license": "MIT"
}
```

The three key fields for a library are:
- `main` — CommonJS build (for Node.js / older bundlers)
- `module` — ESM build (for modern bundlers like Vite/Webpack 5)
- `types` — TypeScript definitions file

---

## Step 2 — Install Dependencies

```bash
# Build tools
npm install --save-dev rollup @rollup/plugin-typescript @rollup/plugin-node-resolve
npm install --save-dev typescript tslib

# React (peer deps — never bundle these)
npm install --save-dev react react-dom @types/react @types/react-dom

# For development
npm install --save-dev @vitejs/plugin-react vite
```

Add React as a **peer dependency** (not a dependency) in `package.json` so consumers use their own React version:

```json
{
  "peerDependencies": {
    "react": ">=17.0.0",
    "react-dom": ">=17.0.0"
  }
}
```

---

## Step 3 — TypeScript Configuration

Create a `tsconfig.json` at the root:

```json
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "declaration": true,
    "declarationDir": "dist",
    "outDir": "dist",
    "rootDir": "src",
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

---

## Step 4 — Write the Component

Create `src/index.tsx`:

```tsx
import { useState, useRef, useEffect, ReactNode } from 'react';

export interface LoaderOverlayProps {
  show?: boolean;
  type?: 'spinner' | 'dots' | 'pulse' | 'ring' | 'bar';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light' | 'blur' | 'transparent' | 'gradient';
  color?: string;
  message?: string;
  submessage?: string;
  fullScreen?: boolean;
  lockScroll?: boolean;
  zIndex?: number;
  opacity?: number;
  blur?: number;
  position?: 'center' | 'top' | 'bottom';
  showProgress?: boolean;
  progress?: number;
  closable?: boolean;
  onClose?: () => void;
  closeOnOutsideClick?: boolean;
  onOutsideClick?: () => void;
  animateIn?: boolean;
  timeout?: number;
  children?: ReactNode;
}

export default function LoaderOverlay(props: LoaderOverlayProps) {
  // ... component implementation
}
```

> **Tip:** Export the props interface so consumers can type their own wrappers.

---

## Step 5 — Rollup Build Config

Create `rollup.config.js`:

```javascript
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
  // ESM build
  {
    input: 'src/index.tsx',
    output: {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    plugins: [
      resolve(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  // CJS build
  {
    input: 'src/index.tsx',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    plugins: [
      resolve(),
      typescript({ tsconfig: './tsconfig.json', declaration: false }),
    ],
  },
];
```

Add build scripts to `package.json`:

```json
{
  "scripts": {
    "build": "rollup -c",
    "dev": "vite",
    "prepublishOnly": "npm run build"
  }
}
```

The `prepublishOnly` script automatically runs your build before every publish — so you never accidentally publish stale code.

---

## Step 6 — Build and Test Locally

```bash
# Build the package
npm run build

# Check the dist output
ls dist/
# index.js  index.esm.js  index.d.ts
```

To test locally in another project before publishing:

```bash
# In loader-overlay directory
npm link

# In your test project
npm link loader-overlay
```

Or use `npm pack` to simulate a real install:

```bash
npm pack
# Creates loader-overlay-1.0.0.tgz

# In test project
npm install ../loader-overlay/loader-overlay-1.0.0.tgz
```

---

## Step 7 — Write a Great README

A good README is crucial for npm package adoption. Include:

1. **Badge row** — version, downloads, license, bundle size
2. **One-line description** — what it does and why it's different
3. **Feature list** — bullets with emojis for scannability
4. **Installation** — all package managers
5. **Quick start** — minimal working example
6. **Props table** — every prop with type, default, description
7. **Advanced examples** — real-world patterns
8. **TypeScript usage**

```markdown
# loader-overlay

> Zero-dependency React loader overlay with 5 animation types.

[![npm](https://img.shields.io/npm/v/loader-overlay.svg)](https://npmjs.com/package/loader-overlay)

## Install
\`\`\`bash
npm install loader-overlay
\`\`\`

## Usage
\`\`\`jsx
import LoaderOverlay from 'loader-overlay';
<LoaderOverlay show={loading} />
\`\`\`
```

---

## Step 8 — Publish to npm

### 8.1 Create an npm Account

```bash
# Create account at https://www.npmjs.com/signup
# Then login in your terminal
npm login
# Enter username, password, email
# Complete 2FA if enabled
```

### 8.2 Verify Package Name is Available

```bash
npm search loader-overlay
# or check https://www.npmjs.com/package/loader-overlay
```

If the name is taken, either scope it with your username or choose a new name:

```json
{
  "name": "@yourusername/loader-overlay"
}
```

### 8.3 Final Pre-publish Checklist

```bash
# Dry run — see exactly what will be published
npm publish --dry-run

# Check what files are included
npm pack --dry-run
```

Make sure `files` in `package.json` only includes `dist/` and `README.md`:

```json
{
  "files": [
    "dist",
    "README.md",
    "CHANGELOG.md"
  ]
}
```

### 8.4 Publish!

```bash
# First time publish
npm publish

# For scoped packages (public)
npm publish --access public

# Publish a specific tag (e.g. beta)
npm publish --tag beta
```

You'll see output like:

```
npm notice 📦  loader-overlay@1.0.0
npm notice === Tarball Contents ===
npm notice 12.4kB dist/index.js
npm notice 11.8kB dist/index.esm.js
npm notice  2.1kB dist/index.d.ts
npm notice  4.2kB README.md
npm notice === Tarball Details ===
npm notice total files: 4
+ loader-overlay@1.0.0
```

---

## Step 9 — Using with yarn and pnpm

Once published to npm, it's automatically available on yarn and pnpm since they both pull from the npm registry.

### yarn

```bash
# yarn v1 (Classic)
yarn add loader-overlay

# yarn v2+ (Berry)
yarn add loader-overlay
```

### pnpm

```bash
pnpm add loader-overlay
```

pnpm uses a content-addressable store and hard links, so the package is only downloaded once across all projects on your machine.

### bun

```bash
bun add loader-overlay
```

---

## Step 10 — Publishing Updates

### Semantic Versioning

Follow [semver](https://semver.org/): `MAJOR.MINOR.PATCH`

| Change | Version bump | Example |
|--------|-------------|---------|
| Bug fix | patch | `1.0.0` → `1.0.1` |
| New feature (non-breaking) | minor | `1.0.0` → `1.1.0` |
| Breaking change | major | `1.0.0` → `2.0.0` |

```bash
# Bump version automatically
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0

# Then publish
npm publish
```

### Deprecating Old Versions

```bash
npm deprecate loader-overlay@1.0.0 "Please upgrade to v2"
```

---

## Conclusion

You've now built and published a production-quality React component to npm. Here's a summary of what we covered:

1. ✅ Project setup with `package.json` fields for ESM + CJS
2. ✅ TypeScript config and interface exports
3. ✅ Rollup build outputting both module formats
4. ✅ Local testing with `npm link` and `npm pack`
5. ✅ Writing a great README with badges and examples
6. ✅ Publishing to npm with `--dry-run` safety checks
7. ✅ Availability on yarn, pnpm, and bun automatically
8. ✅ Semantic versioning for updates

The package is now live at `https://www.npmjs.com/package/loader-overlay` and installable by anyone in the world.

---

## Resources

- [npm docs — Creating and publishing packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
- [Rollup docs — Building with TypeScript](https://rollupjs.org/configuration-options/)
- [Semantic Versioning](https://semver.org/)
- [npm semver calculator](https://semver.npmjs.com/)
- [Bundlephobia — check your package size](https://bundlephobia.com/)

---

*Have questions? Open an issue on [GitHub](https://github.com/yourusername/loader-overlay) or reach out on Twitter.*
