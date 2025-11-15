# Deployment Guide

Complete guide to deploying the Logseq Publisher to production.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Build Process](#build-process)
- [Deployment Platforms](#deployment-platforms)
  - [GitHub Pages](#github-pages)
  - [Netlify](#netlify)
  - [Vercel](#vercel)
  - [Custom Server](#custom-server)
- [GitHub Actions Setup](#github-actions-setup)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

### System Requirements

- **Rust 1.70+** - [Install Rust](https://rustup.rs/)
- **Node.js 20+** - [Install Node](https://nodejs.org/)
- **wasm-pack** - `cargo install wasm-pack`
- **Git** - Version control

### Verify Installation

```bash
# Check Rust version
rustc --version
# Output: rustc 1.70.0 (or higher)

# Check Cargo version
cargo --version
# Output: cargo 1.70.0 (or higher)

# Check wasm-pack
wasm-pack --version
# Output: wasm-pack 0.12.0 (or higher)

# Check Node.js
node --version
# Output: v20.0.0 (or higher)
```

---

## Build Process

### Local Build

#### 1. Clone Repository

```bash
git clone https://github.com/your-org/logseq-graph.git
cd logseq-graph
```

#### 2. Build Rust Publisher

```bash
cd publishing-tools/rust-web-publish/logseq-publisher-rust

# Development build (faster, larger)
cargo build

# Production build (slower, optimized)
cargo build --release
```

#### 3. Build WASM Module

```bash
# Build for web target
wasm-pack build --target web --out-dir dist/pkg

# Production optimizations
wasm-pack build \
  --target web \
  --out-dir dist/pkg \
  --release \
  -- \
  --features wasm
```

#### 4. Run Publisher

```bash
# Using Cargo
cargo run --release -- \
  --input ../../../mainKnowledgeGraph/pages \
  --output ./dist \
  --filter "public-access:: true"

# Or use the binary directly
./target/release/logseq-publisher \
  --input /path/to/pages \
  --output ./dist
```

#### 5. Test Locally

```bash
cd dist
python3 -m http.server 8000
# Visit http://localhost:8000
```

---

## Deployment Platforms

### GitHub Pages

GitHub Pages is the recommended platform for Logseq publishers.

#### Setup

1. **Create GitHub Repository**

```bash
git init
git remote add origin https://github.com/username/my-graph.git
```

2. **Configure Pages**

Go to repository Settings → Pages:
- Source: GitHub Actions
- Branch: (will be deployed automatically)

3. **Create Workflow File**

`.github/workflows/publish.yml`:

```yaml
name: Publish Logseq Graph

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Rust
        uses: actions-rust-lang/setup-rust-toolchain@v1
        with:
          toolchain: stable

      - name: Install wasm-pack
        run: cargo install wasm-pack

      - name: Cache Rust dependencies
        uses: Swatinem/rust-cache@v2
        with:
          workspaces: publishing-tools/rust-web-publish/logseq-publisher-rust

      - name: Build Publisher
        working-directory: publishing-tools/rust-web-publish/logseq-publisher-rust
        run: |
          cargo build --release
          wasm-pack build --target web --out-dir dist/pkg --release

      - name: Publish Graph
        working-directory: publishing-tools/rust-web-publish/logseq-publisher-rust
        run: |
          ./target/release/logseq-publisher \
            --input ../../../mainKnowledgeGraph/pages \
            --output ./dist \
            --filter "public-access:: true" \
            --base-url "https://username.github.io/my-graph"

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: publishing-tools/rust-web-publish/logseq-publisher-rust/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. **Push to GitHub**

```bash
git add .
git commit -m "Add publishing workflow"
git push -u origin main
```

5. **Access Published Site**

Visit `https://username.github.io/my-graph`

#### File Size Limits

GitHub Pages has a 100 MB file size limit per file. This publisher is designed to stay under this limit:

- ✅ index.html: ~8.5 MB
- ✅ pages/*.json: Individual files ~50 KB each
- ✅ Total: ~60-80 MB

---

### Netlify

Netlify offers excellent performance and CDN distribution.

#### Setup

1. **Install Netlify CLI**

```bash
npm install -g netlify-cli
```

2. **Create `netlify.toml`**

```toml
[build]
  command = """
    cd publishing-tools/rust-web-publish/logseq-publisher-rust &&
    cargo build --release &&
    wasm-pack build --target web --out-dir dist/pkg --release &&
    ./target/release/logseq-publisher \
      --input ../../../mainKnowledgeGraph/pages \
      --output ./dist \
      --filter 'public-access:: true'
  """
  publish = "publishing-tools/rust-web-publish/logseq-publisher-rust/dist"

[build.environment]
  RUST_VERSION = "1.70.0"
  NODE_VERSION = "20"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/*.wasm"
  [headers.values]
    Content-Type = "application/wasm"
    Cache-Control = "public, max-age=31536000, immutable"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

3. **Deploy**

```bash
# Link to Netlify
netlify link

# Deploy
netlify deploy --prod
```

#### Continuous Deployment

Connect your GitHub repository to Netlify:

1. Go to Netlify dashboard
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repository
4. Netlify will use `netlify.toml` configuration
5. Deploy!

---

### Vercel

Vercel offers fast edge deployments.

#### Setup

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Create `vercel.json`**

```json
{
  "version": 2,
  "buildCommand": "cd publishing-tools/rust-web-publish/logseq-publisher-rust && cargo build --release && wasm-pack build --target web --out-dir dist/pkg --release && ./target/release/logseq-publisher --input ../../../mainKnowledgeGraph/pages --output ./dist --filter 'public-access:: true'",
  "outputDirectory": "publishing-tools/rust-web-publish/logseq-publisher-rust/dist",
  "framework": null,
  "installCommand": "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y && cargo install wasm-pack",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    },
    {
      "source": "/(.*).wasm",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/wasm"
        },
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

3. **Deploy**

```bash
vercel --prod
```

---

### Custom Server

Deploy to your own server (VPS, dedicated server, etc.).

#### Nginx Configuration

```nginx
server {
    listen 80;
    server_name example.com;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name example.com;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Root directory
    root /var/www/logseq-graph;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript application/wasm;
    gzip_vary on;

    # WASM MIME type
    types {
        application/wasm wasm;
    }

    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|wasm)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API endpoints (if any)
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Deployment Script

```bash
#!/bin/bash
# deploy.sh

set -e

# Configuration
SERVER="user@example.com"
DEPLOY_DIR="/var/www/logseq-graph"
BUILD_DIR="./publishing-tools/rust-web-publish/logseq-publisher-rust/dist"

# Build
echo "Building..."
cd publishing-tools/rust-web-publish/logseq-publisher-rust
cargo build --release
wasm-pack build --target web --out-dir dist/pkg --release

# Publish graph
./target/release/logseq-publisher \
  --input ../../../mainKnowledgeGraph/pages \
  --output ./dist \
  --filter "public-access:: true"

# Deploy to server
echo "Deploying to $SERVER..."
rsync -avz --delete \
  --exclude='.git' \
  --exclude='node_modules' \
  "$BUILD_DIR/" \
  "$SERVER:$DEPLOY_DIR/"

# Restart services (if needed)
ssh "$SERVER" "sudo systemctl reload nginx"

echo "Deployment complete!"
```

---

## GitHub Actions Setup

### Complete Workflow

`.github/workflows/publish-graph.yml`:

```yaml
name: Publish Logseq Graph to GitHub Pages

on:
  push:
    branches: [main]
    paths:
      - 'mainKnowledgeGraph/pages/**'
      - 'publishing-tools/**'
      - '.github/workflows/publish-graph.yml'
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

env:
  CARGO_TERM_COLOR: always
  RUST_BACKTRACE: 1

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Rust toolchain
        uses: actions-rust-lang/setup-rust-toolchain@v1
        with:
          toolchain: stable
          components: rustfmt, clippy

      - name: Install wasm-pack
        run: cargo install wasm-pack --version 0.12.1

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Cache Rust dependencies
        uses: Swatinem/rust-cache@v2
        with:
          workspaces: |
            publishing-tools/rust-web-publish/logseq-publisher-rust -> target
          cache-on-failure: true

      - name: Run tests
        working-directory: publishing-tools/rust-web-publish/logseq-publisher-rust
        run: cargo test --release

      - name: Build Rust binary
        working-directory: publishing-tools/rust-web-publish/logseq-publisher-rust
        run: cargo build --release

      - name: Build WASM module
        working-directory: publishing-tools/rust-web-publish/logseq-publisher-rust
        run: |
          wasm-pack build \
            --target web \
            --out-dir dist/pkg \
            --release \
            -- \
            --features wasm

      - name: Count pages to publish
        id: count
        run: |
          count=$(grep -l "public-access:: true" mainKnowledgeGraph/pages/*.md | wc -l)
          echo "page_count=$count" >> $GITHUB_OUTPUT
          echo "Publishing $count pages"

      - name: Publish Logseq graph
        working-directory: publishing-tools/rust-web-publish/logseq-publisher-rust
        run: |
          ./target/release/logseq-publisher \
            --input ../../../mainKnowledgeGraph/pages \
            --output ./dist \
            --filter "public-access:: true" \
            --base-url "https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}" \
            --verbose

      - name: Verify output
        working-directory: publishing-tools/rust-web-publish/logseq-publisher-rust/dist
        run: |
          echo "Output directory contents:"
          ls -lh
          echo ""
          echo "index.html size:"
          du -h index.html
          echo ""
          echo "Total size:"
          du -sh .

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: publishing-tools/rust-web-publish/logseq-publisher-rust/dist

      - name: Generate deployment summary
        run: |
          echo "## Deployment Summary" >> $GITHUB_STEP_SUMMARY
          echo "" >> $GITHUB_STEP_SUMMARY
          echo "- **Pages published**: ${{ steps.count.outputs.page_count }}" >> $GITHUB_STEP_SUMMARY
          echo "- **Commit**: \`${{ github.sha }}\`" >> $GITHUB_STEP_SUMMARY
          echo "- **Branch**: \`${{ github.ref_name }}\`" >> $GITHUB_STEP_SUMMARY

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

      - name: Deployment complete
        run: |
          echo "## Deployment Complete! 🎉" >> $GITHUB_STEP_SUMMARY
          echo "" >> $GITHUB_STEP_SUMMARY
          echo "Visit your site: ${{ steps.deployment.outputs.page_url }}" >> $GITHUB_STEP_SUMMARY
```

---

## Performance Optimization

### 1. Enable Compression

**Gzip/Brotli** compression reduces file sizes by 70-80%.

#### GitHub Pages

Compression is automatic.

#### Nginx

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/wasm;
gzip_comp_level 6;
gzip_vary on;

# Brotli (if module available)
brotli on;
brotli_types text/plain text/css application/json application/javascript text/xml application/xml application/wasm;
```

### 2. CDN Configuration

Use a CDN for global distribution:

- **Cloudflare**: Free tier with CDN
- **AWS CloudFront**: Scalable CDN
- **Fastly**: High-performance CDN

### 3. Cache Headers

Set aggressive caching for immutable assets:

```
Cache-Control: public, max-age=31536000, immutable
```

### 4. Lazy Loading

Implement lazy loading for images and pages:

```javascript
// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    // Native lazy loading
} else {
    // Fallback: IntersectionObserver
}
```

### 5. Preloading

Preload critical resources:

```html
<link rel="preload" href="/pages/index.json" as="fetch" crossorigin>
<link rel="preload" href="/pkg/logseq_publisher_rust_bg.wasm" as="fetch" type="application/wasm" crossorigin>
```

---

## Troubleshooting

### Build Failures

#### Error: "wasm-pack not found"

**Solution**:
```bash
cargo install wasm-pack
```

#### Error: "failed to parse manifest"

**Solution**:
```bash
cd publishing-tools/rust-web-publish/logseq-publisher-rust
cargo clean
cargo build --release
```

#### Error: "WASM compilation failed"

**Solution**:
```bash
rustup target add wasm32-unknown-unknown
wasm-pack build --target web --release
```

### Deployment Issues

#### GitHub Pages: "Site not found"

**Solutions**:
1. Check repository Settings → Pages
2. Ensure workflow completed successfully
3. Wait 5-10 minutes for DNS propagation
4. Clear browser cache

#### File Size Error

**Error**: "File exceeds 100 MB limit"

**Solutions**:
1. Check `index.html` size: `du -h dist/index.html`
2. Verify content externalization: `ls -lh dist/pages/`
3. Ensure filter is working: `--filter "public-access:: true"`

#### MIME Type Errors

**Error**: "Failed to load WASM module"

**Solution** (Nginx):
```nginx
types {
    application/wasm wasm;
}
```

### Performance Issues

#### Slow Initial Load

**Solutions**:
1. Enable Gzip/Brotli compression
2. Use CDN
3. Implement service worker for caching
4. Preload critical resources

#### Slow Page Navigation

**Solutions**:
1. Implement client-side caching
2. Preload adjacent pages
3. Optimize JSON file sizes
4. Use HTTP/2 server push

---

## Monitoring

### Analytics

Add analytics to track usage:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Performance Monitoring

Use Lighthouse CI in GitHub Actions:

```yaml
- name: Run Lighthouse CI
  uses: treosh/lighthouse-ci-action@v10
  with:
    urls: |
      https://username.github.io/my-graph
    uploadArtifacts: true
```

---

## Related Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) - System architecture
- [PERFORMANCE.md](PERFORMANCE.md) - Performance benchmarks
- [CONTRIBUTING.md](CONTRIBUTING.md) - Development guide

---

**Last Updated**: 2025-11-12
**Version**: 1.0.0
