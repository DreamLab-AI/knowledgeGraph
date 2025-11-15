# Resource Allocation Matrix - Unified Knowledge Graph Publishing System

**Project:** Unified Knowledge Graph Publishing System
**Duration:** 13 weeks (3 months)
**Last Updated:** 2025-11-12

---

## Executive Summary

**Total Estimated Hours:** 360-480 hours
**Full-Time Equivalent:** 1.0 FTE (assuming 40-hour weeks)
**Project Duration:** 13 weeks with buffer
**Resource Utilization:** 70-90% (accounting for meetings, overhead)

---

## Resource Allocation by Phase

| Phase | Duration | Hours | Primary Agents | Support Agents | Key Activities |
|-------|----------|-------|----------------|----------------|----------------|
| **Phase 1** | 1 week | 20-30h | planner, researcher | architect | Planning, task breakdown, risk analysis |
| **Phase 2** | 2-3 weeks | 80-120h | backend-dev, code-analyzer | tester | Rust OWL extractor, parser, CLI, napi-rs |
| **Phase 3** | 1-2 weeks | 40-80h | frontend-dev, backend-dev | reviewer | WASM enhancement, click events, npm package |
| **Phase 4** | 2-3 weeks | 80-120h | frontend-dev, coder | reviewer | React SPA, routing, PageRenderer, search |
| **Phase 5** | 2 weeks | 80h | tester, reviewer | backend-dev, frontend-dev | Unit tests, integration tests, E2E, benchmarks |
| **Phase 6** | 1-2 weeks | 50-80h | cicd-engineer, reviewer | tester | CI/CD, staging, production, monitoring |
| **TOTAL** | **13 weeks** | **350-510h** | - | - | - |

---

## Agent Workload Distribution

### Phase 1: Planning (Week 1)

| Agent | Role | Hours | Key Tasks | Concurrent Work |
|-------|------|-------|-----------|-----------------|
| **planner** | Lead | 15h | Task breakdowns, timeline, risk matrix | None (focus) |
| **researcher** | Support | 8h | Research Rust libs, benchmark tools | None |
| **architect** | Support | 5h | Review architecture, validate approach | Concurrent with planner |
| **TOTAL** | - | **28h** | - | - |

**Concurrency:** Planner and architect can work in parallel. Researcher feeds into planner's work.

**Dependencies:** None (project kickoff)

---

### Phase 2: Core Parser Migration (Weeks 2-4)

| Agent | Role | Hours (Range) | Key Tasks | Peak Load Week |
|-------|------|---------------|-----------|----------------|
| **backend-dev** | Lead | 60-80h | OWL extractor, CLI, napi-rs, integration | Week 3 (30h) |
| **code-analyzer** | Support | 15-25h | Parser integration, backward compatibility | Week 2 (15h) |
| **tester** | Support | 10-15h | Unit tests, benchmark creation | Week 4 (10h) |
| **TOTAL** | - | **85-120h** | - | - |

**Concurrency:**
- **Week 2:** Backend-dev (OWL extractor) + code-analyzer (parser review) = parallel
- **Week 3:** Backend-dev (CLI) + tester (unit tests) = parallel
- **Week 4:** Backend-dev (napi-rs) + code-analyzer (integration) = sequential

**Sequential Dependencies:**
1. OWL extractor must complete before parser integration
2. Parser integration must complete before CLI
3. CLI must complete before napi-rs

**Resource Conflicts:** None (agents not double-booked)

---

### Phase 3: WASM Enhancement (Weeks 5-6)

| Agent | Role | Hours (Range) | Key Tasks | Peak Load Week |
|-------|------|---------------|-----------|----------------|
| **backend-dev** | Co-lead (Rust) | 20-30h | Ontology metadata in WASM, ray-sphere intersection | Week 5 (20h) |
| **frontend-dev** | Co-lead (React) | 25-35h | React Three Fiber integration, click handlers, npm | Week 6 (25h) |
| **reviewer** | Support | 5-10h | Code review, performance validation | Week 6 (8h) |
| **TOTAL** | - | **50-75h** | - | - |

**Concurrency:**
- **Week 5:** Backend-dev (WASM enhancements) happens first (sequential)
- **Week 6:** Frontend-dev (React integration) happens after WASM ready (sequential)
- Reviewer can review in parallel during Week 6

**Sequential Dependencies:**
1. WASM ontology support must complete before React integration
2. Click detection in WASM must complete before React handlers
3. npm package publish blocks frontend package update

**Load Balancing:** Backend-dev transitions from Phase 2 → Phase 3; frontend-dev ramps up in Phase 3

---

### Phase 4: React SPA Integration (Weeks 7-9)

| Agent | Role | Hours (Range) | Key Tasks | Peak Load Week |
|-------|------|---------------|-----------|----------------|
| **frontend-dev** | Lead | 50-70h | Routing, PageRenderer, graph navigation, search UI | Week 8 (30h) |
| **coder** | Co-lead | 25-35h | Markdown renderer, API services, data fetching | Week 7 (20h) |
| **reviewer** | Support | 10-15h | Code review, UX feedback | Week 9 (10h) |
| **TOTAL** | - | **85-120h** | - | - |

**Concurrency:**
- **Week 7:** Frontend-dev (routing) + coder (markdown renderer) = parallel
- **Week 8:** Frontend-dev (graph navigation) + coder (API services) = parallel
- **Week 9:** Frontend-dev (mobile responsive) + reviewer (final review) = parallel

**Sequential Dependencies:**
1. Routing must complete before PageRenderer
2. API services must complete before data fetching
3. Base components must complete before mobile optimization

**Resource Conflicts:** None (frontend-dev and coder have distinct work streams)

---

### Phase 5: Testing & QA (Weeks 10-11)

| Agent | Role | Hours (Range) | Key Tasks | Peak Load Week |
|-------|------|---------------|-----------|----------------|
| **tester** | Lead | 50-65h | Unit tests, integration tests, E2E, performance | Week 10 (35h) |
| **reviewer** | Co-lead | 20-25h | Code review, quality gates, documentation | Week 11 (15h) |
| **backend-dev** | Support | 5-10h | Fix Rust bugs, optimize performance | Week 11 (8h) |
| **frontend-dev** | Support | 5-10h | Fix React bugs, optimize rendering | Week 11 (8h) |
| **TOTAL** | - | **80-110h** | - | - |

**Concurrency:**
- **Week 10:** Tester writes tests in parallel (Rust unit + TypeScript unit + integration)
- **Week 11:** Tester (E2E tests) + reviewer (quality review) + devs (bug fixes) = parallel

**Sequential Dependencies:**
1. Unit tests must pass before integration tests
2. Integration tests must pass before E2E tests
3. E2E tests must pass before performance benchmarks

**Load Balancing:** Backend-dev and frontend-dev are on-call for bug fixes only (low load)

---

### Phase 6: CI/CD & Deployment (Weeks 12-13)

| Agent | Role | Hours (Range) | Key Tasks | Peak Load Week |
|-------|------|---------------|-----------|----------------|
| **cicd-engineer** | Lead | 35-50h | GitHub Actions, staging, production, monitoring | Week 12 (30h) |
| **reviewer** | Co-lead | 10-15h | Final review, deployment validation | Week 13 (10h) |
| **tester** | Support | 5-10h | E2E tests on staging/production | Week 13 (8h) |
| **TOTAL** | - | **50-75h** | - | - |

**Concurrency:**
- **Week 12:** CI/CD engineer (workflows) + tester (staging tests) = parallel
- **Week 13:** CI/CD engineer (monitoring) + reviewer (final sign-off) = parallel

**Sequential Dependencies:**
1. Staging environment must deploy before production
2. E2E tests on staging must pass before production
3. Monitoring setup must complete before final sign-off

**Resource Conflicts:** None (cicd-engineer has sole focus in Phase 6)

---

## Agent Availability & Load Balancing

### Agent Hours by Phase

| Agent | P1 | P2 | P3 | P4 | P5 | P6 | Total Hours | Peak Week |
|-------|----|----|----|----|----|----|-------------|-----------|
| **planner** | 15h | - | - | - | - | - | **15h** | W1 (15h) |
| **researcher** | 8h | - | - | - | - | - | **8h** | W1 (8h) |
| **architect** | 5h | - | - | - | - | - | **5h** | W1 (5h) |
| **backend-dev** | - | 60-80h | 20-30h | - | 5-10h | - | **85-120h** | W3 (30h) |
| **code-analyzer** | - | 15-25h | - | - | - | - | **15-25h** | W2 (15h) |
| **frontend-dev** | - | - | 25-35h | 50-70h | 5-10h | - | **80-115h** | W8 (30h) |
| **coder** | - | - | - | 25-35h | - | - | **25-35h** | W7 (20h) |
| **tester** | - | 10-15h | - | - | 50-65h | 5-10h | **65-90h** | W10 (35h) |
| **reviewer** | - | - | 5-10h | 10-15h | 20-25h | 10-15h | **45-65h** | W11 (15h) |
| **cicd-engineer** | - | - | - | - | - | 35-50h | **35-50h** | W12 (30h) |
| **TOTAL** | **28h** | **85-120h** | **50-75h** | **85-120h** | **80-110h** | **50-75h** | **378-528h** | - |

### Weekly Resource Utilization

| Week | Phase | Primary Agents | Hours/Week | % Utilization (40h week) | Notes |
|------|-------|----------------|------------|-------------------------|--------|
| W1 | P1 | planner, researcher, architect | 28h | 70% | Planning activities |
| W2 | P2 | backend-dev, code-analyzer | 35h | 88% | OWL extractor |
| W3 | P2 | backend-dev, tester | 40h | 100% | Peak load (CLI + tests) |
| W4 | P2 | backend-dev, code-analyzer | 30h | 75% | napi-rs integration |
| W5 | P3 | backend-dev | 20h | 50% | WASM enhancements |
| W6 | P3 | frontend-dev, reviewer | 33h | 83% | React integration |
| W7 | P4 | frontend-dev, coder | 40h | 100% | Peak load (routing + markdown) |
| W8 | P4 | frontend-dev, coder | 35h | 88% | Graph navigation |
| W9 | P4 | frontend-dev, reviewer | 25h | 63% | Mobile responsive |
| W10 | P5 | tester | 35h | 88% | Unit + integration tests |
| W11 | P5 | tester, reviewer, devs | 31h | 78% | E2E + bug fixes |
| W12 | P6 | cicd-engineer, tester | 38h | 95% | Peak load (CI/CD setup) |
| W13 | P6 | cicd-engineer, reviewer | 18h | 45% | Monitoring + final review |
| **TOTAL** | - | - | **408h** | **77% avg** | - |

**Key Insights:**
- Peak utilization weeks: W3, W7, W12 (100-100%)
- Low utilization weeks: W5, W9, W13 (45-63%)
- Average utilization: 77% (healthy, allows for meetings/overhead)

---

## Resource Bottlenecks & Mitigation

### Bottleneck 1: Backend-dev Overload (Phases 2-3)
**Issue:** Backend-dev is critical path for 4-5 weeks straight
**Risk:** Burnout, delays if blocked

**Mitigation:**
1. Pair backend-dev with code-analyzer in Phase 2 for reviews
2. Tester can handle benchmark creation in parallel
3. Frontend-dev can start React Three Fiber exploration in Phase 3
4. Buffer time allocated in Week 4 for catch-up

**Contingency:** Bring in backup Rust developer for Phase 2 if falling behind

---

### Bottleneck 2: Frontend-dev Peak Load (Phase 4)
**Issue:** Frontend-dev has 50-70h of work in 3 weeks (peak: 30h/week)
**Risk:** Delays in React SPA, reduced code quality

**Mitigation:**
1. Coder handles markdown rendering in parallel (25-35h)
2. Reviewer provides early feedback to avoid rework
3. Start with MVP routing, defer advanced features
4. Allocate buffer time in Week 9 for polish

**Contingency:** Extend Phase 4 by 1 week; compress Phase 5 testing

---

### Bottleneck 3: Tester Single Point of Failure (Phase 5)
**Issue:** Tester is sole owner of 80-110h of testing work
**Risk:** Test coverage gaps, delays if tester unavailable

**Mitigation:**
1. Backend-dev and frontend-dev write unit tests during development (Phase 2-4)
2. Reviewer assists with integration test design
3. Use automated test generation where possible
4. Prioritize critical path testing (Rust parser, React components)

**Contingency:** Developers write additional tests if tester falls behind; accept lower coverage threshold (80%)

---

## Agent Handoff Points

### Phase 1 → Phase 2
**Handoff:** Planner → Backend-dev
**Artifacts:**
- PHASE-2-TASKS.md (detailed task breakdown)
- RISK-MATRIX.md (mitigation strategies)
- Memory key: `swarm/phase1/architecture-decisions`

**Meeting:** 30-minute kickoff with planner, backend-dev, code-analyzer

---

### Phase 2 → Phase 3
**Handoff:** Backend-dev → Frontend-dev
**Artifacts:**
- `owl_extractor.rs` module (with API docs)
- napi-rs package published to npm
- Performance benchmarks (Rust vs Python)
- Memory key: `swarm/phase2/owl-extractor-api`

**Meeting:** 1-hour handoff with backend-dev, frontend-dev, reviewer

---

### Phase 3 → Phase 4
**Handoff:** Frontend-dev (WASM) → Frontend-dev (React SPA)
**Artifacts:**
- WASM npm package v0.2.0
- Click event API documentation
- Ontology metadata data structure
- Memory key: `swarm/phase3/wasm-api-changes`

**Meeting:** 30-minute review with frontend-dev, coder

---

### Phase 4 → Phase 5
**Handoff:** Frontend-dev → Tester
**Artifacts:**
- React SPA codebase (all components)
- Search functionality implemented
- Mobile responsive design complete
- Memory key: `swarm/phase4/routing-structure`

**Meeting:** 1-hour handoff with frontend-dev, tester, reviewer

---

### Phase 5 → Phase 6
**Handoff:** Tester → CI/CD Engineer
**Artifacts:**
- Test suite (150+ tests)
- Test coverage report (85%+)
- Performance benchmarks (within targets)
- Memory key: `swarm/phase5/test-coverage-report`

**Meeting:** 30-minute handoff with tester, cicd-engineer

---

## Resource Allocation by Week (Detailed)

| Week | Agent 1 | Hours | Agent 2 | Hours | Agent 3 | Hours | Total | Phase |
|------|---------|-------|---------|-------|---------|-------|-------|-------|
| **W1** | planner | 15h | researcher | 8h | architect | 5h | 28h | P1 Planning |
| **W2** | backend-dev | 25h | code-analyzer | 10h | - | - | 35h | P2 OWL Extractor |
| **W3** | backend-dev | 30h | tester | 10h | - | - | 40h | P2 CLI + Tests |
| **W4** | backend-dev | 25h | code-analyzer | 5h | - | - | 30h | P2 napi-rs |
| **W5** | backend-dev | 20h | - | - | - | - | 20h | P3 WASM Metadata |
| **W6** | frontend-dev | 25h | reviewer | 8h | - | - | 33h | P3 React Integration |
| **W7** | frontend-dev | 20h | coder | 20h | - | - | 40h | P4 Routing + Markdown |
| **W8** | frontend-dev | 25h | coder | 10h | - | - | 35h | P4 Graph Navigation |
| **W9** | frontend-dev | 15h | reviewer | 10h | - | - | 25h | P4 Mobile + Search |
| **W10** | tester | 35h | - | - | - | - | 35h | P5 Unit + Integration Tests |
| **W11** | tester | 20h | reviewer | 11h | - | - | 31h | P5 E2E + Bug Fixes |
| **W12** | cicd-engineer | 30h | tester | 8h | - | - | 38h | P6 CI/CD Setup |
| **W13** | cicd-engineer | 10h | reviewer | 8h | - | - | 18h | P6 Monitoring + Sign-off |
| **TOTAL** | - | **280h** | - | **90h** | - | **5h** | **408h** | - |

**Average hours per week:** 31h (78% utilization of 40h week)

---

## Recommendations

### 1. Hire Additional Rust Developer (Optional)
**Justification:** Backend-dev has 85-120h workload over 4-5 weeks (peak: 30h/week)
**Impact:** Reduces risk of Phase 2 delays; allows parallel work on OWL extractor + CLI
**Cost:** Part-time contract (20h/week for 3 weeks = 60h)
**Decision Point:** End of Week 2 - if OWL extractor incomplete, hire contractor

### 2. Front-Load Unit Testing (Phases 2-4)
**Justification:** Reduces tester burden in Phase 5; improves code quality
**Impact:** Backend-dev and frontend-dev write tests during development
**Time Investment:** +10% per phase (8-12h total)
**Benefit:** Phase 5 can focus on integration/E2E tests

### 3. Weekly Check-ins with Planner
**Frequency:** Every Monday morning
**Duration:** 30 minutes
**Attendees:** Current phase lead agent + planner
**Agenda:** Progress review, blocker identification, risk assessment

### 4. Buffer Time Allocation
**Total Buffer:** 2 weeks (80 hours)
**Allocation:**
- Phase 2: 3 days (if Rust migration takes longer)
- Phase 4: 4 days (if React SPA complexity higher)
- Phase 5: 2 days (if critical bugs found)
- Phase 6: 3 days (if deployment issues)

---

## Resource Utilization Chart (Visual)

```
Week 1  |████████████████████ 70% (Planning)
Week 2  |██████████████████████████████ 88% (Rust OWL)
Week 3  |███████████████████████████████████ 100% (CLI + Tests)
Week 4  |█████████████████████████████ 75% (napi-rs)
Week 5  |████████████████ 50% (WASM)
Week 6  |████████████████████████████ 83% (React Integration)
Week 7  |███████████████████████████████████ 100% (Routing)
Week 8  |██████████████████████████████ 88% (Graph Nav)
Week 9  |███████████████████ 63% (Mobile)
Week 10 |██████████████████████████████ 88% (Testing)
Week 11 |██████████████████████████ 78% (E2E)
Week 12 |███████████████████████████████ 95% (CI/CD)
Week 13 |█████████████ 45% (Monitoring)
────────────────────────────────────────
        0%  25%  50%  75%  100%
```

**Average:** 77% utilization (healthy for long project)

---

## Document Metadata

**Version:** 1.0
**Last Updated:** 2025-11-12 (Phase 1)
**Owner:** Planner agent
**Next Review:** 2025-11-19 (Phase 2 kickoff)
