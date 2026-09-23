
A graph query language is a declarative language for expressing queries, traversals, and pattern matches over graph-structured data composed of nodes and edges. Rather than joining tables, it lets users describe paths and subgraph patterns directly, making relationship-centric questions concise. Examples include Cypher and Gremlin, with GQL emerging as an ISO standard that unifies property-graph querying alongside the W3C SPARQL language for RDF.

- A [[Graph Query Language]] declaratively queries a [[Graph Database]] by matching node-and-edge patterns; it contrasts with [[SQL]] and [[SPARQL]] and powers [[Knowledge Graph]] applications.
- ### Overview
- Graph query languages target data where relationships are first-class, not modelled as foreign-key joins.
- Queries describe patterns and paths, which the engine matches against the stored graph.
- Property-graph languages (Cypher, Gremlin, GQL) differ from RDF's SPARQL in data model and syntax.
- ISO GQL standardises property-graph querying to improve portability across vendors.
- ### Mechanisms
- Pattern matching: ASCII-art or step-based descriptions of subgraphs to find.
- Traversal: walking edges to reach related nodes, often with depth and direction controls.
- Aggregation and projection: summarising and shaping matched results.
- Path expressions: variable-length and shortest-path queries.
- Standardisation: GQL (property graphs) and SPARQL (RDF) cover the two main models.
- ### Applications
- Querying social, fraud, and recommendation graphs.
- Navigating knowledge graphs and ontologies.
- Network and dependency analysis over connected data.
- Powering relationship-centric analytics in graph databases.
- ### Provenance

