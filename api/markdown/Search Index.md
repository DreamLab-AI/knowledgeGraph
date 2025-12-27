- ### OntologyBlock
  id:: search-index-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-10031
	- source-domain:: mv
	- preferred-term:: Search Index
	- status:: active
	- definition:: A data structure that maps terms, embeddings, or attributes to document locations, enabling rapid retrieval of relevant content from large metaverse asset catalogues through inverted indexes, vector indexes, or hybrid approaches.
	- owl:class:: mv:SearchIndex
	- belongsToDomain:: [[metaverse]]
	- #### Relationships
	  id:: search-index-relationships
	  collapsed:: true
		- is-subclass-of:: [[Data Structure]]
		- related-to:: [[Search Engine]]
		- related-to:: [[Database Indexing]]
		- related-to:: [[Information Retrieval]]
		- enables:: [[Fast Query Response]]
	- #### Index Types
	  collapsed:: true
		- Inverted index for text search
		- Vector index for semantic similarity
		- B-tree for range queries
		- Geospatial index for location search
		- Graph index for relationship traversal
	- #### Technologies
	  collapsed:: true
		- Apache Lucene indexing library
		- HNSW for approximate nearest neighbour
		- FAISS for vector similarity
		- Pinecone managed vector database
		- Milvus open source vector search


