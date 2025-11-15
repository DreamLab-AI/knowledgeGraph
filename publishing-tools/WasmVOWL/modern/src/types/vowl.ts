/**
 * VOWL v2 Specification Type Definitions
 * Based on recovered specification from PR #210
 * Source: https://github.com/VisualDataWeb/WebVOWL/pull/210
 */

/**
 * VOWL JSON Format - Root Structure
 */
export interface VOWLData {
  info?: VOWLMetadata[];
  nodes: VOWLNode[];
  properties?: VOWLProperty[];
  namespace?: Record<string, string>;
}

/**
 * Ontology Metadata (info block)
 */
export interface VOWLMetadata {
  title: string;
  url?: string;
  version?: string;
  authors?: string;
  author?: string;
  description?: string;
}

/**
 * VOWL Node Types
 */
export type VOWLNodeType =
  | 'class'           // owl:Class
  | 'datatype'        // rdfs:Datatype
  | 'literal'         // Literal values
  | 'external'        // External/imported classes
  | 'deprecated'      // Deprecated classes
  | 'thing'           // owl:Thing
  | 'nothing'         // owl:Nothing
  | 'rdfs:Class'      // RDFS class
  | 'rdf:Property';   // RDF property

/**
 * VOWL Node
 */
export interface VOWLNode {
  id: string;
  name?: string;       // Display label
  type: VOWLNodeType;
  uri?: string;        // Full IRI
  iri?: string;        // Alternate IRI field

  // Visual attributes
  attributes?: string[];  // Visual modifiers (external, deprecated, etc.)

  // Class-specific
  instances?: number;
  subClassOf?: string | string[];
  equivalentClass?: string | string[];
  disjointWith?: string | string[];

  // Datatype-specific
  baseType?: string;

  // Annotations
  comment?: string | Record<string, string>;
  label?: string | Record<string, string>;
}

/**
 * VOWL Property Types
 */
export type VOWLPropertyType =
  | 'objectProperty'        // owl:ObjectProperty
  | 'datatypeProperty'      // owl:DatatypeProperty
  | 'annotationProperty'    // owl:AnnotationProperty
  | 'subClassOf'            // rdfs:subClassOf
  | 'disjointWith'          // owl:disjointWith
  | 'equivalentClass'       // owl:equivalentClass
  | 'type'                  // rdf:type
  | 'hasValue'              // owl:hasValue
  | 'someValuesFrom'        // owl:someValuesFrom
  | 'allValuesFrom';        // owl:allValuesFrom

/**
 * VOWL Property (Edge)
 */
export interface VOWLProperty {
  id: string;
  type: VOWLPropertyType;
  name?: string;           // Display label
  uri?: string;            // Full IRI
  iri?: string;            // Alternate IRI field

  // Endpoints
  domain: string | string[];
  range: string | string[];

  // Property characteristics
  functional?: boolean;
  inverseFunctional?: boolean;
  transitive?: boolean;
  symmetric?: boolean;
  asymmetric?: boolean;
  reflexive?: boolean;
  irreflexive?: boolean;

  // Inverse
  inverse?: string;
  inverseOf?: string;

  // Cardinality
  minCardinality?: number;
  maxCardinality?: number;
  cardinality?: number;

  // Visual attributes
  attributes?: string[];

  // Annotations
  comment?: string | Record<string, string>;
  label?: string | Record<string, string>;
}

/**
 * VOWL Color Scheme (from v2 spec)
 */
export const VOWLColors = {
  CLASS: '#acf',           // owl:Class, owl:Thing
  DATATYPE: '#fc3',        // xsd:string, xsd:integer, etc.
  DATATYPE_LABEL: '#9c6',  // Datatype property labels
  RDF: '#c9c',             // RDF/RDFS constructs
  EXTERNAL: '#36c',        // External/imported classes
  DEPRECATED: '#ccc',      // Deprecated elements
  SYMBOL: '#69c',          // Symbolic elements
  FOCUSED: '#f00',         // Hover/focus state
  INDIRECT: '#f90',        // Indirect highlighting
  DISJOINT: '#acf',        // Disjoint classes
  TEXT: '#696969',         // Result/annotation text
  WHITE: '#fff',           // Subclass, backgrounds
  STROKE: '#000',          // Default strokes
} as const;

/**
 * VOWL Layout Constants (from v2 spec)
 */
export const VOWLLayout = {
  CLASS_RADIUS: 50,
  THING_RADIUS: 30,
  LITERAL_WIDTH: 60,
  LITERAL_HEIGHT: 20,
  LINK_DISTANCE: 160,
  CHARGE: -1000,
  STROKE_WIDTH: 2,
  STROKE_WIDTH_FOCUSED: 4,
  STROKE_WIDTH_FINE: 1,
} as const;

/**
 * Helper: Get color for node type
 */
export function getNodeColor(node: VOWLNode): string {
  if (node.attributes?.includes('external')) return VOWLColors.EXTERNAL;
  if (node.attributes?.includes('deprecated')) return VOWLColors.DEPRECATED;

  switch (node.type) {
    case 'class':
    case 'thing':
      return VOWLColors.CLASS;
    case 'datatype':
    case 'literal':
      return VOWLColors.DATATYPE;
    case 'external':
      return VOWLColors.EXTERNAL;
    case 'deprecated':
      return VOWLColors.DEPRECATED;
    case 'rdf:Property':
    case 'rdfs:Class':
      return VOWLColors.RDF;
    default:
      return VOWLColors.CLASS;
  }
}

/**
 * Helper: Get radius for node type
 */
export function getNodeRadius(node: VOWLNode): number {
  switch (node.type) {
    case 'thing':
    case 'nothing':
      return VOWLLayout.THING_RADIUS;
    case 'class':
    case 'external':
    case 'deprecated':
      return VOWLLayout.CLASS_RADIUS;
    case 'datatype':
    case 'literal':
      return VOWLLayout.LITERAL_HEIGHT / 2;
    default:
      return VOWLLayout.CLASS_RADIUS;
  }
}
