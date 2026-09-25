Text embeddings are dense numerical vector representations of words, sentences, or documents that place semantically similar text close together in a high-dimensional space. They are produced by neural models trained so that distance or cosine similarity in the vector space reflects meaning rather than surface form. Embeddings are the foundation of semantic search, clustering, and retrieval-augmented generation.

### Content

- An embedding model encodes a span of text into a fixed-length vector whose direction captures meaning, allowing similarity to be measured by cosine distance or dot product. These vectors are indexed in approximate-nearest-neighbour stores so that a query can retrieve the most relevant passages from millions of candidates in milliseconds. Embedding quality depends on the training objective and domain coverage, and modern instruction-tuned embedding models support asymmetric query-document matching used throughout RAG pipelines.

