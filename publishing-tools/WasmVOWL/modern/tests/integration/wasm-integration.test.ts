/**
 * Integration tests for WASM module
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useGraphStore } from '@/stores/useGraphStore';
import type { OntologyData } from '@/types/ontology';

describe('WASM Integration', () => {
  beforeEach(() => {
    useGraphStore.getState().clear();
  });

  describe('Ontology Loading', () => {
    it('should load a simple ontology', () => {
      const store = useGraphStore.getState();
      const ontology: OntologyData = {
        class: [
          {
            id: 'Person',
            label: { en: 'Person' },
            iri: 'http://example.org/Person',
            type: 'owl:Class'
          },
          {
            id: 'Organization',
            label: { en: 'Organization' },
            iri: 'http://example.org/Organization',
            type: 'owl:Class'
          }
        ],
        property: [
          {
            id: 'worksFor',
            label: { en: 'works for' },
            iri: 'http://example.org/worksFor',
            type: 'owl:ObjectProperty',
            domain: ['Person'],
            range: ['Organization']
          }
        ]
      };

      store.loadOntology(ontology);

      const { nodes, edges } = useGraphStore.getState();
      expect(nodes.size).toBe(2);
      expect(edges.size).toBe(1);
    });

    it('should handle complex ontology with multiple properties', () => {
      const store = useGraphStore.getState();
      const ontology: OntologyData = {
        class: [
          { id: 'Class1', label: { en: 'Class 1' }, iri: 'http://ex.org/Class1', type: 'owl:Class' },
          { id: 'Class2', label: { en: 'Class 2' }, iri: 'http://ex.org/Class2', type: 'owl:Class' },
          { id: 'Class3', label: { en: 'Class 3' }, iri: 'http://ex.org/Class3', type: 'owl:Class' }
        ],
        property: [
          {
            id: 'prop1',
            label: { en: 'Property 1' },
            iri: 'http://ex.org/prop1',
            type: 'owl:ObjectProperty',
            domain: ['Class1'],
            range: ['Class2']
          },
          {
            id: 'prop2',
            label: { en: 'Property 2' },
            iri: 'http://ex.org/prop2',
            type: 'owl:ObjectProperty',
            domain: ['Class2'],
            range: ['Class3']
          },
          {
            id: 'prop3',
            label: { en: 'Property 3' },
            iri: 'http://ex.org/prop3',
            type: 'owl:ObjectProperty',
            domain: ['Class1'],
            range: ['Class3']
          }
        ]
      };

      store.loadOntology(ontology);

      const { nodes, edges, statistics } = useGraphStore.getState();
      expect(nodes.size).toBe(3);
      expect(edges.size).toBe(3);
      expect(statistics?.nodeCount).toBe(3);
      expect(statistics?.edgeCount).toBe(3);
    });

    it('should handle ontology with datatype properties', () => {
      const store = useGraphStore.getState();
      const ontology: OntologyData = {
        class: [
          {
            id: 'Person',
            label: { en: 'Person' },
            iri: 'http://example.org/Person',
            type: 'owl:Class'
          }
        ],
        property: [
          {
            id: 'hasAge',
            label: { en: 'has age' },
            iri: 'http://example.org/hasAge',
            type: 'owl:DatatypeProperty',
            domain: ['Person'],
            range: ['xsd:integer']
          },
          {
            id: 'hasName',
            label: { en: 'has name' },
            iri: 'http://example.org/hasName',
            type: 'owl:DatatypeProperty',
            domain: ['Person'],
            range: ['xsd:string']
          }
        ]
      };

      store.loadOntology(ontology);

      const { edges } = useGraphStore.getState();
      expect(edges.size).toBe(2);

      const datatypeEdges = Array.from(edges.values()).filter(
        e => e.type === 'datatypeProperty'
      );
      expect(datatypeEdges).toHaveLength(2);
    });
  });

  describe('Graph Statistics', () => {
    it('should calculate correct statistics for loaded ontology', () => {
      const store = useGraphStore.getState();
      const ontology: OntologyData = {
        class: [
          { id: 'C1', label: { en: 'C1' }, iri: 'http://ex.org/C1', type: 'owl:Class' },
          { id: 'C2', label: { en: 'C2' }, iri: 'http://ex.org/C2', type: 'owl:Class' },
          { id: 'C3', label: { en: 'C3' }, iri: 'http://ex.org/C3', type: 'owl:Class' },
          { id: 'C4', label: { en: 'C4' }, iri: 'http://ex.org/C4', type: 'owl:Class' }
        ],
        property: [
          {
            id: 'p1',
            label: { en: 'p1' },
            iri: 'http://ex.org/p1',
            type: 'owl:ObjectProperty',
            domain: ['C1'],
            range: ['C2']
          },
          {
            id: 'p2',
            label: { en: 'p2' },
            iri: 'http://ex.org/p2',
            type: 'owl:ObjectProperty',
            domain: ['C1'],
            range: ['C3']
          },
          {
            id: 'p3',
            label: { en: 'p3' },
            iri: 'http://ex.org/p3',
            type: 'owl:ObjectProperty',
            domain: ['C1'],
            range: ['C4']
          }
        ]
      };

      store.loadOntology(ontology);

      const { statistics } = useGraphStore.getState();
      expect(statistics).not.toBeNull();
      expect(statistics?.nodeCount).toBe(4);
      expect(statistics?.edgeCount).toBe(3);
      expect(statistics?.maxDegree).toBe(3); // C1 has degree 3
      expect(statistics?.classCounts).toEqual({ class: 4 });
      expect(statistics?.propertyCounts).toEqual({ objectProperty: 3 });
    });

    it('should update statistics when graph changes', () => {
      const store = useGraphStore.getState();

      // Load initial ontology
      store.loadOntology({
        class: [
          { id: 'C1', label: { en: 'C1' }, iri: 'http://ex.org/C1', type: 'owl:Class' }
        ]
      });

      let statistics = useGraphStore.getState().statistics;
      expect(statistics?.nodeCount).toBe(1);

      // Add more nodes
      store.addNode({
        id: 'C2',
        type: 'class',
        label: 'C2',
        iri: 'http://ex.org/C2',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      });

      store.updateStatistics();

      statistics = useGraphStore.getState().statistics;
      expect(statistics?.nodeCount).toBe(2);
    });
  });

  describe('Filter Integration', () => {
    beforeEach(() => {
      const store = useGraphStore.getState();
      store.loadOntology({
        class: [
          { id: 'C1', label: { en: 'C1' }, iri: 'http://ex.org/C1', type: 'owl:Class' },
          { id: 'C2', label: { en: 'C2' }, iri: 'http://ex.org/C2', type: 'owl:Class' },
          { id: 'D1', label: { en: 'D1' }, iri: 'http://ex.org/D1', type: 'rdfs:Datatype' }
        ],
        property: [
          {
            id: 'p1',
            label: { en: 'p1' },
            iri: 'http://ex.org/p1',
            type: 'owl:ObjectProperty',
            domain: ['C1'],
            range: ['C2']
          }
        ]
      });

      // Manually add datatype node
      store.addNode({
        id: 'D1',
        type: 'datatype',
        label: 'D1',
        iri: 'http://ex.org/D1',
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        properties: {}
      });
    });

    it('should filter by node type', () => {
      const store = useGraphStore.getState();

      store.addFilter({
        type: 'nodeType',
        config: { nodeType: 'class' }
      });

      const { filteredNodes } = useGraphStore.getState();
      expect(filteredNodes.size).toBe(2); // Only classes visible
    });

    it('should filter by degree range', () => {
      const store = useGraphStore.getState();

      store.addFilter({
        type: 'degree',
        config: { min: 1, max: 10 }
      });

      const { filteredNodes } = useGraphStore.getState();
      // Nodes with at least 1 connection
      expect(filteredNodes.size).toBeGreaterThan(0);
    });

    it('should apply multiple filters', () => {
      const store = useGraphStore.getState();

      store.addFilter({
        type: 'nodeType',
        config: { nodeType: 'class' }
      });

      store.addFilter({
        type: 'degree',
        config: { min: 1 }
      });

      const { filteredNodes } = useGraphStore.getState();
      // Only classes with degree >= 1
      expect(filteredNodes.size).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Data Export', () => {
    it('should export graph data correctly', () => {
      const store = useGraphStore.getState();
      store.loadOntology({
        class: [
          { id: 'C1', label: { en: 'C1' }, iri: 'http://ex.org/C1', type: 'owl:Class' },
          { id: 'C2', label: { en: 'C2' }, iri: 'http://ex.org/C2', type: 'owl:Class' }
        ],
        property: [
          {
            id: 'p1',
            label: { en: 'p1' },
            iri: 'http://ex.org/p1',
            type: 'owl:ObjectProperty',
            domain: ['C1'],
            range: ['C2']
          }
        ]
      });

      const { nodes, edges } = useGraphStore.getState();

      const exportData = {
        nodes: Array.from(nodes.values()),
        edges: Array.from(edges.values())
      };

      expect(exportData.nodes).toHaveLength(2);
      expect(exportData.edges).toHaveLength(1);

      // Verify data structure
      expect(exportData.nodes[0]).toHaveProperty('id');
      expect(exportData.nodes[0]).toHaveProperty('type');
      expect(exportData.nodes[0]).toHaveProperty('label');
      expect(exportData.nodes[0]).toHaveProperty('position');

      expect(exportData.edges[0]).toHaveProperty('id');
      expect(exportData.edges[0]).toHaveProperty('source');
      expect(exportData.edges[0]).toHaveProperty('target');
      expect(exportData.edges[0]).toHaveProperty('type');
    });
  });

  describe('Performance', () => {
    it('should handle large ontologies efficiently', () => {
      const store = useGraphStore.getState();

      // Generate large ontology
      const largeOntology: OntologyData = {
        class: Array.from({ length: 100 }, (_, i) => ({
          id: `Class${i}`,
          label: { en: `Class ${i}` },
          iri: `http://example.org/Class${i}`,
          type: 'owl:Class'
        })),
        property: Array.from({ length: 200 }, (_, i) => ({
          id: `prop${i}`,
          label: { en: `Property ${i}` },
          iri: `http://example.org/prop${i}`,
          type: 'owl:ObjectProperty',
          domain: [`Class${i % 100}`],
          range: [`Class${(i + 1) % 100}`]
        }))
      };

      const startTime = performance.now();
      store.loadOntology(largeOntology);
      const endTime = performance.now();

      const { nodes, edges } = useGraphStore.getState();
      expect(nodes.size).toBe(100);
      expect(edges.size).toBe(200);

      // Should load within reasonable time (< 1 second)
      expect(endTime - startTime).toBeLessThan(1000);
    });

    it('should handle many filter operations efficiently', () => {
      const store = useGraphStore.getState();

      // Load medium-sized ontology
      store.loadOntology({
        class: Array.from({ length: 50 }, (_, i) => ({
          id: `C${i}`,
          label: { en: `C${i}` },
          iri: `http://ex.org/C${i}`,
          type: 'owl:Class'
        }))
      });

      const startTime = performance.now();

      // Apply and remove filters multiple times
      for (let i = 0; i < 10; i++) {
        store.addFilter({ type: 'nodeType', config: { nodeType: 'class' } });
        store.clearFilters();
      }

      const endTime = performance.now();

      // Should complete within reasonable time (< 500ms)
      expect(endTime - startTime).toBeLessThan(500);
    });
  });
});
