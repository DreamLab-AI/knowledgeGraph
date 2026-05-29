- ### Definition
  - Information Retrieval (IR) is the discipline and set of techniques for finding relevant documents, passages, or facts from a corpus in response to a query. Modern IR systems employ inverted indices, vector embeddings, and semantic search to match queries against large-scale knowledge bases and document collections. In spatial computing, IR underpins context-aware search, knowledge graph querying, and retrieval-augmented generation pipelines that ground AI responses in factual content.

- ### Semantic Classification
  - owl-class:: spatial-computing:InformationRetrieval
  - owl-role:: concept

- ### Relationships
  - uses [[Semantic Search]]
  - uses [[Vector Database]]
  - uses [[Knowledge Graph]]
  - enables [[Retrieval-Augmented Generation]]
  - enables [[Search Engine]]
  - relatedTo [[Natural Language Processing]]

- ### Content

  ## Overview

  Information Retrieval is the foundational discipline enabling systems to locate and rank relevant information from large corpora. Classic approaches use term-frequency-inverse-document-frequency (TF-IDF) weighted inverted indices; modern dense retrieval encodes queries and documents as vectors in a shared embedding space and finds nearest neighbours via approximate nearest-neighbour search in a vector database. Semantic search improves over keyword matching by capturing meaning rather than surface form. Knowledge graphs augment retrieval with structured entity-relationship data. Retrieval-Augmented Generation (RAG) combines IR with large language models: retrieved passages are injected into the model's context to ground generation in factual sources. In spatial computing, real-time IR supports scene understanding, contextual annotation of physical objects, and on-device search over personal knowledge stores without cloud round-trips.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z