# Phase 5: Testing & Quality Assurance - Detailed Task Breakdown

**Phase Duration:** 2 weeks (80 hours)
**Primary Agents:** tester, reviewer
**Dependencies:** Phase 4 (React SPA) complete

---

## Overview

Comprehensive testing across all layers: Rust unit tests, TypeScript unit tests, integration tests, end-to-end tests, and performance benchmarks.

**Success Criteria:**
- [ ] Unit test coverage ≥85%
- [ ] Integration tests cover all user flows
- [ ] E2E tests pass on Chrome, Firefox, Safari
- [ ] Performance benchmarks within targets
- [ ] Zero P0 bugs, <5 P1 bugs

---

## Task 5.1: Rust Unit & Integration Tests (20-24 hours)

### Subtask 5.1.1: OWL Extractor Tests
**Duration:** 6-8 hours
**Agent:** tester
**Priority:** Critical
**Dependencies:** Phase 2 complete

**Implementation Steps:**
1. Create `rust-web-publish/logseq-publisher-rust/tests/owl_extractor_tests.rs`:
   ```rust
   use logseq_publisher_rust::owl_extractor::*;

   #[test]
   fn test_extract_ontology_block() {
       let markdown = r#"
   ---
   term-id: AI-0001
   ---

   ### OntologyBlock
     - term-id:: AI-0001
     - preferred-term:: Neural Network
     - owl:class:: ai:NeuralNetwork
     - rdfs:subClassOf:: ai:MachineLearningModel

   ## Content
   This is the page content.
       "#;

       let block = extract_ontology_block(markdown).unwrap();
       assert_eq!(block.term_id, "AI-0001");
       assert_eq!(block.preferred_term, Some("Neural Network".to_string()));
       assert_eq!(block.owl_class, Some("ai:NeuralNetwork".to_string()));
       assert_eq!(block.subclass_of, vec!["ai:MachineLearningModel"]);
   }

   #[test]
   fn test_namespace_resolution() {
       assert_eq!(resolve_namespace("AI-0001"), Namespace::AI);
       assert_eq!(resolve_namespace("BC-0097"), Namespace::BC);
       assert_eq!(resolve_namespace("MV-0003"), Namespace::MV);
   }

   #[test]
   fn test_rdf_triple_generation() {
       let block = OntologyBlock {
           term_id: "AI-0001".to_string(),
           preferred_term: Some("Neural Network".to_string()),
           owl_class: Some("ai:NeuralNetwork".to_string()),
           subclass_of: vec!["ai:MachineLearningModel".to_string()],
           domain: None,
           range: None,
           owl_axioms: None,
       };

       let triples = to_rdf_triples(&block);
       assert!(triples.iter().any(|t| t.predicate == "rdf:type"));
       assert!(triples.iter().any(|t| t.predicate == "rdfs:subClassOf"));
   }

   #[test]
   fn test_multi_page_processing() {
       let test_dir = "tests/fixtures/pages";
       let graph = process_directory(Path::new(test_dir)).unwrap();
       assert!(graph.nodes.len() >= 100);  // At least 100 test pages
   }
   ```
2. Create test fixtures in `tests/fixtures/pages/` (100 sample markdown files)
3. Add property-based tests with `proptest` crate

**Success Criteria:**
- [ ] 20+ unit tests for OWL extractor
- [ ] Test coverage ≥90% for owl_extractor.rs
- [ ] Property-based tests for edge cases
- [ ] All tests pass in CI

**Testing:**
```bash
cargo test owl_extractor_tests --features test-utils
cargo tarpaulin --out Html  # Coverage report
```

**Files Created:**
- `rust-web-publish/logseq-publisher-rust/tests/owl_extractor_tests.rs`
- `rust-web-publish/logseq-publisher-rust/tests/fixtures/pages/*.md` (100 files)

---

### Subtask 5.1.2: Parser Integration Tests
**Duration:** 5-7 hours
**Agent:** tester
**Priority:** High
**Dependencies:** 5.1.1

**Implementation Steps:**
1. Test parser with ontology extraction:
   ```rust
   #[test]
   fn test_parser_with_ontology() {
       let markdown = include_str!("fixtures/AI-0001.md");
       let page = parse_logseq_page(markdown, "AI-0001").unwrap();

       assert!(page.ontology.is_some());
       assert_eq!(page.ontology.unwrap().term_id, "AI-0001");
       assert!(page.links.contains(&"Machine Learning".to_string()));
   }

   #[test]
   fn test_parser_without_ontology() {
       let markdown = "# Regular Page\n\nThis has no ontology block.";
       let page = parse_logseq_page(markdown, "regular-page").unwrap();

       assert!(page.ontology.is_none());
   }

   #[test]
   fn test_wiki_link_extraction() {
       let markdown = "See [[Neural Network]] and [[Deep Learning]] for more.";
       let links = extract_wiki_links(markdown);
       assert_eq!(links, vec!["Neural Network", "Deep Learning"]);
   }

   #[test]
   fn test_block_hierarchy_parsing() {
       let markdown = r#"
   - Top level block
     - Nested block 1
       - Deeply nested
     - Nested block 2
   - Another top level
       "#;

       let blocks = parse_blocks(markdown).unwrap();
       assert_eq!(blocks.len(), 2);
       assert_eq!(blocks[0].children.len(), 2);
       assert_eq!(blocks[0].children[0].children.len(), 1);
   }
   ```
2. Test error handling for malformed markdown
3. Benchmark parsing performance

**Success Criteria:**
- [ ] 15+ integration tests for parser
- [ ] Test coverage ≥85% for parser.rs
- [ ] Performance: parse 2,500 files in <30s
- [ ] Error handling tested

**Testing:**
```bash
cargo test parser::tests
cargo bench parser_benchmark
```

**Files Created:**
- `rust-web-publish/logseq-publisher-rust/tests/parser_integration_tests.rs`

---

### Subtask 5.1.3: Graph Database Tests
**Duration:** 4-6 hours
**Agent:** tester
**Priority:** High
**Dependencies:** 5.1.2

**Implementation Steps:**
1. Test graph operations:
   ```rust
   #[test]
   fn test_graph_add_page() {
       let mut graph = Graph::new();
       let page = create_test_page("test-page", vec!["link1", "link2"]);
       graph.add_page(page);

       assert_eq!(graph.pages.len(), 1);
       assert_eq!(graph.backlinks.get("link1").unwrap().len(), 1);
   }

   #[test]
   fn test_backlinks_bidirectional() {
       let mut graph = Graph::new();
       let page_a = create_test_page("page-a", vec!["page-b"]);
       let page_b = create_test_page("page-b", vec!["page-a"]);

       graph.add_page(page_a);
       graph.add_page(page_b);

       let a_backlinks = graph.get_backlinks("page-a");
       let b_backlinks = graph.get_backlinks("page-b");

       assert_eq!(a_backlinks.len(), 1);
       assert_eq!(b_backlinks.len(), 1);
   }

   #[test]
   fn test_ontology_index() {
       let mut graph = Graph::new();
       let page = create_ontology_page("AI-0001");
       graph.add_page(page);

       let ontology = graph.get_ontology_by_term_id("AI-0001").unwrap();
       assert_eq!(ontology.term_id, "AI-0001");
   }

   #[test]
   fn test_graph_statistics() {
       let graph = create_test_graph_with_n_pages(100);
       let stats = graph.stats();

       assert_eq!(stats.page_count, 100);
       assert!(stats.link_count > 0);
   }
   ```

**Success Criteria:**
- [ ] 10+ tests for graph operations
- [ ] Test coverage ≥80% for graph.rs
- [ ] Performance: 10,000 pages indexed in <1s
- [ ] Memory usage reasonable

**Testing:**
```bash
cargo test graph::tests
```

**Files Created:**
- `rust-web-publish/logseq-publisher-rust/tests/graph_tests.rs`

---

### Subtask 5.1.4: CLI End-to-End Tests
**Duration:** 5-7 hours
**Agent:** tester
**Priority:** Medium
**Dependencies:** 5.1.3

**Implementation Steps:**
1. Test CLI commands:
   ```rust
   use assert_cmd::Command;
   use predicates::prelude::*;

   #[test]
   fn test_cli_extract_ontology() {
       let mut cmd = Command::cargo_bin("logseq-publisher").unwrap();
       cmd.arg("ontology")
          .arg("extract")
          .arg("--pages-dir")
          .arg("tests/fixtures/pages")
          .arg("--output")
          .arg("/tmp/test-output.ttl");

       cmd.assert()
          .success()
          .stdout(predicate::str::contains("Processed"));

       assert!(Path::new("/tmp/test-output.ttl").exists());
   }

   #[test]
   fn test_cli_stats() {
       let mut cmd = Command::cargo_bin("logseq-publisher").unwrap();
       cmd.arg("ontology")
          .arg("stats")
          .arg("--pages-dir")
          .arg("tests/fixtures/pages");

       cmd.assert()
          .success()
          .stdout(predicate::str::contains("Classes:"))
          .stdout(predicate::str::contains("Properties:"));
   }

   #[test]
   fn test_cli_validate() {
       let mut cmd = Command::cargo_bin("logseq-publisher").unwrap();
       cmd.arg("ontology")
          .arg("validate")
          .arg("--pages-dir")
          .arg("tests/fixtures/pages");

       cmd.assert()
          .success()
          .stdout(predicate::str::contains("Validation complete"));
   }

   #[test]
   fn test_cli_invalid_directory() {
       let mut cmd = Command::cargo_bin("logseq-publisher").unwrap();
       cmd.arg("ontology")
          .arg("extract")
          .arg("--pages-dir")
          .arg("/nonexistent");

       cmd.assert()
          .failure()
          .stderr(predicate::str::contains("Directory not found"));
   }
   ```

**Success Criteria:**
- [ ] 8+ E2E CLI tests
- [ ] Tests cover success and error cases
- [ ] Exit codes verified
- [ ] Output format validated

**Testing:**
```bash
cargo test cli_e2e_tests
```

**Files Created:**
- `rust-web-publish/logseq-publisher-rust/tests/cli_e2e_tests.rs`

---

## Task 5.2: TypeScript/React Unit Tests (16-20 hours)

### Subtask 5.2.1: Component Unit Tests
**Duration:** 8-10 hours
**Agent:** tester
**Priority:** Critical
**Dependencies:** Phase 4 complete

**Implementation Steps:**
1. Setup testing framework:
   ```bash
   cd publishing-tools/WasmVOWL/modern
   npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
   ```
2. Create test file for each component:
   ```typescript
   // src/components/PageRenderer/MarkdownRenderer.test.tsx
   import { render, screen } from '@testing-library/react';
   import { MarkdownRenderer } from './MarkdownRenderer';

   describe('MarkdownRenderer', () => {
       it('renders plain markdown', () => {
           render(<MarkdownRenderer content="# Hello World" />);
           expect(screen.getByText('Hello World')).toBeInTheDocument();
       });

       it('converts wiki links to router links', () => {
           render(<MarkdownRenderer content="See [[Neural Network]]" />);
           const link = screen.getByRole('link', { name: 'Neural Network' });
           expect(link).toHaveAttribute('href', '/page/Neural Network');
       });

       it('renders code blocks with syntax highlighting', () => {
           const code = '```python\nprint("hello")\n```';
           render(<MarkdownRenderer content={code} />);
           expect(screen.getByText('print("hello")')).toHaveClass('language-python');
       });

       it('renders ontology blocks with special formatting', () => {
           const content = `
   ### OntologyBlock
     - term-id:: AI-0001
     - preferred-term:: Neural Network
           `;
           render(<MarkdownRenderer content={content} />);
           expect(screen.getByText('AI-0001')).toBeInTheDocument();
       });
   });
   ```
3. Create tests for all major components:
   - GraphScene.test.tsx
   - NodeDetailsPanel.test.tsx
   - SearchBar.test.tsx
   - PageView.test.tsx
   - MiniGraph.test.tsx

**Success Criteria:**
- [ ] 50+ component unit tests
- [ ] Test coverage ≥80% for components
- [ ] Tests run in <10 seconds
- [ ] All tests pass in CI

**Testing:**
```bash
npm test
npm run test:coverage
```

**Files Created:**
- 20+ `*.test.tsx` files for components

---

### Subtask 5.2.2: Hook Tests
**Duration:** 3-4 hours
**Agent:** tester
**Priority:** High
**Dependencies:** 5.2.1

**Implementation Steps:**
1. Test custom hooks:
   ```typescript
   // src/hooks/useWasmSimulation.test.ts
   import { renderHook, waitFor } from '@testing-library/react';
   import { useWasmSimulation } from './useWasmSimulation';

   describe('useWasmSimulation', () => {
       it('initializes WASM module', async () => {
           const { result } = renderHook(() => useWasmSimulation({
               linkDistance: 100,
               chargeStrength: -300,
           }));

           await waitFor(() => {
               expect(result.current.isLoading).toBe(false);
           });

           expect(result.current.wasm).toBeDefined();
       });

       it('runs simulation on tick', async () => {
           const { result } = renderHook(() => useWasmSimulation({}));

           await waitFor(() => expect(result.current.isLoading).toBe(false));

           result.current.start();

           await waitFor(() => {
               expect(result.current.alpha).toBeLessThan(1.0);
           });
       });

       it('stops simulation when alpha < 0.01', async () => {
           const { result } = renderHook(() => useWasmSimulation({}));

           result.current.start();

           await waitFor(() => {
               expect(result.current.isRunning).toBe(false);
           }, { timeout: 10000 });

           expect(result.current.alpha).toBeLessThan(0.01);
       });
   });
   ```
2. Test other hooks:
   - usePage.test.ts
   - useGraphURLState.test.ts
   - useSearch.test.ts

**Success Criteria:**
- [ ] 15+ hook unit tests
- [ ] Test coverage ≥85% for hooks
- [ ] Async behavior tested correctly
- [ ] Edge cases covered

**Testing:**
```bash
npm test -- hooks
```

**Files Created:**
- 5+ `*.test.ts` files for hooks

---

### Subtask 5.2.3: Store Tests (Zustand)
**Duration:** 3-4 hours
**Agent:** tester
**Priority:** High
**Dependencies:** 5.2.2

**Implementation Steps:**
1. Test Zustand stores:
   ```typescript
   // src/stores/useGraphStore.test.ts
   import { renderHook, act } from '@testing-library/react';
   import { useGraphStore } from './useGraphStore';

   describe('useGraphStore', () => {
       beforeEach(() => {
           useGraphStore.getState().resetGraph();
       });

       it('loads ontology data', () => {
           const { result } = renderHook(() => useGraphStore());

           act(() => {
               result.current.loadOntology(mockOntologyData);
           });

           expect(result.current.nodes.size).toBeGreaterThan(0);
           expect(result.current.edges.size).toBeGreaterThan(0);
       });

       it('filters nodes by type', () => {
           const { result } = renderHook(() => useGraphStore());

           act(() => {
               result.current.loadOntology(mockOntologyData);
               result.current.applyFilters([{ type: 'nodeType', config: { type: 'class' } }]);
           });

           const filteredNodes = result.current.filteredNodes();
           expect(filteredNodes.every(n => n.type === 'class')).toBe(true);
       });

       it('selects node', () => {
           const { result } = renderHook(() => useGraphStore());

           act(() => {
               result.current.selectNode('AI-0001');
           });

           expect(result.current.selectedNode).toBe('AI-0001');
       });

       it('calculates graph statistics', () => {
           const { result } = renderHook(() => useGraphStore());

           act(() => {
               result.current.loadOntology(mockOntologyData);
           });

           const stats = result.current.statistics;
           expect(stats.nodeCount).toBeGreaterThan(0);
           expect(stats.edgeCount).toBeGreaterThan(0);
       });
   });
   ```

**Success Criteria:**
- [ ] 10+ store unit tests
- [ ] Test coverage ≥85% for stores
- [ ] State mutations tested
- [ ] Selectors tested

**Testing:**
```bash
npm test -- stores
```

**Files Created:**
- 2+ `*.test.ts` files for stores

---

### Subtask 5.2.4: Service/API Tests
**Duration:** 2-3 hours
**Agent:** tester
**Priority:** Medium
**Dependencies:** 5.2.3

**Implementation Steps:**
1. Test API services:
   ```typescript
   // src/services/pageService.test.ts
   import { fetchPage, fetchBacklinks } from './pageService';

   global.fetch = jest.fn();

   describe('pageService', () => {
       afterEach(() => {
           jest.clearAllMocks();
       });

       it('fetches page successfully', async () => {
           (fetch as jest.Mock).mockResolvedValueOnce({
               ok: true,
               json: async () => ({ title: 'Test Page', content: '# Content' }),
           });

           const page = await fetchPage('test-page');

           expect(page.title).toBe('Test Page');
           expect(fetch).toHaveBeenCalledWith('/api/pages/test-page.json');
       });

       it('throws error for missing page', async () => {
           (fetch as jest.Mock).mockResolvedValueOnce({
               ok: false,
               status: 404,
           });

           await expect(fetchPage('nonexistent')).rejects.toThrow('Page not found');
       });

       it('fetches backlinks', async () => {
           (fetch as jest.Mock).mockResolvedValueOnce({
               ok: true,
               json: async () => ['page1', 'page2'],
           });

           const backlinks = await fetchBacklinks('test-page');

           expect(backlinks).toEqual(['page1', 'page2']);
       });
   });
   ```

**Success Criteria:**
- [ ] 8+ service tests
- [ ] Test coverage ≥80% for services
- [ ] Mock fetch calls
- [ ] Error handling tested

**Testing:**
```bash
npm test -- services
```

**Files Created:**
- 2+ `*.test.ts` files for services

---

## Task 5.3: Integration Tests (16-20 hours)

### Subtask 5.3.1: User Flow Tests (Graph → Page)
**Duration:** 6-8 hours
**Agent:** tester
**Priority:** Critical
**Dependencies:** 5.2.4

**Implementation Steps:**
1. Create integration test suite:
   ```typescript
   // tests/integration/graph-to-page.test.tsx
   import { render, screen, waitFor } from '@testing-library/react';
   import userEvent from '@testing-library/user-event';
   import { MemoryRouter } from 'react-router-dom';
   import { App } from '../../src/App';

   describe('Graph to Page Navigation', () => {
       it('clicking node navigates to page', async () => {
           render(
               <MemoryRouter initialEntries={['/ontology']}>
                   <App />
               </MemoryRouter>
           );

           // Wait for graph to load
           await waitFor(() => {
               expect(screen.getByTestId('graph-canvas')).toBeInTheDocument();
           });

           // Simulate node click (mock THREE.js interaction)
           const canvas = screen.getByTestId('graph-canvas');
           await userEvent.click(canvas);

           // Verify navigation to page
           await waitFor(() => {
               expect(screen.getByText(/Neural Network/i)).toBeInTheDocument();
               expect(window.location.pathname).toContain('/page/');
           });
       });

       it('page displays ontology mini-graph', async () => {
           render(
               <MemoryRouter initialEntries={['/page/Neural%20Network']}>
                   <App />
               </MemoryRouter>
           );

           await waitFor(() => {
               expect(screen.getByTestId('mini-graph')).toBeInTheDocument();
           });

           // Verify mini-graph shows related nodes
           expect(screen.getByText(/Machine Learning/i)).toBeInTheDocument();
       });

       it('mini-graph "View Full Graph" navigates to ontology', async () => {
           render(
               <MemoryRouter initialEntries={['/page/Neural%20Network']}>
                   <App />
               </MemoryRouter>
           );

           const viewFullButton = await screen.findByText(/View Full Graph/i);
           await userEvent.click(viewFullButton);

           await waitFor(() => {
               expect(window.location.pathname).toBe('/ontology');
           });
       });
   });
   ```

**Success Criteria:**
- [ ] 10+ user flow tests
- [ ] Graph-to-page navigation tested
- [ ] Page-to-graph navigation tested
- [ ] All tests pass consistently

**Testing:**
```bash
npm test -- integration
```

**Files Created:**
- `tests/integration/graph-to-page.test.tsx`
- `tests/integration/search-flow.test.tsx`
- `tests/integration/navigation.test.tsx`

---

### Subtask 5.3.2: Search Integration Tests
**Duration:** 4-6 hours
**Agent:** tester
**Priority:** High
**Dependencies:** 5.3.1

**Implementation Steps:**
1. Test search functionality end-to-end:
   ```typescript
   // tests/integration/search-flow.test.tsx
   describe('Search Integration', () => {
       it('searches and navigates to result', async () => {
           render(<App />);

           const searchInput = screen.getByPlaceholderText(/search/i);
           await userEvent.type(searchInput, 'neural network');

           await waitFor(() => {
               expect(screen.getByText(/Neural Network/i)).toBeInTheDocument();
           });

           const firstResult = screen.getAllByRole('link')[0];
           await userEvent.click(firstResult);

           await waitFor(() => {
               expect(window.location.pathname).toContain('/page/');
           });
       });

       it('filters search results', async () => {
           render(<App initialRoute="/search?q=machine" />);

           await waitFor(() => {
               expect(screen.getAllByTestId('search-result').length).toBeGreaterThan(0);
           });

           const filterButton = screen.getByText(/Ontology Only/i);
           await userEvent.click(filterButton);

           const results = screen.getAllByTestId('search-result');
           expect(results.every(r => r.dataset.type === 'ontology')).toBe(true);
       });
   });
   ```

**Success Criteria:**
- [ ] 6+ search integration tests
- [ ] Search-to-page flow tested
- [ ] Filter application tested
- [ ] Search performance validated

**Testing:**
```bash
npm test -- integration/search
```

**Files Created:**
- `tests/integration/search-flow.test.tsx`

---

### Subtask 5.3.3: WASM Integration Tests
**Duration:** 4-6 hours
**Agent:** tester
**Priority:** Medium
**Dependencies:** 5.3.2

**Implementation Steps:**
1. Test WASM-React integration:
   ```typescript
   // tests/integration/wasm-integration.test.tsx
   describe('WASM Integration', () => {
       it('loads WASM module successfully', async () => {
           render(<OntologyView />);

           await waitFor(() => {
               expect(screen.getByTestId('graph-loaded')).toBeInTheDocument();
           }, { timeout: 5000 });
       });

       it('WASM simulation updates node positions', async () => {
           const { container } = render(<OntologyView />);

           await waitFor(() => {
               expect(screen.getByTestId('graph-loaded')).toBeInTheDocument();
           });

           // Get initial node positions
           const initialPositions = getNodePositions(container);

           // Wait for simulation to run
           await new Promise(resolve => setTimeout(resolve, 1000));

           // Verify positions changed
           const updatedPositions = getNodePositions(container);
           expect(updatedPositions).not.toEqual(initialPositions);
       });

       it('click detection works via WASM', async () => {
           render(<OntologyView />);

           await waitFor(() => {
               expect(screen.getByTestId('graph-loaded')).toBeInTheDocument();
           });

           const canvas = screen.getByTestId('graph-canvas');
           await userEvent.click(canvas, { clientX: 400, clientY: 300 });

           await waitFor(() => {
               expect(screen.getByTestId('node-details-panel')).toBeInTheDocument();
           });
       });
   });
   ```

**Success Criteria:**
- [ ] 5+ WASM integration tests
- [ ] WASM loading tested
- [ ] WASM-JS communication tested
- [ ] Performance validated

**Testing:**
```bash
npm test -- integration/wasm
```

**Files Created:**
- `tests/integration/wasm-integration.test.tsx`

---

### Subtask 5.3.4: Routing Integration Tests
**Duration:** 2-3 hours
**Agent:** tester
**Priority:** Low
**Dependencies:** 5.3.3

**Implementation Steps:**
1. Test routing scenarios:
   ```typescript
   // tests/integration/routing.test.tsx
   describe('Routing Integration', () => {
       it('direct URL navigation works', async () => {
           render(
               <MemoryRouter initialEntries={['/page/Neural%20Network']}>
                   <App />
               </MemoryRouter>
           );

           await waitFor(() => {
               expect(screen.getByRole('heading', { name: /Neural Network/i })).toBeInTheDocument();
           });
       });

       it('browser back/forward buttons work', async () => {
           const history = createMemoryHistory();
           render(<Router location={history.location} navigator={history}><App /></Router>);

           history.push('/ontology');
           await waitFor(() => expect(window.location.pathname).toBe('/ontology'));

           history.push('/page/test');
           await waitFor(() => expect(window.location.pathname).toBe('/page/test'));

           history.back();
           await waitFor(() => expect(window.location.pathname).toBe('/ontology'));

           history.forward();
           await waitFor(() => expect(window.location.pathname).toBe('/page/test'));
       });

       it('404 page shown for invalid routes', async () => {
           render(
               <MemoryRouter initialEntries={['/invalid-route']}>
                   <App />
               </MemoryRouter>
           );

           await waitFor(() => {
               expect(screen.getByText(/404/i)).toBeInTheDocument();
           });
       });
   });
   ```

**Success Criteria:**
- [ ] 5+ routing tests
- [ ] URL navigation tested
- [ ] History API tested
- [ ] 404 handling tested

**Testing:**
```bash
npm test -- integration/routing
```

**Files Created:**
- `tests/integration/routing.test.tsx`

---

## Task 5.4: End-to-End Tests (Cypress) (12-16 hours)

### Subtask 5.4.1: Setup Cypress
**Duration:** 2-3 hours
**Agent:** tester
**Priority:** High
**Dependencies:** 5.3.4

**Implementation Steps:**
1. Install Cypress:
   ```bash
   cd publishing-tools/WasmVOWL/modern
   npm install --save-dev cypress @cypress/webpack-preprocessor
   ```
2. Configure Cypress:
   ```typescript
   // cypress.config.ts
   import { defineConfig } from 'cypress';

   export default defineConfig({
       e2e: {
           baseUrl: 'http://localhost:5173',
           specPattern: 'cypress/e2e/**/*.cy.ts',
           supportFile: 'cypress/support/e2e.ts',
       },
       component: {
           devServer: {
               framework: 'react',
               bundler: 'vite',
           },
       },
   });
   ```
3. Create custom commands:
   ```typescript
   // cypress/support/commands.ts
   Cypress.Commands.add('loadGraph', () => {
       cy.visit('/ontology');
       cy.get('[data-testid="graph-loaded"]', { timeout: 10000 }).should('exist');
   });

   Cypress.Commands.add('searchFor', (query: string) => {
       cy.get('input[placeholder*="search"]').type(query);
       cy.get('[data-testid="search-results"]').should('be.visible');
   });
   ```

**Success Criteria:**
- [ ] Cypress installed and configured
- [ ] Custom commands defined
- [ ] Test server runs correctly
- [ ] Screenshot/video capture enabled

**Testing:**
```bash
npm run cypress:open
```

**Files Created:**
- `cypress.config.ts`
- `cypress/support/commands.ts`
- `cypress/support/e2e.ts`

---

### Subtask 5.4.2: Critical User Journeys
**Duration:** 6-8 hours
**Agent:** tester
**Priority:** Critical
**Dependencies:** 5.4.1

**Implementation Steps:**
1. Create E2E tests for critical flows:
   ```typescript
   // cypress/e2e/critical-flows.cy.ts
   describe('Critical User Journeys', () => {
       it('journey: discover concept in graph, read page, explore related', () => {
           // 1. Start at ontology page
           cy.visit('/ontology');
           cy.get('[data-testid="graph-loaded"]').should('exist');

           // 2. Search for AI-0001
           cy.get('input[placeholder*="search"]').type('Neural Network');
           cy.get('[data-testid="search-result"]').first().click();

           // 3. View page
           cy.url().should('include', '/page/Neural');
           cy.get('h1').should('contain', 'Neural Network');

           // 4. See mini-graph
           cy.get('[data-testid="mini-graph"]').should('exist');

           // 5. Click related concept
           cy.get('[data-testid="mini-graph"]').within(() => {
               cy.get('canvas').click(100, 100);
           });

           // 6. View full graph
           cy.contains('View Full Graph').click();
           cy.url().should('include', '/ontology');
       });

       it('journey: browse pages, follow links, return via backlinks', () => {
           cy.visit('/page/Machine%20Learning');

           // Follow wiki link
           cy.contains('a', 'Neural Network').click();
           cy.url().should('include', '/page/Neural%20Network');

           // Check backlinks section
           cy.get('[data-testid="backlinks"]').should('exist');
           cy.get('[data-testid="backlinks"]').contains('Machine Learning');

           // Click backlink
           cy.get('[data-testid="backlinks"]').contains('Machine Learning').click();
           cy.url().should('include', '/page/Machine%20Learning');
       });

       it('journey: search, filter, navigate to result', () => {
           cy.visit('/');

           // Open search
           cy.searchFor('blockchain');

           // Apply filter
           cy.contains('button', 'Ontology Only').click();

           // Verify filtered results
           cy.get('[data-testid="search-result"]').should('have.length.gte', 1);
           cy.get('[data-testid="search-result"]').each($el => {
               cy.wrap($el).should('have.attr', 'data-type', 'ontology');
           });

           // Click result
           cy.get('[data-testid="search-result"]').first().click();
           cy.url().should('include', '/page/');
       });
   });
   ```

**Success Criteria:**
- [ ] 3+ critical user journeys tested
- [ ] Tests pass on local dev server
- [ ] Tests pass in CI (headless)
- [ ] Screenshots captured on failure

**Testing:**
```bash
npm run cypress:run
```

**Files Created:**
- `cypress/e2e/critical-flows.cy.ts`

---

### Subtask 5.4.3: Cross-Browser Tests
**Duration:** 2-3 hours
**Agent:** tester
**Priority:** Medium
**Dependencies:** 5.4.2

**Implementation Steps:**
1. Configure browser matrix in CI:
   ```yaml
   # .github/workflows/e2e-tests.yml
   jobs:
     e2e:
       strategy:
         matrix:
           browser: [chrome, firefox, edge]
       steps:
         - name: Run Cypress tests
           run: npm run cypress:run -- --browser ${{ matrix.browser }}
   ```
2. Test browser-specific issues:
   - WebGL support (Safari)
   - WASM loading (Firefox)
   - Touch events (mobile browsers)

**Success Criteria:**
- [ ] Tests pass on Chrome, Firefox, Edge
- [ ] Safari tested manually (WebGL limitations)
- [ ] Mobile browsers tested with emulation
- [ ] Browser-specific fixes documented

**Testing:**
```bash
npm run cypress:run -- --browser chrome
npm run cypress:run -- --browser firefox
npm run cypress:run -- --browser edge
```

**Files Modified:**
- `.github/workflows/e2e-tests.yml`

---

### Subtask 5.4.4: Performance Tests (Lighthouse)
**Duration:** 2-3 hours
**Agent:** tester
**Priority:** Low
**Dependencies:** 5.4.3

**Implementation Steps:**
1. Create Lighthouse CI configuration:
   ```javascript
   // lighthouserc.js
   module.exports = {
       ci: {
           collect: {
               url: [
                   'http://localhost:5173/',
                   'http://localhost:5173/ontology',
                   'http://localhost:5173/page/Neural%20Network',
               ],
               numberOfRuns: 3,
           },
           assert: {
               assertions: {
                   'categories:performance': ['error', { minScore: 0.8 }],
                   'categories:accessibility': ['error', { minScore: 0.9 }],
                   'categories:best-practices': ['error', { minScore: 0.9 }],
                   'categories:seo': ['error', { minScore: 0.9 }],
                   'first-contentful-paint': ['error', { maxNumericValue: 3000 }],
                   'interactive': ['error', { maxNumericValue: 5000 }],
               },
           },
       },
   };
   ```
2. Run in CI:
   ```yaml
   - name: Run Lighthouse CI
     run: |
       npm install -g @lhci/cli
       lhci autorun
   ```

**Success Criteria:**
- [ ] Performance score ≥80
- [ ] Accessibility score ≥90
- [ ] Best practices score ≥90
- [ ] FCP <3s, TTI <5s

**Testing:**
```bash
npm run lighthouse
```

**Files Created:**
- `lighthouserc.js`

---

## Task 5.5: Performance Benchmarks (8-12 hours)

### Subtask 5.5.1: Rust Performance Benchmarks
**Duration:** 4-6 hours
**Agent:** tester
**Priority:** High
**Dependencies:** 5.4.4

**Implementation Steps:**
1. Create comprehensive benchmark suite:
   ```rust
   // benches/full_pipeline_benchmark.rs
   use criterion::{black_box, criterion_group, criterion_main, Criterion, BenchmarkId};
   use logseq_publisher_rust::*;

   fn benchmark_owl_extraction(c: &mut Criterion) {
       let mut group = c.benchmark_group("owl_extraction");

       for size in [10, 100, 1000, 2519].iter() {
           group.bench_with_input(BenchmarkId::from_parameter(size), size, |b, &size| {
               let pages = load_n_test_pages(size);
               b.iter(|| {
                   let graph = process_pages(black_box(&pages));
                   black_box(graph);
               });
           });
       }

       group.finish();
   }

   fn benchmark_ttl_generation(c: &mut Criterion) {
       let pages = load_n_test_pages(2519);
       let graph = process_pages(&pages);

       c.bench_function("ttl_generation_2519_pages", |b| {
           b.iter(|| {
               let ttl = generate_ttl(black_box(&graph));
               black_box(ttl);
           });
       });
   }

   fn benchmark_json_export(c: &mut Criterion) {
       let pages = load_n_test_pages(2519);
       let graph = process_pages(&pages);

       c.bench_function("webvowl_json_2519_pages", |b| {
           b.iter(|| {
               let json = export_webvowl_json(black_box(&graph));
               black_box(json);
           });
       });
   }

   criterion_group!(benches, benchmark_owl_extraction, benchmark_ttl_generation, benchmark_json_export);
   criterion_main!(benches);
   ```
2. Document baseline performance

**Success Criteria:**
- [ ] Process 2,519 pages in <30s
- [ ] TTL generation <5s
- [ ] JSON export <2s
- [ ] Memory usage <500MB

**Testing:**
```bash
cargo bench --bench full_pipeline_benchmark
```

**Files Created:**
- `benches/full_pipeline_benchmark.rs`
- `docs/PERFORMANCE-BASELINE.md`

---

### Subtask 5.5.2: Frontend Performance Benchmarks
**Duration:** 4-6 hours
**Agent:** tester
**Priority:** High
**Dependencies:** 5.5.1

**Implementation Steps:**
1. Create performance test suite:
   ```typescript
   // tests/performance/graph-rendering.test.ts
   import { performance } from 'perf_hooks';

   describe('Graph Rendering Performance', () => {
       it('loads 1000-node graph in <300ms', async () => {
           const start = performance.now();

           await loadOntology(generate1000Nodes());

           const duration = performance.now() - start;
           expect(duration).toBeLessThan(300);
       });

       it('maintains 60fps with 1000 nodes', async () => {
           await loadOntology(generate1000Nodes());

           const fps = await measureFPS(duration: 5000);
           expect(fps).toBeGreaterThanOrEqual(60);
       });

       it('click detection responds in <50ms', async () => {
           await loadOntology(generate1000Nodes());

           const start = performance.now();
           await simulateNodeClick({ x: 400, y: 300 });
           const duration = performance.now() - start;

           expect(duration).toBeLessThan(50);
       });

       it('search returns results in <100ms', async () => {
           await initializeSearch();

           const start = performance.now();
           const results = search('neural network');
           const duration = performance.now() - start;

           expect(duration).toBeLessThan(100);
           expect(results.length).toBeGreaterThan(0);
       });
   });
   ```

**Success Criteria:**
- [ ] Graph load <300ms
- [ ] 60fps with 1,000 nodes
- [ ] Click response <50ms
- [ ] Search latency <100ms

**Testing:**
```bash
npm run test:performance
```

**Files Created:**
- `tests/performance/graph-rendering.test.ts`
- `tests/performance/search-performance.test.ts`

---

## Coordination Protocol

### Pre-Phase
```bash
npx claude-flow@alpha hooks pre-task --description "Phase 5 Testing" --agent-id "tester-001"
npx claude-flow@alpha hooks session-restore --session-id "swarm-phase5"
```

### During Phase
```bash
npx claude-flow@alpha hooks post-task --task-id "task-5.1"
npx claude-flow@alpha hooks notify --message "Unit tests complete: 85% coverage achieved" --to "planner,reviewer"
```

### Post-Phase
```bash
npx claude-flow@alpha hooks post-task --task-id "phase5-testing"
npx claude-flow@alpha hooks memory-store --key "swarm/phase5/test-coverage" --value "85%"
npx claude-flow@alpha hooks session-end --export-metrics true
```

---

## Handoff to Phase 6

**Deliverables:**
- [ ] 150+ unit tests (Rust + TypeScript)
- [ ] 30+ integration tests
- [ ] 10+ E2E tests
- [ ] Performance benchmarks documented
- [ ] Test coverage ≥85%

**Memory Keys:**
- `swarm/phase5/test-coverage-report` - Coverage percentages
- `swarm/phase5/performance-benchmarks` - Benchmark results
- `swarm/phase5/known-issues` - List of known bugs

**Next Phase Dependencies:**
Phase 6 (CI/CD) requires:
- All tests passing
- Performance benchmarks within targets
- Test suite integrated into CI

---

**Phase 5 Estimated Completion:** Week 10-11 of project
**Total Hours:** 72-92 hours (2 weeks with 1 full-time engineer)
