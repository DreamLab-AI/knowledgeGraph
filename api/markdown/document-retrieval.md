- ### Definition
  - [[Document Retrieval]] is a subfield of [[Information Retrieval]] concerned with locating relevant [[Embedding Model]]-indexed documents from large corpora in response to natural language or structured queries.
  - Retrieval pipelines span from classical inverted-index approaches to modern [[Dense Retrieval]] and [[Hybrid Retrieval]] strategies.
  - Effectiveness is measured using standard IR metrics including precision, recall, and normalised discounted cumulative gain (nDCG).

- ### Overview
  - Document retrieval underpins virtually every information access system, from enterprise search to open-domain question answering.
  - Early systems relied on term-frequency/inverse-document-frequency (TF-IDF) scoring; contemporary systems use transformer-derived dense [[Embedding]] representations.
  - Retrieval quality directly constrains downstream tasks in retrieval-augmented generation (RAG) pipelines.

- ### Key aspects
  - **Sparse retrieval**: BM25 and similar inverted-index methods with exact keyword matching.
  - **Dense retrieval**: bi-encoder architectures projecting queries and documents into shared [[Embedding Space]].
  - **Hybrid retrieval**: combining sparse and dense scores for complementary coverage.
  - **Re-ranking**: a second-stage cross-encoder scoring shortlisted candidates for precision.
  - **Evaluation**: benchmarks such as BEIR, MS MARCO, and Natural Questions standardise comparison.

- ### Mechanisms
  - Query encoding maps text to a high-dimensional vector using [[Embedding Layer]] representations.
  - Approximate nearest-neighbour search (HNSW, IVF-PQ) scales retrieval to billions of documents.
  - [[Cross Modal Retrieval]] extends the paradigm to image, audio, and video corpora.

- ### Applications
  - Enterprise knowledge-base search and [[Email Corpus Retrieval Architecture]] systems.
  - [[Dense Passage Retrieval]] for open-domain question answering.
  - Retrieval-augmented generation where retrieved documents condition large language model outputs.
  - Legal and biomedical discovery requiring high-recall retrieval.

- ### Relationships
  - hasPart:: [[Dense Retrieval]], [[Hybrid Retrieval]]
  - enables:: [[Embedding Search]]
  - supports:: [[Cross Modal Retrieval]], [[Embedding Model]]
  - uses:: [[Embedding]], [[Embedding Space]]
  - requires:: [[Embedding Layer]]
  - dependsOn:: [[Machine Learning]]
  - contrastsWith:: [[Dense Passage Retrieval]]
  - relatedTo:: [[Information Retrieval]], [[Graph Embedding]]
  - bridgesTo:: [[Email Corpus Retrieval Architecture]]

- ### Provenance
  - updated:: 2026-06-15