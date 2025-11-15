/**
 * Class node visualization component
 */

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';
import { Circle, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useGraphStore } from '../../../stores/useGraphStore';
import { useUIStore } from '../../../stores/useUIStore';
import type { Node } from '../../../types/graph';

interface ClassNodeProps {
  node: Node;
}

export function ClassNode({ node }: ClassNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [mouseDownPos, setMouseDownPos] = useState<{ x: number; y: number } | null>(null);
  const navigate = useNavigate();

  const { selectNode, hoverNode, selectedNode } = useGraphStore();
  const { settings } = useUIStore();

  const isSelected = selectedNode === node.id;

  // Calculate node radius based on properties
  const instanceCount = node.properties?.instances || 0;
  const baseRadius = 1.6; // Further reduced (8 / 5 = 1.6)
  const radius = instanceCount > 0
    ? Math.sqrt(instanceCount) * 0.1 + baseRadius
    : baseRadius;

  const scaledRadius = radius * settings.nodeScale;

  // Node colors
  const getNodeColor = () => {
    if (isSelected) return '#67bc0f'; // Green when selected
    if (hovered) return '#8cd0f0';    // Light blue when hovered
    return '#aaccee';                  // Default blue
  };

  // Event handlers
  const handlePointerDown = (e: any) => {
    // Record mouse position to detect drag vs click
    setMouseDownPos({ x: e.clientX, y: e.clientY });
  };

  const handleClick = (e: any) => {
    e.stopPropagation();

    // Check if this was a drag (mouse moved more than 5px)
    if (mouseDownPos) {
      const dragDistance = Math.sqrt(
        Math.pow(e.clientX - mouseDownPos.x, 2) +
        Math.pow(e.clientY - mouseDownPos.y, 2)
      );

      if (dragDistance > 5) {
        // This was a drag, not a click - ignore
        setMouseDownPos(null);
        return;
      }
    }
    setMouseDownPos(null);

    // If double-click or Ctrl/Cmd-click, navigate to the page
    if (e.detail === 2 || e.metaKey || e.ctrlKey) {
      // Navigate to page using React Router (keeps user in SPA)
      // Use node label as-is (case-sensitive) for proper page lookup
      navigate(`/page/${encodeURIComponent(node.label)}`);
    } else {
      // Single click just selects the node
      selectNode(isSelected ? null : node.id);
    }
  };

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    setHovered(true);
    hoverNode(node.id);
    document.body.style.cursor = 'pointer';
    // Set title for browser tooltip
    if (e.object && e.object.el) {
      e.object.el.title = `${node.label}\n\nDouble-click or Ctrl+Click to open page`;
    }
  };

  const handlePointerOut = () => {
    setHovered(false);
    hoverNode(null);
    document.body.style.cursor = 'auto';
  };

  // Smooth position interpolation
  useFrame(() => {
    if (meshRef.current && !node.pinned) {
      const targetPos = new THREE.Vector3(
        node.position.x,
        node.position.y,
        node.position.z
      );

      meshRef.current.position.lerp(targetPos, 0.1);
    }
  });

  return (
    <group>
      {/* Node circle */}
      <Circle
        ref={meshRef}
        args={[scaledRadius, 32]}
        position={[node.position.x, node.position.y, node.position.z]}
        onPointerDown={handlePointerDown}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <meshBasicMaterial
          color={getNodeColor()}
          transparent
          opacity={node.opacity || 1}
        />
      </Circle>

      {/* Node border */}
      <Circle
        args={[scaledRadius + 2, 32]}
        position={[node.position.x, node.position.y, node.position.z - 0.1]}
      >
        <meshBasicMaterial
          color={isSelected ? '#67bc0f' : '#333'}
          transparent
          opacity={isSelected ? 0.5 : 0.2}
          side={THREE.DoubleSide}
        />
      </Circle>

      {/* Node label */}
      {settings.showLabels && (
        <Text
          position={[
            node.position.x,
            node.position.y - scaledRadius - 3,
            node.position.z + 1
          ]}
          fontSize={1.4}
          color="#333"
          anchorX="center"
          anchorY="middle"
          maxWidth={scaledRadius * 4}
          textAlign="center"
        >
          {node.label}
        </Text>
      )}

      {/* Instance count indicator */}
      {settings.showNodeDetails && instanceCount > 0 && (
        <Text
          position={[node.position.x, node.position.y, node.position.z + 2]}
          fontSize={1.0}
          color="#666"
          anchorX="center"
          anchorY="middle"
        >
          {instanceCount}
        </Text>
      )}

      {/* Selection ring */}
      {isSelected && (
        <Circle
          args={[scaledRadius + 8, 32]}
          position={[node.position.x, node.position.y, node.position.z - 0.2]}
        >
          <meshBasicMaterial
            color="#67bc0f"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </Circle>
      )}

      {/* Hover effect */}
      {hovered && !isSelected && (
        <Circle
          args={[scaledRadius + 5, 32]}
          position={[node.position.x, node.position.y, node.position.z - 0.15]}
        >
          <meshBasicMaterial
            color="#8cd0f0"
            transparent
            opacity={0.2}
            side={THREE.DoubleSide}
          />
        </Circle>
      )}
    </group>
  );
}
