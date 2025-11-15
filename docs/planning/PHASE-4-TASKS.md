# Phase 4: React SPA Integration - Detailed Task Breakdown

**Phase Duration:** 2-3 weeks (80-120 hours)
**Primary Agents:** frontend-dev, coder
**Dependencies:** Phase 3 (WASM Enhancement) complete

---

## Overview

Build unified React SPA that combines Logseq page rendering with interactive ontology graph. Users can click nodes in the 3D graph to navigate to Logseq pages, and pages display embedded mini-graphs showing related concepts.

**Success Criteria:**
- [ ] Single-page React application with React Router
- [ ] PageRenderer component displays Logseq markdown as HTML
- [ ] Graph click handlers navigate to pages
- [ ] Unified search across pages and ontology
- [ ] Mobile-responsive design
- [ ] Performance: <3s page load, <100ms navigation

---

## Task 4.1: Routing Architecture (12-16 hours)

### Subtask 4.1.1: Setup React Router v6
**Duration:** 3-4 hours
**Agent:** frontend-dev
**Priority:** Critical
**Dependencies:** Phase 3 complete

**Implementation Steps:**
1. Install dependencies in `publishing-tools/WasmVOWL/modern/`:
   ```bash
   npm install react-router-dom@6 history
   ```
2. Create router configuration in `src/router.tsx`:
   ```typescript
   import { createBrowserRouter } from 'react-router-dom';
   import { HomePage } from './pages/HomePage';
   import { PageView } from './pages/PageView';
   import { OntologyView } from './pages/OntologyView';
   import { SearchView } from './pages/SearchView';

   export const router = createBrowserRouter([
       {
           path: '/',
           element: <HomePage />,
       },
       {
           path: '/page/:pageName',
           element: <PageView />,
       },
       {
           path: '/ontology',
           element: <OntologyView />,
           children: [
               {
                   path: ':nodeId',
                   element: <OntologyView />,
               },
           ],
       },
       {
           path: '/search',
           element: <SearchView />,
       },
   ]);
   ```
3. Update `src/main.tsx`:
   ```typescript
   import { RouterProvider } from 'react-router-dom';
   import { router } from './router';

   ReactDOM.createRoot(document.getElementById('root')!).render(
       <React.StrictMode>
           <RouterProvider router={router} />
       </React.StrictMode>
   );
   ```

**Success Criteria:**
- [ ] Routing configured for all major views
- [ ] Navigation between routes works
- [ ] Browser back/forward buttons work
- [ ] URLs are clean and shareable

**Testing:**
```bash
npm test -- router.test.tsx
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/router.tsx`

**Files Modified:**
- `publishing-tools/WasmVOWL/modern/src/main.tsx`
- `publishing-tools/WasmVOWL/modern/package.json`

---

### Subtask 4.1.2: Layout Component with Navigation
**Duration:** 4-6 hours
**Agent:** frontend-dev
**Priority:** High
**Dependencies:** 4.1.1

**Implementation Steps:**
1. Create `src/components/Layout/AppLayout.tsx`:
   ```typescript
   import { Outlet, Link, useLocation } from 'react-router-dom';
   import { Navbar } from './Navbar';
   import { Sidebar } from './Sidebar';

   export function AppLayout() {
       const location = useLocation();

       return (
           <div className="app-layout">
               <Navbar />
               <div className="content-wrapper">
                   <Sidebar />
                   <main className="main-content">
                       <Outlet />
                   </main>
               </div>
           </div>
       );
   }
   ```
2. Create `Navbar.tsx` with navigation links:
   ```typescript
   export function Navbar() {
       return (
           <nav className="navbar">
               <Link to="/" className="logo">Narrative Goldmine</Link>
               <div className="nav-links">
                   <Link to="/">Home</Link>
                   <Link to="/ontology">Ontology Graph</Link>
                   <Link to="/search">Search</Link>
               </div>
               <SearchBar />
           </nav>
       );
   }
   ```
3. Create `Sidebar.tsx` with page tree navigation

**Success Criteria:**
- [ ] Persistent navigation across routes
- [ ] Active route highlighted
- [ ] Mobile hamburger menu
- [ ] Sidebar collapsible

**Testing:**
```bash
npm test -- AppLayout.test.tsx
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/components/Layout/AppLayout.tsx`
- `publishing-tools/WasmVOWL/modern/src/components/Layout/Navbar.tsx`
- `publishing-tools/WasmVOWL/modern/src/components/Layout/Sidebar.tsx`

---

### Subtask 4.1.3: Route-Based Code Splitting
**Duration:** 2-3 hours
**Agent:** frontend-dev
**Priority:** Medium
**Dependencies:** 4.1.2

**Implementation Steps:**
1. Update router to use lazy loading:
   ```typescript
   import { lazy, Suspense } from 'react';

   const HomePage = lazy(() => import('./pages/HomePage'));
   const PageView = lazy(() => import('./pages/PageView'));
   const OntologyView = lazy(() => import('./pages/OntologyView'));

   export const router = createBrowserRouter([
       {
           path: '/',
           element: (
               <Suspense fallback={<LoadingSpinner />}>
                   <HomePage />
               </Suspense>
           ),
       },
       // ... other routes
   ]);
   ```
2. Create `LoadingSpinner` component
3. Verify bundle splitting in build output

**Success Criteria:**
- [ ] Each route has separate JS bundle
- [ ] Initial bundle size <150KB (gzipped)
- [ ] Lazy chunks load on demand
- [ ] Loading states work correctly

**Testing:**
```bash
npm run build
npm run analyze  # Check bundle sizes
```

**Files Modified:**
- `publishing-tools/WasmVOWL/modern/src/router.tsx`
- `publishing-tools/WasmVOWL/modern/vite.config.ts`

---

### Subtask 4.1.4: URL State Management
**Duration:** 3-4 hours
**Agent:** frontend-dev
**Priority:** Medium
**Dependencies:** 4.1.3

**Implementation Steps:**
1. Store graph state in URL params:
   ```typescript
   // /ontology?zoom=2.5&rotation=45,30,0&selected=AI-0001
   export function useGraphURLState() {
       const [searchParams, setSearchParams] = useSearchParams();

       const graphState = {
           zoom: parseFloat(searchParams.get('zoom') || '1'),
           rotation: searchParams.get('rotation')?.split(',').map(Number) || [0,0,0],
           selectedNode: searchParams.get('selected') || null,
       };

       const updateGraphState = (updates: Partial<typeof graphState>) => {
           const newParams = new URLSearchParams(searchParams);
           if (updates.zoom) newParams.set('zoom', updates.zoom.toString());
           if (updates.rotation) newParams.set('rotation', updates.rotation.join(','));
           if (updates.selectedNode) newParams.set('selected', updates.selectedNode);
           setSearchParams(newParams);
       };

       return [graphState, updateGraphState] as const;
   }
   ```
2. Sync URL with graph viewport
3. Enable shareable graph views

**Success Criteria:**
- [ ] Graph state persists in URL
- [ ] Shared URLs restore exact view
- [ ] Browser back/forward works for graph navigation
- [ ] URL updates don't cause re-renders

**Testing:**
```bash
npm test -- useGraphURLState.test.ts
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/hooks/useGraphURLState.ts`

---

## Task 4.2: PageRenderer Component (16-24 hours)

### Subtask 4.2.1: Logseq Markdown Parser (React)
**Duration:** 6-8 hours
**Agent:** coder
**Priority:** Critical
**Dependencies:** 4.1.4

**Implementation Steps:**
1. Install markdown dependencies:
   ```bash
   npm install marked react-markdown remark-gfm rehype-raw
   ```
2. Create `src/components/PageRenderer/MarkdownRenderer.tsx`:
   ```typescript
   import ReactMarkdown from 'react-markdown';
   import remarkGfm from 'remark-gfm';
   import rehypeRaw from 'rehype-raw';
   import { WikiLink } from './WikiLink';
   import { BlockReference } from './BlockReference';
   import { OntologyBlock } from './OntologyBlock';

   export function MarkdownRenderer({ content }: { content: string }) {
       return (
           <ReactMarkdown
               remarkPlugins={[remarkGfm]}
               rehypePlugins={[rehypeRaw]}
               components={{
                   a: WikiLink,  // Handle [[wiki links]]
                   code: CodeBlock,
                   // Custom components for Logseq syntax
               }}
           >
               {content}
           </ReactMarkdown>
       );
   }
   ```
3. Implement custom renderers:
   - `WikiLink.tsx` - Converts `[[Page Name]]` to `<Link to="/page/Page Name">`
   - `BlockReference.tsx` - Renders `((block-id))` with embed
   - `OntologyBlock.tsx` - Formats ontology metadata nicely

**Success Criteria:**
- [ ] Renders Logseq markdown correctly
- [ ] Wiki links navigable
- [ ] Code blocks syntax highlighted
- [ ] Tables, lists, images work
- [ ] Ontology blocks formatted

**Testing:**
```bash
npm test -- MarkdownRenderer.test.tsx
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/components/PageRenderer/MarkdownRenderer.tsx`
- `publishing-tools/WasmVOWL/modern/src/components/PageRenderer/WikiLink.tsx`
- `publishing-tools/WasmVOWL/modern/src/components/PageRenderer/BlockReference.tsx`
- `publishing-tools/WasmVOWL/modern/src/components/PageRenderer/OntologyBlock.tsx`

---

### Subtask 4.2.2: Page Data Fetching
**Duration:** 4-6 hours
**Agent:** coder
**Priority:** High
**Dependencies:** 4.2.1

**Implementation Steps:**
1. Create `src/api/pageService.ts`:
   ```typescript
   export interface PageData {
       title: string;
       content: string;
       properties: Record<string, string>;
       backlinks: string[];
       ontology?: OntologyMetadata;
   }

   export async function fetchPage(pageName: string): Promise<PageData> {
       // Fetch from static JSON (generated by Rust publisher)
       const response = await fetch(`/api/pages/${encodeURIComponent(pageName)}.json`);
       if (!response.ok) throw new Error('Page not found');
       return response.json();
   }

   export async function fetchBacklinks(pageName: string): Promise<string[]> {
       const response = await fetch(`/api/backlinks/${encodeURIComponent(pageName)}.json`);
       return response.json();
   }
   ```
2. Generate static JSON files in Rust publisher (Phase 2 enhancement)
3. Implement caching with React Query:
   ```typescript
   import { useQuery } from '@tanstack/react-query';

   export function usePage(pageName: string) {
       return useQuery({
           queryKey: ['page', pageName],
           queryFn: () => fetchPage(pageName),
           staleTime: 5 * 60 * 1000,  // 5 minutes
       });
   }
   ```

**Success Criteria:**
- [ ] Pages load from static JSON files
- [ ] 404 handling for missing pages
- [ ] Caching prevents redundant fetches
- [ ] Loading states displayed

**Testing:**
```bash
npm test -- pageService.test.ts
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/api/pageService.ts`
- `publishing-tools/WasmVOWL/modern/src/hooks/usePage.ts`

---

### Subtask 4.2.3: PageView Component Integration
**Duration:** 4-6 hours
**Agent:** frontend-dev
**Priority:** High
**Dependencies:** 4.2.2

**Implementation Steps:**
1. Create `src/pages/PageView.tsx`:
   ```typescript
   import { useParams } from 'react-router-dom';
   import { usePage } from '../hooks/usePage';
   import { MarkdownRenderer } from '../components/PageRenderer/MarkdownRenderer';
   import { BacklinksPanel } from '../components/PageRenderer/BacklinksPanel';
   import { MiniGraph } from '../components/PageRenderer/MiniGraph';

   export function PageView() {
       const { pageName } = useParams<{ pageName: string }>();
       const { data: page, isLoading, error } = usePage(pageName!);

       if (isLoading) return <LoadingSpinner />;
       if (error) return <ErrorPage error={error} />;
       if (!page) return <NotFoundPage />;

       return (
           <div className="page-view">
               <header>
                   <h1>{page.title}</h1>
                   {page.properties && <PropertiesTable properties={page.properties} />}
               </header>

               <div className="page-content">
                   <MarkdownRenderer content={page.content} />
               </div>

               {page.ontology && (
                   <aside className="ontology-sidebar">
                       <MiniGraph nodeId={page.ontology.term_id} />
                   </aside>
               )}

               <footer>
                   <BacklinksPanel backlinks={page.backlinks} />
               </footer>
           </div>
       );
   }
   ```
2. Implement layout with sidebar for ontology pages

**Success Criteria:**
- [ ] Pages render correctly
- [ ] Properties displayed
- [ ] Backlinks section works
- [ ] Mini-graph shows for ontology pages
- [ ] Mobile responsive

**Testing:**
```bash
npm test -- PageView.test.tsx
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/pages/PageView.tsx`

---

### Subtask 4.2.4: Mini-Graph Component
**Duration:** 2-4 hours
**Agent:** frontend-dev
**Priority:** Medium
**Dependencies:** 4.2.3

**Implementation Steps:**
1. Create `src/components/PageRenderer/MiniGraph.tsx`:
   ```typescript
   import { Canvas } from '@react-three/fiber';
   import { useWasmSimulation } from '../../hooks/useWasmSimulation';

   export function MiniGraph({ nodeId }: { nodeId: string }) {
       const graph = useGraphStore(state => {
           // Get node + 1-hop neighbors
           const node = state.nodes.get(nodeId);
           const neighbors = state.edges
               .filter(e => e.source === nodeId || e.target === nodeId)
               .flatMap(e => [state.nodes.get(e.source), state.nodes.get(e.target)])
               .filter(Boolean);

           return {
               nodes: [node, ...neighbors],
               edges: state.edges.filter(e => e.source === nodeId || e.target === nodeId),
           };
       });

       return (
           <div className="mini-graph">
               <Canvas camera={{ position: [0, 0, 300], fov: 50 }}>
                   <ambientLight intensity={0.5} />
                   <pointLight position={[10, 10, 10]} />
                   {graph.nodes.map(node => (
                       <ClassNode key={node.id} node={node} scale={0.5} />
                   ))}
                   {graph.edges.map(edge => (
                       <PropertyEdge key={edge.id} edge={edge} />
                   ))}
               </Canvas>
               <button onClick={() => navigate(`/ontology?selected=${nodeId}`)}>
                   View Full Graph
               </button>
           </div>
       );
   }
   ```
2. Style as fixed-size sidebar element

**Success Criteria:**
- [ ] Shows current node + neighbors
- [ ] Interactive (click to expand)
- [ ] "View Full Graph" button works
- [ ] Performance: renders in <100ms

**Testing:**
```bash
npm test -- MiniGraph.test.tsx
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/components/PageRenderer/MiniGraph.tsx`

---

## Task 4.3: Graph Click Navigation (10-14 hours)

### Subtask 4.3.1: Graph-to-Page Navigation Handler
**Duration:** 4-6 hours
**Agent:** frontend-dev
**Priority:** Critical
**Dependencies:** 4.2.4

**Implementation Steps:**
1. Update `src/components/Canvas/GraphScene.tsx`:
   ```typescript
   import { useNavigate } from 'react-router-dom';

   export function GraphScene() {
       const navigate = useNavigate();
       const wasm = useWasmSimulation();

       const handleNodeClick = (event: ThreeEvent<MouseEvent>) => {
           const ray = {
               origin: event.camera.position.toArray(),
               direction: event.raycaster.ray.direction.toArray(),
           };

           const clickedNodeId = wasm.checkNodeClick(ray.origin, ray.direction);
           if (clickedNodeId) {
               const node = useGraphStore.getState().nodes.get(clickedNodeId);
               if (node?.ontology_meta?.preferred_term) {
                   // Navigate to Logseq page
                   navigate(`/page/${node.ontology_meta.preferred_term}`);
               }
           }
       };

       return (
           <Canvas onClick={handleNodeClick}>
               {/* ... */}
           </Canvas>
       );
   }
   ```
2. Handle cases where node has no corresponding page

**Success Criteria:**
- [ ] Clicking ontology node navigates to page
- [ ] URL updates correctly
- [ ] Browser back/forward works
- [ ] Loading state during navigation

**Testing:**
```bash
npm test -- GraphScene.integration.test.tsx
```

**Files Modified:**
- `publishing-tools/WasmVOWL/modern/src/components/Canvas/GraphScene.tsx`

---

### Subtask 4.3.2: Context Menu for Graph Nodes
**Duration:** 3-4 hours
**Agent:** frontend-dev
**Priority:** Medium
**Dependencies:** 4.3.1

**Implementation Steps:**
1. Create `src/components/Canvas/NodeContextMenu.tsx`:
   ```typescript
   export function NodeContextMenu({ nodeId, position, onClose }: Props) {
       const node = useGraphStore(state => state.nodes.get(nodeId));

       return (
           <div
               className="context-menu"
               style={{ top: position.y, left: position.x }}
           >
               <button onClick={() => navigate(`/page/${node.label}`)}>
                   View Page
               </button>
               <button onClick={() => navigate(`/ontology?selected=${nodeId}`)}>
                   Focus in Graph
               </button>
               <button onClick={() => expandNeighbors(nodeId)}>
                   Expand Neighbors
               </button>
               <button onClick={() => hideNode(nodeId)}>
                   Hide Node
               </button>
           </div>
       );
   }
   ```
2. Trigger on right-click or long-press (mobile)

**Success Criteria:**
- [ ] Right-click shows context menu
- [ ] Menu positioned correctly
- [ ] Actions work as expected
- [ ] Menu dismisses on outside click

**Testing:**
```bash
npm test -- NodeContextMenu.test.tsx
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/components/Canvas/NodeContextMenu.tsx`

---

### Subtask 4.3.3: Breadcrumb Navigation
**Duration:** 3-4 hours
**Agent:** frontend-dev
**Priority:** Low
**Dependencies:** 4.3.2

**Implementation Steps:**
1. Create `src/components/Layout/Breadcrumbs.tsx`:
   ```typescript
   import { useLocation, Link } from 'react-router-dom';

   export function Breadcrumbs() {
       const location = useLocation();
       const pathSegments = location.pathname.split('/').filter(Boolean);

       return (
           <nav className="breadcrumbs">
               <Link to="/">Home</Link>
               {pathSegments.map((segment, index) => {
                   const path = '/' + pathSegments.slice(0, index + 1).join('/');
                   return (
                       <React.Fragment key={path}>
                           <span className="separator">/</span>
                           <Link to={path}>{decodeURIComponent(segment)}</Link>
                       </React.Fragment>
                   );
               })}
           </nav>
       );
   }
   ```
2. Integrate into AppLayout

**Success Criteria:**
- [ ] Breadcrumbs show current path
- [ ] Clickable segments navigate
- [ ] Updates on route change
- [ ] Styled consistently

**Testing:**
```bash
npm test -- Breadcrumbs.test.tsx
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/components/Layout/Breadcrumbs.tsx`

---

## Task 4.4: Unified Search (16-24 hours)

### Subtask 4.4.1: Search Index Generation
**Duration:** 6-8 hours
**Agent:** backend-dev
**Priority:** High
**Dependencies:** 4.3.3

**Implementation Steps:**
1. Enhance Rust publisher to generate search index:
   ```rust
   // In rust-web-publish/logseq-publisher-rust/src/exporter.rs
   pub fn generate_search_index(graph: &Graph) -> SearchIndex {
       let mut index = SearchIndex::new();

       for (path, page) in graph.pages() {
           index.add_document(Document {
               id: path.clone(),
               title: page.title(),
               content: page.blocks.iter()
                   .map(|b| b.content.as_str())
                   .collect::<Vec<_>>()
                   .join(" "),
               tags: page.tags.clone(),
               ontology_id: page.ontology.as_ref().map(|o| o.term_id.clone()),
           });
       }

       index
   }

   pub fn export_search_index(index: &SearchIndex, output_path: &Path) {
       let json = serde_json::to_string(index).unwrap();
       std::fs::write(output_path, json).unwrap();
   }
   ```
2. Generate `/www/api/search-index.json` during build
3. Optimize index size (stemming, stopwords removal)

**Success Criteria:**
- [ ] Search index includes all pages
- [ ] Index size <2MB (compressed)
- [ ] Contains title, content, tags, ontology ID
- [ ] Build time increase <10 seconds

**Testing:**
```bash
cargo test search_index_generation
```

**Files Modified:**
- `rust-web-publish/logseq-publisher-rust/src/exporter.rs`
- `rust-web-publish/logseq-publisher-rust/src/lib.rs`

---

### Subtask 4.4.2: Client-Side Search with Fuse.js
**Duration:** 5-7 hours
**Agent:** frontend-dev
**Priority:** High
**Dependencies:** 4.4.1

**Implementation Steps:**
1. Install Fuse.js:
   ```bash
   npm install fuse.js
   ```
2. Create `src/services/searchService.ts`:
   ```typescript
   import Fuse from 'fuse.js';

   export interface SearchResult {
       id: string;
       title: string;
       excerpt: string;
       score: number;
       type: 'page' | 'ontology';
   }

   let fuseInstance: Fuse<any> | null = null;

   export async function initializeSearch() {
       const response = await fetch('/api/search-index.json');
       const documents = await response.json();

       fuseInstance = new Fuse(documents, {
           keys: [
               { name: 'title', weight: 2 },
               { name: 'content', weight: 1 },
               { name: 'tags', weight: 1.5 },
           ],
           threshold: 0.4,
           includeScore: true,
           minMatchCharLength: 2,
       });
   }

   export function search(query: string): SearchResult[] {
       if (!fuseInstance) throw new Error('Search not initialized');

       return fuseInstance.search(query, { limit: 50 }).map(result => ({
           id: result.item.id,
           title: result.item.title,
           excerpt: extractExcerpt(result.item.content, query),
           score: result.score || 0,
           type: result.item.ontology_id ? 'ontology' : 'page',
       }));
   }
   ```
3. Load search index on app initialization

**Success Criteria:**
- [ ] Search returns relevant results
- [ ] Results ranked by relevance
- [ ] Search latency <100ms for 2,500 documents
- [ ] Fuzzy matching works

**Testing:**
```bash
npm test -- searchService.test.ts
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/services/searchService.ts`

---

### Subtask 4.4.3: Search UI Component
**Duration:** 4-6 hours
**Agent:** frontend-dev
**Priority:** High
**Dependencies:** 4.4.2

**Implementation Steps:**
1. Create `src/components/Search/SearchBar.tsx`:
   ```typescript
   import { useState, useEffect } from 'react';
   import { useNavigate } from 'react-router-dom';
   import { search } from '../../services/searchService';

   export function SearchBar() {
       const [query, setQuery] = useState('');
       const [results, setResults] = useState<SearchResult[]>([]);
       const [isOpen, setIsOpen] = useState(false);
       const navigate = useNavigate();

       useEffect(() => {
           if (query.length < 2) {
               setResults([]);
               return;
           }

           const debounceTimer = setTimeout(() => {
               const searchResults = search(query);
               setResults(searchResults);
               setIsOpen(true);
           }, 300);

           return () => clearTimeout(debounceTimer);
       }, [query]);

       return (
           <div className="search-bar">
               <input
                   type="text"
                   value={query}
                   onChange={e => setQuery(e.target.value)}
                   placeholder="Search pages and ontology..."
                   onFocus={() => setIsOpen(true)}
               />
               {isOpen && results.length > 0 && (
                   <SearchResults
                       results={results}
                       onSelect={result => {
                           navigate(`/page/${result.title}`);
                           setIsOpen(false);
                       }}
                   />
               )}
           </div>
       );
   }
   ```
2. Create `SearchResults.tsx` dropdown component
3. Add keyboard navigation (arrow keys, enter)

**Success Criteria:**
- [ ] Search bar accessible from navbar
- [ ] Results dropdown appears below input
- [ ] Keyboard navigation works
- [ ] Click result navigates to page
- [ ] Mobile responsive

**Testing:**
```bash
npm test -- SearchBar.test.tsx
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/components/Search/SearchBar.tsx`
- `publishing-tools/WasmVOWL/modern/src/components/Search/SearchResults.tsx`

---

### Subtask 4.4.4: Full Search Page
**Duration:** 1-3 hours
**Agent:** frontend-dev
**Priority:** Low
**Dependencies:** 4.4.3

**Implementation Steps:**
1. Create `src/pages/SearchView.tsx`:
   ```typescript
   import { useSearchParams } from 'react-router-dom';
   import { search } from '../services/searchService';

   export function SearchView() {
       const [searchParams] = useSearchParams();
       const query = searchParams.get('q') || '';
       const results = query ? search(query) : [];

       return (
           <div className="search-view">
               <h1>Search Results for "{query}"</h1>
               <div className="search-stats">
                   {results.length} results in {/* timing */}ms
               </div>
               <div className="search-results">
                   {results.map(result => (
                       <SearchResultCard key={result.id} result={result} />
                   ))}
               </div>
           </div>
       );
   }
   ```
2. Style search results cards
3. Add filters (pages only, ontology only)

**Success Criteria:**
- [ ] Full-page search view works
- [ ] Results paginated (50 per page)
- [ ] Filters apply correctly
- [ ] Shareable search URLs

**Testing:**
```bash
npm test -- SearchView.test.tsx
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/pages/SearchView.tsx`

---

## Task 4.5: Mobile Responsiveness (8-12 hours)

### Subtask 4.5.1: Responsive Layout Breakpoints
**Duration:** 3-4 hours
**Agent:** frontend-dev
**Priority:** High
**Dependencies:** 4.4.4

**Implementation Steps:**
1. Define breakpoints in `src/styles/breakpoints.ts`:
   ```typescript
   export const breakpoints = {
       mobile: '480px',
       tablet: '768px',
       desktop: '1024px',
       wide: '1440px',
   };

   export const media = {
       mobile: `@media (max-width: ${breakpoints.mobile})`,
       tablet: `@media (max-width: ${breakpoints.tablet})`,
       desktop: `@media (min-width: ${breakpoints.desktop})`,
   };
   ```
2. Update components with responsive styles:
   - Sidebar collapses to hamburger on mobile
   - Graph controls move to bottom sheet
   - Search bar full-width on mobile
3. Test on mobile devices (Chrome DevTools)

**Success Criteria:**
- [ ] Layout adapts to screen size
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets ≥44x44px
- [ ] Text readable without zooming

**Testing:**
```bash
npm run test:mobile  # Cypress mobile viewport tests
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/styles/breakpoints.ts`

**Files Modified:**
- Multiple component CSS files

---

### Subtask 4.5.2: Touch Gestures for Graph
**Duration:** 4-6 hours
**Agent:** frontend-dev
**Priority:** Medium
**Dependencies:** 4.5.1

**Implementation Steps:**
1. Install gesture library:
   ```bash
   npm install @use-gesture/react
   ```
2. Update `GraphScene.tsx` with touch handlers:
   ```typescript
   import { useGesture } from '@use-gesture/react';

   export function GraphScene() {
       const bind = useGesture({
           onPinch: ({ offset: [scale] }) => {
               // Zoom with pinch gesture
               camera.zoom = scale;
           },
           onDrag: ({ movement: [mx, my] }) => {
               // Pan with drag
               camera.position.x -= mx * 0.01;
               camera.position.y += my * 0.01;
           },
           onDragEnd: ({ tap, event }) => {
               if (tap) {
                   // Single tap = click
                   handleNodeClick(event);
               }
           },
       });

       return <Canvas {...bind()} />;
   }
   ```
3. Test on real mobile devices

**Success Criteria:**
- [ ] Pinch-to-zoom works
- [ ] Two-finger pan works
- [ ] Tap selects nodes
- [ ] Long-press shows context menu

**Testing:**
Manual testing on iOS and Android devices.

**Files Modified:**
- `publishing-tools/WasmVOWL/modern/src/components/Canvas/GraphScene.tsx`

---

### Subtask 4.5.3: Performance Optimization for Mobile
**Duration:** 1-2 hours
**Agent:** frontend-dev
**Priority:** Low
**Dependencies:** 4.5.2

**Implementation Steps:**
1. Reduce graph complexity on mobile:
   ```typescript
   const isMobile = useMediaQuery('(max-width: 768px)');

   const graphSettings = isMobile
       ? {
           maxNodes: 200,       // vs 1000 on desktop
           maxFPS: 30,          // vs 60 on desktop
           lodEnabled: true,
           qualityLevel: 'low', // Disable shadows, anti-aliasing
         }
       : defaultSettings;
   ```
2. Lazy-load heavy components on mobile
3. Profile performance on low-end devices

**Success Criteria:**
- [ ] 30fps on mobile (60fps desktop)
- [ ] Initial load <5 seconds on 3G
- [ ] No jank during scrolling
- [ ] Battery usage reasonable

**Testing:**
Chrome DevTools Lighthouse (mobile profile).

**Files Modified:**
- `publishing-tools/WasmVOWL/modern/src/stores/useUIStore.ts`

---

## Coordination Protocol

### Pre-Phase Coordination
```bash
npx claude-flow@alpha hooks pre-task --description "Phase 4 React SPA Integration" --agent-id "frontend-dev-002"
npx claude-flow@alpha hooks session-restore --session-id "swarm-phase4"
npx claude-flow@alpha hooks memory-retrieve --key "swarm/phase3/click-event-format"
```

### During Task Execution
```bash
npx claude-flow@alpha hooks post-edit --file "src/router.tsx" --memory-key "swarm/frontend-dev/task-4.1"
npx claude-flow@alpha hooks notify --message "Task 4.2 complete: PageRenderer implemented" --to "planner,coder"
```

### Post-Phase Coordination
```bash
npx claude-flow@alpha hooks post-task --task-id "phase4-react-spa"
npx claude-flow@alpha hooks memory-store --key "swarm/phase4/search-index-location" --value "/api/search-index.json"
npx claude-flow@alpha hooks session-end --export-metrics true
```

---

## Risk Mitigation

### Risk: Search index too large (>5MB)
**Mitigation:** Implement compression, remove stopwords, use stemming
**Contingency:** Server-side search API (requires backend infrastructure)

### Risk: Mobile performance <30fps
**Mitigation:** Reduce graph complexity, disable effects, lazy load
**Contingency:** Provide fallback 2D graph for mobile

### Risk: Routing conflicts with GitHub Pages
**Mitigation:** Use HashRouter instead of BrowserRouter, test early
**Contingency:** Configure GitHub Pages for SPA routing (fallback to index.html)

---

## Handoff to Phase 5

**Deliverables:**
- [ ] Unified React SPA with routing
- [ ] PageRenderer displays Logseq content
- [ ] Graph clicks navigate to pages
- [ ] Unified search across content
- [ ] Mobile responsive

**Memory Keys for Phase 5:**
- `swarm/phase4/routing-structure` - Router configuration
- `swarm/phase4/search-api` - Search service API
- `swarm/phase4/mobile-breakpoints` - Responsive design breakpoints

**Next Phase Dependencies:**
Phase 5 (Testing) requires:
- All Phase 4 components implemented
- Search functionality working
- Mobile optimizations complete

---

**Phase 4 Estimated Completion:** Week 7-9 of project
**Total Hours:** 62-86 hours (2-3 weeks with 1 full-time engineer)
