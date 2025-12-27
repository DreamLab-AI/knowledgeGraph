- ### OntologyBlock
  id:: nearest-neighbor-search-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-9981
	- source-domain:: mv
	- preferred-term:: Nearest Neighbor Search
	- status:: active
	- definition:: An algorithmic technique used in vector databases to find data points most similar to a query vector by computing distance metrics like cosine similarity or Euclidean distance, with approximate methods (ANN) trading minor accuracy for millisecond-scale retrieval from billions of objects.
	- owl:class:: mv:NearestNeighborSearch
	- belongsToDomain:: [[metaverse]]
	- #### Relationships
	  id:: nearest-neighbor-search-relationships
	  collapsed:: true
		- is-subclass-of:: [[Search Algorithm]]
		- related-to:: [[Vector Database]]
		- related-to:: [[Similarity Search]]
		- related-to:: [[Machine Learning]]
		- enables:: [[Semantic Search]]
	- #### Algorithm Types
	  collapsed:: true
		- HNSW (Hierarchical Navigable Small Worlds): Industry-standard graph-based ANN
		- Locality-Sensitive Hashing (LSH): Hash-based collision for similar points
		- IVF (Inverted File Index): Partitioned index for approximate search
		- KD-Tree: Tree-based method for low to moderate dimensions
		- Exact Nearest Neighbor (ENN): Guarantees absolute closest vectors
	- #### Technical Details
	  collapsed:: true
		- Distance metrics include cosine similarity and L2 (Euclidean) distance
		- Libraries: Faiss, Hnswlib, Annoy for efficient vector storage
		- Performance measured by latency, throughput, and recall accuracy
		- HNSW supports incremental updates for production systems
		- MongoDB Atlas offers both ANN and ENN search capabilities

