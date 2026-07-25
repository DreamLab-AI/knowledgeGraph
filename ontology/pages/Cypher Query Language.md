public:: true

# Cypher Query Language

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:cypher-query-language", "@type":"Page", "title":"Cypher Query Language", "vc:slug":"cypher-query-language", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cypher-query-language",
  "@type": "Class",
  "label": "Cypher Query Language",
  "definition": "Cypher is a declarative graph query language originally developed by Neo4j for querying property graph databases, using an ASCII-art syntax to express patterns of nodes and relationships intuitively. It allows users to describe graph patterns using parentheses for nodes and arrows for relationships, making queries readable and expressive without requiring deep knowledge of graph traversal algorithms. Cypher has become the basis of the openCypher project and GQL ISO standard, establishing it as a cross-vendor lingua franca for graph databases.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data", "label": "Data"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:graph-databases", "label": "Graph Databases"},
      {"@id": "urn:ngm:class:property-graph", "label": "Property Graph"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:query-language", "label": "Query Language"},
      {"@id": "urn:ngm:class:declarative-programming", "label": "Declarative Programming"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:sparql", "label": "SPARQL"},
      {"@id": "urn:ngm:class:sql", "label": "SQL"},
      {"@id": "urn:ngm:class:gremlin", "label": "Gremlin"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:graph-analytics", "label": "Graph Analytics"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:pattern-matching", "label": "Pattern Matching"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:standards", "label": "Standards"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:rdf", "label": "RDF"},
      {"@id": "urn:ngm:class:data-modelling", "label": "Data Modelling"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:graph-databases", "label": "Graph Databases"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:recommendation-system", "label": "Recommendation System"},
      {"@id": "urn:ngm:class:fraud-detection", "label": "Fraud Detection"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Cypher Query Language]] is a declarative [[query language]] for [[graph databases]], using ASCII-art patterns such as `(node)-[:RELATION]->(other)` to express graph traversals and [[pattern matching]].
  - Developed by Neo4j and open-sourced via the openCypher project, Cypher influenced the ISO GQL standard.
  - It contrasts with [[SPARQL]] (RDF triple stores), [[SQL]] (relational databases), and [[Gremlin]] (imperative traversals).

- ### Overview
  - Cypher was introduced with Neo4j 1.4 (2011) and rapidly gained adoption due to its human-readable syntax.
  - The openCypher initiative (2015) released the specification under Apache 2.0, enabling implementation in RedisGraph, SAP HANA, Apache AGE, and others.
  - ISO GQL (Graph Query Language) standardised in 2024 incorporates Cypher as a key influence alongside SPARQL and SQL/PGQ.
  - MATCH, CREATE, MERGE, DELETE, SET, and RETURN form the core clause set.

- ### Key aspects
  - Node patterns: `(n:Label {property: value})` — parentheses with optional label and properties.
  - Relationship patterns: `-[:TYPE {props}]->` — directional arrows with optional type and properties.
  - Path expressions enable variable-length traversals: `-[:KNOWS*1..3]->`.
  - Aggregation functions: COUNT, SUM, AVG, COLLECT mirror SQL aggregates.
  - APOC and GDS plugin libraries extend Cypher with graph algorithms and data integration.

- ### Mechanisms
  - Query planning: execution engine decomposes MATCH patterns into index lookups, label scans, and expand operations.
  - Cost-based optimiser selects join order for complex multi-hop queries.
  - Parameterised queries prevent injection and enable plan caching.
  - Transactional semantics follow ACID guarantees in Neo4j's storage layer.

- ### Applications
  - [[Knowledge Graph]] construction and querying for enterprise search and recommendation.
  - Fraud detection by identifying suspicious transaction patterns in financial graphs.
  - Network and IT infrastructure topology analysis.
  - Identity and access management: policy traversal over permission hierarchies.
  - Life sciences: drug-protein interaction network analysis.

- ### Relationships
  - uses:: [[Graph Databases]]
  - implements:: [[Query Language]]
  - implements:: [[Declarative Programming]]
  - contrastsWith:: [[SPARQL]]
  - contrastsWith:: [[SQL]]
  - enables:: [[Graph Analytics]]
  - enables:: [[Knowledge Graph]]
  - enables:: [[Pattern Matching]]
  - standardizedBy:: [[Standards]]
  - relatedTo:: [[Ontology]]
  - relatedTo:: [[Data Modelling]]
  - supports:: [[Recommendation System]]
  - supports:: [[Fraud Detection]]

- ### Provenance
  - updated:: 2026-06-15
