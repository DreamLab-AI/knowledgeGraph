/**
 * WASM simulation integration hook
 */

import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGraphStore } from '../stores/useGraphStore';
import { useUIStore } from '../stores/useUIStore';
import { debugManager } from '../config/debug';

// Will be dynamically imported
type WebVowl = {
  loadOntology(json: string): void;
  setCenter(x: number, y: number): void;
  setLinkDistance(distance: number): void;
  setChargeStrength(strength: number): void;
  initSimulation(): void;
  tick(): void;
  runSimulation(iterations: number): void;
  isFinished(): boolean;
  getAlpha(): number;
  getGraphData(): any;
  getNodeCount(): number;
  getEdgeCount(): number;
  getStatistics(): any;
};

interface UseWasmSimulationOptions {
  autoStart?: boolean;
  iterations?: number;
}

export function useWasmSimulation(options: UseWasmSimulationOptions = {}) {
  const { autoStart = true, iterations } = options;

  const wasmRef = useRef<WebVowl | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [alpha, setAlpha] = useState(1.0);

  const { nodes, edges, updateNodePosition } = useGraphStore();
  const { settings } = useUIStore();

  // Initialize WASM module
  useEffect(() => {
    let mounted = true;

    async function initWasm() {
      try {
        // Dynamically import WASM module from local build (not npm package!)
        // This ensures we use the latest parameter fixes
        const wasmModule = await import('../../../rust-wasm/pkg/webvowl_wasm.js');
        await wasmModule.default(); // Initialize WASM

        if (!mounted) return;

        wasmRef.current = new wasmModule.WebVowl();
        setIsInitialized(true);

        console.log('✅ WASM module initialized');

        // Configure simulation with current settings
        wasmRef.current.setCenter(0, 0);
        wasmRef.current.setLinkDistance(settings.linkDistance);
        wasmRef.current.setChargeStrength(settings.chargeStrength);

        console.log('⚙️ Initial simulation parameters:', {
          linkDistance: settings.linkDistance,
          chargeStrength: settings.chargeStrength,
          gravity: settings.gravity,
          friction: settings.friction,
        });

      } catch (error) {
        console.error('Failed to initialize WASM:', error);
      }
    }

    initWasm();

    return () => {
      mounted = false;
      if (wasmRef.current) {
        wasmRef.current = null;
      }
    };
  }, []);

  // Track iteration count
  const iterationRef = useRef(0);

  // Load graph data when nodes/edges change
  useEffect(() => {
    if (!wasmRef.current || !isInitialized) return;
    if (nodes.size === 0) return;

    // WASM expects WebVOWL format with 'class' and 'property' arrays
    // CRITICAL: Filter properties that have BOTH source AND target nodes that exist in the graph
    const nodeIds = new Set(Array.from(nodes.values()).map(n => n.id));

    const validEdges = Array.from(edges.values()).filter((e) => {
      const hasSource = e.source && nodeIds.has(e.source);
      const hasTarget = e.target && nodeIds.has(e.target);

      if (!hasSource || !hasTarget) {
        console.warn(`[useWasmSimulation] Skipping edge ${e.id}: source=${e.source} (exists: ${hasSource}), target=${e.target} (exists: ${hasTarget})`);
      }

      return hasSource && hasTarget;
    });

    console.log(`[useWasmSimulation] Filtered edges: ${validEdges.length} valid out of ${edges.size} total`);

    // CRITICAL FIX: WASM parser expects domain/range in 'property' array, not 'propertyAttribute'
    // The parser looks for domain/range directly on property objects (parser.rs:250-260)
    const graphData = {
      header: {
        title: { en: "Ontology Graph" }
      },
      namespace: [],
      class: Array.from(nodes.values()).map((n) => ({
        id: n.id,
        type: n.type
      })),
      classAttribute: Array.from(nodes.values()).map((n) => ({
        id: n.id,
        label: { en: n.label },
        iri: n.iri  // Use actual IRI from ontology (e.g., http://disruption.org/ontology/...)
      })),
      // FIXED: Include domain/range directly in property array (not in propertyAttribute)
      property: validEdges.map((e) => ({
        id: e.id,
        type: e.type === 'objectProperty' ? 'owl:ObjectProperty' : 'owl:DatatypeProperty',
        domain: e.source,  // Domain goes here for WASM parser
        range: e.target,   // Range goes here for WASM parser
        label: e.label || e.id,  // Also include label here
        iri: e.iri || `http://example.org/${e.id}`  // And IRI
      }))
    };

    try {
      console.log(`[useWasmSimulation] Loading ${graphData.class.length} nodes, ${graphData.property.length} edges into WASM`);

      // DIAGNOSTIC: Check node IDs in class array
      console.log('[useWasmSimulation] Total nodes in class array:', graphData.class.length);
      console.log('[useWasmSimulation] Sample node IDs:', graphData.class.slice(0, 10).map((c: any) => c.id));
      console.log('[useWasmSimulation] Node 1157 exists in class array?', graphData.class.some((c: any) => c.id === '1157'));
      console.log('[useWasmSimulation] Node 1 exists in class array?', graphData.class.some((c: any) => c.id === '1'));

      // Validate data before sending to WASM (now checking property array, not propertyAttribute)
      const invalidProperties = graphData.property.filter((p: any) => !p.domain || !p.range);
      if (invalidProperties.length > 0) {
        console.error('[useWasmSimulation] Found properties with missing domain/range:', invalidProperties);
        throw new Error(`Invalid properties: ${invalidProperties.map((p: any) => p.id).join(', ')}`);
      }

      // Log sample property to verify structure
      if (graphData.property.length > 0) {
        const sample = graphData.property[0];
        console.log('[useWasmSimulation] Sample property:', {
          id: sample.id,
          domain: sample.domain,
          range: sample.range,
          domainType: typeof sample.domain,
          rangeType: typeof sample.range
        });
      }

      // DIAGNOSTIC: Check property 1244 specifically
      const prop1244 = graphData.property.find((p: any) => p.id === '1244');
      if (prop1244) {
        console.log('[useWasmSimulation] Property 1244 full data:', JSON.stringify(prop1244, null, 2));
        console.log('[useWasmSimulation] Checking domain node:', {
          domainId: prop1244.domain,
          domainExists: graphData.class.some((c: any) => c.id === prop1244.domain),
          domainType: typeof prop1244.domain
        });
        console.log('[useWasmSimulation] Checking range node:', {
          rangeId: prop1244.range,
          rangeExists: graphData.class.some((c: any) => c.id === prop1244.range),
          rangeType: typeof prop1244.range
        });
      }

      wasmRef.current.loadOntology(JSON.stringify(graphData));
      wasmRef.current.initSimulation();

      if (autoStart) {
        if (iterations) {
          wasmRef.current.runSimulation(iterations);
          setIsRunning(false); // Will be animated frame-by-frame
        } else {
          setIsRunning(true);
          console.log('[useWasmSimulation] Simulation started');
        }
      }
    } catch (error) {
      console.error('Failed to load ontology into WASM:', error);
    }
  }, [nodes, edges, isInitialized, autoStart, iterations]);

  // Update simulation parameters when settings change
  useEffect(() => {
    if (!wasmRef.current) return;

    wasmRef.current.setLinkDistance(settings.linkDistance);
    wasmRef.current.setChargeStrength(settings.chargeStrength);
  }, [settings.linkDistance, settings.chargeStrength]);

  // Run simulation tick on each frame
  useFrame(() => {
    const wasm = wasmRef.current;
    if (!wasm || !isRunning) return;

    try {
      // Check if simulation is finished
      if (wasm.isFinished()) {
        setIsRunning(false);
        setAlpha(0);
        return;
      }

      // Perform one tick
      wasm.tick();

      // Get updated alpha
      const currentAlpha = wasm.getAlpha();
      setAlpha(currentAlpha);

      // Get updated positions and update React state
      const graphData = wasm.getGraphData();

      if (graphData && graphData.nodes) {
        graphData.nodes.forEach((node: any) => {
          updateNodePosition(node.id, [node.x, node.y, 0]);
        });
      }
    } catch (error) {
      console.error('Simulation tick error:', error);
      setIsRunning(false);
    }
  });

  // Control functions
  const start = () => {
    if (wasmRef.current && !isRunning) {
      setIsRunning(true);
    }
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    if (wasmRef.current) {
      wasmRef.current.initSimulation();
      setAlpha(1.0);
      if (autoStart) {
        setIsRunning(true);
      }
    }
  };

  const step = () => {
    if (wasmRef.current && !isRunning) {
      wasmRef.current.tick();

      const graphData = wasmRef.current.getGraphData();
      if (graphData && graphData.nodes) {
        graphData.nodes.forEach((node: any) => {
          updateNodePosition(node.id, [node.x, node.y, 0]);
        });
      }

      setAlpha(wasmRef.current.getAlpha());
    }
  };

  // Click detection helper (for future WASM integration)
  // Currently, click detection is handled by React Three Fiber's onClick events
  // This method can be enhanced to use WASM raycasting for better performance
  const checkNodeClick = (rayOrigin: [number, number, number], rayDirection: [number, number, number]): string | null => {
    // TODO: Implement WASM-based raycasting when needed for performance
    // For now, R3F handles click detection automatically via onClick events
    // This is a placeholder for future Phase 4 optimization
    return null;
  };

  return {
    isInitialized,
    isRunning,
    alpha,
    start,
    stop,
    reset,
    step,
    checkNodeClick
  };
}
