- ### Definition
  - A storage system optimised for holding high-dimensional vector embeddings and retrieving them by similarity. It supports nearest-neighbour search used in semantic retrieval and machine learning applications.

- ### Semantic Classification
  - owl-class:: data-management:VectorStore
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Vector Database]]
  - bridges-to:: [[Knowledge Representation]]
  - requires:: [[Vector Database]]
  - enables:: [[Natural Language Processing]]

- ### Content
  - A vector store keeps embeddings produced by models and indexes them so that queries can find the most similar items using metrics such as cosine similarity or Euclidean distance. It often uses approximate nearest-neighbour indexes for scale.
  - Vector stores underpin semantic search and retrieval-augmented generation, where a query is embedded and matched against stored vectors to find relevant documents or records.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z