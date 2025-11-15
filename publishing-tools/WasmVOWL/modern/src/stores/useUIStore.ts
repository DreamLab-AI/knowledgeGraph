/**
 * UI state management
 */

import { create } from 'zustand';
import type { UIState, Notification, ViewportState, GraphSettings } from '../types/ui';

interface UIStore extends UIState {
  viewport: ViewportState;
  settings: GraphSettings;

  // Actions
  toggleSidebar: () => void;
  setSidebarTab: (tab: UIState['sidebarTab']) => void;
  setMenuOpen: (menu: string | null) => void;
  setLoadingProgress: (progress: number, message?: string) => void;
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;

  // Viewport
  setZoom: (zoom: number) => void;
  setRotation: (rotation: [number, number, number]) => void;
  setTarget: (target: [number, number, number]) => void;
  toggleViewMode: () => void;

  // Settings
  updateSettings: (settings: Partial<GraphSettings>) => void;
  resetSettings: () => void;
}

const defaultSettings: GraphSettings = {
  showLabels: true,
  showNodeDetails: true,
  nodeScale: 1.0,
  edgeWidth: 2.0,
  linkDistance: 250,  // Increased to 250 for extreme spacing (was 180)
  chargeStrength: -2000,  // 4x stronger repulsion for massive spread (was -1200)
  gravity: 0.01,  // Minimal center pull (was 0.03)
  friction: 0.6,  // Allow more movement (was 0.75)
  maxFPS: 60,
  lodEnabled: true,
  highContrast: false,
  reducedMotion: false
};

export const useUIStore = create<UIStore>((set) => ({
  // Initial state
  sidebarOpen: true,
  sidebarTab: 'details',
  menuOpen: null,
  loadingProgress: 0,
  loadingMessage: '',
  notifications: [],

  viewport: {
    zoom: 1,
    rotation: [0, 0, 0],
    target: [0, 0, 0],
    mode: '2d'
  },

  settings: defaultSettings,

  // Actions
  toggleSidebar: () => set((state) => ({
    sidebarOpen: !state.sidebarOpen
  })),

  setSidebarTab: (tab) => set({ sidebarTab: tab }),

  setMenuOpen: (menu) => set({ menuOpen: menu }),

  setLoadingProgress: (progress, message) => set({
    loadingProgress: progress,
    loadingMessage: message || ''
  }),

  addNotification: (notification) => set((state) => {
    const id = `notification-${Date.now()}-${Math.random()}`;
    const newNotification = { ...notification, id };

    // Auto-remove after duration (default 5s)
    if (notification.duration !== 0) {
      setTimeout(() => {
        set((s) => ({
          notifications: s.notifications.filter((n) => n.id !== id)
        }));
      }, notification.duration || 5000);
    }

    return {
      notifications: [...state.notifications, newNotification]
    };
  }),

  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter((n) => n.id !== id)
  })),

  // Viewport
  setZoom: (zoom) => set((state) => ({
    viewport: { ...state.viewport, zoom }
  })),

  setRotation: (rotation) => set((state) => ({
    viewport: { ...state.viewport, rotation }
  })),

  setTarget: (target) => set((state) => ({
    viewport: { ...state.viewport, target }
  })),

  toggleViewMode: () => set((state) => ({
    viewport: {
      ...state.viewport,
      mode: state.viewport.mode === '2d' ? '3d' : '2d'
    }
  })),

  // Settings
  updateSettings: (newSettings) => set((state) => ({
    settings: { ...state.settings, ...newSettings }
  })),

  resetSettings: () => set({ settings: defaultSettings })
}));
