iri:: http://narrativegoldmine.com/spatial-computing#SearchIndex
uri:: urn:visionclaw:concept:spatial-computing:search-index
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:search-index
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Search Index
content-hash:: sha256-12-8d7221011d1a
legacy-term-id:: MV-10031
status:: active
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true

- ### Definition
  - A data structure that maps terms, embeddings, or attributes to document locations, enabling rapid retrieval of relevant content from large metaverse asset catalogues through inverted indexes, vector indexes, or hybrid approaches.

- ### Semantic Classification
  - owl-class:: spatial-computing:SearchIndex
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Data Structure]]
  - enables:: [[Fast Query Response]]

- ### Content

  - #### Index Types
		- Inverted index for text search
		- Vector index for semantic similarity
		- B-tree for range queries
		- Geospatial index for location search
		- Graph index for relationship traversal
  - #### Technologies
		- Apache Lucene indexing library
		- HNSW for approximate nearest neighbour
		- FAISS for vector similarity
		- Pinecone managed vector database
		- Milvus open source vector search

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
