# Risk Matrix - Unified Knowledge Graph Publishing System

**Project:** Unified Knowledge Graph Publishing System
**Last Updated:** 2025-11-12
**Status:** Phase 1 (Planning)

---

## Risk Assessment Framework

**Probability Ratings:**
- **High (H)**: 60-100% chance
- **Medium (M)**: 30-60% chance
- **Low (L)**: 0-30% chance

**Impact Severity (1-5):**
- **5 (Critical)**: Project failure, >2 week delay
- **4 (High)**: Major feature loss, 1-2 week delay
- **3 (Medium)**: Minor feature loss, 3-7 day delay
- **2 (Low)**: Workaround available, 1-2 day delay
- **1 (Minimal)**: No significant impact

**Risk Score:** Probability × Impact (1-15 scale)
- **12-15**: Critical (immediate action)
- **8-11**: High (prioritize mitigation)
- **4-7**: Medium (monitor closely)
- **1-3**: Low (accept)

---

## Risk Matrix Table

| Risk ID | Category | Risk Description | Probability | Impact | Score | Mitigation Strategy | Contingency Plan | Owner | Status |
|---------|----------|-----------------|-------------|--------|-------|-------------------|------------------|-------|--------|
| **R-001** | Technical | Rust parser output doesn't match Python baseline exactly | **M (40%)** | **4** | **10** | Create comprehensive diff tests on 100+ sample pages; validate against Python output continuously | Keep Python script as validation baseline until Rust is proven; allow minor differences if semantically equivalent | backend-dev | Open |
| **R-002** | Technical | WASM bundle size exceeds 1.5MB limit | **M (35%)** | **3** | **7** | Add CI check to fail if WASM >1.5MB; use wasm-opt for optimization; profile binary size regularly | Remove optional features (LOD, spatial hashing) if needed; use dynamic imports for less-critical features | frontend-dev | Open |
| **R-003** | Technical | Performance regression vs Python (>30s for 2,519 pages) | **L (20%)** | **4** | **5** | Benchmark Rust vs Python on full corpus; optimize hot paths with profiling (flamegraph); use parallel processing | Accept slightly slower performance if <60s; optimize incrementally post-launch | backend-dev | Open |
| **R-004** | Technical | napi-rs binary compatibility issues across platforms (Linux/macOS/Windows) | **M (45%)** | **4** | **11** | Use GitHub Actions matrix to test Linux, macOS, Windows; provide prebuilt binaries for all platforms | Provide fallback to Python script if napi-rs fails on specific platform; document manual build process | backend-dev | Open |
| **R-005** | Technical | Click detection doesn't work with camera rotation | **L (25%)** | **3** | **5** | Test at multiple camera angles; use Three.js raycaster as fallback; validate ray-sphere math extensively | Implement pure JavaScript raycasting if WASM version fails; reduce to 2D fallback graph | frontend-dev | Open |
| **R-006** | Technical | Mobile performance <30fps on low-end devices | **H (70%)** | **3** | **13** | Reduce graph complexity on mobile (max 200 nodes); lower FPS target to 30; disable expensive effects; lazy-load heavy components | Provide fallback 2D graph for mobile; add "performance mode" toggle; suggest desktop experience | frontend-dev | Open |
| **R-007** | Technical | Search index too large (>5MB uncompressed) | **M (40%)** | **3** | **8** | Implement compression (gzip/brotli); remove stopwords; use stemming; prune low-value content | Server-side search API (requires backend infrastructure); implement lazy loading of search index; reduce index fields | frontend-dev | Open |
| **R-008** | Technical | GitHub Actions build time exceeds 15 minutes | **M (50%)** | **2** | **6** | Optimize caching (Cargo, npm, Cypress); parallelize test jobs; use GitHub's larger runners | Accept longer build time; run tests in parallel; skip non-critical tests in CI | cicd-engineer | Open |
| **R-009** | Technical | WASM fails to load in Safari | **L (15%)** | **3** | **3** | Test WASM on Safari early; ensure .nojekyll file exists; check MIME type configuration; use fallback | Detect Safari and show message to use Chrome/Firefox; provide non-WASM fallback; document Safari limitations | frontend-dev | Open |
| **R-010** | Resource | Key developer unavailable for >1 week | **M (30%)** | **4** | **8** | Cross-train team members; document all decisions in memory keys; pair programming on critical tasks | Reassign tasks to other agents; delay non-critical features; bring in backup developer | planner | Open |
| **R-011** | Timeline | Phase 2 takes longer than 3 weeks (Rust migration complex) | **M (40%)** | **4** | **10** | Break Phase 2 into smaller milestones; track progress daily; identify blockers early; use TDD to catch issues fast | Extend Phase 2 timeline by 1 week; compress Phase 3/4; deprioritize nice-to-have features | planner | Open |
| **R-012** | Timeline | Testing phase uncovers critical bugs requiring re-architecture | **L (20%)** | **5** | **6** | Start testing early (unit tests in each phase); conduct code reviews; follow TDD methodology | Allocate 2-week buffer for fixes; prioritize P0 bugs; defer P2 bugs to post-launch | tester | Open |
| **R-013** | External | GitHub Pages deployment fails or has downtime | **L (10%)** | **4** | **3** | Monitor GitHub Status page; have rollback procedure ready; test deployments in staging first | Deploy to alternative hosting (Vercel, Netlify); maintain backup deployment scripts; communicate downtime to users | cicd-engineer | Open |
| **R-014** | External | npm registry downtime blocks deployments | **L (5%)** | **2** | **1** | Cache dependencies in CI; use private npm registry mirror; vendor critical dependencies | Wait for npm to recover; use cached dependencies; publish WASM package to GitHub Packages as backup | cicd-engineer | Open |
| **R-015** | Technical | Routing conflicts with GitHub Pages (SPA routing issues) | **M (35%)** | **3** | **7** | Use HashRouter instead of BrowserRouter; test early; configure GitHub Pages for SPA routing (fallback to index.html) | Use hash-based routing (#/page/...) instead of path-based; document routing limitations | frontend-dev | Open |
| **R-016** | Security | Dependency vulnerabilities in Rust or npm packages | **M (40%)** | **3** | **8** | Run cargo audit and npm audit in CI; use Snyk for scanning; keep dependencies updated; subscribe to security advisories | Patch vulnerabilities immediately; find alternative packages if needed; accept risk for low-severity issues | cicd-engineer | Open |
| **R-017** | Technical | WebVOWL JSON format incompatible with existing ontology data | **L (15%)** | **4** | **4** | Validate JSON format against WebVOWL spec early; test with real ontology data (1,155 classes); compare against Python output | Extend WebVOWL JSON format with custom fields; document deviations; ensure backward compatibility | backend-dev | Open |
| **R-018** | Technical | Memory leaks in React Three Fiber graph (long sessions) | **L (25%)** | **3** | **5** | Profile memory usage with Chrome DevTools; cleanup Three.js objects in useEffect; use React Profiler | Add "Reload Graph" button; document memory limitations; suggest page refresh after extended use | frontend-dev | Open |
| **R-019** | Technical | Test coverage falls below 85% threshold | **L (20%)** | **2** | **3** | Track coverage in CI; block PRs below threshold; incentivize test writing; prioritize critical paths | Lower threshold to 80% temporarily; focus on critical path coverage; add tests incrementally | tester | Open |
| **R-020** | Timeline | Phase 4 (React SPA) takes longer than 3 weeks due to complexity | **M (45%)** | **4** | **11** | Break Phase 4 into weekly milestones; start with MVP routing; defer advanced features (mini-graph) if needed | Extend Phase 4 by 1 week; compress Phase 5 testing; launch with reduced feature set | planner | Open |

---

## Critical Risks (Score ≥ 12)

### R-006: Mobile Performance <30fps
**Priority:** **CRITICAL**
**Current Score:** 13 (High probability × Medium impact)

**Detailed Analysis:**
- Mobile devices have limited GPU/CPU vs desktop
- Force-directed layout is computationally expensive
- 1,000+ nodes may overwhelm low-end devices
- Current WebVOWL renders 500 nodes max at 60fps

**Enhanced Mitigation:**
1. **Immediate Actions (Phase 3):**
   - Implement device detection (mobile vs desktop)
   - Reduce max nodes to 200 on mobile
   - Lower target FPS to 30 for mobile
   - Disable shadows, anti-aliasing on mobile
   - Use simpler node geometries (circles instead of spheres)

2. **Progressive Enhancements (Phase 4):**
   - Add "Performance Mode" toggle in UI
   - Implement level-of-detail (LOD) aggressively
   - Lazy-load graph in chunks (50 nodes at a time)
   - Show loading spinner during simulation

3. **Testing:**
   - Test on real devices (iPhone SE, Android mid-range)
   - Use Chrome DevTools mobile emulation
   - Profile with Lighthouse mobile scores
   - Benchmark FPS on target devices

**Contingency Plan:**
- **Option A:** Provide 2D fallback graph (force-directed in 2D, Canvas 2D API)
- **Option B:** Server-side graph layout (precompute positions, send JSON)
- **Option C:** Recommend desktop experience with banner on mobile
- **Option D:** Static graph image with clickable hotspots (degraded experience)

**Decision Point:** Phase 4, Week 1 - If mobile FPS <20 after optimizations, implement Option A (2D fallback)

---

## High Priority Risks (Score 8-11)

### R-001: Rust Parser Mismatch with Python
**Score:** 10
**Action Required:** Phase 2, Week 1

**Mitigation Steps:**
1. Create test suite with 100 diverse pages
2. Run Python and Rust parsers on same input
3. Diff TTL outputs line-by-line
4. Allow minor differences (whitespace, ordering) if semantically equivalent
5. Fix discrepancies in Rust parser
6. Document any intentional deviations

**Success Criteria:** <1% difference in output (excluding whitespace/ordering)

---

### R-004: napi-rs Platform Compatibility
**Score:** 11
**Action Required:** Phase 2, Week 3

**Mitigation Steps:**
1. Setup GitHub Actions matrix: [ubuntu-latest, macos-latest, windows-latest]
2. Test napi-rs build on all platforms
3. Provide prebuilt binaries for each platform
4. Document manual build process
5. Test installation from npm on all platforms

**Success Criteria:** npm install succeeds on Linux, macOS, Windows

---

### R-011: Phase 2 Timeline Overrun
**Score:** 10
**Action Required:** Phase 2, Week 1

**Mitigation Steps:**
1. Break Phase 2 into weekly milestones:
   - Week 1: OWL extractor module
   - Week 2: Parser integration + CLI
   - Week 3: napi-rs bindings
2. Daily stand-ups to track progress
3. Identify blockers immediately
4. Adjust scope if falling behind

**Contingency:** If Week 2 ends with OWL extractor incomplete, extend Phase 2 by 1 week and compress Phase 3

---

### R-020: Phase 4 Timeline Overrun
**Score:** 11
**Action Required:** Phase 4, Week 1

**Mitigation Steps:**
1. Start with MVP: Basic routing + PageRenderer
2. Defer advanced features to Phase 4.5 (post-testing):
   - Mini-graph component
   - Context menus
   - Advanced search filters
3. Weekly checkpoints to reassess scope

**Contingency:** Launch without mini-graph if needed; add in v1.1 release

---

## Medium Priority Risks (Score 4-7)

### R-007: Search Index Size
**Score:** 8
**Status:** Monitor in Phase 4

**Action:** Implement compression and stemming; monitor index size during development

---

### R-008: CI Build Time
**Score:** 6
**Status:** Optimize in Phase 6

**Action:** Implement aggressive caching; parallelize tests; consider GitHub's larger runners

---

### R-015: SPA Routing on GitHub Pages
**Score:** 7
**Status:** Test in Phase 4, Week 1

**Action:** Test routing early; use HashRouter if BrowserRouter fails

---

### R-016: Security Vulnerabilities
**Score:** 8
**Status:** Ongoing monitoring

**Action:** Run security scans in CI; keep dependencies updated

---

## Low Priority Risks (Score 1-3)

- **R-009:** WASM fails in Safari (Score: 3) - Test early, provide fallback
- **R-013:** GitHub Pages downtime (Score: 3) - Have backup hosting ready
- **R-014:** npm downtime (Score: 1) - Cache dependencies
- **R-019:** Test coverage below threshold (Score: 3) - Monitor in CI

**Status:** Accept these risks; monitor but don't proactively mitigate

---

## Risk Tracking Process

### Weekly Risk Review (Every Monday)
**Owner:** Planner agent

**Agenda:**
1. Review all "Open" risks
2. Update probability/impact based on progress
3. Escalate new critical risks
4. Close mitigated risks
5. Add new risks identified during week

**Output:** Updated risk matrix committed to repository

### Risk Escalation Protocol

**Trigger:** Risk score increases above 12

**Process:**
1. Planner notifies all agents via hooks:
   ```bash
   npx claude-flow@alpha hooks notify --message "CRITICAL RISK: R-XXX escalated" --to "all"
   ```
2. Schedule immediate mitigation planning session
3. Reassess project timeline/scope
4. Document decision and communicate to stakeholders

### Risk Closure Criteria

A risk can be marked **"Closed"** when:
1. Mitigation strategy fully implemented
2. Contingency plan documented and tested
3. Risk probability reduced to <10% or impact to <2
4. No recurrence observed for 2 weeks

---

## Risk Dependencies

### Phase Dependencies

**Phase 2 Risks:**
- R-001 (Parser mismatch)
- R-003 (Performance regression)
- R-004 (napi-rs compatibility)
- R-011 (Timeline overrun)

**Phase 3 Risks:**
- R-002 (WASM bundle size)
- R-005 (Click detection)
- R-006 (Mobile performance)

**Phase 4 Risks:**
- R-007 (Search index size)
- R-015 (Routing conflicts)
- R-018 (Memory leaks)
- R-020 (Timeline overrun)

**Phase 5 Risks:**
- R-012 (Critical bugs found)
- R-019 (Test coverage)

**Phase 6 Risks:**
- R-008 (CI build time)
- R-013 (GitHub Pages downtime)
- R-014 (npm downtime)
- R-016 (Security vulnerabilities)

---

## Risk Mitigation Budget

**Time Buffer:** 2 weeks allocated across all phases (15% of 13-week timeline)

**Allocation by Phase:**
- Phase 2: 3 days (Rust migration complexity)
- Phase 3: 2 days (WASM optimization)
- Phase 4: 4 days (React SPA complexity)
- Phase 5: 2 days (Bug fixing)
- Phase 6: 3 days (Deployment issues)

**Resource Buffer:** 10% of total hours (30 hours) for risk mitigation

---

## Risk Communication

### Stakeholder Updates

**Frequency:** Weekly (every Friday)

**Format:**
- **Green:** All risks score <8, project on track
- **Yellow:** 1+ risks score 8-11, mitigation in progress
- **Red:** 1+ risks score ≥12, immediate action required

### Documentation

**Location:** `/home/user/logseq/docs/planning/RISK-MATRIX.md`

**Updates:** After every phase completion and weekly review

---

## Historical Risk Events (Post-Launch)

_This section will be populated as risks materialize and are resolved._

| Risk ID | Materialized Date | Resolution | Lessons Learned |
|---------|------------------|------------|-----------------|
| - | - | - | - |

---

**Risk Matrix Version:** 1.0
**Last Reviewed:** 2025-11-12 (Phase 1)
**Next Review:** 2025-11-19 (Phase 2, Week 1)
