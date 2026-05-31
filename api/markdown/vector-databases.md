- ### Definition
  - Database systems specialised for storing high-dimensional vector embeddings and performing similarity search over them, typically using approximate nearest neighbour indexing.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:VectorDatabases
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Vector Database]]
  - bridges-to:: [[Semantic Search]]
  - requires:: [[Embeddings]]
  - enables:: [[Vector Search]], [[Retrieval-Augmented Generation]]

- ### Content
  - Vector databases store embeddings, which are dense numeric representations of text, images or other data produced by machine learning models. They index these vectors so that, given a query vector, the system can efficiently return the most similar stored items using distance or similarity metrics.
  - To scale to large collections they rely on approximate nearest neighbour algorithms that trade a small loss of exactness for substantial speed gains. Vector databases are a core component of semantic search and retrieval-augmented generation pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z