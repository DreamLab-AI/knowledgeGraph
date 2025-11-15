/**
 * OWL ontology type definitions
 */

export interface OWLClass {
  id: string;
  type: 'owl:Class';
  iri: string;
  label?: Record<string, string>; // Language map
  comment?: Record<string, string>;
  attributes?: string[];
  instances?: number;
}

export interface OWLProperty {
  id: string;
  type: 'owl:ObjectProperty' | 'owl:DatatypeProperty' | 'owl:AnnotationProperty';
  iri: string;
  label?: Record<string, string>;
  comment?: Record<string, string>;
  domain?: string[];
  range?: string[];
  functional?: boolean;
  inverse?: string;
}

export interface OWLDatatype {
  id: string;
  type: 'rdfs:Datatype';
  iri: string;
  label?: Record<string, string>;
}

export interface OWLAxiom {
  type: 'subClassOf' | 'equivalentClass' | 'disjointWith' | 'propertyDomain' | 'propertyRange';
  subject: string;
  object: string;
  properties?: Record<string, any>;
}

export interface OntologyData {
  header?: {
    title?: Record<string, string>;
    iri?: string;
    version?: string;
    author?: string[];
    description?: Record<string, string>;
  };
  namespace?: Record<string, string>;
  class: OWLClass[];
  property: OWLProperty[];
  datatype?: OWLDatatype[];
  classAttribute?: any[];
  propertyAttribute?: any[];
}

export interface ParsedOntology {
  nodes: OWLClass[];
  edges: OWLProperty[];
  datatypes: OWLDatatype[];
  axioms: OWLAxiom[];
  metadata: {
    title: string;
    iri: string;
    version: string;
    namespaces: Record<string, string>;
  };
}
