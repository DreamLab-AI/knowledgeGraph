- ### Definition
  - The retrieval of items whose vector embeddings are most similar to a query vector, typically using distance metrics and approximate nearest neighbour indexing for efficiency.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:VectorSearch
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Information Retrieval]]
  - bridges-to:: [[Vector Database]], [[Information Retrieval]]
  - requires:: [[Embeddings]]
  - enables:: [[Semantic Search]]

- ### Content
  - Vector search finds the items in a collection whose embeddings lie closest to a query embedding under a similarity measure such as cosine similarity or Euclidean distance. Because exhaustive comparison is expensive at scale, it relies on approximate nearest neighbour indexes that return near-optimal results quickly.
  - It underpins semantic search, recommendation and retrieval-augmented generation, where meaning rather than exact keyword match determines relevance. Vector databases provide the indexing and serving infrastructure for vector search at scale.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z