A vector index is a data structure that organises high-dimensional embedding vectors to enable fast approximate nearest-neighbour search over large collections. Using methods such as HNSW graphs, IVF partitioning or product quantisation, it trades a small amount of recall for large gains in query latency and scalability. Vector indexes are the retrieval engine behind semantic search and retrieval-augmented generation.

### Content

- Algorithms like HNSW build navigable small-world graphs, while IVF and product quantisation cluster and compress vectors to bound memory and latency. Vector databases expose these indexes with filtering, hybrid search and persistence, serving similarity queries at scale.

