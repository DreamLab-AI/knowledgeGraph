Cypher is a declarative graph query language originally developed by Neo4j for querying property graph databases, using an ASCII-art syntax to express patterns of nodes and relationships intuitively. It allows users to describe graph patterns using parentheses for nodes and arrows for relationships, making queries readable and expressive without requiring deep knowledge of graph traversal algorithms. Cypher has become the basis of the openCypher project and GQL ISO standard, establishing it as a cross-vendor lingua franca for graph databases.

### Overview

- Cypher was introduced with Neo4j 1.4 (2011) and rapidly gained adoption due to its human-readable syntax.
- The openCypher initiative (2015) released the specification under Apache 2.0, enabling implementation in RedisGraph, SAP HANA, Apache AGE, and others.
- ISO GQL (Graph Query Language) standardised in 2024 incorporates Cypher as a key influence alongside SPARQL and SQL/PGQ.
- MATCH, CREATE, MERGE, DELETE, SET, and RETURN form the core clause set.

### Key aspects

- Node patterns: `(n:Label {property: value})` — parentheses with optional label and properties.
- Relationship patterns: `-[:TYPE {props}]->` — directional arrows with optional type and properties.
- Path expressions enable variable-length traversals: `-[:KNOWS*1..3]->`.
- Aggregation functions: COUNT, SUM, AVG, COLLECT mirror SQL aggregates.
- APOC and GDS plugin libraries extend Cypher with graph algorithms and data integration.

### Mechanisms

- Query planning: execution engine decomposes MATCH patterns into index lookups, label scans, and expand operations.
- Cost-based optimiser selects join order for complex multi-hop queries.
- Parameterised queries prevent injection and enable plan caching.
- Transactional semantics follow ACID guarantees in Neo4j's storage layer.

### Applications

- [[Knowledge Graph]] construction and querying for enterprise search and recommendation.
- Fraud detection by identifying suspicious transaction patterns in financial graphs.
- Network and IT infrastructure topology analysis.
- Identity and access management: policy traversal over permission hierarchies.
- Life sciences: drug-protein interaction network analysis.

### Provenance

