/**
 * uiStore.ts — explorer chrome state (Exploration context, PRD-NG-001 §5/§9a).
 *
 * Selection and hover are NOT here — they live in the renderer-owned
 * `scopeStore` (`selectedInstance` / `hoveredInstance`), the single source of
 * truth the GraphCanvas reads. This store holds only the *chrome* state the
 * renderer does not own: the surviving filter controls (edge-type toggles +
 * edge-label mode, PRD §9a) and the search box. The renderer's edge/label
 * components subscribe here to honour the toggles (see integration note in
 * GraphPage).
 *
 * No graph geometry, no typed arrays — scalars and small display state only.
 */

import { create } from 'zustand';
import type { EdgeLabelMode, EdgeToggles } from '../components/UI/types';

interface ExplorerUiState {
  /** edge-type visibility — the only filter UI that survives (PRD §5). */
  edgeToggles: EdgeToggles;
  /** edge-label mode — off / hover / on (PRD §9a). */
  edgeLabelMode: EdgeLabelMode;

  /** search-within-graph query text. */
  searchQuery: string;
  /** search box expanded / focused. */
  searchOpen: boolean;

  toggleBackbone: () => void;
  toggleRelations: () => void;
  setEdgeLabelMode: (mode: EdgeLabelMode) => void;
  setSearchQuery: (q: string) => void;
  setSearchOpen: (open: boolean) => void;
  resetSearch: () => void;
}

export const useUiStore = create<ExplorerUiState>((set) => ({
  edgeToggles: { backbone: true, relations: true },
  edgeLabelMode: 'hover',
  searchQuery: '',
  searchOpen: false,

  toggleBackbone: () =>
    set((s) => ({ edgeToggles: { ...s.edgeToggles, backbone: !s.edgeToggles.backbone } })),

  toggleRelations: () =>
    set((s) => ({ edgeToggles: { ...s.edgeToggles, relations: !s.edgeToggles.relations } })),

  setEdgeLabelMode: (mode) => set({ edgeLabelMode: mode }),

  setSearchQuery: (q) => set({ searchQuery: q }),

  setSearchOpen: (open) => set({ searchOpen: open }),

  resetSearch: () => set({ searchQuery: '', searchOpen: false }),
}));
