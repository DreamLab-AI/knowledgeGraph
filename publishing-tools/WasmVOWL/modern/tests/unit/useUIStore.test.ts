/**
 * Unit tests for useUIStore
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { useUIStore } from '@/stores/useUIStore';
import type { GraphSettings } from '@/types/ui';

describe('useUIStore', () => {
  beforeEach(() => {
    // Reset to initial state
    const store = useUIStore.getState();
    store.resetSettings();
  });

  describe('Initial State', () => {
    it('should have default view mode as 2d', () => {
      const { viewport } = useUIStore.getState();
      expect(viewport.mode).toBe('2d');
    });

    it('should have default viewport state', () => {
      const { viewport } = useUIStore.getState();
      expect(viewport.zoom).toBe(1);
      expect(viewport.rotation).toEqual([0, 0, 0]);
      expect(viewport.target).toEqual([0, 0, 0]);
    });

    it('should have default settings', () => {
      const { settings } = useUIStore.getState();
      expect(settings.linkDistance).toBeDefined();
      expect(settings.chargeStrength).toBeDefined();
      expect(settings.gravity).toBeDefined();
    });

    it('should have zero loading progress initially', () => {
      const { loadingProgress } = useUIStore.getState();
      expect(loadingProgress).toBe(0);
    });

    it('should have empty notifications initially', () => {
      const { notifications } = useUIStore.getState();
      expect(notifications).toEqual([]);
    });
  });

  describe('View Mode', () => {
    it('should toggle view mode from 2d to 3d', () => {
      const store = useUIStore.getState();
      store.toggleViewMode();

      const { viewport } = useUIStore.getState();
      expect(viewport.mode).toBe('3d');
    });

    it('should toggle view mode from 3d to 2d', () => {
      const store = useUIStore.getState();
      store.toggleViewMode(); // 2d -> 3d
      store.toggleViewMode(); // 3d -> 2d

      const { viewport } = useUIStore.getState();
      expect(viewport.mode).toBe('2d');
    });
  });

  describe('Viewport Operations', () => {
    it('should set zoom level', () => {
      const store = useUIStore.getState();
      store.setZoom(2.5);

      const { viewport } = useUIStore.getState();
      expect(viewport.zoom).toBe(2.5);
    });

    it('should set rotation', () => {
      const store = useUIStore.getState();
      store.setRotation([45, 90, 0]);

      const { viewport } = useUIStore.getState();
      expect(viewport.rotation).toEqual([45, 90, 0]);
    });

    it('should set target', () => {
      const store = useUIStore.getState();
      store.setTarget([100, 200, 0]);

      const { viewport } = useUIStore.getState();
      expect(viewport.target).toEqual([100, 200, 0]);
    });
  });

  describe('Settings Operations', () => {
    it('should update settings', () => {
      const store = useUIStore.getState();
      store.updateSettings({ linkDistance: 150 });

      const { settings } = useUIStore.getState();
      expect(settings.linkDistance).toBe(150);
    });

    it('should update multiple settings', () => {
      const store = useUIStore.getState();
      const updates: Partial<GraphSettings> = {
        linkDistance: 150,
        chargeStrength: -500,
        gravity: 0.2
      };

      store.updateSettings(updates);

      const { settings } = useUIStore.getState();
      expect(settings.linkDistance).toBe(150);
      expect(settings.chargeStrength).toBe(-500);
      expect(settings.gravity).toBe(0.2);
    });

    it('should reset settings to defaults', () => {
      const store = useUIStore.getState();

      // Modify settings
      store.updateSettings({ linkDistance: 250, chargeStrength: -1000 });

      // Reset
      store.resetSettings();

      const { settings } = useUIStore.getState();
      // Settings should be reset to defaults
      expect(settings.linkDistance).toBe(100);
      expect(settings.chargeStrength).toBe(-300);
    });
  });

  describe('Loading State', () => {
    it('should set loading progress', () => {
      const store = useUIStore.getState();
      store.setLoadingProgress(50, 'Loading...');

      const { loadingProgress, loadingMessage } = useUIStore.getState();
      expect(loadingProgress).toBe(50);
      expect(loadingMessage).toBe('Loading...');
    });

    it('should set loading progress without message', () => {
      const store = useUIStore.getState();
      store.setLoadingProgress(75);

      const { loadingProgress, loadingMessage } = useUIStore.getState();
      expect(loadingProgress).toBe(75);
      expect(loadingMessage).toBe('');
    });
  });

  describe('Notifications', () => {
    it('should add a notification', () => {
      const store = useUIStore.getState();
      store.addNotification({
        type: 'info',
        message: 'Test notification',
        duration: 0 // Don't auto-remove
      });

      const { notifications } = useUIStore.getState();
      expect(notifications).toHaveLength(1);
      expect(notifications[0].message).toBe('Test notification');
    });

    it('should add multiple notifications', () => {
      const store = useUIStore.getState();
      store.addNotification({
        type: 'info',
        message: 'First notification',
        duration: 0
      });
      store.addNotification({
        type: 'success',
        message: 'Second notification',
        duration: 0
      });

      const { notifications } = useUIStore.getState();
      expect(notifications).toHaveLength(2);
    });

    it('should remove a notification by id', () => {
      const store = useUIStore.getState();
      store.addNotification({
        type: 'info',
        message: 'Test notification',
        duration: 0
      });

      const notifications = useUIStore.getState().notifications;
      const notificationId = notifications[0].id;

      const storeAgain = useUIStore.getState();
      storeAgain.removeNotification(notificationId);

      const finalNotifications = useUIStore.getState().notifications;
      expect(finalNotifications).toHaveLength(0);
    });

    it('should handle different notification types', () => {
      const store = useUIStore.getState();
      const types = ['info', 'success', 'warning', 'error'] as const;

      types.forEach((type) => {
        store.addNotification({
          type,
          message: `${type} notification`,
          duration: 0
        });
      });

      const { notifications } = useUIStore.getState();
      expect(notifications).toHaveLength(4);
      expect(notifications[0].type).toBe('info');
      expect(notifications[1].type).toBe('success');
      expect(notifications[2].type).toBe('warning');
      expect(notifications[3].type).toBe('error');
    });
  });

  describe('Sidebar State', () => {
    it('should toggle sidebar', () => {
      const store = useUIStore.getState();
      const initialState = store.sidebarOpen;

      store.toggleSidebar();
      expect(useUIStore.getState().sidebarOpen).toBe(!initialState);

      store.toggleSidebar();
      expect(useUIStore.getState().sidebarOpen).toBe(initialState);
    });

    it('should set sidebar tab', () => {
      const store = useUIStore.getState();
      store.setSidebarTab('filters');

      expect(useUIStore.getState().sidebarTab).toBe('filters');
    });
  });

  describe('Menu State', () => {
    it('should set active menu', () => {
      const store = useUIStore.getState();
      store.setMenuOpen('export');

      const { menuOpen } = useUIStore.getState();
      expect(menuOpen).toBe('export');
    });

    it('should clear active menu', () => {
      const store = useUIStore.getState();
      store.setMenuOpen('export');
      store.setMenuOpen(null);

      const { menuOpen } = useUIStore.getState();
      expect(menuOpen).toBeNull();
    });
  });
});
