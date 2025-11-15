# Metrics Tracking Plan - Unified Knowledge Graph Publishing System

**Project:** Unified Knowledge Graph Publishing System
**Last Updated:** 2025-11-12
**Status:** Phase 1 (Planning)

---

## Metrics Overview

This document defines **measurable success criteria** for each phase, tracking methods, thresholds, and escalation procedures.

**Metric Categories:**
1. **Performance Metrics** - Speed, efficiency, resource usage
2. **Quality Metrics** - Code quality, test coverage, bugs
3. **Process Metrics** - Timeline, budget, team productivity
4. **Business Metrics** - User experience, availability, adoption

---

## Phase-Specific Metrics

### Phase 2: Core Parser Migration

#### P2-M1: Rust Parser Accuracy
**Description:** Percentage of identical output between Rust and Python parsers

**Measurement Method:**
```bash
# Run both parsers on 100 test pages
python3 Ontology-Tools/tools/converters/webvowl_header_only_converter.py \
  --pages-dir tests/fixtures/pages --output /tmp/python.ttl

cargo run --bin logseq-publisher -- ontology extract \
  --pages-dir tests/fixtures/pages --output /tmp/rust.ttl

# Diff TTL outputs (ignore whitespace/ordering)
diff -w <(sort /tmp/python.ttl) <(sort /tmp/rust.ttl) | wc -l
```

**Tracking Frequency:** Daily during Phase 2 (Week 2-4)

**Responsible Agent:** backend-dev

**Thresholds:**
- ✅ **Green:** <1% difference (≤10 lines out of 1,000)
- ⚠️ **Yellow:** 1-5% difference (10-50 lines)
- ❌ **Red:** >5% difference (>50 lines)

**Escalation Plan:**
- **Yellow:** Review differences, document intentional deviations
- **Red:** STOP development, investigate root cause, fix parser before proceeding

**Tracking Tool:** Git commit message with diff stats; store in `metrics/phase2-parser-accuracy.log`

---

#### P2-M2: Processing Speed (2,519 pages)
**Description:** Time to process entire Logseq corpus (2,519 markdown files)

**Measurement Method:**
```bash
time cargo run --release --bin logseq-publisher -- ontology extract \
  --pages-dir mainKnowledgeGraph/pages --output /tmp/ontology.ttl

# Extract "real" time from output
```

**Tracking Frequency:** After each major commit to parser

**Responsible Agent:** backend-dev

**Thresholds:**
- ✅ **Green:** <30 seconds (target: 20-25s)
- ⚠️ **Yellow:** 30-45 seconds
- ❌ **Red:** >45 seconds

**Escalation Plan:**
- **Yellow:** Profile with `cargo flamegraph`, optimize hot paths
- **Red:** Revisit algorithm design, consider parallel processing

**Tracking Tool:** Benchmark results stored in `benchmarks/phase2-processing-speed.txt`

**Baseline:** Python script: ~30 seconds (target: match or beat)

---

#### P2-M3: Build Time (GitHub Actions)
**Description:** Total time for GitHub Actions workflow (Rust build + ontology extraction)

**Measurement Method:** GitHub Actions workflow duration (automatic)

**Tracking Frequency:** Every push to main/staging branch

**Responsible Agent:** cicd-engineer

**Thresholds:**
- ✅ **Green:** <5 minutes
- ⚠️ **Yellow:** 5-10 minutes
- ❌ **Red:** >10 minutes

**Escalation Plan:**
- **Yellow:** Optimize caching (Cargo dependencies)
- **Red:** Use GitHub's larger runners (8-core), reduce test scope in CI

**Tracking Tool:** GitHub Actions "Actions" tab, duration visible in UI

---

### Phase 3: WASM Enhancement

#### P3-M1: WASM Bundle Size
**Description:** Size of WASM binary (webvowl_wasm_bg.wasm)

**Measurement Method:**
```bash
wasm-pack build --target web --release
ls -lh publishing-tools/WasmVOWL/rust-wasm/pkg/webvowl_wasm_bg.wasm
```

**Tracking Frequency:** After each WASM change

**Responsible Agent:** backend-dev

**Thresholds:**
- ✅ **Green:** <1.2 MB
- ⚠️ **Yellow:** 1.2-1.5 MB
- ❌ **Red:** >1.5 MB

**Escalation Plan:**
- **Yellow:** Run `wasm-opt -Oz`, review added features
- **Red:** Remove optional features (LOD, spatial hashing), use dynamic imports

**Tracking Tool:** CI check in GitHub Actions, fails if >1.5 MB

---

#### P3-M2: Force-Directed Layout Performance (Tick Time)
**Description:** Time per physics iteration (tick) with 1,000 nodes

**Measurement Method:**
```rust
// In benchmarks
let mut wasm = WebVowl::new();
wasm.loadOntology(generate_1000_nodes());

let start = Instant::now();
wasm.tick();
let duration = start.elapsed();

assert!(duration.as_millis() < 10);
```

**Tracking Frequency:** After each layout algorithm change

**Responsible Agent:** backend-dev

**Thresholds:**
- ✅ **Green:** <8ms (60fps possible)
- ⚠️ **Yellow:** 8-16ms (30fps possible)
- ❌ **Red:** >16ms (< 30fps)

**Escalation Plan:**
- **Yellow:** Optimize force calculations, use spatial hashing
- **Red:** Reduce graph complexity (max 500 nodes), implement LOD aggressively

**Tracking Tool:** Criterion benchmarks in `benchmarks/phase3-layout-performance.txt`

**Baseline:** Legacy D3.js WebVOWL: 35ms (target: 4.4x improvement = 8ms)

---

#### P3-M3: Click Detection Latency
**Description:** Time from click event to node ID returned

**Measurement Method:**
```typescript
const start = performance.now();
const nodeId = wasm.checkNodeClick([0, 0, 500], [0, 0, -1]);
const duration = performance.now() - start;
expect(duration).toBeLessThan(1);
```

**Tracking Frequency:** During development, E2E tests

**Responsible Agent:** frontend-dev

**Thresholds:**
- ✅ **Green:** <1ms
- ⚠️ **Yellow:** 1-5ms
- ❌ **Red:** >5ms

**Escalation Plan:**
- **Yellow:** Optimize ray-sphere intersection algorithm
- **Red:** Use spatial hashing for click detection, reduce node count

**Tracking Tool:** Performance tests in `tests/performance/click-detection.test.ts`

---

### Phase 4: React SPA Integration

#### P4-M1: Page Load Time (First Contentful Paint)
**Description:** Time from navigation to first content visible

**Measurement Method:** Lighthouse CI (automatic)

**Tracking Frequency:** After each deployment (staging/production)

**Responsible Agent:** frontend-dev

**Thresholds:**
- ✅ **Green:** <3 seconds
- ⚠️ **Yellow:** 3-5 seconds
- ❌ **Red:** >5 seconds

**Escalation Plan:**
- **Yellow:** Optimize bundle size, lazy load components
- **Red:** Implement SSR (Server-Side Rendering), use CDN

**Tracking Tool:** Lighthouse CI reports in GitHub Actions, stored in `.lighthouseci/`

---

#### P4-M2: Search Latency
**Description:** Time to return search results (client-side, Fuse.js)

**Measurement Method:**
```typescript
const start = performance.now();
const results = search('neural network');
const duration = performance.now() - start;
expect(duration).toBeLessThan(100);
```

**Tracking Frequency:** Performance tests (every commit)

**Responsible Agent:** frontend-dev

**Thresholds:**
- ✅ **Green:** <50ms
- ⚠️ **Yellow:** 50-100ms
- ❌ **Red:** >100ms

**Escalation Plan:**
- **Yellow:** Optimize Fuse.js config (reduce threshold, limit results)
- **Red:** Implement server-side search API, lazy load search index

**Tracking Tool:** Performance tests in `tests/performance/search-performance.test.ts`

---

#### P4-M3: Mobile FPS (Low-End Devices)
**Description:** Frames per second on mobile devices (target: 30fps)

**Measurement Method:**
```typescript
// Chrome DevTools mobile emulation + FPS meter
const fps = await measureFPS(duration: 5000);
expect(fps).toBeGreaterThanOrEqual(30);
```

**Tracking Frequency:** Manual testing on real devices (iPhone SE, Android mid-range)

**Responsible Agent:** frontend-dev

**Thresholds:**
- ✅ **Green:** ≥30fps
- ⚠️ **Yellow:** 20-30fps
- ❌ **Red:** <20fps

**Escalation Plan:**
- **Yellow:** Reduce max nodes to 100 on mobile, lower quality settings
- **Red:** Implement 2D fallback graph, recommend desktop experience

**Tracking Tool:** Manual test log in `metrics/phase4-mobile-fps.log`

---

### Phase 5: Testing & QA

#### P5-M1: Test Coverage (Combined Rust + TypeScript)
**Description:** Percentage of code covered by tests

**Measurement Method:**
```bash
# Rust coverage
cargo tarpaulin --out Html --output-dir target/tarpaulin

# TypeScript coverage
cd publishing-tools/WasmVOWL/modern
npm run test:coverage

# Combined report (manual calculation)
```

**Tracking Frequency:** After each test suite update

**Responsible Agent:** tester

**Thresholds:**
- ✅ **Green:** ≥85%
- ⚠️ **Yellow:** 80-85%
- ❌ **Red:** <80%

**Escalation Plan:**
- **Yellow:** Identify uncovered critical paths, add tests
- **Red:** BLOCK merge until coverage improves, prioritize critical paths

**Tracking Tool:** Coverage reports in `coverage/` directories, CI enforces threshold

---

#### P5-M2: Test Suite Execution Time
**Description:** Time to run entire test suite (Rust + TypeScript + E2E)

**Measurement Method:** GitHub Actions test job duration

**Tracking Frequency:** Every CI run

**Responsible Agent:** tester

**Thresholds:**
- ✅ **Green:** <10 minutes
- ⚠️ **Yellow:** 10-15 minutes
- ❌ **Red:** >15 minutes

**Escalation Plan:**
- **Yellow:** Parallelize tests, reduce E2E test count
- **Red:** Split test suite into "fast" and "slow", run slow tests nightly only

**Tracking Tool:** GitHub Actions duration

---

#### P5-M3: Bug Density (Critical + High Severity)
**Description:** Number of P0 + P1 bugs found per 100 lines of new code

**Measurement Method:**
```bash
# Count P0/P1 bugs in GitHub Issues
gh issue list --label "bug" --label "P0" --state open
gh issue list --label "bug" --label "P1" --state open

# New lines of code (git diff)
git diff main --shortstat
```

**Tracking Frequency:** Weekly during Phase 5

**Responsible Agent:** reviewer

**Thresholds:**
- ✅ **Green:** <1 bug per 500 LOC
- ⚠️ **Yellow:** 1-3 bugs per 500 LOC
- ❌ **Red:** >3 bugs per 500 LOC

**Escalation Plan:**
- **Yellow:** Increase code review thoroughness, add more unit tests
- **Red:** Pause feature development, focus on bug fixes, conduct root cause analysis

**Tracking Tool:** GitHub Issues, filtered by label and state

---

### Phase 6: CI/CD & Deployment

#### P6-M1: Deployment Frequency
**Description:** Number of successful deployments per week

**Measurement Method:** Count GitHub Actions runs that deploy to production

**Tracking Frequency:** Weekly

**Responsible Agent:** cicd-engineer

**Thresholds:**
- ✅ **Green:** ≥2 deployments/week (allows rapid iteration)
- ⚠️ **Yellow:** 1 deployment/week
- ❌ **Red:** <1 deployment/week (blocked pipeline)

**Escalation Plan:**
- **Yellow:** Investigate deployment blockers (long tests, manual approval delays)
- **Red:** Streamline approval process, automate more checks

**Tracking Tool:** GitHub Actions history, manual count

---

#### P6-M2: Mean Time to Recovery (MTTR)
**Description:** Average time from production issue detected to fix deployed

**Measurement Method:**
```
MTTR = (Issue Detected Time - Fix Deployed Time) / Number of Incidents
```

**Tracking Frequency:** Per incident (ongoing)

**Responsible Agent:** cicd-engineer

**Thresholds:**
- ✅ **Green:** <2 hours (P0), <1 day (P1)
- ⚠️ **Yellow:** 2-4 hours (P0), 1-3 days (P1)
- ❌ **Red:** >4 hours (P0), >3 days (P1)

**Escalation Plan:**
- **Yellow:** Improve monitoring/alerting, streamline hotfix process
- **Red:** Implement rollback mechanism (tested), keep backup engineer on-call

**Tracking Tool:** Incident log in `docs/INCIDENTS.md`, timestamp start/end

---

#### P6-M3: Uptime (Production Availability)
**Description:** Percentage of time production site is accessible

**Measurement Method:** UptimeRobot or similar service (5-minute checks)

**Tracking Frequency:** Continuous (real-time monitoring)

**Responsible Agent:** cicd-engineer

**Thresholds:**
- ✅ **Green:** ≥99.9% (43 minutes downtime/month)
- ⚠️ **Yellow:** 99-99.9% (7-43 minutes downtime/month)
- ❌ **Red:** <99% (>7 hours downtime/month)

**Escalation Plan:**
- **Yellow:** Investigate root cause, improve monitoring
- **Red:** Implement redundancy (multi-region), use CDN, fix infrastructure issues

**Tracking Tool:** UptimeRobot dashboard, alerts via Slack/email

---

## Business Metrics (Post-Launch)

### BM-1: Lighthouse Performance Score
**Description:** Google Lighthouse performance score (0-100)

**Measurement Method:** Lighthouse CI (automatic)

**Tracking Frequency:** Every deployment

**Responsible Agent:** frontend-dev

**Thresholds:**
- ✅ **Green:** ≥80
- ⚠️ **Yellow:** 70-80
- ❌ **Red:** <70

**Escalation:** Optimize bundle size, lazy loading, image optimization

**Tracking Tool:** Lighthouse CI reports

---

### BM-2: Core Web Vitals
**Description:** LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift)

**Measurement Method:** Lighthouse CI + Google Search Console (post-launch)

**Tracking Frequency:** Weekly (post-launch)

**Responsible Agent:** frontend-dev

**Thresholds:**
- ✅ **Green:** LCP <2.5s, FID <100ms, CLS <0.1
- ⚠️ **Yellow:** LCP 2.5-4s, FID 100-300ms, CLS 0.1-0.25
- ❌ **Red:** LCP >4s, FID >300ms, CLS >0.25

**Escalation:** Optimize images, reduce JavaScript execution time, fix layout shifts

**Tracking Tool:** Google Search Console, Lighthouse CI

---

### BM-3: Error Rate (Sentry)
**Description:** Number of errors per 1,000 user sessions

**Measurement Method:** Sentry error tracking (automatic)

**Tracking Frequency:** Daily (post-launch)

**Responsible Agent:** reviewer

**Thresholds:**
- ✅ **Green:** <5 errors per 1,000 sessions
- ⚠️ **Yellow:** 5-20 errors per 1,000 sessions
- ❌ **Red:** >20 errors per 1,000 sessions

**Escalation:** Investigate top errors, fix high-frequency issues, improve error handling

**Tracking Tool:** Sentry dashboard, alerts configured

---

## Metrics Dashboard

### Recommended Tracking Tools

| Metric Category | Tool | Purpose | Cost |
|-----------------|------|---------|------|
| **Performance** | Lighthouse CI | Page load, Core Web Vitals | Free |
| **Code Quality** | cargo tarpaulin, Jest | Test coverage | Free |
| **CI/CD** | GitHub Actions | Build time, deployment frequency | Free (included) |
| **Error Tracking** | Sentry | Runtime errors, stack traces | Free tier (5k events/month) |
| **Analytics** | Google Analytics | User behavior, traffic | Free |
| **Uptime** | UptimeRobot | Availability monitoring | Free tier (50 monitors) |
| **APM** | Datadog (optional) | Application performance monitoring | Paid ($15/host/month) |

### Metrics Dashboard Layout (Suggested)

**Location:** GitHub Wiki or dedicated dashboard

**Sections:**
1. **Phase Progress** (timeline, milestones)
2. **Performance Metrics** (charts: build time, WASM size, FPS)
3. **Quality Metrics** (charts: test coverage, bug density)
4. **Business Metrics** (charts: Lighthouse score, error rate, uptime)

**Update Frequency:** Daily during development, weekly post-launch

---

## Metrics Review Cadence

### Daily Review (During Active Development)
**Owner:** Current phase lead agent
**Duration:** 15 minutes

**Checklist:**
- [ ] Review performance metrics (build time, test execution time)
- [ ] Check quality metrics (test coverage, failing tests)
- [ ] Address any red-threshold violations immediately

### Weekly Review (Fridays)
**Owner:** Planner agent
**Duration:** 30 minutes

**Checklist:**
- [ ] Review all metrics across phases
- [ ] Update risk matrix based on metric trends
- [ ] Communicate status to stakeholders (green/yellow/red)
- [ ] Adjust resource allocation if needed

### Phase-End Review
**Owner:** Reviewer agent
**Duration:** 1 hour

**Checklist:**
- [ ] Compile phase metrics report
- [ ] Identify trends (improving/degrading)
- [ ] Document lessons learned
- [ ] Set baseline metrics for next phase

---

## Escalation Procedures

### Red Threshold Breach

**Trigger:** Any metric enters red threshold

**Process:**
1. **Immediate Notification:**
   ```bash
   npx claude-flow@alpha hooks notify --message "CRITICAL: Metric [name] breached red threshold" --to "all"
   ```
2. **Create GitHub Issue:**
   - Label: `critical`, `metrics-violation`
   - Assign to responsible agent
   - Set due date: 24 hours for P0, 3 days for P1

3. **Daily Stand-up:**
   - Discuss mitigation progress
   - Adjust plan if needed

4. **Resolution:**
   - Fix root cause
   - Re-measure metric
   - Document resolution in issue

### Yellow Threshold Breach

**Trigger:** Any metric enters yellow threshold for >3 days

**Process:**
1. **Notify Team:**
   ```bash
   npx claude-flow@alpha hooks notify --message "WARNING: Metric [name] in yellow zone" --to "planner,responsible-agent"
   ```
2. **Create GitHub Issue:**
   - Label: `warning`, `metrics-attention`
   - Assign to responsible agent
   - Set due date: 7 days

3. **Monitor:**
   - Track daily
   - Escalate to red procedure if worsening

---

## Metrics Report Template

### Weekly Metrics Report (Example)

**Week:** [Week Number]
**Date:** [YYYY-MM-DD]
**Phase:** [Phase Number]

#### Performance Metrics
| Metric | Current | Target | Status | Trend |
|--------|---------|--------|--------|-------|
| Build Time | 4.5 min | <5 min | ✅ Green | ⬇️ Improving |
| WASM Size | 1.3 MB | <1.5 MB | ✅ Green | ➡️ Stable |
| FPS (1000 nodes) | 62 fps | ≥60 fps | ✅ Green | ⬆️ Improving |

#### Quality Metrics
| Metric | Current | Target | Status | Trend |
|--------|---------|--------|--------|-------|
| Test Coverage | 87% | ≥85% | ✅ Green | ⬆️ Improving |
| Bug Density | 2 bugs/500 LOC | <1/500 | ⚠️ Yellow | ⬆️ Worsening |

#### Action Items
1. **Bug Density (Yellow):** Increase code review thoroughness, add more unit tests
2. **Build Time:** Continue optimizing Cargo caching

#### Blockers
- None

---

## Document Metadata

**Version:** 1.0
**Last Updated:** 2025-11-12 (Phase 1)
**Owner:** Planner agent
**Next Review:** 2025-11-18 (Phase 1 end)
**Status:** Approved
