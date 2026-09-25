Locality-sensitive hashing (LSH) is a family of hashing techniques that map similar high-dimensional inputs to the same hash bucket with high probability, enabling sub-linear approximate nearest-neighbour search. By trading exactness for speed, LSH makes similarity search and deduplication tractable over very large datasets. It is widely applied to embeddings, document near-duplicate detection, and retrieval pipelines.

### Content

- Hash families are chosen so that collision probability rises with input similarity under a target metric such as cosine or Jaccard distance. Multiple hash tables and amplification via AND/OR constructions tune the precision-recall trade-off, and LSH is a common preprocessing step for deduplicating massive training sets.

