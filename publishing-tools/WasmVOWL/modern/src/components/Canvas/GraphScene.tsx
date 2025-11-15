/**
 * Main graph scene containing nodes and edges
 */

import { Html } from '@react-three/drei';
import { useGraphStore } from '../../stores/useGraphStore';
import { useWasmSimulation } from '../../hooks/useWasmSimulation';
import { ClassNode } from './Nodes/ClassNode';
import { PropertyEdge } from './Edges/PropertyEdge';

export function GraphScene() {
  const { nodes, edges, filteredNodes, filteredEdges } = useGraphStore();
  const { isRunning, alpha } = useWasmSimulation({ autoStart: true });

  // Filter visible elements
  const visibleNodes = Array.from(nodes.values()).filter((node) =>
    filteredNodes.has(node.id)
  );

  const visibleEdges = Array.from(edges.values()).filter((edge) =>
    filteredEdges.has(edge.id)
  );

  return (
    <group>
      {/* Render edges first (below nodes) */}
      {visibleEdges.map((edge) => (
        <PropertyEdge key={edge.id} edge={edge} />
      ))}

      {/* Render nodes */}
      {visibleNodes.map((node) => (
        <ClassNode key={node.id} node={node} />
      ))}

      {/* Simulation status overlay */}
      {isRunning && (
        <Html
          position={[0, 250, 0]}
          center
          style={{
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '14px',
              fontFamily: 'system-ui, sans-serif'
            }}
          >
            Simulating... {(alpha * 100).toFixed(0)}%
          </div>
        </Html>
      )}

      {/* Empty state */}
      {nodes.size === 0 && (
        <Html center>
          <div
            style={{
              textAlign: 'center',
              color: '#999',
              fontSize: '18px',
              fontFamily: 'system-ui, sans-serif'
            }}
          >
            <h2>No ontology loaded</h2>
            <p>Drop a JSON file or select from the menu</p>
          </div>
        </Html>
      )}
    </group>
  );
}
