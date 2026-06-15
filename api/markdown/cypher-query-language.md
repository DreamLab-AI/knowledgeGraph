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