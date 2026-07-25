import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from './App';
import { LoadingSpinner } from './components/UI/LoadingSpinner';

/**
 * Routes per PRD-NG-001 §4. The explorer lives at `/graph`; the WASM + graph
 * chunks lazy-load ONLY there (ADR §5) — GraphPage is the only route whose
 * import pulls the renderer/worker/WASM. The old `/ontology` path (and its
 * `/ontology/:nodeId`) redirect to `/graph`, preserving any query string so
 * shared deep links keep resolving.
 */

/**
 * Retry a dynamic import once — if the chunk hash changed between deploys
 * (GitHub Pages serves cached index.html referencing old chunk filenames),
 * force a full page reload to pick up the new index.html.
 */
function retryImport<T>(importFn: () => Promise<T>): Promise<T> {
  return importFn().catch(() => {
    const reloaded = sessionStorage.getItem('chunk-reload');
    if (!reloaded) {
      sessionStorage.setItem('chunk-reload', '1');
      window.location.reload();
    }
    sessionStorage.removeItem('chunk-reload');
    return importFn();
  });
}

// Clear the reload flag on successful page load
sessionStorage.removeItem('chunk-reload');

// Lazy load with retry for stale cache recovery.
const HomePage = lazy(() => retryImport(() => import('./pages/HomePage')));
const PageView = lazy(() => retryImport(() => import('./pages/PageView')));
// GraphPage carries the WASM + renderer chunk — kept isolated to /graph only.
const GraphPage = lazy(() => retryImport(() => import('./pages/GraphPage')));
const SearchView = lazy(() => retryImport(() => import('./pages/SearchView')));
const DataPage = lazy(() => retryImport(() => import('./pages/DataPage')));
const AboutPage = lazy(() => retryImport(() => import('./pages/AboutPage')));

function LazyRoute({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>;
}

/** Redirect legacy /ontology(/:nodeId) → /graph, preserving the query string. */
function RedirectToGraph() {
  const location = useLocation();
  return <Navigate to={{ pathname: '/graph', search: location.search }} replace />;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <LazyRoute>
            <HomePage />
          </LazyRoute>
        ),
      },
      {
        path: 'page/:pageName',
        element: (
          <LazyRoute>
            <PageView />
          </LazyRoute>
        ),
      },
      {
        path: 'graph',
        element: (
          <LazyRoute>
            <GraphPage />
          </LazyRoute>
        ),
      },
      // Legacy explorer path → canonical /graph.
      { path: 'ontology', element: <RedirectToGraph /> },
      { path: 'ontology/:nodeId', element: <RedirectToGraph /> },
      {
        path: 'search',
        element: (
          <LazyRoute>
            <SearchView />
          </LazyRoute>
        ),
      },
      {
        path: 'data',
        element: (
          <LazyRoute>
            <DataPage />
          </LazyRoute>
        ),
      },
      {
        path: 'about',
        element: (
          <LazyRoute>
            <AboutPage />
          </LazyRoute>
        ),
      },
    ],
  },
]);
