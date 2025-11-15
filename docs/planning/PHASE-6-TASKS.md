# Phase 6: CI/CD & Deployment - Detailed Task Breakdown

**Phase Duration:** 1-2 weeks (40-80 hours)
**Primary Agents:** cicd-engineer, reviewer
**Dependencies:** Phase 5 (Testing) complete

---

## Overview

Setup comprehensive CI/CD pipeline with staging and production deployments, monitoring, and automated rollbacks. Ensure zero-downtime deployments and observability.

**Success Criteria:**
- [ ] GitHub Actions workflows fully automated
- [ ] Staging environment mirrors production
- [ ] Production deployments require approval
- [ ] Monitoring and alerting configured
- [ ] Rollback mechanism tested

---

## Task 6.1: GitHub Actions Workflow Enhancement (12-16 hours)

### Subtask 6.1.1: Multi-Stage Build Pipeline
**Duration:** 4-6 hours
**Agent:** cicd-engineer
**Priority:** Critical
**Dependencies:** Phase 5 complete

**Implementation Steps:**
1. Reorganize `.github/workflows/publish.yml` into stages:
   ```yaml
   name: Build and Deploy

   on:
     push:
       branches: [main, staging]
     pull_request:
       branches: [main]

   jobs:
     # Stage 1: Build Rust Components
     build-rust:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4

         - name: Setup Rust
           uses: dtolnay/rust-toolchain@stable
           with:
             targets: wasm32-unknown-unknown

         - name: Cache Cargo
           uses: actions/cache@v3
           with:
             path: |
               ~/.cargo/registry
               ~/.cargo/git
               target
             key: ${{ runner.os }}-cargo-${{ hashFiles('**/Cargo.lock') }}

         - name: Build Logseq Publisher (CLI)
           working-directory: rust-web-publish/logseq-publisher-rust
           run: cargo build --release

         - name: Build WASM Module
           working-directory: publishing-tools/WasmVOWL/rust-wasm
           run: |
             cargo install wasm-pack
             wasm-pack build --target web --release

         - name: Upload Rust Artifacts
           uses: actions/upload-artifact@v3
           with:
             name: rust-binaries
             path: |
               rust-web-publish/logseq-publisher-rust/target/release/logseq-publisher
               publishing-tools/WasmVOWL/rust-wasm/pkg/

     # Stage 2: Generate Ontology
     generate-ontology:
       needs: build-rust
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4

         - name: Download Rust Artifacts
           uses: actions/download-artifact@v3
           with:
             name: rust-binaries

         - name: Extract Ontology (TTL)
           run: |
             chmod +x logseq-publisher
             ./logseq-publisher ontology extract \
               --pages-dir mainKnowledgeGraph/pages \
               --output /tmp/ontology.ttl

         - name: Convert to WebVOWL JSON
           run: |
             ./logseq-publisher ontology extract \
               --pages-dir mainKnowledgeGraph/pages \
               --format json \
               --output /tmp/ontology.json

         - name: Upload Ontology Artifacts
           uses: actions/upload-artifact@v3
           with:
             name: ontology-data
             path: |
               /tmp/ontology.ttl
               /tmp/ontology.json

     # Stage 3: Build Frontend
     build-frontend:
       needs: [build-rust, generate-ontology]
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4

         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'
             cache-dependency-path: publishing-tools/WasmVOWL/modern/package-lock.json

         - name: Download Artifacts
           uses: actions/download-artifact@v3
           with:
             name: ontology-data
             path: publishing-tools/WasmVOWL/modern/public/data/

         - name: Install Dependencies
           working-directory: publishing-tools/WasmVOWL/modern
           run: npm ci

         - name: Build Frontend
           working-directory: publishing-tools/WasmVOWL/modern
           run: npm run build

         - name: Upload Frontend Artifacts
           uses: actions/upload-artifact@v3
           with:
             name: frontend-dist
             path: publishing-tools/WasmVOWL/modern/dist/

     # Stage 4: Run Tests
     test:
       needs: [build-rust, build-frontend]
       runs-on: ubuntu-latest
       strategy:
         matrix:
           test-suite: [rust-unit, typescript-unit, integration, e2e]
       steps:
         - uses: actions/checkout@v4

         - name: Run ${{ matrix.test-suite }} Tests
           run: |
             case "${{ matrix.test-suite }}" in
               rust-unit)
                 cargo test --all-features
                 ;;
               typescript-unit)
                 cd publishing-tools/WasmVOWL/modern
                 npm ci
                 npm test
                 ;;
               integration)
                 cd publishing-tools/WasmVOWL/modern
                 npm ci
                 npm run test:integration
                 ;;
               e2e)
                 cd publishing-tools/WasmVOWL/modern
                 npm ci
                 npm run cypress:run
                 ;;
             esac

         - name: Upload Test Results
           if: always()
           uses: actions/upload-artifact@v3
           with:
             name: test-results-${{ matrix.test-suite }}
             path: |
               target/test-results/
               publishing-tools/WasmVOWL/modern/coverage/
               publishing-tools/WasmVOWL/modern/cypress/screenshots/
   ```

**Success Criteria:**
- [ ] Build pipeline split into logical stages
- [ ] Artifacts shared between jobs
- [ ] Parallel test execution
- [ ] Build time <10 minutes

**Testing:**
Push to staging branch and verify workflow.

**Files Modified:**
- `.github/workflows/publish.yml`

---

### Subtask 6.1.2: Quality Gates
**Duration:** 3-4 hours
**Agent:** cicd-engineer
**Priority:** High
**Dependencies:** 6.1.1

**Implementation Steps:**
1. Add quality gate job:
   ```yaml
     quality-gates:
       needs: [test, build-frontend]
       runs-on: ubuntu-latest
       steps:
         - name: Check Test Coverage
           run: |
             COVERAGE=$(cat coverage/coverage-summary.json | jq '.total.lines.pct')
             if (( $(echo "$COVERAGE < 85" | bc -l) )); then
               echo "Coverage $COVERAGE% is below 85% threshold"
               exit 1
             fi

         - name: Check Bundle Size
           run: |
             BUNDLE_SIZE=$(wc -c < dist/assets/app-*.js)
             if [ $BUNDLE_SIZE -gt 204800 ]; then  # 200KB limit
               echo "Bundle size $BUNDLE_SIZE exceeds 200KB limit"
               exit 1
             fi

         - name: Check WASM Size
           run: |
             WASM_SIZE=$(wc -c < dist/assets/webvowl_wasm_bg.wasm)
             if [ $WASM_SIZE -gt 1572864 ]; then  # 1.5MB limit
               echo "WASM size $WASM_SIZE exceeds 1.5MB limit"
               exit 1
             fi

         - name: Run Lighthouse CI
           run: |
             npm install -g @lhci/cli
             lhci autorun

         - name: Check Performance Benchmarks
           run: |
             cargo bench --no-run  # Ensure benchmarks compile
             # Compare against baseline (stored in git)
             CURRENT_PERF=$(cargo bench 2>&1 | grep "time:" | awk '{print $2}')
             BASELINE_PERF=$(cat benchmarks/baseline.txt)
             # Fail if 10% slower than baseline
   ```

**Success Criteria:**
- [ ] Coverage gate at 85%
- [ ] Bundle size limits enforced
- [ ] Lighthouse scores validated
- [ ] Performance regression detected

**Testing:**
```bash
# Simulate quality gate locally
./scripts/run-quality-gates.sh
```

**Files Modified:**
- `.github/workflows/publish.yml`
- `scripts/run-quality-gates.sh` (new)

---

### Subtask 6.1.3: Security Scanning
**Duration:** 2-3 hours
**Agent:** cicd-engineer
**Priority:** Medium
**Dependencies:** 6.1.2

**Implementation Steps:**
1. Add security scanning jobs:
   ```yaml
     security-scan:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4

         - name: Run Snyk Security Scan
           uses: snyk/actions/node@master
           env:
             SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
           with:
             args: --severity-threshold=high

         - name: Cargo Audit (Rust Dependencies)
           run: |
             cargo install cargo-audit
             cargo audit

         - name: npm Audit
           working-directory: publishing-tools/WasmVOWL/modern
           run: npm audit --audit-level=moderate

         - name: Trivy Vulnerability Scanner
           uses: aquasecurity/trivy-action@master
           with:
             scan-type: 'fs'
             scan-ref: '.'
             format: 'sarif'
             output: 'trivy-results.sarif'

         - name: Upload Trivy Results to GitHub Security
           uses: github/codeql-action/upload-sarif@v2
           with:
             sarif_file: 'trivy-results.sarif'
   ```

**Success Criteria:**
- [ ] No high-severity vulnerabilities
- [ ] Dependency scanning automated
- [ ] Results uploaded to GitHub Security
- [ ] Alerts configured for new vulnerabilities

**Testing:**
```bash
# Run security scans locally
cargo audit
npm audit
```

**Files Modified:**
- `.github/workflows/publish.yml`
- `.github/workflows/security-scan.yml` (new, runs weekly)

---

### Subtask 6.1.4: Caching Strategy
**Duration:** 3-4 hours
**Agent:** cicd-engineer
**Priority:** Medium
**Dependencies:** 6.1.3

**Implementation Steps:**
1. Optimize caching across jobs:
   ```yaml
     - name: Cache Rust Build
       uses: actions/cache@v3
       with:
         path: |
           ~/.cargo/registry
           ~/.cargo/git
           target
         key: ${{ runner.os }}-cargo-${{ hashFiles('**/Cargo.lock') }}-${{ hashFiles('**/*.rs') }}
         restore-keys: |
           ${{ runner.os }}-cargo-${{ hashFiles('**/Cargo.lock') }}
           ${{ runner.os }}-cargo

     - name: Cache Node Modules
       uses: actions/cache@v3
       with:
         path: |
           ~/.npm
           publishing-tools/WasmVOWL/modern/node_modules
         key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
         restore-keys: |
           ${{ runner.os }}-npm

     - name: Cache Cypress Binary
       uses: actions/cache@v3
       with:
         path: ~/.cache/Cypress
         key: ${{ runner.os }}-cypress-${{ hashFiles('**/package-lock.json') }}

     - name: Cache WASM Build
       uses: actions/cache@v3
       with:
         path: publishing-tools/WasmVOWL/rust-wasm/target
         key: ${{ runner.os }}-wasm-${{ hashFiles('**/Cargo.lock') }}-${{ hashFiles('rust-wasm/**/*.rs') }}
   ```
2. Monitor cache hit rates
3. Invalidate caches on major dependency changes

**Success Criteria:**
- [ ] Cache hit rate >70%
- [ ] Build time reduced by 50% on cache hit
- [ ] Cargo, npm, Cypress caches configured
- [ ] Cache size reasonable (<500MB)

**Testing:**
```bash
# Run workflow twice, verify second is faster
gh workflow run publish.yml
```

**Files Modified:**
- `.github/workflows/publish.yml`

---

## Task 6.2: Staging Environment (10-14 hours)

### Subtask 6.2.1: Staging Deployment Workflow
**Duration:** 4-6 hours
**Agent:** cicd-engineer
**Priority:** Critical
**Dependencies:** 6.1.4

**Implementation Steps:**
1. Create dedicated staging workflow:
   ```yaml
   # .github/workflows/deploy-staging.yml
   name: Deploy to Staging

   on:
     push:
       branches: [staging, develop]

   jobs:
     deploy-staging:
       needs: [quality-gates, security-scan]
       runs-on: ubuntu-latest
       environment:
         name: staging
         url: https://staging.narrativegoldmine.com

       steps:
         - uses: actions/checkout@v4

         - name: Download All Artifacts
           uses: actions/download-artifact@v3

         - name: Prepare Staging Directory
           run: |
             mkdir -p www-staging
             cp -r frontend-dist/* www-staging/
             cp -r ontology-data/* www-staging/api/
             # Add staging banner
             sed -i 's/<body>/<body><div class="staging-banner">STAGING ENVIRONMENT<\/div>/' www-staging/index.html

         - name: Deploy to GitHub Pages (Staging Branch)
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./www-staging
             publish_branch: gh-pages-staging
             cname: staging.narrativegoldmine.com

         - name: Run Smoke Tests on Staging
           run: |
             # Wait for deployment
             sleep 30
             # Test staging site
             curl -f https://staging.narrativegoldmine.com/ || exit 1
             curl -f https://staging.narrativegoldmine.com/ontology || exit 1
             curl -f https://staging.narrativegoldmine.com/api/search-index.json || exit 1

         - name: Notify Slack
           if: always()
           uses: slackapi/slack-github-action@v1
           with:
             payload: |
               {
                 "text": "Staging deployment ${{ job.status }}: ${{ github.sha }}",
                 "url": "https://staging.narrativegoldmine.com"
               }
           env:
             SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
   ```
2. Configure DNS for staging subdomain

**Success Criteria:**
- [ ] Staging deploys automatically on push to `staging` branch
- [ ] Staging site accessible at staging.narrativegoldmine.com
- [ ] Smoke tests verify deployment
- [ ] Notifications sent on success/failure

**Testing:**
```bash
git push origin staging
# Verify https://staging.narrativegoldmine.com
```

**Files Created:**
- `.github/workflows/deploy-staging.yml`

---

### Subtask 6.2.2: Environment Configuration Management
**Duration:** 3-4 hours
**Agent:** cicd-engineer
**Priority:** High
**Dependencies:** 6.2.1

**Implementation Steps:**
1. Create environment-specific configs:
   ```typescript
   // src/config/environment.ts
   export interface EnvironmentConfig {
       apiBaseUrl: string;
       ontologyDataUrl: string;
       enableDebugLogging: boolean;
       analyticsId?: string;
       sentryDsn?: string;
   }

   const configs: Record<string, EnvironmentConfig> = {
       development: {
           apiBaseUrl: 'http://localhost:5173/api',
           ontologyDataUrl: 'http://localhost:5173/data/ontology.json',
           enableDebugLogging: true,
       },
       staging: {
           apiBaseUrl: 'https://staging.narrativegoldmine.com/api',
           ontologyDataUrl: 'https://staging.narrativegoldmine.com/data/ontology.json',
           enableDebugLogging: true,
           sentryDsn: process.env.VITE_SENTRY_DSN_STAGING,
       },
       production: {
           apiBaseUrl: 'https://narrativegoldmine.com/api',
           ontologyDataUrl: 'https://narrativegoldmine.com/data/ontology.json',
           enableDebugLogging: false,
           analyticsId: 'G-XXXXXXXXXX',
           sentryDsn: process.env.VITE_SENTRY_DSN_PROD,
       },
   };

   export const config = configs[import.meta.env.MODE] || configs.development;
   ```
2. Inject configs at build time:
   ```yaml
   - name: Build Frontend for Staging
     env:
       VITE_MODE: staging
       VITE_SENTRY_DSN_STAGING: ${{ secrets.SENTRY_DSN_STAGING }}
     run: npm run build -- --mode staging
   ```

**Success Criteria:**
- [ ] Separate configs for dev/staging/prod
- [ ] Configs injected at build time
- [ ] Secrets managed via GitHub Secrets
- [ ] No hardcoded URLs in code

**Testing:**
```bash
npm run build -- --mode staging
npm run build -- --mode production
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/config/environment.ts`

**Files Modified:**
- `.github/workflows/deploy-staging.yml`
- `.github/workflows/publish.yml`

---

### Subtask 6.2.3: Automated E2E Tests on Staging
**Duration:** 3-4 hours
**Agent:** tester
**Priority:** Medium
**Dependencies:** 6.2.2

**Implementation Steps:**
1. Add post-deployment E2E tests:
   ```yaml
     e2e-staging:
       needs: deploy-staging
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4

         - name: Setup Node.js
           uses: actions/setup-node@v4

         - name: Install Dependencies
           working-directory: publishing-tools/WasmVOWL/modern
           run: npm ci

         - name: Run Cypress E2E Tests on Staging
           working-directory: publishing-tools/WasmVOWL/modern
           env:
             CYPRESS_BASE_URL: https://staging.narrativegoldmine.com
           run: npm run cypress:run

         - name: Upload Cypress Screenshots
           if: failure()
           uses: actions/upload-artifact@v3
           with:
             name: cypress-screenshots-staging
             path: publishing-tools/WasmVOWL/modern/cypress/screenshots/

         - name: Upload Cypress Videos
           if: always()
           uses: actions/upload-artifact@v3
           with:
             name: cypress-videos-staging
             path: publishing-tools/WasmVOWL/modern/cypress/videos/
   ```

**Success Criteria:**
- [ ] E2E tests run against staging after deployment
- [ ] Tests verify critical user journeys
- [ ] Failures block production deployment
- [ ] Screenshots/videos captured on failure

**Testing:**
```bash
# Trigger staging deployment
git push origin staging
# Verify E2E tests run
```

**Files Modified:**
- `.github/workflows/deploy-staging.yml`

---

## Task 6.3: Production Deployment (8-12 hours)

### Subtask 6.3.1: Production Deployment Workflow
**Duration:** 4-6 hours
**Agent:** cicd-engineer
**Priority:** Critical
**Dependencies:** 6.2.3

**Implementation Steps:**
1. Create production deployment workflow:
   ```yaml
   # .github/workflows/deploy-production.yml
   name: Deploy to Production

   on:
     push:
       branches: [main]
     workflow_dispatch:  # Manual trigger option

   jobs:
     deploy-production:
       needs: [quality-gates, security-scan, e2e-staging]
       runs-on: ubuntu-latest
       environment:
         name: production
         url: https://narrativegoldmine.com

       # Require manual approval for production
       if: github.event_name == 'workflow_dispatch' || (github.event_name == 'push' && github.ref == 'refs/heads/main')

       steps:
         - uses: actions/checkout@v4

         - name: Wait for Approval
           uses: trstringer/manual-approval@v1
           with:
             secret: ${{ secrets.GITHUB_TOKEN }}
             approvers: jjohare  # GitHub username(s) who can approve
             minimum-approvals: 1
             issue-title: "Deploy to Production?"
             issue-body: |
               **Deployment Details:**
               - Commit: ${{ github.sha }}
               - Author: ${{ github.actor }}
               - Branch: ${{ github.ref }}

               **Pre-Deployment Checklist:**
               - [ ] All tests passed
               - [ ] Staging deployment verified
               - [ ] No high-priority bugs
               - [ ] Documentation updated

               Approve to proceed with production deployment.

         - name: Download All Artifacts
           uses: actions/download-artifact@v3

         - name: Prepare Production Directory
           run: |
             mkdir -p www-production
             cp -r frontend-dist/* www-production/
             cp -r ontology-data/* www-production/api/
             # Add version info
             echo "${{ github.sha }}" > www-production/VERSION.txt

         - name: Deploy to GitHub Pages (Main)
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./www-production
             publish_branch: gh-pages
             cname: narrativegoldmine.com
             user_name: 'github-actions[bot]'
             user_email: 'github-actions[bot]@users.noreply.github.com'
             commit_message: 'Deploy ${{ github.sha }}'

         - name: Wait for DNS Propagation
           run: sleep 60

         - name: Run Production Smoke Tests
           run: |
             curl -f https://narrativegoldmine.com/ || exit 1
             curl -f https://narrativegoldmine.com/ontology || exit 1
             curl -f https://narrativegoldmine.com/api/search-index.json || exit 1

         - name: Create GitHub Release
           uses: actions/create-release@v1
           env:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
           with:
             tag_name: v${{ github.run_number }}
             release_name: Release v${{ github.run_number }}
             body: |
               Production deployment of commit ${{ github.sha }}

               **Changes:**
               ${{ github.event.head_commit.message }}
             draft: false
             prerelease: false

         - name: Notify Slack
           if: always()
           uses: slackapi/slack-github-action@v1
           with:
             payload: |
               {
                 "text": "🚀 Production deployment ${{ job.status }}: v${{ github.run_number }}",
                 "url": "https://narrativegoldmine.com"
               }
           env:
             SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
   ```

**Success Criteria:**
- [ ] Manual approval required for production
- [ ] Smoke tests verify production deployment
- [ ] GitHub release created automatically
- [ ] Team notified of deployment

**Testing:**
```bash
# Trigger production deployment (requires approval)
gh workflow run deploy-production.yml
```

**Files Created:**
- `.github/workflows/deploy-production.yml`

---

### Subtask 6.3.2: Rollback Mechanism
**Duration:** 3-4 hours
**Agent:** cicd-engineer
**Priority:** High
**Dependencies:** 6.3.1

**Implementation Steps:**
1. Create rollback workflow:
   ```yaml
   # .github/workflows/rollback-production.yml
   name: Rollback Production

   on:
     workflow_dispatch:
       inputs:
         version:
           description: 'Version/commit to rollback to'
           required: true
           type: string

   jobs:
     rollback:
       runs-on: ubuntu-latest
       environment:
         name: production
         url: https://narrativegoldmine.com

       steps:
         - uses: actions/checkout@v4
           with:
             ref: ${{ github.event.inputs.version }}

         - name: Confirm Rollback
           run: |
             echo "⚠️  Rolling back to ${{ github.event.inputs.version }}"
             echo "Current version: $(cat www-production/VERSION.txt)"

         - name: Rebuild from Previous Commit
           run: |
             # Run full build pipeline
             ./scripts/build-all.sh

         - name: Deploy Previous Version
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./www-production
             publish_branch: gh-pages
             cname: narrativegoldmine.com
             commit_message: 'Rollback to ${{ github.event.inputs.version }}'

         - name: Verify Rollback
           run: |
             sleep 60
             DEPLOYED_VERSION=$(curl -s https://narrativegoldmine.com/VERSION.txt)
             if [ "$DEPLOYED_VERSION" != "${{ github.event.inputs.version }}" ]; then
               echo "Rollback verification failed"
               exit 1
             fi

         - name: Notify Slack
           uses: slackapi/slack-github-action@v1
           with:
             payload: |
               {
                 "text": "⏪ Production ROLLBACK to ${{ github.event.inputs.version }}",
                 "priority": "high"
               }
           env:
             SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
   ```

**Success Criteria:**
- [ ] Rollback can be triggered manually
- [ ] Rollback rebuilds from previous commit
- [ ] Verification confirms rollback success
- [ ] Team notified immediately

**Testing:**
```bash
# Test rollback to previous version
gh workflow run rollback-production.yml -f version=abc123
```

**Files Created:**
- `.github/workflows/rollback-production.yml`

---

### Subtask 6.3.3: Blue-Green Deployment (Optional)
**Duration:** 1-2 hours
**Agent:** cicd-engineer
**Priority:** Low
**Dependencies:** 6.3.2

**Implementation Steps:**
1. Implement blue-green deployment pattern:
   ```yaml
     - name: Deploy to Blue Environment
       if: env.ACTIVE_ENV == 'green'
       run: |
         # Deploy to blue
         ./scripts/deploy.sh blue

     - name: Deploy to Green Environment
       if: env.ACTIVE_ENV == 'blue'
       run: |
         # Deploy to green
         ./scripts/deploy.sh green

     - name: Switch Traffic
       run: |
         # Update DNS/CDN to point to new environment
         ./scripts/switch-traffic.sh
   ```
2. Requires CDN or DNS provider with API support (e.g., Cloudflare)

**Success Criteria:**
- [ ] Zero-downtime deployments
- [ ] Traffic switched atomically
- [ ] Quick rollback by switching traffic back

**Note:** This is optional and requires additional infrastructure.

**Files Modified:**
- `.github/workflows/deploy-production.yml`

---

## Task 6.4: Monitoring & Observability (10-14 hours)

### Subtask 6.4.1: Error Tracking (Sentry)
**Duration:** 3-4 hours
**Agent:** cicd-engineer
**Priority:** High
**Dependencies:** 6.3.3

**Implementation Steps:**
1. Setup Sentry for error tracking:
   ```bash
   npm install @sentry/react @sentry/tracing
   ```
2. Configure Sentry:
   ```typescript
   // src/monitoring/sentry.ts
   import * as Sentry from '@sentry/react';
   import { BrowserTracing } from '@sentry/tracing';
   import { config } from '../config/environment';

   export function initSentry() {
       if (!config.sentryDsn) return;

       Sentry.init({
           dsn: config.sentryDsn,
           environment: import.meta.env.MODE,
           integrations: [
               new BrowserTracing(),
           ],
           tracesSampleRate: 0.1,  // Sample 10% of transactions
           beforeSend(event) {
               // Filter out non-critical errors
               if (event.level === 'info' || event.level === 'log') {
                   return null;
               }
               return event;
           },
       });
   }
   ```
3. Wrap app in Sentry error boundary:
   ```typescript
   // src/main.tsx
   import { initSentry } from './monitoring/sentry';

   initSentry();

   ReactDOM.createRoot(document.getElementById('root')!).render(
       <React.StrictMode>
           <Sentry.ErrorBoundary fallback={<ErrorFallback />}>
               <RouterProvider router={router} />
           </Sentry.ErrorBoundary>
       </React.StrictMode>
   );
   ```
4. Add Sentry release tracking to CI:
   ```yaml
   - name: Create Sentry Release
     run: |
       npm install -g @sentry/cli
       sentry-cli releases new "${{ github.sha }}"
       sentry-cli releases set-commits "${{ github.sha }}" --auto
       sentry-cli releases finalize "${{ github.sha }}"
       sentry-cli releases deploys "${{ github.sha }}" new -e production
     env:
       SENTRY_AUTH_TOKEN: ${{ secrets.SENTRY_AUTH_TOKEN }}
       SENTRY_ORG: narrativegoldmine
       SENTRY_PROJECT: knowledge-graph
   ```

**Success Criteria:**
- [ ] Errors tracked in Sentry dashboard
- [ ] Source maps uploaded for debugging
- [ ] Alerts configured for critical errors
- [ ] Release tracking enabled

**Testing:**
```typescript
// Trigger test error
throw new Error('Test Sentry integration');
```

**Files Modified:**
- `publishing-tools/WasmVOWL/modern/src/main.tsx`
- `publishing-tools/WasmVOWL/modern/src/monitoring/sentry.ts` (new)
- `.github/workflows/deploy-production.yml`

---

### Subtask 6.4.2: Analytics (Google Analytics)
**Duration:** 2-3 hours
**Agent:** cicd-engineer
**Priority:** Medium
**Dependencies:** 6.4.1

**Implementation Steps:**
1. Add Google Analytics:
   ```typescript
   // src/monitoring/analytics.ts
   import ReactGA from 'react-ga4';
   import { config } from '../config/environment';

   export function initAnalytics() {
       if (!config.analyticsId) return;

       ReactGA.initialize(config.analyticsId);
   }

   export function trackPageView(path: string) {
       ReactGA.send({ hitType: 'pageview', page: path });
   }

   export function trackEvent(category: string, action: string, label?: string) {
       ReactGA.event({
           category,
           action,
           label,
       });
   }
   ```
2. Track page views on route change:
   ```typescript
   // src/router.tsx
   import { useEffect } from 'react';
   import { useLocation } from 'react-router-dom';
   import { trackPageView } from './monitoring/analytics';

   function AnalyticsTracker() {
       const location = useLocation();

       useEffect(() => {
           trackPageView(location.pathname);
       }, [location]);

       return null;
   }
   ```
3. Track custom events:
   ```typescript
   // Track graph interactions
   trackEvent('Graph', 'Node Click', nodeId);
   trackEvent('Search', 'Query', query);
   ```

**Success Criteria:**
- [ ] Page views tracked
- [ ] Custom events tracked (search, graph clicks)
- [ ] Analytics dashboard showing traffic
- [ ] Privacy-compliant (GDPR)

**Testing:**
Check Google Analytics dashboard after deployment.

**Files Modified:**
- `publishing-tools/WasmVOWL/modern/src/monitoring/analytics.ts` (new)
- `publishing-tools/WasmVOWL/modern/src/App.tsx`

---

### Subtask 6.4.3: Performance Monitoring (Lighthouse CI)
**Duration:** 2-3 hours
**Agent:** cicd-engineer
**Priority:** Medium
**Dependencies:** 6.4.2

**Implementation Steps:**
1. Run Lighthouse CI on every deployment:
   ```yaml
     lighthouse-ci:
       needs: deploy-production
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4

         - name: Run Lighthouse CI
           run: |
             npm install -g @lhci/cli
             lhci autorun --config=lighthouserc.js

         - name: Upload Lighthouse Results
           uses: actions/upload-artifact@v3
           with:
             name: lighthouse-results
             path: .lighthouseci/

         - name: Comment PR with Lighthouse Results
           if: github.event_name == 'pull_request'
           uses: treosh/lighthouse-ci-action@v9
           with:
             uploadArtifacts: true
             temporaryPublicStorage: true
   ```
2. Configure Lighthouse CI server (optional):
   - Stores historical performance data
   - Shows trends over time

**Success Criteria:**
- [ ] Lighthouse runs on every deployment
- [ ] Performance metrics tracked over time
- [ ] Alerts on performance regressions
- [ ] PR comments show Lighthouse score

**Testing:**
```bash
lhci autorun
```

**Files Modified:**
- `.github/workflows/deploy-production.yml`
- `lighthouserc.js`

---

### Subtask 6.4.4: Uptime Monitoring
**Duration:** 2-3 hours
**Agent:** cicd-engineer
**Priority:** Low
**Dependencies:** 6.4.3

**Implementation Steps:**
1. Setup UptimeRobot or similar:
   - Monitor https://narrativegoldmine.com (5-minute intervals)
   - Monitor https://narrativegoldmine.com/ontology
   - Monitor https://narrativegoldmine.com/api/search-index.json
2. Configure alerts:
   - Email on downtime
   - Slack webhook on downtime
   - SMS for critical issues (optional)
3. Add status page (optional):
   - Public status page showing uptime
   - Incident history

**Success Criteria:**
- [ ] Uptime monitoring configured
- [ ] Alerts sent on downtime
- [ ] Status page public (optional)
- [ ] Historical uptime data available

**Testing:**
Temporarily break site and verify alerts fire.

**Files Created:**
- Documentation for uptime monitoring setup

---

### Subtask 6.4.5: Log Aggregation
**Duration:** 1-2 hours
**Agent:** cicd-engineer
**Priority:** Low
**Dependencies:** 6.4.4

**Implementation Steps:**
1. Frontend logging to Sentry (already done)
2. GitHub Actions logs available in GitHub UI
3. Optional: Setup CloudWatch or Datadog for centralized logs
4. Create log retention policy

**Success Criteria:**
- [ ] All logs accessible centrally
- [ ] Log retention policy defined (90 days)
- [ ] Search functionality for logs
- [ ] Logs exportable for compliance

**Testing:**
Query logs for specific events.

**Files Created:**
- `docs/LOGGING-POLICY.md`

---

## Coordination Protocol

### Pre-Phase
```bash
npx claude-flow@alpha hooks pre-task --description "Phase 6 CI/CD" --agent-id "cicd-engineer-001"
npx claude-flow@alpha hooks session-restore --session-id "swarm-phase6"
```

### During Phase
```bash
npx claude-flow@alpha hooks post-task --task-id "task-6.1"
npx claude-flow@alpha hooks notify --message "CI/CD pipeline complete" --to "planner,reviewer"
```

### Post-Phase
```bash
npx claude-flow@alpha hooks post-task --task-id "phase6-cicd"
npx claude-flow@alpha hooks memory-store --key "swarm/phase6/deployment-urls" --value '{"staging": "https://staging.narrativegoldmine.com", "production": "https://narrativegoldmine.com"}'
npx claude-flow@alpha hooks session-end --export-metrics true
```

---

## Handoff to Maintenance

**Deliverables:**
- [ ] Automated CI/CD pipeline
- [ ] Staging and production environments
- [ ] Monitoring and alerting
- [ ] Rollback mechanism
- [ ] Documentation complete

**Memory Keys:**
- `swarm/phase6/deployment-workflows` - List of GitHub Actions workflows
- `swarm/phase6/monitoring-tools` - Sentry, GA, Lighthouse CI setup
- `swarm/phase6/rollback-procedure` - How to rollback production

**Next Steps:**
- Monitor production for issues
- Address bugs as they arise
- Plan future enhancements

---

**Phase 6 Estimated Completion:** Week 12-13 of project
**Total Hours:** 50-66 hours (1-2 weeks with 1 full-time engineer)

---

## Final Project Timeline

- **Phase 1 (Planning)**: Week 1
- **Phase 2 (Core Parser)**: Week 2-4
- **Phase 3 (WASM Enhancement)**: Week 5-6
- **Phase 4 (React SPA)**: Week 7-9
- **Phase 5 (Testing)**: Week 10-11
- **Phase 6 (CI/CD)**: Week 12-13

**Total Duration:** 13 weeks (3 months) with 1 full-time engineer
