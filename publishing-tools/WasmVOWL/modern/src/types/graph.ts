/**
 * Core graph type definitions for WebVOWL
 */

export type NodeType = 'class' | 'datatype' | 'literal' | 'property';
export type EdgeType = 'objectProperty' | 'datatypeProperty' | 'subclass' | 'disjoint';

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Node {
  id: string;
  type: NodeType;
  label: string;
  iri?: string;
  position: Vector3;
  velocity: Vector3;
  properties: Record<string, any>;

  // Visual properties
  color?: string;
  radius?: number;
  opacity?: number;

  // Interaction state
  selected?: boolean;
  hovered?: boolean;
  pinned?: boolean;
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  type: EdgeType;
  label: string;
  properties: Record<string, any>;

  // Visual properties
  color?: string;
  width?: number;
  opacity?: number;

  // Interaction state
  selected?: boolean;
  hovered?: boolean;
}

export interface GraphData {
  nodes: Map<string, Node>;
  edges: Map<string, Edge>;
  metadata?: {
    title?: string;
    description?: string;
    version?: string;
    namespace?: Record<string, string>;
  };
}

export interface GraphFilter {
  type: 'degree' | 'nodeType' | 'edgeType' | 'property';
  config: Record<string, any>;
}

export interface GraphStatistics {
  nodeCount: number;
  edgeCount: number;
  classCounts: Record<string, number>;
  propertyCounts: Record<string, number>;
  maxDegree: number;
  avgDegree: number;
}
