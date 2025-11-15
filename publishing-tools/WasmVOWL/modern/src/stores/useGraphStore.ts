/**
 * Graph state management with Zustand
 */

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { enableMapSet } from 'immer';
import type { Node, Edge, GraphData, GraphFilter, GraphStatistics } from '../types/graph';
import type { OntologyData } from '../types/ontology';

// Enable Map/Set support in Immer
enableMapSet();

interface GraphState {
  // Data
  nodes: Map<string, Node>;
  edges: Map<string, Edge>;
  filteredNodes: Set<string>;
  filteredEdges: Set<string>;

  // Selection
  selectedNode: string | null;
  selectedEdge: string | null;
  hoveredNode: string | null;
  hoveredEdge: string | null;

  // Filters
  activeFilters: GraphFilter[];

  // Statistics
  statistics: GraphStatistics | null;

  // Actions
  loadOntology: (data: OntologyData) => void;
  clear: () => void;

  // Node actions
  addNode: (node: Node) => void;
  updateNode: (id: string, updates: Partial<Node>) => void;
  removeNode: (id: string) => void;
  updateNodePosition: (id: string, position: [number, number, number]) => void;

  // Edge actions
  addEdge: (edge: Edge) => void;
  updateEdge: (id: string, updates: Partial<Edge>) => void;
  removeEdge: (id: string) => void;

  // Selection actions
  selectNode: (id: string | null) => void;
  selectEdge: (id: string | null) => void;
  hoverNode: (id: string | null) => void;
  hoverEdge: (id: string | null) => void;

  // Filter actions
  addFilter: (filter: GraphFilter) => void;
  removeFilter: (index: number) => void;
  clearFilters: () => void;
  applyFilters: () => void;

  // Statistics
  updateStatistics: () => void;
}

export const useGraphStore = create<GraphState>()(
  immer((set, get) => ({
    // Initial state
    nodes: new Map(),
    edges: new Map(),
    filteredNodes: new Set(),
    filteredEdges: new Set(),
    selectedNode: null,
    selectedEdge: null,
    hoveredNode: null,
    hoveredEdge: null,
    activeFilters: [],
    statistics: null,

    // Load ontology data
    loadOntology: (data: OntologyData) => {
      // Clone data to avoid Immer frozen object errors
      const clonedData = JSON.parse(JSON.stringify(data));

      // Build class attributes map for merging label/comment data
      const classAttrsMap = new Map<string, any>();
      clonedData.classAttribute?.forEach((attr: any) => {
        classAttrsMap.set(attr.id, attr);
      });

      // Build property attributes map for merging domain/range/label data
      const propAttrsMap = new Map<string, any>();
      clonedData.propertyAttribute?.forEach((attr: any) => {
        propAttrsMap.set(attr.id, attr);
      });

      set((state) => {
        // Clear existing data
        state.nodes.clear();
        state.edges.clear();
        state.filteredNodes.clear();
        state.filteredEdges.clear();

        // Parse classes as nodes
        clonedData.class?.forEach((cls: any) => {
          // Merge class attributes if available
          const classAttrs = classAttrsMap.get(cls.id) || {};

          // ✅ FIX: Initialize at origin - let WASM simulation handle layout
          // Previously: Random positions caused conflict with WASM initialization
          // Now: Start all nodes at (0, 0) so WASM can initialize them properly
          const node: Node = {
            id: cls.id,
            type: 'class',
            label: classAttrs.label?.en || classAttrs.label?.default || cls.label?.en || cls.label?.default || cls.id,
            iri: classAttrs.iri || cls.iri,
            position: {
              x: 0,  // ✅ Let WASM initialize
              y: 0,  // ✅ Let WASM initialize
              z: 0
            },
            velocity: { x: 0, y: 0, z: 0 },
            properties: {
              instances: cls.instances || 0,
              attributes: cls.attributes || []
            }
          };
          state.nodes.set(node.id, node);
          state.filteredNodes.add(node.id);
        });

        // Parse properties as edges
        let edgeCount = 0;
        clonedData.property?.forEach((prop: any) => {
          // Merge property attributes if available
          const propAttrs = propAttrsMap.get(prop.id) || {};

          // Handle domain/range as either arrays or single values
          const domain = prop.domain || propAttrs.domain;
          const range = prop.range || propAttrs.range;

          const source = Array.isArray(domain) ? domain[0] : domain;
          const target = Array.isArray(range) ? range[0] : range;

          const edge: Edge = {
            id: prop.id,
            source: source || '',
            target: target || '',
            type: prop.type === 'owl:ObjectProperty' ? 'objectProperty' : 'datatypeProperty',
            label: propAttrs.label?.en || propAttrs.label?.default || prop.label?.en || prop.label?.default || prop.id,
            properties: {
              functional: prop.functional || propAttrs.functional || false,
              inverse: prop.inverse || propAttrs.inverse
            }
          };

          if (edge.source && edge.target) {
            state.edges.set(edge.id, edge);
            state.filteredEdges.add(edge.id);
            edgeCount++;
          }
        });

        // Sample a few nodes to verify labels
        const sampleNodes = Array.from(state.nodes.values()).slice(0, 3);
        console.log(`[useGraphStore] Loaded ${state.nodes.size} nodes, ${edgeCount} edges from ${clonedData.property?.length || 0} properties`);
        console.log(`[useGraphStore] Sample nodes:`, sampleNodes.map(n => ({ id: n.id, label: n.label })));
      });

      // Update statistics (call outside set to avoid nesting)
      get().updateStatistics();
    },

    clear: () => set((state) => {
      state.nodes.clear();
      state.edges.clear();
      state.filteredNodes.clear();
      state.filteredEdges.clear();
      state.selectedNode = null;
      state.selectedEdge = null;
      state.hoveredNode = null;
      state.hoveredEdge = null;
      state.statistics = null;
    }),

    // Node operations
    addNode: (node) => set((state) => {
      state.nodes.set(node.id, node);
      state.filteredNodes.add(node.id);
    }),

    updateNode: (id, updates) => set((state) => {
      const node = state.nodes.get(id);
      if (node) {
        Object.assign(node, updates);
      }
    }),

    removeNode: (id) => set((state) => {
      state.nodes.delete(id);
      state.filteredNodes.delete(id);
    }),

    updateNodePosition: (id, position) => set((state) => {
      const node = state.nodes.get(id);
      if (node) {
        node.position = { x: position[0], y: position[1], z: position[2] };
      }
    }),

    // Edge operations
    addEdge: (edge) => set((state) => {
      state.edges.set(edge.id, edge);
      state.filteredEdges.add(edge.id);
    }),

    updateEdge: (id, updates) => set((state) => {
      const edge = state.edges.get(id);
      if (edge) {
        Object.assign(edge, updates);
      }
    }),

    removeEdge: (id) => set((state) => {
      state.edges.delete(id);
      state.filteredEdges.delete(id);
    }),

    // Selection operations
    selectNode: (id) => set({ selectedNode: id, selectedEdge: null }),
    selectEdge: (id) => set({ selectedEdge: id, selectedNode: null }),
    hoverNode: (id) => set({ hoveredNode: id }),
    hoverEdge: (id) => set({ hoveredEdge: id }),

    // Filter operations
    addFilter: (filter) => set((state) => {
      state.activeFilters.push(filter);
      get().applyFilters();
    }),

    removeFilter: (index) => set((state) => {
      state.activeFilters.splice(index, 1);
      get().applyFilters();
    }),

    clearFilters: () => set((state) => {
      state.activeFilters = [];
      // Show all nodes and edges
      state.nodes.forEach((_, id) => state.filteredNodes.add(id));
      state.edges.forEach((_, id) => state.filteredEdges.add(id));
    }),

    applyFilters: () => set((state) => {
      const { nodes, edges, activeFilters } = state;

      // Start with all nodes and edges
      const visibleNodes = new Set(nodes.keys());
      const visibleEdges = new Set(edges.keys());

      // Apply each filter
      activeFilters.forEach((filter) => {
        switch (filter.type) {
          case 'nodeType':
            nodes.forEach((node, id) => {
              if (node.type !== filter.config.nodeType) {
                visibleNodes.delete(id);
              }
            });
            break;

          case 'degree':
            const minDegree = filter.config.min || 0;
            const maxDegree = filter.config.max || Infinity;

            nodes.forEach((node, id) => {
              const degree = Array.from(edges.values()).filter(
                (e) => e.source === id || e.target === id
              ).length;

              if (degree < minDegree || degree > maxDegree) {
                visibleNodes.delete(id);
              }
            });
            break;

          case 'edgeType':
            edges.forEach((edge, id) => {
              if (edge.type !== filter.config.edgeType) {
                visibleEdges.delete(id);
              }
            });
            break;
        }
      });

      // Remove edges with invisible nodes
      edges.forEach((edge, id) => {
        if (!visibleNodes.has(edge.source) || !visibleNodes.has(edge.target)) {
          visibleEdges.delete(id);
        }
      });

      state.filteredNodes = visibleNodes;
      state.filteredEdges = visibleEdges;
    }),

    // Statistics
    updateStatistics: () => set((state) => {
      const { nodes, edges } = state;

      const nodeCounts: Record<string, number> = {};
      const edgeCounts: Record<string, number> = {};
      const degrees: number[] = [];

      nodes.forEach((node) => {
        nodeCounts[node.type] = (nodeCounts[node.type] || 0) + 1;

        const degree = Array.from(edges.values()).filter(
          (e) => e.source === node.id || e.target === node.id
        ).length;
        degrees.push(degree);
      });

      edges.forEach((edge) => {
        edgeCounts[edge.type] = (edgeCounts[edge.type] || 0) + 1;
      });

      state.statistics = {
        nodeCount: nodes.size,
        edgeCount: edges.size,
        classCounts: nodeCounts,
        propertyCounts: edgeCounts,
        maxDegree: Math.max(...degrees, 0),
        avgDegree: degrees.length > 0
          ? degrees.reduce((a, b) => a + b, 0) / degrees.length
          : 0
      };
    })
  }))
);
