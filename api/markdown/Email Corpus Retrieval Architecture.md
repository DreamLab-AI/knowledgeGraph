public:: true

elevatedFrom:: [[email search]]
# Email Corpus Retrieval Architecture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b9b532f80675bbb4d92e2a2f153c8508bb61f7121e73d4fbd2129246b71ff80c",
  "@type": "Page",
  "vc:slug": "email-corpus-retrieval-architecture",
  "title": "Email Corpus Retrieval Architecture",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "email search"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:email-corpus-retrieval-architecture",
  "@type": "Class",
  "label": "Email Corpus Retrieval Architecture",
  "definition": "Email search refers to the set of techniques, architectures, and tooling used to index, query, and retrieve relevant messages from large email corpora. Modern self-hosted email search stacks combine traditional full-text indexing (BM25-based engines such as Tantivy or Xapian) with dense vector embeddings and hybrid retrieval strategies to support semantic and keyword queries at scale. LLM-based reranking and optional graph-database layers for entity-relationship queries extend precision and recall beyond keyword matching, enabling systems to handle corpora of hundreds of thousands of messages with sub-second latency.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:search-engine", "label": "Search Engine"
    }
  ],
  "quality": 0.7,
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"},
      {"@id": "urn:ngm:class:embedding-model", "label": "Embedding Model"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:search-index", "label": "Search Index"},
      {"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation-rag", "label": "Retrieval Augmented Generation - RAG"},
      {"@id": "urn:ngm:class:knowledge-base", "label": "Knowledge Base"},
      {"@id": "urn:ngm:class:graph-database", "label": "Graph Database"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:email-search:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b9b532f80675bbb4d92e2a2f153c8508bb61f7121e73d4fbd2129246b71ff80c"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - email search is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:EmailSearch
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  # Self-Sovereign Email Search Stack: A Comprehensive Report
  For searching 300k emails (multi-GB corpus) locally with LLM-enhanced fuzzy search capabilities, the optimal approach combines multiple layers:
  1. **Traditional full-text search** (Elasticsearch/Tantivy) for fast keyword matching
  2. **Vector embeddings** for semantic similarity search
  3. **Hybrid retrieval** combining BM25 and dense vectors
  4. **Local LLM reranking** for precision
  5. **Optional GraphRAG** for relationship-aware search
  **Technology Options:**
  - **Tantivy** (Rust-based, used by Meilisearch)
  - Extremely fast, memory-efficient
  - BM25 scoring, fuzzy matching
  - Faceted search support
  - **Apache Lucene/Elasticsearch** (self-hosted)
  - Most mature, extensive features
  - Higher resource consumption
  - **Xapian**
  - Lightweight, good for email specifically
  - Probabilistic ranking
	  **Implementation:**
	  ```
  **Embedding Models (Local):**
  - **Sentence-Transformers** (all-MiniLM-L6-v2)
  - 384 dimensions, fast, good quality
  - ~80MB model size
  - **E5-small/base/large**
  - Better multilingual support
  - Scales from 384 to 1024 dimensions
  - **BGE-small/base/large**
  - State-of-the-art quality
  - Optimized for retrieval
	  **Vector Databases:**
  - **Qdrant** (Rust, highly efficient)
  ```
  - **Weaviate** (Go, good hybrid search)
  - **ChromaDB** (Python, easy integration)
  - **FAISS** (Facebook, CPU/GPU optimized)
  **Approach:** Combine BM25 (sparse) + Dense vectors
  **Options:**
  1. **Custom Pipeline:**
   ```
  2. **Vespa.ai** (Yahoo's open source)
  - Native hybrid search
  - Tensor support
  - Complex ranking expressions
	  3. **Weaviate with Hybrid mode**
  - Built-in BM25 + vector fusion
  - Configurable alpha parameter
  **Local LLM Options:**
  - **Llama 3.2 1B/3B** - Fast, good for reranking
  - **Mistral 7B** - Better quality, slower
  - **Phi-3-mini** - Microsoft's efficient model
  **Implementation Patterns:**
  1. **Query Expansion:**
   ```
  2. **Reranking:**
   ```
  3. **Extractive QA:**
   ```
  **When to Use:** For relationship-heavy queries (who emailed whom about what)
  **Architecture:**
  1. **Entity Extraction:**
  - Use spaCy/Stanza for NER
  - Extract people, organizations, topics
	  2. **Graph Database:**
  - **Neo4j** (most mature)
  - **ArangoDB** (multi-model)
  - **DGraph** (high performance)
	  3. **Graph Embeddings:**
  - Node2Vec for entity embeddings
  - GraphSAGE for inductive learning
  ```
  1. **Indexing Phase:**
   ```
  2. **Search Phase:**
   ```
  - Split long emails into overlapping chunks (512 tokens)
  - Index chunks separately with email ID reference
  - Aggregate scores at retrieval time
  - Use ONNX Runtime for 2-3x speedup
  - Batch processing during indexing
  - Cache frequently accessed embeddings
  - Shard by date for time-based queries
  - Separate indices for attachments vs body text
  ```
  - Generate token-level embeddings
  - Enables fine-grained matching
  - Tools: RAGatouille, ColBERT-AI
  - SPLADE models for better term expansion
  - Combines benefits of sparse and dense
  - BGE-M3 supports multiple embedding types
  - Lexical, dense, and sparse in one model
  - Use email thread context
  - Temporal proximity scoring
  - Social graph weighting
  1. **Encryption at Rest:**
  - LUKS for full-disk encryption
  - Transparent encryption for indices
	  2. **Access Control:**
  - Linux user permissions
  - Application-level ACLs
	  3. **Audit Logging:**
  - Track all search queries
  - Monitor model inputs/outputs
  ```
  ```
  For your 300k email corpus, I recommend starting with the hybrid approach (Tantivy + Qdrant) with BGE-small embeddings and Llama 3.2 3B for reranking. This provides an excellent balance of speed, accuracy, and resource usage. Add GraphRAG only if you have significant relationship-based query needs.
  The modular architecture allows you to start simple and add layers as needed. Begin with traditional search, add vectors for semantic capabilities, then layer in LLM reranking for precision.
  - Haystack Framework: https://haystack.deepset.ai/
  - LangChain RAG modules: https://python.langchain.com/
  - DSPy for optimizing pipelines: https://github.com/stanfordnlp/dspy
  - MTEB Leaderboard for embedding models: https://huggingface.co/spaces/mteb/leaderboard

  - ## Executive Summary
  - ## Layered Search Architecture
  - ### Layer 1: Traditional Full-Text Search (Foundation)
	  ```bash
	  # Example with Tantivy-based Meilisearch
	  docker run -p 7700:7700 -v $(pwd)/data:/data.ms getmeili/meilisearch:latest
  - ### Layer 2: Vector Embeddings (Semantic Search)
  ```bash
  docker run -p 6333:6333 qdrant/qdrant
  - ### Layer 3: Hybrid Retrieval Systems
   ```python
   # Pseudo-code
   bm25_results = tantivy_search(query, k=100)
   vector_results = qdrant_search(embed(query), k=100)
   combined = reciprocal_rank_fusion(bm25_results, vector_results)
  - ### Layer 4: LLM Enhancement Strategies
   ```python
   # Use LLM to expand query
   expanded_query = llm.generate(f"Synonyms and related terms for: {query}")
   ```python
   # Score top-k results with LLM
   for result in top_100_results:
       score = llm.score_relevance(query, result)
   ```python
   # Extract specific answers from retrieved emails
   answer = llm.extract(question, relevant_emails)
  - ### Layer 5: GraphRAG Implementation
  - ## Recommended Stack for 300k Emails
  - ### Optimal Configuration:
  ```yaml
  Primary Stack:
  Full-Text: Tantivy (via Meilisearch or raw)
  Vectors: Qdrant + BGE-small embeddings
  Hybrid: Custom reciprocal rank fusion
  LLM: Llama 3.2 3B (quantized)

  Optional Additions:
  GraphDB: Neo4j Community Edition
  Entity Extraction: spaCy
  - ### Implementation Pipeline:
   ```python
   # Pseudo-code
   for email in emails:
       # Extract metadata
       metadata = parse_email(email)

       # Full-text index
       tantivy.index(email.content, metadata)

       # Generate embeddings
       embedding = model.encode(email.content)
       qdrant.upsert(embedding, metadata)

       # Extract entities (optional)
       entities = spacy_nlp(email.content)
       neo4j.create_nodes(entities)
   ```python
   def search(query, k=20):
       # Step 1: Parallel retrieval
       bm25_results = tantivy.search(query, k=100)
       vector_results = qdrant.search(embed(query), k=100)

       # Step 2: Fusion
       candidates = reciprocal_rank_fusion(bm25_results, vector_results)[:50]

       # Step 3: LLM rerank
       reranked = llm_rerank(query, candidates)[:k]

       return reranked
  - ## Performance Optimization Strategies
  - ### 1. **Chunking Strategy:**
  - ### 2. **Embedding Optimization:**
  - ### 3. **Index Sharding:**
  - ### 4. **Resource Requirements:**
  ```yaml
  Minimal Setup (Quantized):
  RAM: 16GB
  Storage: 50GB (including indices)
  GPU: Optional (CPU viable with quantization)

  Optimal Setup:
  RAM: 32GB
  Storage: 100GB (with redundancy)
  GPU: 8GB VRAM (for faster inference)
  - ## Advanced Techniques
  - ### 1. **ColBERT-style Late Interaction:**
  - ### 2. **Learned Sparse Representations:**
  - ### 3. **Multi-Vector Representations:**
  - ### 4. **Contextual Reranking:**
  - ## Privacy & Security Considerations
  - ## Monitoring & Maintenance
  ```python
  # Key metrics to track
  metrics = {
    'search_latency': 'p50, p95, p99',
    'index_size': 'bytes per document',
    'memory_usage': 'peak and average',
    'relevance': 'click-through rate, dwell time'
  }
  - ## Getting Started Commands
  ```bash
  # 1. Install base dependencies
  sudo apt-get install python3-pip docker.io git

  # 2. Set up Qdrant
  docker run -p 6333:6333 -v $(pwd)/qdrant:/qdrant/storage qdrant/qdrant

  # 3. Install Python packages
  pip install sentence-transformers qdrant-client tantivy spacy

  # 4. Download models
  python -c "from sentence_transformers import SentenceTransformer; SentenceTransformer('BAAI/bge-small-en-v1.5')"

  # 5. Install local LLM runtime
  pip install llama-cpp-python
  # Download quantized Llama 3.2 3B model
  - ## Conclusion
  - ## Additional Resources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
