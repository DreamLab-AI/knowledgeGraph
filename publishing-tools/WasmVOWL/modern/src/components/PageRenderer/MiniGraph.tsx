import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useGraphStore } from '../../stores/useGraphStore';
import './MiniGraph.css';

interface MiniGraphProps {
  nodeId: string;
}

export function MiniGraph({ nodeId }: MiniGraphProps) {
  const navigate = useNavigate();
  const nodes = useGraphStore(state => state.nodes);
  const edges = useGraphStore(state => state.edges);

  // Get node and its 1-hop neighbors
  const centralNode = nodes.get(nodeId);
  // Convert edges Map to Array before filtering
  const connectedEdges = Array.from(edges.values()).filter(e => e.source === nodeId || e.target === nodeId);
  const neighborIds = new Set(
    connectedEdges.flatMap(e => [e.source, e.target]).filter(id => id !== nodeId)
  );
  const neighborNodes = Array.from(neighborIds).map(id => nodes.get(id)).filter(Boolean);

  if (!centralNode) {
    return null;
  }

  return (
    <div className="mini-graph">
      <div className="mini-graph-header">
        <h4>Related Concepts</h4>
      </div>
      <div className="mini-graph-canvas">
        <Canvas camera={{ position: [0, 0, 300], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <OrbitControls enablePan={false} enableZoom={false} />

          {/* Central node */}
          <mesh position={[0, 0, 0]}>
            <circleGeometry args={[20, 32]} />
            <meshBasicMaterial color="#4a9eff" />
          </mesh>

          {/* Neighbor nodes in a circle */}
          {neighborNodes.map((node, index) => {
            const angle = (index / neighborNodes.length) * Math.PI * 2;
            const radius = 80;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <mesh key={node?.id} position={[x, y, 0]}>
                <circleGeometry args={[15, 32]} />
                <meshBasicMaterial color="#666" />
              </mesh>
            );
          })}

          {/* Edges */}
          {connectedEdges.slice(0, 10).map((edge, index) => {
            const isSource = edge.source === nodeId;
            const neighborIndex = neighborNodes.findIndex(n => n?.id === (isSource ? edge.target : edge.source));
            if (neighborIndex === -1) return null;

            const angle = (neighborIndex / neighborNodes.length) * Math.PI * 2;
            const radius = 80;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <line key={`${edge.source}-${edge.target}-${index}`}>
                <bufferGeometry>
                  <bufferAttribute
                    attach="attributes-position"
                    count={2}
                    array={new Float32Array([0, 0, 0, x, y, 0])}
                    itemSize={3}
                  />
                </bufferGeometry>
                <lineBasicMaterial color="#444" />
              </line>
            );
          })}
        </Canvas>
      </div>
      <button
        className="view-full-graph-btn"
        onClick={() => navigate(`/ontology?selected=${nodeId}`)}
      >
        View Full Graph →
      </button>
    </div>
  );
}
