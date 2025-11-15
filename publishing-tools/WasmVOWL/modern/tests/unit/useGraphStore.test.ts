/**
 * Unit tests for useGraphStore
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { useGraphStore } from '@/stores/useGraphStore';
import type { Node, Edge, GraphFilter } from '@/types/graph';
import type { OntologyData } from '@/types/ontology';

describe('useGraphStore', () => {
  beforeEach(() => {
    const store = useGraphStore.getState();
    store.clear();
  });

  describe('Initial State', () => {
    it('should have empty nodes and edges initially', () => {
      const { nodes, edges } = useGraphStore.getState();
      expect(nodes.size).toBe(0);
      expect(edges.size).toBe(0);
    });

    it('should have no selection initially', () => {
      const { selectedNode, selectedEdge, hoveredNode, hoveredEdge } = useGraphStore.getState();
      expect(selectedNode).toBeNull();
      expect(selectedEdge).toBeNull();
      expect(hoveredNode).toBeNull();
      expect(hoveredEdge).toBeNull();
    });

    it('should have no active filters initially', () => {
      const { activeFilters } = useGraphStore.getState();
      expect(activeFilters).toEqual([]);
    });

    it('should have null statistics initially', () => {
      const { statistics } = useGraphStore.getState();
      expect(statistics).toBeNull();
    });
  });

  describe('Node Operations', () => {
    it('should add a node', () => {
      const store = useGraphStore.getState();
      const node: Node = {
        id: 'node1',
        type: 'class',
        label: 'Test Node',
        iri: 'http://example.org/TestClass',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      };

      store.addNode(node);

      const { nodes } = useGraphStore.getState();
      expect(nodes.size).toBe(1);
      expect(nodes.get('node1')).toEqual(node);
    });

    it('should update a node', () => {
      const store = useGraphStore.getState();
      const node: Node = {
        id: 'node1',
        type: 'class',
        label: 'Original Label',
        iri: 'http://example.org/TestClass',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      };

      store.addNode(node);
      store.updateNode('node1', { label: 'Updated Label' });

      const { nodes } = useGraphStore.getState();
      expect(nodes.get('node1')?.label).toBe('Updated Label');
    });

    it('should remove a node', () => {
      const store = useGraphStore.getState();
      const node: Node = {
        id: 'node1',
        type: 'class',
        label: 'Test Node',
        iri: 'http://example.org/TestClass',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      };

      store.addNode(node);
      store.removeNode('node1');

      const { nodes } = useGraphStore.getState();
      expect(nodes.size).toBe(0);
    });

    it('should update node position', () => {
      const store = useGraphStore.getState();
      const node: Node = {
        id: 'node1',
        type: 'class',
        label: 'Test Node',
        iri: 'http://example.org/TestClass',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      };

      store.addNode(node);
      store.updateNodePosition('node1', [100, 200, 0]);

      const { nodes } = useGraphStore.getState();
      const updatedNode = nodes.get('node1');
      expect(updatedNode?.position).toEqual({ x: 100, y: 200, z: 0 });
    });
  });

  describe('Edge Operations', () => {
    it('should add an edge', () => {
      const store = useGraphStore.getState();
      const edge: Edge = {
        id: 'edge1',
        source: 'node1',
        target: 'node2',
        type: 'objectProperty',
        label: 'Test Edge',
        properties: {}
      };

      store.addEdge(edge);

      const { edges } = useGraphStore.getState();
      expect(edges.size).toBe(1);
      expect(edges.get('edge1')).toEqual(edge);
    });

    it('should update an edge', () => {
      const store = useGraphStore.getState();
      const edge: Edge = {
        id: 'edge1',
        source: 'node1',
        target: 'node2',
        type: 'objectProperty',
        label: 'Original Label',
        properties: {}
      };

      store.addEdge(edge);
      store.updateEdge('edge1', { label: 'Updated Label' });

      const { edges } = useGraphStore.getState();
      expect(edges.get('edge1')?.label).toBe('Updated Label');
    });

    it('should remove an edge', () => {
      const store = useGraphStore.getState();
      const edge: Edge = {
        id: 'edge1',
        source: 'node1',
        target: 'node2',
        type: 'objectProperty',
        label: 'Test Edge',
        properties: {}
      };

      store.addEdge(edge);
      store.removeEdge('edge1');

      const { edges } = useGraphStore.getState();
      expect(edges.size).toBe(0);
    });
  });

  describe('Selection Operations', () => {
    it('should select a node', () => {
      const store = useGraphStore.getState();
      store.selectNode('node1');

      const { selectedNode, selectedEdge } = useGraphStore.getState();
      expect(selectedNode).toBe('node1');
      expect(selectedEdge).toBeNull();
    });

    it('should select an edge', () => {
      const store = useGraphStore.getState();
      store.selectEdge('edge1');

      const { selectedNode, selectedEdge } = useGraphStore.getState();
      expect(selectedEdge).toBe('edge1');
      expect(selectedNode).toBeNull();
    });

    it('should deselect node when null is passed', () => {
      const store = useGraphStore.getState();
      store.selectNode('node1');
      store.selectNode(null);

      const { selectedNode } = useGraphStore.getState();
      expect(selectedNode).toBeNull();
    });

    it('should hover a node', () => {
      const store = useGraphStore.getState();
      store.hoverNode('node1');

      const { hoveredNode } = useGraphStore.getState();
      expect(hoveredNode).toBe('node1');
    });

    it('should hover an edge', () => {
      const store = useGraphStore.getState();
      store.hoverEdge('edge1');

      const { hoveredEdge } = useGraphStore.getState();
      expect(hoveredEdge).toBe('edge1');
    });
  });

  describe('Filter Operations', () => {
    beforeEach(() => {
      const store = useGraphStore.getState();

      // Add test nodes
      store.addNode({
        id: 'class1',
        type: 'class',
        label: 'Class 1',
        iri: 'http://example.org/Class1',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      });

      store.addNode({
        id: 'datatype1',
        type: 'datatype',
        label: 'Datatype 1',
        iri: 'http://example.org/Datatype1',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      });

      // Add test edge
      store.addEdge({
        id: 'edge1',
        source: 'class1',
        target: 'datatype1',
        type: 'objectProperty',
        label: 'Edge 1',
        properties: {}
      });
    });

    it('should add a filter', () => {
      const store = useGraphStore.getState();
      const filter: GraphFilter = {
        type: 'nodeType',
        config: { nodeType: 'class' }
      };

      store.addFilter(filter);

      const { activeFilters } = useGraphStore.getState();
      expect(activeFilters).toHaveLength(1);
      expect(activeFilters[0]).toEqual(filter);
    });

    it('should filter nodes by type', () => {
      const store = useGraphStore.getState();
      const filter: GraphFilter = {
        type: 'nodeType',
        config: { nodeType: 'class' }
      };

      store.addFilter(filter);

      const { filteredNodes } = useGraphStore.getState();
      expect(filteredNodes.size).toBe(1);
      expect(filteredNodes.has('class1')).toBe(true);
      expect(filteredNodes.has('datatype1')).toBe(false);
    });

    it('should filter nodes by degree', () => {
      const store = useGraphStore.getState();
      const filter: GraphFilter = {
        type: 'degree',
        config: { min: 1 }
      };

      store.addFilter(filter);

      const { filteredNodes } = useGraphStore.getState();
      // Both nodes have degree 1 (one edge connecting them)
      expect(filteredNodes.size).toBe(2);
    });

    it('should remove a filter', () => {
      const store = useGraphStore.getState();
      const filter: GraphFilter = {
        type: 'nodeType',
        config: { nodeType: 'class' }
      };

      store.addFilter(filter);
      store.removeFilter(0);

      const { activeFilters, filteredNodes } = useGraphStore.getState();
      expect(activeFilters).toHaveLength(0);
      expect(filteredNodes.size).toBe(2); // All nodes visible again
    });

    it('should clear all filters', () => {
      const store = useGraphStore.getState();

      store.addFilter({ type: 'nodeType', config: { nodeType: 'class' } });
      store.addFilter({ type: 'degree', config: { min: 1 } });
      store.clearFilters();

      const { activeFilters, filteredNodes } = useGraphStore.getState();
      expect(activeFilters).toHaveLength(0);
      expect(filteredNodes.size).toBe(2);
    });

    it('should filter edges with invisible nodes', () => {
      const store = useGraphStore.getState();
      const filter: GraphFilter = {
        type: 'nodeType',
        config: { nodeType: 'class' }
      };

      store.addFilter(filter);

      const { filteredEdges } = useGraphStore.getState();
      // Edge should be filtered because target node is not visible
      expect(filteredEdges.size).toBe(0);
    });
  });

  describe('Ontology Loading', () => {
    it('should load ontology data', () => {
      const store = useGraphStore.getState();
      const ontologyData: OntologyData = {
        class: [
          {
            id: 'class1',
            label: { en: 'Test Class' },
            iri: 'http://example.org/TestClass',
            type: 'owl:Class'
          },
          {
            id: 'class2',
            label: { en: 'Another Class' },
            iri: 'http://example.org/AnotherClass',
            type: 'owl:Class'
          }
        ],
        property: [
          {
            id: 'prop1',
            label: { en: 'Test Property' },
            iri: 'http://example.org/testProperty',
            type: 'owl:ObjectProperty',
            domain: ['class1'],
            range: ['class2']
          }
        ]
      };

      store.loadOntology(ontologyData);

      const { nodes, edges } = useGraphStore.getState();
      expect(nodes.size).toBe(2);
      expect(edges.size).toBe(1);
    });

    it('should handle ontology with default labels', () => {
      const store = useGraphStore.getState();
      const ontologyData: OntologyData = {
        class: [
          {
            id: 'class1',
            label: { default: 'Default Label' },
            iri: 'http://example.org/TestClass',
            type: 'owl:Class'
          }
        ]
      };

      store.loadOntology(ontologyData);

      const { nodes } = useGraphStore.getState();
      const node = nodes.get('class1');
      expect(node?.label).toBe('Default Label');
    });

    it('should skip edges with missing source or target', () => {
      const store = useGraphStore.getState();
      const ontologyData: OntologyData = {
        class: [
          {
            id: 'class1',
            label: { en: 'Test Class' },
            iri: 'http://example.org/TestClass',
            type: 'owl:Class'
          }
        ],
        property: [
          {
            id: 'prop1',
            label: { en: 'Incomplete Property' },
            iri: 'http://example.org/testProperty',
            type: 'owl:ObjectProperty',
            domain: [],
            range: []
          }
        ]
      };

      store.loadOntology(ontologyData);

      const { edges } = useGraphStore.getState();
      expect(edges.size).toBe(0);
    });

    it('should update statistics after loading', () => {
      const store = useGraphStore.getState();
      const ontologyData: OntologyData = {
        class: [
          {
            id: 'class1',
            label: { en: 'Test Class' },
            iri: 'http://example.org/TestClass',
            type: 'owl:Class'
          }
        ]
      };

      store.loadOntology(ontologyData);

      const { statistics } = useGraphStore.getState();
      expect(statistics).not.toBeNull();
      expect(statistics?.nodeCount).toBe(1);
      expect(statistics?.edgeCount).toBe(0);
    });
  });

  describe('Statistics', () => {
    beforeEach(() => {
      const store = useGraphStore.getState();

      // Add test nodes and edges
      store.addNode({
        id: 'class1',
        type: 'class',
        label: 'Class 1',
        iri: 'http://example.org/Class1',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      });

      store.addNode({
        id: 'class2',
        type: 'class',
        label: 'Class 2',
        iri: 'http://example.org/Class2',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      });

      store.addEdge({
        id: 'edge1',
        source: 'class1',
        target: 'class2',
        type: 'objectProperty',
        label: 'Edge 1',
        properties: {}
      });
    });

    it('should calculate node counts by type', () => {
      const store = useGraphStore.getState();
      store.updateStatistics();

      const { statistics } = useGraphStore.getState();
      expect(statistics?.classCounts).toEqual({ class: 2 });
    });

    it('should calculate edge counts by type', () => {
      const store = useGraphStore.getState();
      store.updateStatistics();

      const { statistics } = useGraphStore.getState();
      expect(statistics?.propertyCounts).toEqual({ objectProperty: 1 });
    });

    it('should calculate max degree', () => {
      const store = useGraphStore.getState();
      store.updateStatistics();

      const { statistics } = useGraphStore.getState();
      expect(statistics?.maxDegree).toBe(1);
    });

    it('should calculate average degree', () => {
      const store = useGraphStore.getState();
      store.updateStatistics();

      const { statistics } = useGraphStore.getState();
      expect(statistics?.avgDegree).toBe(1);
    });

    it('should handle empty graph', () => {
      const store = useGraphStore.getState();
      store.clear();
      store.updateStatistics();

      const { statistics } = useGraphStore.getState();
      expect(statistics?.nodeCount).toBe(0);
      expect(statistics?.edgeCount).toBe(0);
      expect(statistics?.maxDegree).toBe(0);
      expect(statistics?.avgDegree).toBe(0);
    });
  });

  describe('Clear Operation', () => {
    it('should clear all data', () => {
      const store = useGraphStore.getState();

      // Add some data
      store.addNode({
        id: 'node1',
        type: 'class',
        label: 'Test Node',
        iri: 'http://example.org/TestClass',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      });

      store.selectNode('node1');

      // Clear
      store.clear();

      const { nodes, edges, selectedNode, selectedEdge, statistics } = useGraphStore.getState();
      expect(nodes.size).toBe(0);
      expect(edges.size).toBe(0);
      expect(selectedNode).toBeNull();
      expect(selectedEdge).toBeNull();
      expect(statistics).toBeNull();
    });
  });
});
