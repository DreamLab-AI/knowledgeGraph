public:: true

# Information Retrieval
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:24b0ca57068c6d211a0340e85ad7636e44bec857eefd505b23f52b2e987518fb",
  "@type": "Page",
  "vc:slug": "information-retrieval",
  "title": "Information Retrieval",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9637"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Information Retrieval"
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
  "@id": "urn:ngm:class:information-retrieval",
  "@type": "Class",
  "label": "Information Retrieval",
  "definition": "Information Retrieval (IR) is the science and engineering discipline concerned with representing, storing, organising, and providing access to items of information — typically documents, passages, or structured records — so that a user's information need, expressed as a query, can be satisfied efficiently and accurately. Classical IR models such as the Boolean model, the vector space model (TF-IDF), and probabilistic models (BM25) underpin search engines and document ranking systems; neural IR extends these with dense vector representations derived from transformer language models, enabling semantic matching that generalises beyond exact term overlap. Modern IR encompasses sparse retrieval, dense retrieval, re-ranking, and hybrid architectures, and is the core subsystem enabling Retrieval-Augmented Generation (RAG), question answering, and knowledge-graph-grounded AI systems.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:natural-language-processing",
      "label": "Natural Language Processing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:inverted-index",
        "label": "Inverted Index"
      },
      {
        "@id": "urn:ngm:class:query-processing",
        "label": "Query Processing"
      },
      {
        "@id": "urn:ngm:class:relevance-ranking",
        "label": "Relevance Ranking"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:vector-database",
        "label": "Vector Database"
      },
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:word-embeddings",
        "label": "Word Embeddings"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:search-engine",
        "label": "Search Engine"
      },
      {
        "@id": "urn:ngm:class:question-answering",
        "label": "Question Answering"
      },
      {
        "@id": "urn:ngm:class:recommendation-system",
        "label": "Recommendation System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:corpus",
        "label": "Corpus"
      },
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metrics"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:database-query",
        "label": "Database Query"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:spatial-search",
        "label": "Spatial Search"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:nearest-neighbor-search",
        "label": "Approximate Nearest Neighbour"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:document-retrieval",
      "label": "Document Retrieval"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:information-retrieval:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:24b0ca57068c6d211a0340e85ad7636e44bec857eefd505b23f52b2e987518fb"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
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
  - Information Retrieval (IR) is the science and engineering discipline concerned with representing, storing, organising, and providing efficient access to documents, passages, or structured records so that a user's information need can be satisfied in response to a query. It sits at the intersection of [[Natural Language Processing]], [[Machine Learning]], and database systems, encompassing classical statistical models such as TF-IDF and BM25 as well as modern neural approaches using [[Transformer]] encoders and [[Vector Database]] nearest-neighbour search. IR is the foundational subsystem powering [[Search Engine]] technology, [[Retrieval-Augmented Generation]] pipelines, and [[Question Answering]] systems, and has reached maturity as a field through decades of [[Evaluation Metrics]] research, standard benchmarks (TREC, BEIR), and large-scale production deployments.

- ### Overview
  - Information Retrieval addresses the fundamental challenge of matching an expressed user need — a query — against a potentially vast, heterogeneous corpus of information items to return those items most likely to be relevant.
  - The field traces its origins to library science and bibliographic indexing in the mid-20th century. Gerard Salton's SMART system in the 1960s introduced the vector space model and cosine similarity, which remained canonical for decades.
  - IR systems must solve four sub-problems simultaneously: representation (how to encode documents and queries), indexing (how to organise encoded representations for fast retrieval), matching (how to score document–query similarity), and ranking (how to order matched results by estimated relevance).
  - The distinction between IR and [[Database Query]] (SQL) is fundamental: IR tolerates and ranks partial matches using statistical heuristics, whereas database retrieval returns exact matches to formal predicates. This makes IR the appropriate paradigm for unstructured and semi-structured text.
  - Modern IR has bifurcated into **sparse** retrieval (term-based, producing high-dimensional sparse vectors — e.g. BM25) and **dense** retrieval (embedding-based, producing low-dimensional dense vectors — e.g. DPR, ColBERT, E5), with **hybrid** systems combining both for complementary coverage.
  - The rise of [[Large Language Model]] technology has made IR indispensable: RAG architectures place an IR system upstream of a generative model so that generated text can be grounded in retrieved factual passages, reducing hallucination.

- ### Key Components
  - **[[Document Indexing]]** — pre-processing pipeline that tokenises, normalises (lowercasing, stemming, lemmatisation), and constructs index structures from a document corpus.
  - **[[Inverted Index]]** — the canonical data structure for sparse retrieval: maps each term to a posting list of (document-id, term-frequency) pairs, enabling fast union/intersection of term sets.
  - **[[Query Processing]]** — parsing and transforming a raw user query into an executable retrieval specification; includes spell correction, query expansion, synonym injection, and intent classification.
  - **[[Relevance Ranking]]** — scoring and ordering retrieved candidates. Classical: BM25 (probabilistic term frequency saturation + IDF weighting). Neural: cross-encoder re-rankers that jointly encode query and document via a [[Transformer]] for fine-grained relevance estimation.
  - **[[Word Embeddings]] and Bi-Encoder Models** — dense retrieval encodes queries and documents independently into [[Vector Database]]-compatible embedding vectors; retrieval is then approximate nearest-neighbour search (e.g. HNSW, FAISS, ScaNN).
  - **[[Semantic Search]]** — retrieval that matches by meaning rather than term overlap; enabled by contextualised embeddings from transformer language models (BERT, E5, GTE, Cohere Embed).
  - **Re-Ranking** — a two-stage pipeline: a fast first-stage retriever (BM25 or bi-encoder) shortlists candidates; a slow but accurate cross-encoder re-ranks the shortlist. Improves precision significantly.
  - **[[Knowledge Graph]] Integration** — entity linking and graph traversal augment retrieved passages with structured relational knowledge, enriching context for downstream tasks.

- ### Retrieval Models
  - **Boolean Model** — exact term matching with AND/OR/NOT operators; high precision, low recall, no ranking.
  - **Vector Space Model (TF-IDF)** — documents and queries represented as weighted term vectors; cosine similarity used for ranking. Foundational but does not handle term mismatch.
  - **Probabilistic Model (BM25)** — extends Robertson-Spärck Jones probabilistic framework; best-in-class sparse baseline, default in Elasticsearch, OpenSearch, Apache Solr.
  - **Language Models for IR** — query likelihood model treats retrieval as estimating P(query | document model); Dirichlet smoothing addresses zero-probability terms.
  - **Dense Passage Retrieval (DPR)** — bi-encoder neural retrieval trained on question–answer pairs with in-batch negatives; pioneered large-scale dense retrieval for open-domain QA.
  - **ColBERT / Late Interaction** — stores per-token embeddings; MaxSim operator provides richer interaction than single-vector similarity at modest storage cost.
  - **SPLADE** — sparse neural model combining lexical and semantic signals via learned token weights; combines strengths of BM25 and dense retrieval.

- ### Applications
  - **[[Search Engine]] Technology** — web search (Google, Bing), enterprise search (SharePoint, Confluence), code search (GitHub), and academic search (Semantic Scholar) all depend on IR.
  - **[[Retrieval-Augmented Generation]] (RAG)** — IR is the retriever component in RAG pipelines powering document-grounded chatbots, customer support bots, and knowledge-management assistants.
  - **[[Question Answering]]** — open-domain QA systems (e.g. DrQA, Atlas) retrieve evidence passages from Wikipedia or a proprietary corpus before extracting or generating answers.
  - **[[Recommendation System]]** — collaborative filtering and content-based filtering share mathematical overlap with IR; item retrieval at scale uses approximate nearest-neighbour techniques identical to dense IR.
  - **Legal and Medical Search** — specialised IR for case law retrieval (LexisNexis, Westlaw) and clinical literature (PubMed, ClinicalKey) where recall and traceability are critical.
  - **Conversational AI** — multi-turn dialogue systems use IR to fetch relevant context turns or knowledge-base entries, maintaining coherent, factual conversations over long interactions.
  - **[[Knowledge Graph]] Population** — IR-based entity and relation extraction populates [[Knowledge Graph]] structures from unstructured text corpora.
  - **Code Retrieval** — developer tooling (GitHub Copilot, Sourcegraph Cody) retrieves semantically relevant code snippets, documentation, and API examples to ground code generation.

- ### Evaluation Metrics
  - IR evaluation is standardised through information retrieval benchmarks (TREC tracks, MS MARCO, BEIR, MTEB).
  - **Precision@k** — fraction of top-k retrieved items that are relevant.
  - **Recall@k** — fraction of all relevant items that appear in the top-k.
  - **Mean Average Precision (MAP)** — mean of precision values at each relevant document rank across queries.
  - **Normalised Discounted Cumulative Gain (nDCG)** — graded relevance; penalises relevant items appearing lower in the ranking.
  - **Mean Reciprocal Rank (MRR)** — average of reciprocal ranks of the first relevant result; common for question answering.
  - [[Evaluation Metrics]] choice depends on task: recall-focused (RAG retriever), precision-focused (legal search), or balanced (web search).

- ### Relationships
  - partOf:: [[Natural Language Processing]]
  - uses:: [[Vector Database]]
  - uses:: [[Semantic Search]]
  - uses:: [[Knowledge Graph]]
  - uses:: [[Transformer]]
  - uses:: [[Word Embeddings]]
  - enables:: [[Retrieval-Augmented Generation]]
  - enables:: [[Search Engine]]
  - enables:: [[Question Answering]]
  - enables:: [[Recommendation System]]
  - requires:: [[Text Representation]]
  - requires:: [[Tokenisation]]
  - dependsOn:: [[Corpus]]
  - dependsOn:: [[Evaluation Metrics]]
  - contrastsWith:: [[Database Query]]
  - contrastsWith:: [[Data Mining]]
  - relatedTo:: [[Machine Learning]]
  - relatedTo:: [[Large Language Model]]
  - relatedTo:: [[Approximate Nearest Neighbour]]
  - bridges-to:: [[Knowledge Representation]]
  - bridges-to:: [[Spatial Search]]

- ### Standards & Context
  - **TREC (Text REtrieval Conference)** — NIST-organised annual evaluation campaigns since 1992; established the Cranfield methodology for reusable test collections and defined shared tasks (ad-hoc retrieval, question answering, clinical decision support, etc.).
  - **ISO 5127** — vocabulary standard for information and documentation, including IR terminology.
  - **BEIR Benchmark** — heterogeneous IR benchmark covering 18 diverse retrieval tasks for zero-shot evaluation of dense models; widely used to assess generalisation.
  - **MTEB (Massive Text Embedding Benchmark)** — evaluates embedding models across retrieval, classification, clustering, and semantic similarity tasks.
  - **MS MARCO** — Microsoft large-scale dataset of real Bing queries with passage and document annotations; became the standard training and evaluation set for neural IR.
  - **Lucene / Apache Solr / Elasticsearch** — dominant open-source IR engines implementing BM25 and now also vector search (kNN) under Apache-2.0 licences.
  - **Faiss (Facebook AI Similarity Search)** — widely adopted library for efficient [[Approximate Nearest Neighbour]] search over dense embedding vectors.
  - IR research is primarily disseminated through ACM SIGIR, ECIR, CIKM, WSDM, and WWW conferences.

- ### Semantic Classification
  - owl-class:: ai:InformationRetrieval
  - owl-role:: concept

- ### Provenance
  - sources:: TREC proceedings; Manning, Raghavan & Schütze "Introduction to Information Retrieval" (Cambridge, 2008); Karpukhin et al. "Dense Passage Retrieval for Open-Domain QA" (EMNLP 2020); Thakur et al. "BEIR: A Heterogeneous Benchmark for Zero-shot Evaluation of IR Models" (NeurIPS 2021)
  - updated:: 2026-06-13
