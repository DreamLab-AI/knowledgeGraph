/**
 * Debug panel for force simulation debugging
 */

import { useDebugControls } from '../../hooks/useDebugControls';
import './DebugPanel.css';

export function DebugPanel() {
  const {
    isOpen,
    setIsOpen,
    config,
    updateConfig,
    enableAll,
    disableAll,
    logCurrentDistribution,
    exportPositions,
  } = useDebugControls();

  if (!isOpen) {
    return (
      <button
        className="debug-panel-toggle"
        onClick={() => setIsOpen(true)}
        title="Open debug panel"
      >
        🐛 Debug
      </button>
    );
  }

  return (
    <div className="debug-panel">
      <div className="debug-panel-header">
        <h3>🐛 Force Simulation Debug</h3>
        <button onClick={() => setIsOpen(false)}>✕</button>
      </div>

      <div className="debug-panel-content">
        {/* Quick Actions */}
        <div className="debug-section">
          <h4>Quick Actions</h4>
          <div className="debug-buttons">
            <button onClick={enableAll}>Enable All</button>
            <button onClick={disableAll}>Disable All</button>
            <button onClick={logCurrentDistribution}>Log Distribution</button>
            <button onClick={exportPositions}>Export Positions</button>
          </div>
        </div>

        {/* Force Logging */}
        <div className="debug-section">
          <h4>Force Logging</h4>
          <label>
            <input
              type="checkbox"
              checked={config.logForces}
              onChange={(e) => updateConfig({ logForces: e.target.checked })}
            />
            Log Forces
          </label>
          <label>
            <input
              type="checkbox"
              checked={config.logRepulsion}
              onChange={(e) => updateConfig({ logRepulsion: e.target.checked })}
            />
            Log Repulsion
          </label>
          <label>
            <input
              type="checkbox"
              checked={config.logAttraction}
              onChange={(e) => updateConfig({ logAttraction: e.target.checked })}
            />
            Log Attraction
          </label>
          <label>
            <input
              type="checkbox"
              checked={config.logCentering}
              onChange={(e) => updateConfig({ logCentering: e.target.checked })}
            />
            Log Centering
          </label>
          <label>
            <input
              type="checkbox"
              checked={config.logBarnesHut}
              onChange={(e) => updateConfig({ logBarnesHut: e.target.checked })}
            />
            Log Barnes-Hut
          </label>
        </div>

        {/* Position & Velocity */}
        <div className="debug-section">
          <h4>Position & Velocity</h4>
          <label>
            <input
              type="checkbox"
              checked={config.logPositions}
              onChange={(e) => updateConfig({ logPositions: e.target.checked })}
            />
            Log Positions
          </label>
          <label>
            <input
              type="checkbox"
              checked={config.logVelocities}
              onChange={(e) => updateConfig({ logVelocities: e.target.checked })}
            />
            Log Velocities
          </label>
          <label>
            <input
              type="checkbox"
              checked={config.logPositionHistory}
              onChange={(e) => updateConfig({ logPositionHistory: e.target.checked })}
            />
            Track Position History
          </label>
        </div>

        {/* Performance */}
        <div className="debug-section">
          <h4>Performance</h4>
          <label>
            <input
              type="checkbox"
              checked={config.logFPS}
              onChange={(e) => updateConfig({ logFPS: e.target.checked })}
            />
            Log FPS
          </label>
          <label>
            <input
              type="checkbox"
              checked={config.logIterations}
              onChange={(e) => updateConfig({ logIterations: e.target.checked })}
            />
            Log Iterations
          </label>
          <label>
            <input
              type="checkbox"
              checked={config.logAlpha}
              onChange={(e) => updateConfig({ logAlpha: e.target.checked })}
            />
            Log Alpha
          </label>
        </div>

        {/* Visualization */}
        <div className="debug-section">
          <h4>Visualization</h4>
          <label>
            <input
              type="checkbox"
              checked={config.showQuadtree}
              onChange={(e) => updateConfig({ showQuadtree: e.target.checked })}
            />
            Show Quadtree
          </label>
          <label>
            <input
              type="checkbox"
              checked={config.showForceVectors}
              onChange={(e) => updateConfig({ showForceVectors: e.target.checked })}
            />
            Show Force Vectors
          </label>
          <label>
            <input
              type="checkbox"
              checked={config.highlightClusters}
              onChange={(e) => updateConfig({ highlightClusters: e.target.checked })}
            />
            Highlight Clusters
          </label>
        </div>

        {/* Settings */}
        <div className="debug-section">
          <h4>Settings</h4>
          <label>
            Log Interval:
            <input
              type="number"
              value={config.logInterval}
              onChange={(e) => updateConfig({ logInterval: parseInt(e.target.value) || 10 })}
              min="1"
              max="100"
            />
          </label>
        </div>

        {/* Info */}
        <div className="debug-section debug-info">
          <p>💡 Open browser console to see logs</p>
          <p>🔍 Use window.wasmvowlDebug for advanced debugging</p>
        </div>
      </div>
    </div>
  );
}
