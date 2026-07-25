/**
 * WebVOWL WASM TypeScript Definitions
 *
 * High-performance Rust/WASM implementation of WebVOWL ontology visualizer
 */

/**
 * Initialize the WASM module
 * Must be called before using any WebVOWL functionality
 */
export default function init(input?: RequestInfo | URL | Response | BufferSource | WebAssembly.Module): Promise<void>;

/**
 * Get version information
 */
export function version(): string;

/**
 * Graph node data
 */
export interface NodeData {
    /** Unique node identifier */
    id: string;
    /** Display label */
    label: string;
    /** X coordinate */
    x: number;
    /** Y coordinate */
    y: number;
    /** Node type (Class, Datatype, etc.) */
    node_type: string;
}

/**
 * Graph edge data
 */
export interface EdgeData {
    /** Unique edge identifier */
    id: string;
    /** Display label */
    label: string;
    /** Source node ID */
    source: string;
    /** Target node ID */
    target: string;
    /** Edge type (ObjectProperty, DatatypeProperty, etc.) */
    edge_type: string;
}

/**
 * Complete graph data structure
 */
export interface GraphData {
    /** Array of nodes */
    nodes: NodeData[];
    /** Array of edges */
    edges: EdgeData[];
}

/**
 * Graph statistics
 */
export interface Statistics {
    /** Total number of nodes */
    node_count: number;
    /** Total number of edges */
    edge_count: number;
    /** Number of class nodes */
    class_count: number;
    /** Number of properties */
    property_count: number;
    /** Maximum node degree */
    max_degree: number;
    /** Graph density (0-1) */
    density: number;
}

/**
 * Main WebVOWL class for ontology visualization
 */
export class WebVowl {
    /**
     * Create a new WebVOWL instance
     */
    constructor();

    /**
     * Load ontology from JSON string
     *
     * @param json - OWL ontology in JSON format
     * @throws Error if parsing fails
     *
     * @example
     * ```typescript
     * const webvowl = new WebVowl();
     * webvowl.loadOntology(JSON.stringify(ontologyData));
     * ```
     */
    loadOntology(json: string): void;

    /**
     * Initialize the force-directed layout simulation
     * Must be called after loading ontology and before running simulation
     *
     * @throws Error if no graph is loaded
     */
    initSimulation(): void;

    /**
     * Run the simulation for a specified number of iterations
     *
     * @param iterations - Number of simulation steps to run
     * @throws Error if simulation is not initialized
     *
     * @example
     * ```typescript
     * webvowl.initSimulation();
     * webvowl.runSimulation(100);
     * ```
     */
    runSimulation(iterations: number): void;

    /**
     * Perform one simulation tick
     * Use this for animated layouts
     *
     * @throws Error if simulation is not initialized
     *
     * @example
     * ```typescript
     * function animate() {
     *   if (!webvowl.isFinished()) {
     *     webvowl.tick();
     *     requestAnimationFrame(animate);
     *   }
     * }
     * ```
     */
    tick(): void;

    /**
     * Check if the simulation has converged
     *
     * @returns true if simulation is finished
     */
    isFinished(): boolean;

    /**
     * Get current simulation alpha (energy level)
     * Alpha starts at 1.0 and decays to near 0
     *
     * @returns Current alpha value
     */
    getAlpha(): number;

    /**
     * Set the center position for the centering force
     *
     * @param x - X coordinate of center
     * @param y - Y coordinate of center
     */
    setCenter(x: number, y: number): void;

    /**
     * Set the target distance between connected nodes
     *
     * @param distance - Target link distance (default: 30.0)
     */
    setLinkDistance(distance: number): void;

    /**
     * Set the charge strength (node repulsion)
     * Negative values create repulsion, positive values create attraction
     *
     * @param strength - Charge strength (default: -30.0)
     */
    setChargeStrength(strength: number): void;

    /**
     * Get the current graph data with node positions
     *
     * @returns Graph data structure
     * @throws Error if no graph is loaded
     */
    getGraphData(): GraphData;

    /**
     * Get the number of nodes in the graph
     *
     * @returns Node count
     */
    getNodeCount(): number;

    /**
     * Get the number of edges in the graph
     *
     * @returns Edge count
     */
    getEdgeCount(): number;

    /**
     * Get comprehensive graph statistics
     *
     * @returns Statistics object
     * @throws Error if no graph is loaded
     */
    getStatistics(): Statistics;

    /**
     * Free the memory used by this instance
     */
    free(): void;
}

/**
 * Configuration options for WebVOWL
 */
export interface WebVowlConfig {
    /** Simulation alpha (starting energy, default: 1.0) */
    alpha?: number;
    /** Alpha decay rate (default: 0.0228) */
    alphaDecay?: number;
    /** Minimum alpha before stopping (default: 0.001) */
    alphaMin?: number;
    /** Velocity decay/damping (default: 0.6) */
    velocityDecay?: number;
    /** Target link distance (default: 30.0) */
    linkDistance?: number;
    /** Link strength (default: 1.0) */
    linkStrength?: number;
    /** Charge strength/repulsion (default: -30.0) */
    chargeStrength?: number;
    /** Center force strength (default: 1.0) */
    centerStrength?: number;
    /** Center position (default: [0, 0]) */
    center?: [number, number];
}

/**
 * Ontology data format (input)
 */
export interface OntologyData {
    /** Ontology header/metadata */
    header?: {
        /** Ontology IRI */
        iri?: string;
        /** Version */
        version?: string;
        /** Title */
        title?: string;
        /** Description */
        description?: string;
    };
    /** Array of class definitions */
    class?: ClassDefinition[];
    /** Array of property definitions */
    property?: PropertyDefinition[];
    /** Namespace definitions */
    namespace?: Record<string, string>;
}

/**
 * OWL class definition
 */
export interface ClassDefinition {
    /** Unique identifier */
    id: string;
    /** IRI */
    iri?: string;
    /** Display label */
    label?: string;
    /** Class type (e.g., "owl:Class") */
    type?: string;
    /** Equivalent classes */
    equivalent?: string[];
    /** Is this an external class? */
    external?: boolean;
    /** Number of individuals */
    individuals?: number;
    /** Additional attributes */
    attributes?: Record<string, any>;
}

/**
 * OWL property definition
 */
export interface PropertyDefinition {
    /** Unique identifier */
    id: string;
    /** IRI */
    iri?: string;
    /** Display label */
    label?: string;
    /** Property type (e.g., "owl:ObjectProperty") */
    type?: string;
    /** Domain class ID */
    domain: string;
    /** Range class/datatype ID */
    range: string;
    /** Is functional? */
    functional?: boolean;
    /** Is inverse functional? */
    inverseFunctional?: boolean;
    /** Is transitive? */
    transitive?: boolean;
    /** Is symmetric? */
    symmetric?: boolean;
    /** Minimum cardinality */
    minCardinality?: number;
    /** Maximum cardinality */
    maxCardinality?: number;
    /** Exact cardinality */
    cardinality?: number;
}
