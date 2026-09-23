
An HNSW (Hierarchical Navigable Small World) index is a graph-based data structure for approximate nearest-neighbour search over high-dimensional vectors. It builds a multi-layer proximity graph where greedy traversal from a sparse top layer down to a dense base layer locates close vectors in logarithmic time. HNSW is the standard index backing vector databases and semantic search at scale.

- ### Content
  - The index trades exactness for speed, tuning recall via parameters such as the connectivity M and the search beam ef. Its logarithmic query complexity and incremental insertion make it well suited to embedding retrieval for RAG, recommendation, and similarity search over millions to billions of vectors.

