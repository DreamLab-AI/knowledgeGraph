import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AppLayout } from './components/Layout/AppLayout';
import { LoadingSpinner } from './components/UI/LoadingSpinner';

// Lazy load route components for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const PageView = lazy(() => import('./pages/PageView'));
const OntologyView = lazy(() => import('./pages/OntologyView'));
const SearchView = lazy(() => import('./pages/SearchView'));

// Wrapper component for lazy-loaded routes
function LazyRoute({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
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
        path: 'ontology',
        element: (
          <LazyRoute>
            <OntologyView />
          </LazyRoute>
        ),
        children: [
          {
            path: ':nodeId',
            element: (
              <LazyRoute>
                <OntologyView />
              </LazyRoute>
            ),
          },
        ],
      },
      {
        path: 'search',
        element: (
          <LazyRoute>
            <SearchView />
          </LazyRoute>
        ),
      },
    ],
  },
]);
