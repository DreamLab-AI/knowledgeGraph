public:: true
alias:: Retrieval Augmented Generation, RAG, Retrieval-Augmented LLM

# retrieval-augmented generation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:26c5d8275d14b776ab7a6a85de4b2eeced577fa6d63f5924aef875dcb4be10f3",
  "@type": "Page",
  "vc:slug": "retrieval-augmented-generation",
  "title": "retrieval-augmented generation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:retrieval-augmented-generation",
  "@type": "Class",
  "label": "Retrieval-Augmented Generation",
  "definition": "Retrieval-Augmented Generation (RAG) is an AI inference architecture that augments large language model generation by dynamically retrieving semantically relevant passages from an external knowledge store at query time, concatenating them into the model context window before the response is produced. A retriever component—typically a dense bi-encoder backed by a vector database—embeds both the query and document corpus into a shared latent space and selects the top-k most similar chunks via approximate nearest-neighbour search. This non-parametric memory mechanism decouples factual knowledge from frozen model weights, dramatically reducing hallucination rates, enabling post-deployment knowledge updates without retraining, and providing fine-grained source attribution for generated claims. RAG has become the dominant architectural pattern for enterprise knowledge-intensive natural language processing applications, including question answering, customer support, legal research, and medical information retrieval.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:retrieval-augmented-llm",
      "label": "Retrieval-Augmented LLM"
    },
    {
      "@id": "urn:ngm:class:grounded-language-generation",
      "label": "Grounded Language Generation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:vector-database",
        "label": "Vector Database"
      },
      {
        "@id": "urn:ngm:class:embedding-model",
        "label": "Embedding Model"
      },
      {
        "@id": "urn:ngm:class:chunking",
        "label": "Document Chunking"
      },
      {
        "@id": "urn:ngm:class:nearest-neighbor-search",
        "label": "Approximate Nearest Neighbour Search"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:question-answering",
        "label": "Question Answering"
      },
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
      },
      {
        "@id": "urn:ngm:class:hallucination-reduction",
        "label": "Hallucination Mitigation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:knowledge-base",
        "label": "Knowledge Base"
      },
      {
        "@id": "urn:ngm:class:dense-retrieval",
        "label": "Dense Retrieval"
      },
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fine-tuning",
        "label": "Fine Tuning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      },
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:agentic-ai",
        "label": "Agentic AI"
      },
      {
        "@id": "urn:ngm:class:ai-inference",
        "label": "AI Inference Architecture"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:enterprise-search",
        "label": "Enterprise Search"
      },
      {
        "@id": "urn:ngm:class:knowledge-management",
        "label": "Knowledge Management"
      }
    ]
  },
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Retrieval-Augmented Generation (RAG) is an [[AI Inference Architecture]] that augments [[Large Language Models]] by dynamically fetching semantically relevant passages from an external [[Knowledge Base]] at query time, prepending those passages to the model's [[Context Window Management|context window]] before generation. The result is that generated text is grounded in retrieved evidence rather than solely in parametric memory frozen during [[Model Pre-training]], enabling accurate, up-to-date, and attributable responses without the expense of retraining. RAG sits at the intersection of [[Information Retrieval]] and [[Natural Language Processing]], and has become the architectural cornerstone of enterprise AI applications that demand factual reliability.

- ### Overview
  - **What it is.** RAG separates the factual memory of an AI system into two components: a frozen generative model that handles language understanding and fluent text production, and a mutable non-parametric memory that stores factual knowledge in a searchable corpus. At inference time the retriever fetches relevant passages and the reader (the language model) conditions its output on those passages plus the original query.
  - **Why it matters.** [[Large Language Models]] memorise facts in their weights during [[Model Pre-training]], but this knowledge becomes stale and cannot easily be corrected. RAG allows practitioners to update the knowledge corpus independently of the model—swapping in new document collections, removing outdated content, or restricting retrieval to proprietary data—making it the preferred strategy for enterprise deployments where accuracy, freshness, and source traceability are non-negotiable.
  - **How it works.** The canonical RAG pipeline has three phases:
    - **Indexing.** Documents are split into overlapping chunks via [[Document Chunking]], each chunk is converted into a dense vector by an [[Embedding Model]] (e.g., a bi-encoder such as sentence-transformers), and vectors are stored in a [[Vector Database]] supporting [[Approximate Nearest Neighbour Search]].
    - **Retrieval.** The user query is embedded with the same encoder, and the top-k nearest-neighbour chunks are retrieved from the index—optionally re-ranked by a cross-encoder for precision.
    - **Generation.** Retrieved chunks are prepended as grounding context to the prompt, and the [[Large Language Models|large language model]] generates a response conditioned on that augmented context.

- ### Key Components
  - **Retriever Component** — embeds queries and documents; comprises the [[Embedding Model]] (bi-encoder for recall) and an optional cross-encoder or [[Reranking]] step for precision.
  - **Vector Database** — stores pre-computed [[Dense Retrieval|dense embeddings]] and serves [[Approximate Nearest Neighbour Search]] queries at low latency; examples include FAISS, Weaviate, Pinecone, Qdrant, Milvus, and pgvector.
  - **Document Chunking** — splits source documents into semantically coherent segments; chunk size, overlap, and splitting strategy (sentence, paragraph, semantic) critically affect retrieval quality.
  - **Reader / Generator** — the [[Large Language Models|LLM]] that conditions on the retrieved context and the query to produce the final response.
  - **Context Window Management** — strategies for fitting top-k retrieved chunks within the [[Transformer Architecture|transformer]] context limit, including truncation, summarisation, and hierarchical compression.
  - **Orchestration Layer** — coordinates retrieval and generation calls; implemented by frameworks such as LangChain, LlamaIndex, and Haystack.

- ### Retrieval Strategies
  - **Sparse retrieval** — keyword-based methods such as BM25 and TF-IDF; fast, interpretable, no embedding required.
  - **Dense retrieval** — [[Dense Retrieval|bi-encoder]] models map queries and documents into a shared vector space; captures semantic similarity beyond keyword overlap.
  - **Hybrid retrieval** — combines sparse and dense signals, typically via reciprocal rank fusion, to balance precision and recall.
  - **Multi-hop retrieval** — iterative retrieval where intermediate answers trigger further queries, enabling resolution of complex, compositional questions.
  - **Graph-guided retrieval** — traversal of a [[Knowledge Graph]] augments standard embedding lookup with structural relationships between entities.

- ### Advanced RAG Variants
  - **Naive RAG** — the baseline pipeline: chunk → embed → retrieve → generate; adequate for well-structured corpora and simple questions.
  - **Advanced RAG** — pre-retrieval query rewriting, post-retrieval re-ranking, and iterative refinement to improve relevance.
  - **Modular RAG** — pluggable retrieval, re-ranking, and generation modules enabling flexible composition (e.g., replacing the dense retriever with a [[Knowledge Graph]] traversal module).
  - **Corrective RAG (CRAG)** — adds a correctness evaluator that discards low-confidence retrievals and falls back to web search when the knowledge base is insufficient.
  - **Self-RAG** — the generative model learns to critique and filter its own retrieved context using special reflection tokens, improving factuality.
  - **Graph RAG** — combines [[Knowledge Graph]] extraction with community detection to produce hierarchical document summaries enabling multi-document synthesis.
  - **Agentic RAG** — embeds RAG within an [[Agentic AI]] loop where the model autonomously decides when and what to retrieve, integrating with [[Prompt Engineering|tool-use prompting]].

- ### Applications
  - **Enterprise [[Question Answering]]** — customer support bots, internal helpdesks, HR policy assistants grounded in corporate documentation.
  - **Legal Research** — retrieval from case law, statutes, and regulatory texts with mandatory source citation for auditors.
  - **Medical Information Retrieval** — clinical decision support querying evidence-based guidelines and drug databases; reduces risk from outdated parametric knowledge.
  - **Code Generation Assistants** — retrieval from API documentation, code repositories, and issue trackers to produce contextually accurate code completions.
  - **Financial Analysis** — retrieval from regulatory filings, earnings reports, and news feeds to answer analyst queries with document-level attribution.
  - **Technical Documentation Assistants** — RAG over product manuals, knowledge bases, and runbooks to surface accurate troubleshooting steps.
  - **[[Semantic Search]]** — replacing keyword search with meaning-based retrieval across large enterprise corpora.

- ### Mechanisms and Design Considerations
  - **Chunk size and overlap** — smaller chunks improve retrieval precision; larger chunks preserve more context for generation. Overlapping windows reduce boundary artefacts.
  - **Embedding model selection** — domain-adapted bi-encoders (e.g., fine-tuned on in-domain query-document pairs) consistently outperform general-purpose encoders in specialised corpora.
  - **Re-ranking** — cross-encoder re-rankers (higher compute, no approximate search) can be applied to the top-k candidate set to substantially improve precision before context injection.
  - **Metadata filtering** — pre-filtering by document date, source, or category before vector search reduces noise and allows access control.
  - **Context window budgeting** — as [[Transformer Architecture|transformer]] context windows grow (to tens or hundreds of thousands of tokens), the trade-off between retrieval breadth and generation cost evolves; long-context models can ingest entire documents, blurring the line between RAG and full-document prompting.
  - **Hallucination Mitigation** — retrieval grounds generation but does not eliminate hallucination; the model can still misattribute or ignore retrieved passages. [[Source Attribution]] mechanisms, constrained decoding, and post-hoc verification are complementary mitigations.
  - **Evaluation** — standard RAG evaluation decomposes into retrieval quality (recall@k, mean reciprocal rank) and generation quality (faithfulness, answer relevance, context utilisation); frameworks such as RAGAS and TruLens automate this pipeline.

- ### Relationships
  - requires:: [[Vector Database]]
  - requires:: [[Embedding Model]]
  - requires:: [[Document Chunking]]
  - requires:: [[Approximate Nearest Neighbour Search]]
  - enables:: [[Question Answering]]
  - enables:: [[Semantic Search]]
  - enables:: [[Knowledge Grounding]]
  - enables:: [[Source Attribution]]
  - enables:: [[Hallucination Mitigation]]
  - uses:: [[Large Language Models]]
  - uses:: [[Knowledge Base]]
  - uses:: [[Dense Retrieval]]
  - uses:: [[Transformer Architecture]]
  - hasPart:: [[Context Window Management]]
  - contrastsWith:: [[Fine-Tuning]]
  - contrastsWith:: [[Parametric Knowledge]]
  - relatedTo:: [[Knowledge Graph]]
  - relatedTo:: [[Information Retrieval]]
  - relatedTo:: [[Prompt Engineering]]
  - relatedTo:: [[Natural Language Processing]]
  - relatedTo:: [[Agentic AI]]
  - bridges-to:: [[Enterprise Search]]
  - bridges-to:: [[Knowledge Management]]

- ### Standards & Context
  - RAG was formalised in the 2020 paper "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" (Lewis et al., Facebook AI Research), establishing the retrieve-then-read paradigm for open-domain [[Question Answering]].
  - The BEIR benchmark provides a heterogeneous evaluation suite for zero-shot information retrieval, widely used to compare RAG retrievers across domains.
  - The RAGAS framework provides automated, reference-free evaluation of RAG pipelines across faithfulness, answer relevance, context precision, and context recall metrics.
  - The [[Agentic AI]] ecosystem (LangChain, LlamaIndex, AutoGen) has standardised RAG as a first-class primitive, with tool-calling conventions enabling models to invoke retrievers dynamically.
  - ISO/IEC standards for AI trustworthiness (ISO/IEC 42001, ISO/IEC 23053) are relevant to RAG deployments in regulated industries, as RAG's source attribution capability directly supports auditability requirements.

- ### Provenance
  - sources:: Lewis et al. (2020), "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"; LangChain and LlamaIndex documentation; RAGAS evaluation framework
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
