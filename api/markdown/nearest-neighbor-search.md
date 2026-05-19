- ### Definition
  - An algorithmic technique used in vector databases to find data points most similar to a query vector by computing distance metrics like cosine similarity or Euclidean distance, with approximate methods (ANN) trading minor accuracy for millisecond-scale retrieval from billions of objects.

- ### Semantic Classification
  - owl-class:: spatial-computing:NearestNeighborSearch
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Search Algorithm]]
  - enables:: [[Semantic Search]]

- ### Content

  - #### Algorithm Types
		- HNSW (Hierarchical Navigable Small Worlds): Industry-standard graph-based ANN
		- Locality-Sensitive Hashing (LSH): Hash-based collision for similar points
		- IVF (Inverted File Index): Partitioned index for approximate search
		- KD-Tree: Tree-based method for low to moderate dimensions
		- Exact Nearest Neighbor (ENN): Guarantees absolute closest vectors
  - #### Technical Details
		- Distance metrics include cosine similarity and L2 (Euclidean) distance
		- Libraries: Faiss, Hnswlib, Annoy for efficient vector storage
		- Performance measured by latency, throughput, and recall accuracy
		- HNSW supports incremental updates for production systems
		- MongoDB Atlas offers both ANN and ENN search capabilities

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z