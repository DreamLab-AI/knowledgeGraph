/**
 * Top menu bar component with visualization controls
 */

import { useGraphStore } from '../../stores/useGraphStore';
import { useUIStore } from '../../stores/useUIStore';
import { exportSVG, downloadSVG, exportPNG, downloadPNG } from '../../utils/export';
import './TopMenuBar.css';

export function TopMenuBar() {
  const { statistics, clear, nodes, edges } = useGraphStore();
  const { toggleSidebar, sidebarOpen, toggleViewMode, viewport, updateSettings, settings, addNotification } = useUIStore();

  const handleNewFile = () => {
    if (confirm('Clear current ontology and load a new one?')) {
      clear();
      // App will automatically show FileDropZone
    }
  };

  const handleExportSVG = async () => {
    try {
      addNotification({
        type: 'info',
        message: 'Generating SVG export...',
        duration: 2000
      });

      const svg = exportSVG(nodes, edges, {
        width: 1920,
        height: 1080,
        showLabels: settings.showLabels
      });

      downloadSVG(svg, 'ontology-graph.svg');

      addNotification({
        type: 'success',
        message: 'SVG exported successfully!',
        duration: 3000
      });
    } catch (error) {
      console.error('SVG export failed:', error);
      addNotification({
        type: 'error',
        message: 'Failed to export SVG',
        duration: 5000
      });
    }
  };

  const handleExportPNG = async () => {
    try {
      addNotification({
        type: 'info',
        message: 'Generating PNG export...',
        duration: 2000
      });

      const blob = await exportPNG(nodes, edges, {
        width: 1920,
        height: 1080,
        showLabels: settings.showLabels,
        quality: 0.95
      });

      downloadPNG(blob, 'ontology-graph.png');

      addNotification({
        type: 'success',
        message: 'PNG exported successfully!',
        duration: 3000
      });
    } catch (error) {
      console.error('PNG export failed:', error);
      addNotification({
        type: 'error',
        message: 'Failed to export PNG',
        duration: 5000
      });
    }
  };

  const handleZoomIn = () => {
    useUIStore.getState().setZoom(viewport.zoom * 1.2);
  };

  const handleZoomOut = () => {
    useUIStore.getState().setZoom(viewport.zoom / 1.2);
  };

  const handleResetView = () => {
    useUIStore.getState().setZoom(1);
    useUIStore.getState().setRotation([0, 0, 0]);
    useUIStore.getState().setTarget([0, 0, 0]);
  };

  return (
    <div className="top-menu-bar">
      {/* Left section - File controls */}
      <div className="menu-section">
        <button onClick={handleNewFile} className="menu-button" title="Load new ontology">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>New</span>
        </button>

        <button onClick={handleExportSVG} className="menu-button" title="Export as SVG">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Export SVG</span>
        </button>

        <button onClick={handleExportPNG} className="menu-button" title="Export as PNG">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Export PNG</span>
        </button>
      </div>

      {/* Center section - Statistics */}
      <div className="menu-section stats-section">
        {statistics && (
          <>
            <div className="stat-item">
              <span className="stat-label">Nodes:</span>
              <span className="stat-value">{statistics.nodeCount}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Edges:</span>
              <span className="stat-value">{statistics.edgeCount}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Max Degree:</span>
              <span className="stat-value">{statistics.maxDegree}</span>
            </div>
          </>
        )}
      </div>

      {/* Right section - View controls */}
      <div className="menu-section">
        <button onClick={handleZoomOut} className="menu-button icon-button" title="Zoom out">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
          </svg>
        </button>

        <button onClick={handleZoomIn} className="menu-button icon-button" title="Zoom in">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </button>

        <button onClick={handleResetView} className="menu-button icon-button" title="Reset view">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>

        <button
          onClick={toggleViewMode}
          className={`menu-button icon-button ${viewport.mode === '3d' ? 'active' : ''}`}
          title={viewport.mode === '2d' ? 'Switch to 3D' : 'Switch to 2D'}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span>{viewport.mode.toUpperCase()}</span>
        </button>

        <button
          onClick={() => updateSettings({ showLabels: !settings.showLabels })}
          className={`menu-button icon-button ${settings.showLabels ? 'active' : ''}`}
          title="Toggle labels"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        </button>

        <button
          onClick={toggleSidebar}
          className={`menu-button icon-button ${sidebarOpen ? 'active' : ''}`}
          title="Toggle sidebar"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}
