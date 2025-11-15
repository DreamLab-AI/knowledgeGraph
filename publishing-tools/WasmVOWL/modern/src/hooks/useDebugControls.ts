/**
 * Debug controls hook for force simulation debugging
 */

import { useState, useCallback, useEffect } from 'react';
import { debugManager } from '../config/debug';
import { useGraphStore } from '../stores/useGraphStore';

export function useDebugControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState(debugManager.get());
  const nodes = useGraphStore((state) => Array.from(state.nodes.values()));

  useEffect(() => {
    // Update config when it changes
    const interval = setInterval(() => {
      setConfig(debugManager.get());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const updateConfig = useCallback((updates: Partial<typeof config>) => {
    debugManager.set(updates);
    setConfig(debugManager.get());
  }, []);

  const enableAll = useCallback(() => {
    debugManager.enableAllLogging();
    setConfig(debugManager.get());
  }, []);

  const disableAll = useCallback(() => {
    debugManager.disableAllLogging();
    setConfig(debugManager.get());
  }, []);

  const logCurrentDistribution = useCallback(() => {
    if (nodes.length === 0) {
      console.warn('No nodes to analyze');
      return;
    }

    const positions = nodes.map(n => ({ x: n.visual.x, y: n.visual.y }));
    debugManager.logDistribution('Current State', positions);
  }, [nodes]);

  const exportPositions = useCallback(() => {
    if (nodes.length === 0) {
      console.warn('No nodes to export');
      return;
    }

    const data = {
      timestamp: new Date().toISOString(),
      nodeCount: nodes.length,
      nodes: nodes.map(n => ({
        id: n.id,
        label: n.label,
        x: n.visual.x,
        y: n.visual.y,
        vx: n.visual.vx,
        vy: n.visual.vy,
      })),
      statistics: debugManager.calculateNodeDistribution(
        nodes.map(n => ({ x: n.visual.x, y: n.visual.y }))
      ),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `positions-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [nodes]);

  return {
    isOpen,
    setIsOpen,
    config,
    updateConfig,
    enableAll,
    disableAll,
    logCurrentDistribution,
    exportPositions,
  };
}
