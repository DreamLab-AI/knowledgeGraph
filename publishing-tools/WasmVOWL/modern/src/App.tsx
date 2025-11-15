/**
 * Main application component
 */

import { useState, useEffect } from 'react';
import { GraphCanvas } from './components/Canvas/GraphCanvas';
import { FileDropZone } from './components/UI/FileDropZone';
import { TopMenuBar } from './components/UI/TopMenuBar';
import { Sidebar } from './components/UI/Sidebar';
import { NotificationContainer } from './components/UI/NotificationContainer';
import { NodeDetailsPanel } from './components/UI/NodeDetailsPanel';
import { DebugPanel } from './components/UI/DebugPanel';
import { useGraphStore } from './stores/useGraphStore';
import { useUIStore } from './stores/useUIStore';
import type { OntologyData } from './types/ontology';
import './App.css';

function App() {
  const [hasData, setHasData] = useState(false);
  const [isAutoLoading, setIsAutoLoading] = useState(true);
  const nodeCount = useGraphStore((state) => state.nodes.size);
  const loadOntology = useGraphStore((state) => state.loadOntology);
  const addNotification = useUIStore((state) => state.addNotification);

  // Auto-load ontology.json on startup
  useEffect(() => {
    const autoLoadOntology = async () => {
      try {
        // Use relative path which will work with Vite's base setting
        const response = await fetch('./data/ontology.json');
        if (!response.ok) {
          throw new Error('Default ontology not found');
        }

        const data = await response.json();

        // Validate basic structure
        if (!data.class || !Array.isArray(data.class)) {
          throw new Error('Invalid ontology format');
        }

        const ontology: OntologyData = {
          header: data.header,
          namespace: data.namespace,
          class: data.class,
          property: data.property || [],
          datatype: data.datatype,
          classAttribute: data.classAttribute,
          propertyAttribute: data.propertyAttribute
        };

        loadOntology(ontology);
        setHasData(true);

        addNotification({
          type: 'success',
          message: `Loaded ${ontology.class.length} classes and ${ontology.property?.length || 0} properties`,
          duration: 3000
        });
      } catch (err) {
        console.warn('Failed to auto-load default ontology:', err);
        // Silently fail - user can still manually load files
      } finally {
        setIsAutoLoading(false);
      }
    };

    autoLoadOntology();
  }, [loadOntology, addNotification]);

  // Show FileDropZone if no data is loaded
  const handleFileLoaded = () => {
    setHasData(true);
  };

  const hasLoadedData = hasData && nodeCount > 0;

  return (
    <div className="app">
      <header className="app-header">
        <h1>WebVOWL Modern</h1>
        <p>High-performance ontology visualization with React Three Fiber + Rust/WASM</p>
      </header>

      {hasLoadedData && <TopMenuBar />}

      <main className="app-main">
        {isAutoLoading ? (
          <div className="loading-screen">
            <div className="spinner" />
            <p>Loading ontology...</p>
          </div>
        ) : !hasLoadedData ? (
          <FileDropZone onFileLoaded={handleFileLoaded} />
        ) : (
          <>
            <GraphCanvas />
            <Sidebar />
            <NodeDetailsPanel />
          </>
        )}
      </main>

      {hasLoadedData && (
        <footer className="app-footer">
          <span>Made with React Three Fiber + Rust/WASM</span>
        </footer>
      )}

      <NotificationContainer />
      <DebugPanel />
    </div>
  );
}

export default App;
