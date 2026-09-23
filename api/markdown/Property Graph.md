
A property graph is a graph data structure in which both nodes and edges carry labels and an arbitrary set of key-value properties. Edges are directed and uniquely identifiable, allowing multiple parallel relationships of different types between the same pair of nodes. It is the data model behind many native graph databases and is queried with traversal languages such as Cypher and Gremlin.

- ### Overview
	- Nodes represent entities and may bear multiple labels grouping them into categories.
	- Edges are directed, typed and individually addressable, carrying their own properties.
	- Parallel edges of different types can connect the same pair of nodes without ambiguity.
	- The model favours expressive, locally annotated relationships over global statement triples.
- ### Key aspects
	- Properties on edges encode relationship attributes such as weight, timestamp or confidence.
	- Optional [[Schema]] constraints can enforce labels, property types and uniqueness.
	- Index-free adjacency stores neighbours with each node for fast traversal.
	- Traversal languages express variable-length paths and pattern matching directly.
- ### Applications
	- Powering a [[Knowledge Graph]] where relationship metadata is essential.
	- Modelling social, supply-chain and dependency networks as connected [[Structured Data]].
	- Recommendation and fraud analytics that depend on multi-hop relationship traversal.
	- Feeding [[Knowledge Graph Embedding]] pipelines that learn over typed edges.
- ### Provenance

