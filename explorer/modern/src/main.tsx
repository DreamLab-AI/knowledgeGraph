// VisionClaw v2 build — 2026-04-26T21:45:00Z
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { router } from './router'
import { initializeSearch } from './services/searchService'
import { registerCoiServiceWorker } from './workers/coi-register'
import './index.css'

// Cross-origin isolation for SharedArrayBuffer physics transport (prod-guarded;
// dev + non-isolated contexts fall back to transferable ping-pong). ADR-NG-001 §3.
registerCoiServiceWorker()

// Initialize search service
initializeSearch().catch(console.error)

// Create query client for data fetching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
