public:: true

# LlamaIndex
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:llama-index",
  "@type": "Page",
  "vc:slug": "llama-index",
  "title": "LlamaIndex",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:meta-llama-model-family-index",
  "@type": "Class",
  "label": "LlamaIndex",
  "definition": "LlamaIndex (formerly GPT Index) is an open-source data framework and Python library that provides the abstractions and tooling needed to connect large language models with external data sources through structured indexing, retrieval, and query pipelines, primarily enabling production-grade retrieval-augmented generation (RAG) applications. It handles the full pipeline from document ingestion and chunking, through embedding and vector storage, to query decomposition, retrieval, reranking, and response synthesis, providing high-level abstractions over underlying LLMs, embedding models, and vector databases. LlamaIndex is positioned as the data orchestration complement to LangChain's agent orchestration focus, with particular strength in structured data retrieval and multi-document reasoning.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:agent-frameworks",
      "label": "Agent Frameworks"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-construction",
        "label": "Knowledge Graph Construction"
      },
      {
        "@id": "urn:ngm:class:multi-agent-systems",
        "label": "Multi-Agent Systems"
      },
      {
        "@id": "urn:ngm:class:question-answering",
        "label": "Document Question Answering"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:embeddings",
        "label": "Embeddings"
      },
      {
        "@id": "urn:ngm:class:vector-database",
        "label": "Vector Database"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer Models"
      },
      {
        "@id": "urn:ngm:class:nearest-neighbor-search",
        "label": "Approximate Nearest Neighbour Search"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:chunking",
        "label": "Document Chunking"
      },
      {
        "@id": "urn:ngm:class:text-embeddings",
        "label": "Text Embedding"
      },
      {
        "@id": "urn:ngm:class:python",
        "label": "Python"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-connectors",
        "label": "Data Connectors"
      },
      {
        "@id": "urn:ngm:class:reranking",
        "label": "Reranking"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:rag-pipeline",
        "label": "RAG Pipeline"
      },
      {
        "@id": "urn:ngm:class:agentic-workflow",
        "label": "Agentic Workflow"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:enterprise-ai",
        "label": "Enterprise AI"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:lang-chain",
        "label": "LangChain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      },
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:fine-tuning",
        "label": "Fine-Tuning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data",
        "label": "Data"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:gpt-index",
      "label": "GPT Index"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[LlamaIndex]] is an open-source [[Agent Frameworks]] library that orchestrates the full [[Retrieval-Augmented Generation]] pipeline—from document ingestion and [[Embeddings]] generation, through [[Vector Database]] storage and retrieval, to response synthesis by [[Large Language Models]]—enabling developers to build production RAG applications over private enterprise data with minimal boilerplate.

- ### Relationships
  - [[LlamaIndex]] belongs to the [[Agent Frameworks]] category alongside [[LangChain]], with a complementary focus on data ingestion and retrieval rather than agent orchestration. It uses [[Embeddings]] to represent document chunks in high-dimensional vector space, stores them in [[Vector Database]] backends (Pinecone, Weaviate, Chroma, pgvector), and retrieves relevant chunks at query time to ground [[Large Language Models]] responses in accurate, current information—the core [[Retrieval-Augmented Generation]] pattern. [[Semantic Search]] is the retrieval mechanism, comparing query embeddings to document embeddings by cosine similarity. LlamaIndex also provides [[Knowledge Graph Construction]] utilities for building graph-structured indices. [[Information Retrieval]] theory informs its reranking and query decomposition strategies that improve multi-hop reasoning across document sets.

- ### Content
  - LlamaIndex was created by Jerry Liu and released in October 2022 as GPT Index, a minimal library abstracting the pattern of loading documents, splitting them into chunks, embedding them, and storing them in a vector index for later retrieval by GPT-3/4 queries. The initial implementation was a direct response to the context window limitations of early GPT-3 API deployments: because the model could only process a few thousand tokens, external data had to be retrieved and injected selectively rather than provided in full. The project renamed to LlamaIndex in early 2023 and rapidly attracted community contributions as RAG became the dominant architectural pattern for enterprise LLM applications. LlamaIndex Inc. raised $8.5 million in a seed round in 2023 to commercialise the open-source framework.

  - The framework's core abstraction is the Index, a data structure that pre-processes source documents for efficient retrieval. The VectorStoreIndex stores embedding vectors and performs approximate nearest-neighbour search; the SummaryIndex summarises document chunks hierarchically; the KnowledgeGraphIndex extracts entities and relations into a graph structure; and the PropertyGraphIndex (introduced 2024) stores typed property graphs enabling structured traversal alongside vector retrieval. Query pipelines compose retrievers, rerankers (using cross-encoder models), and response synthesisers into declarative DAG pipelines. LlamaIndex's RouterQueryEngine intelligently routes queries to different indices or agents based on query semantics, enabling multi-domain RAG systems over heterogeneous data sources.

  - LlamaIndex has been adopted extensively in enterprise RAG deployments because it abstracts over 160+ data source connectors (LlamaHub) including PDF, Notion, Confluence, Slack, SQL databases, and REST APIs, and over 40 vector store backends. Its integration with multi-agent patterns—where specialised sub-agents handle different data sources or task types and a orchestrator agent routes and combines their outputs—has made it the dominant library for complex RAG applications. Benchmark evaluations using RAGAS and LlamaIndex's own evaluation framework have driven community investment in improving retrieval precision and faithfulness metrics, which are the primary quality measures for production RAG systems.

  - In 2024-2025, LlamaIndex has evolved beyond pure RAG into agentic data workflows. LlamaAgents (now llamacloud agent framework) provides infrastructure for multi-step tool-using agents over structured and unstructured data. LlamaCloud offers a managed service with document parsing, storage, and retrieval as hosted infrastructure, targeting enterprises that want RAG without self-managing vector databases and embedding pipelines. Advanced retrieval techniques—HyDE (Hypothetical Document Embeddings), multi-query expansion, FLARE (Forward-Looking Active Retrieval), and contextual retrieval—are now built-in pipeline components. The framework's trajectory reflects the maturing of RAG from proof-of-concept to production-hardened enterprise infrastructure with SLA-grade reliability requirements.

- ### See Also
  - [[Retrieval-Augmented Generation]] | [[Large Language Models]] | [[Embeddings]] | [[Vector Database]] | [[LangChain]]
