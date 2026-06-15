public:: true

# RAG Pipeline
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:rag-pipeline",
  "@type": "Page",
  "vc:slug": "rag-pipeline",
  "title": "RAG Pipeline",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rag-pipeline",
  "@type": "Class",
  "label": "RAG Pipeline",
  "definition": "A RAG pipeline is the end-to-end software architecture that implements retrieval-augmented generation, encompassing document ingestion and chunking, embedding generation, vector store indexing, query-time retrieval, context assembly, and language model generation to produce grounded, verifiable responses from external knowledge sources. It operationalises the RAG paradigm as a deployable, maintainable system with distinct stages, each subject to independent optimisation.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:retrieval-augmented-generation",
      "label": "Retrieval-Augmented Generation"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:embedding-search",
        "label": "Embedding Search"
      },
      {
        "@id": "urn:ngm:class:vector-store",
        "label": "Vector Store"
      },
      {
        "@id": "urn:ngm:class:chunking",
        "label": "Chunking"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agentic-rag",
        "label": "Agentic RAG"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  A RAG pipeline is the concrete engineering realisation of [[Retrieval-Augmented Generation]], integrating document ingestion, [[Chunking]], [[Embedding Search]], [[Vector Store]] indexing, and language model generation into a deployable system that grounds AI responses in external knowledge.

- ### Relationships
  A RAG pipeline is a subclass of [[Retrieval-Augmented Generation]] and operationalises it as a system. Its components include [[Embedding Search]] for semantic retrieval, a [[Vector Store]] as the persistent index of encoded content, and [[Chunking]] to segment documents for effective granularity. It is related to [[RAG Pipelines]] as the broader category and to [[Agentic RAG]] as an advanced variant where the retrieval strategy is agent-driven. Integration with a [[Knowledge Graph]] enables structured relational retrieval alongside dense vector search.

- ### Content
  - Retrieval-augmented generation was introduced by Lewis et al. (Facebook AI Research, 2020) as a method for combining parametric memory in language models with non-parametric retrieval from external corpora. The original RAG paper used a dense passage retrieval system over a Wikipedia dump to condition generation in a BART sequence-to-sequence model. Early practical implementations were fragile and required specialist ML engineering. The release of LangChain (2022) and LlamaIndex (2022) abstracted the pipeline components into composable libraries, dramatically lowering the barrier to building production RAG systems and catalysing rapid ecosystem growth.
  - A canonical RAG pipeline comprises two phases. In the offline indexing phase: source documents are ingested from files, databases, APIs, or crawlers; split into overlapping chunks (typically 256-1024 tokens) using fixed-size or semantic chunking strategies; encoded into dense vectors by an embedding model; and stored with metadata in a vector database indexed for approximate nearest-neighbour search. In the online retrieval phase: the user query is encoded using the same embedding model; top-k relevant chunks are retrieved from the vector index (optionally re-ranked); retrieved chunks are assembled into a context prompt; and a language model generates a response conditioned on the combined query and context. Hybrid retrieval combines dense embedding search with sparse BM25 keyword search for improved recall.
  - RAG pipelines are the dominant architecture for enterprise AI applications requiring up-to-date or proprietary knowledge: customer service assistants grounded in product documentation, legal research tools over case law databases, medical question-answering over clinical guidelines, and code assistance over internal codebases. They address the fundamental limitation of language models having static training cutoffs and no awareness of private organisational knowledge, while being significantly cheaper and faster to update than fine-tuning. The ability to cite retrieved sources enables auditability—a critical requirement in regulated domains.
  - In 2024-2025, RAG pipeline engineering has matured significantly. Evaluation frameworks (RAGAS, TruLens, ARES) enable systematic measurement of retrieval quality (context relevance, faithfulness, answer relevance), moving from anecdotal to quantitative RAG optimisation. Advanced techniques including HyDE (hypothetical document embeddings), multi-hop retrieval for multi-step queries, and graph RAG—which traverses knowledge graph structure alongside vector search—are in widespread adoption. Agentic RAG systems allow the retrieval strategy itself to be determined dynamically by an agent, enabling iterative refinement and tool calling during generation. Long-context language models (128k+ tokens) have raised questions about whether extensive retrieval is still needed, but evidence suggests retrieval remains superior for precision and auditability.
