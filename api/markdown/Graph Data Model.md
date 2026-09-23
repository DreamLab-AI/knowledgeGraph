
A graph data model represents information as nodes connected by edges, where edges carry the semantics of relationships between entities. It makes connections first-class, so traversing and querying relationships is direct rather than reconstructed through joins as in tabular models. The two dominant variants are the labelled property graph, which attaches key-value properties to nodes and edges, and the RDF triple model, which expresses facts as subject-predicate-object statements.

- ### Overview
	- Nodes hold entities while edges express typed, often directed, relationships between them.
	- Querying follows edges directly, so deep or variable-length relationship questions are natural and efficient.
	- The labelled property graph attaches properties to both nodes and edges for rich attribution.
	- The triple model encodes each fact as subject-predicate-object, aligning with web-scale linked data.
- ### Key aspects
	- Schema may be explicit or emergent, supporting flexible and evolving structures.
	- Indexes on labels and properties accelerate entry-point lookups before traversal.
	- Path and pattern matching let queries express reachability and neighbourhood constraints.
	- Storage engines optimise adjacency so hops avoid expensive set joins.
- ### Applications
	- Building a [[Knowledge Graph]] that integrates heterogeneous entities and relations.
	- Powering recommendation, fraud detection and network analysis over connected [[Structured Data]].
	- Publishing linked data on the [[Semantic Web]] and querying it with [[SPARQL]].
	- Feeding [[Knowledge Graph Embedding]] models for downstream machine learning.
- ### Provenance

