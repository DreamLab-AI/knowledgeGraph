/**
 * Debug configuration and feature flags
 */

export interface DebugConfig {
  // Force simulation logging
  logForces: boolean;
  logPositions: boolean;
  logVelocities: boolean;
  logAlpha: boolean;

  // Detailed breakdowns
  logRepulsion: boolean;
  logAttraction: boolean;
  logCentering: boolean;
  logBarnesHut: boolean;

  // Performance tracking
  logFPS: boolean;
  logIterations: boolean;
  logNodeCount: boolean;

  // Visualization
  showQuadtree: boolean;
  showForceVectors: boolean;
  showVelocityVectors: boolean;
  highlightClusters: boolean;

  // Sampling (log every N iterations)
  logInterval: number;

  // Position tracking
  trackNodes: string[]; // Track specific node IDs
  logPositionHistory: boolean;
  positionHistorySize: number;
}

const DEFAULT_DEBUG_CONFIG: DebugConfig = {
  logForces: false,
  logPositions: false,
  logVelocities: false,
  logAlpha: false,

  logRepulsion: false,
  logAttraction: false,
  logCentering: false,
  logBarnesHut: false,

  logFPS: false,
  logIterations: false,
  logNodeCount: false,

  showQuadtree: false,
  showForceVectors: false,
  showVelocityVectors: false,
  highlightClusters: false,

  logInterval: 10, // Log every 10 iterations by default

  trackNodes: [],
  logPositionHistory: false,
  positionHistorySize: 100,
};

class DebugManager {
  private config: DebugConfig;
  private iteration: number = 0;
  private positionHistory: Map<string, Array<{x: number, y: number, iteration: number}>> = new Map();

  constructor() {
    // Check localStorage for saved config
    const saved = localStorage.getItem('wasmvowl-debug-config');
    this.config = saved ? { ...DEFAULT_DEBUG_CONFIG, ...JSON.parse(saved) } : { ...DEFAULT_DEBUG_CONFIG };

    // Check URL params for quick enable
    const params = new URLSearchParams(window.location.search);
    if (params.get('debug') === 'true') {
      this.enableAllLogging();
    }
  }

  get(): DebugConfig {
    return this.config;
  }

  set(config: Partial<DebugConfig>) {
    this.config = { ...this.config, ...config };
    localStorage.setItem('wasmvowl-debug-config', JSON.stringify(this.config));
  }

  enableAllLogging() {
    this.set({
      logForces: true,
      logPositions: true,
      logVelocities: true,
      logAlpha: true,
      logRepulsion: true,
      logAttraction: true,
      logCentering: true,
      logBarnesHut: true,
      logFPS: true,
      logIterations: true,
      logNodeCount: true,
    });
  }

  disableAllLogging() {
    this.set({ ...DEFAULT_DEBUG_CONFIG });
  }

  shouldLog(): boolean {
    return this.iteration % this.config.logInterval === 0;
  }

  incrementIteration() {
    this.iteration++;
  }

  resetIteration() {
    this.iteration = 0;
  }

  trackPosition(nodeId: string, x: number, y: number) {
    if (!this.config.logPositionHistory) return;

    if (!this.positionHistory.has(nodeId)) {
      this.positionHistory.set(nodeId, []);
    }

    const history = this.positionHistory.get(nodeId)!;
    history.push({ x, y, iteration: this.iteration });

    // Keep only last N positions
    if (history.length > this.config.positionHistorySize) {
      history.shift();
    }
  }

  getPositionHistory(nodeId: string) {
    return this.positionHistory.get(nodeId) || [];
  }

  calculateNodeDistribution(nodes: Array<{x: number, y: number}>) {
    if (nodes.length === 0) return null;

    // Calculate centroid
    const centroid = {
      x: nodes.reduce((sum, n) => sum + n.x, 0) / nodes.length,
      y: nodes.reduce((sum, n) => sum + n.y, 0) / nodes.length,
    };

    // Calculate distances from centroid
    const distances = nodes.map(n =>
      Math.sqrt(Math.pow(n.x - centroid.x, 2) + Math.pow(n.y - centroid.y, 2))
    );

    // Calculate statistics
    const minDist = Math.min(...distances);
    const maxDist = Math.max(...distances);
    const avgDist = distances.reduce((sum, d) => sum + d, 0) / distances.length;
    const stdDev = Math.sqrt(
      distances.reduce((sum, d) => sum + Math.pow(d - avgDist, 2), 0) / distances.length
    );

    // Count nodes in clustering zones
    const clustered = distances.filter(d => d < 100).length;
    const spread = distances.filter(d => d > 500).length;

    return {
      centroid,
      minDist,
      maxDist,
      avgDist,
      stdDev,
      clusteredCount: clustered,
      spreadCount: spread,
      clusteringPercentage: (clustered / nodes.length) * 100,
      spreadPercentage: (spread / nodes.length) * 100,
    };
  }

  logDistribution(label: string, nodes: Array<{x: number, y: number}>) {
    const stats = this.calculateNodeDistribution(nodes);
    if (!stats) return;

    console.group(`📊 ${label} - Node Distribution (n=${nodes.length})`);
    console.log(`Centroid: (${stats.centroid.x.toFixed(1)}, ${stats.centroid.y.toFixed(1)})`);
    console.log(`Distance from center: min=${stats.minDist.toFixed(1)}, max=${stats.maxDist.toFixed(1)}, avg=${stats.avgDist.toFixed(1)}, σ=${stats.stdDev.toFixed(1)}`);
    console.log(`Clustering: ${stats.clusteredCount} nodes within 100 units (${stats.clusteringPercentage.toFixed(1)}%)`);
    console.log(`Spread: ${stats.spreadCount} nodes beyond 500 units (${stats.spreadPercentage.toFixed(1)}%)`);

    // Warning if too clustered
    if (stats.clusteringPercentage > 50) {
      console.warn(`⚠️ CLUSTERING DETECTED: ${stats.clusteringPercentage.toFixed(1)}% of nodes within 100 units of center!`);
    }

    console.groupEnd();
  }
}

export const debugManager = new DebugManager();

// Expose to window for console access
if (typeof window !== 'undefined') {
  (window as any).wasmvowlDebug = debugManager;
}
