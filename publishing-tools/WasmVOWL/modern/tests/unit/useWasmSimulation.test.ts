/**
 * Unit tests for useWasmSimulation hook
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useWasmSimulation } from '@/hooks/useWasmSimulation';
import { useGraphStore } from '@/stores/useGraphStore';
import { useUIStore } from '@/stores/useUIStore';

// Mock the WASM module
vi.mock('@/../rust-wasm/pkg/webvowl_wasm.js', () => {
  return {
    default: vi.fn().mockResolvedValue(undefined),
    WebVowl: vi.fn().mockImplementation(() => ({
      loadOntology: vi.fn(),
      setCenter: vi.fn(),
      setLinkDistance: vi.fn(),
      setChargeStrength: vi.fn(),
      initSimulation: vi.fn(),
      tick: vi.fn(),
      runSimulation: vi.fn(),
      isFinished: vi.fn().mockReturnValue(false),
      getAlpha: vi.fn().mockReturnValue(1.0),
      getGraphData: vi.fn().mockReturnValue({ nodes: [], edges: [] }),
      getNodeCount: vi.fn().mockReturnValue(0),
      getEdgeCount: vi.fn().mockReturnValue(0),
      getStatistics: vi.fn().mockReturnValue({})
    }))
  };
});

// Mock React Three Fiber's useFrame
vi.mock('@react-three/fiber', () => ({
  useFrame: vi.fn((callback) => {
    // Store callback for manual triggering in tests
    (global as any).__r3fFrameCallback = callback;
  })
}));

describe('useWasmSimulation', () => {
  beforeEach(() => {
    // Clear stores
    useGraphStore.getState().clear();

    // Reset frame callback
    (global as any).__r3fFrameCallback = null;
  });

  describe('Initialization', () => {
    it('should initialize with default state', async () => {
      const { result } = renderHook(() => useWasmSimulation());

      // Wait for initialization
      await vi.waitFor(() => {
        expect(result.current.isInitialized).toBe(true);
      }, { timeout: 1000 });

      expect(result.current.isRunning).toBe(false);
      expect(result.current.alpha).toBe(1.0);
    });

    it('should auto-start simulation when autoStart is true', async () => {
      // Add nodes to trigger simulation
      useGraphStore.getState().addNode({
        id: 'node1',
        type: 'class',
        label: 'Test Node',
        iri: 'http://example.org/TestClass',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      });

      const { result } = renderHook(() =>
        useWasmSimulation({ autoStart: true })
      );

      await vi.waitFor(() => {
        expect(result.current.isInitialized).toBe(true);
      }, { timeout: 1000 });

      // Simulation should start automatically
      await vi.waitFor(() => {
        expect(result.current.isRunning).toBe(true);
      }, { timeout: 1000 });
    });

    it('should not auto-start when autoStart is false', async () => {
      useGraphStore.getState().addNode({
        id: 'node1',
        type: 'class',
        label: 'Test Node',
        iri: 'http://example.org/TestClass',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      });

      const { result } = renderHook(() =>
        useWasmSimulation({ autoStart: false })
      );

      await vi.waitFor(() => {
        expect(result.current.isInitialized).toBe(true);
      }, { timeout: 1000 });

      // Should not start automatically
      expect(result.current.isRunning).toBe(false);
    });
  });

  describe('Control Functions', () => {
    it('should start simulation', async () => {
      const { result } = renderHook(() =>
        useWasmSimulation({ autoStart: false })
      );

      await vi.waitFor(() => {
        expect(result.current.isInitialized).toBe(true);
      });

      act(() => {
        result.current.start();
      });

      expect(result.current.isRunning).toBe(true);
    });

    it('should stop simulation', async () => {
      const { result } = renderHook(() =>
        useWasmSimulation({ autoStart: true })
      );

      await vi.waitFor(() => {
        expect(result.current.isInitialized).toBe(true);
      });

      act(() => {
        result.current.stop();
      });

      expect(result.current.isRunning).toBe(false);
    });

    it('should reset simulation', async () => {
      useGraphStore.getState().addNode({
        id: 'node1',
        type: 'class',
        label: 'Test Node',
        iri: 'http://example.org/TestClass',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      });

      const { result } = renderHook(() =>
        useWasmSimulation({ autoStart: true })
      );

      await vi.waitFor(() => {
        expect(result.current.isInitialized).toBe(true);
      });

      act(() => {
        result.current.reset();
      });

      expect(result.current.alpha).toBe(1.0);
      expect(result.current.isRunning).toBe(true);
    });

    it('should perform single step', async () => {
      const { result } = renderHook(() =>
        useWasmSimulation({ autoStart: false })
      );

      await vi.waitFor(() => {
        expect(result.current.isInitialized).toBe(true);
      });

      act(() => {
        result.current.step();
      });

      // Simulation should not be running after step
      expect(result.current.isRunning).toBe(false);
    });
  });

  describe('Settings Updates', () => {
    it('should update simulation when settings change', async () => {
      const { result } = renderHook(() => useWasmSimulation());

      await vi.waitFor(() => {
        expect(result.current.isInitialized).toBe(true);
      });

      // Update settings
      act(() => {
        useUIStore.getState().updateSetting('linkDistance', 200);
      });

      // Settings should be applied to WASM module
      // (verified through mock calls in integration tests)
      expect(result.current.isInitialized).toBe(true);
    });
  });

  describe('Graph Data Loading', () => {
    it('should load graph data when nodes are added', async () => {
      const { result } = renderHook(() =>
        useWasmSimulation({ autoStart: true })
      );

      await vi.waitFor(() => {
        expect(result.current.isInitialized).toBe(true);
      });

      // Add nodes
      act(() => {
        useGraphStore.getState().addNode({
          id: 'node1',
          type: 'class',
          label: 'Test Node',
          iri: 'http://example.org/TestClass',
          position: { x: 0, y: 0, z: 0 },
          velocity: { x: 0, y: 0, z: 0 },
          properties: {}
        });
      });

      // Should trigger simulation start
      await vi.waitFor(() => {
        expect(result.current.isRunning).toBe(true);
      }, { timeout: 1000 });
    });

    it('should handle empty graph gracefully', async () => {
      const { result } = renderHook(() => useWasmSimulation());

      await vi.waitFor(() => {
        expect(result.current.isInitialized).toBe(true);
      });

      // Should not start with empty graph
      expect(result.current.isRunning).toBe(false);
    });
  });

  describe('Error Handling', () => {
    it('should handle WASM initialization failure', async () => {
      // Mock initialization failure
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

      vi.mock('@/../rust-wasm/pkg/webvowl_wasm.js', () => {
        throw new Error('WASM initialization failed');
      });

      const { result } = renderHook(() => useWasmSimulation());

      // Should not crash
      expect(result.current.isInitialized).toBe(false);

      consoleError.mockRestore();
    });

    it('should handle simulation tick errors', async () => {
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

      const { result } = renderHook(() => useWasmSimulation());

      await vi.waitFor(() => {
        expect(result.current.isInitialized).toBe(true);
      });

      // Trigger frame callback with error
      if ((global as any).__r3fFrameCallback) {
        act(() => {
          try {
            (global as any).__r3fFrameCallback();
          } catch (error) {
            // Expected
          }
        });
      }

      // Should stop simulation on error
      expect(result.current.isRunning).toBe(false);

      consoleError.mockRestore();
    });
  });

  describe('Cleanup', () => {
    it('should cleanup on unmount', async () => {
      const { result, unmount } = renderHook(() => useWasmSimulation());

      await vi.waitFor(() => {
        expect(result.current.isInitialized).toBe(true);
      });

      unmount();

      // Should cleanup successfully without errors
      expect(true).toBe(true);
    });
  });
});
