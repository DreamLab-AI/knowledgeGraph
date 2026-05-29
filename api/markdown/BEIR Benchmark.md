public:: true

# BEIR Benchmark
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:beir-benchmark",
  "@type": "Page",
  "vc:slug": "beir-benchmark",
  "title": "BEIR Benchmark",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:beir-benchmark",
  "@type": "Class",
  "label": "BEIR Benchmark",
  "definition": "BEIR (Benchmarking IR) is a heterogeneous benchmark suite for evaluating the zero-shot generalisation of information retrieval models across eighteen diverse datasets spanning domains including biomedical, legal, financial, and Wikipedia text. It measures how well retrieval systems transfer across topic domains and retrieval task types without domain-specific fine-tuning, providing a standardised framework for comparing dense, sparse, and hybrid retrieval approaches.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:embedding-model", "label": "Embedding Model"},
      {"@id": "urn:ngm:class:bm25", "label": "BM25"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:dense-passage-retrieval", "label": "Dense Passage Retrieval"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:hybrid-search", "label": "Hybrid Search"},
      {"@id": "urn:ngm:class:cross-encoder-reranking", "label": "Cross-Encoder Reranking"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The BEIR benchmark is a zero-shot evaluation framework for [[Information Retrieval]] systems, comprising eighteen datasets drawn from diverse domains and retrieval task types including fact verification, argument retrieval, entity retrieval, and question answering. By testing models on domains not seen during training, BEIR exposes the generalisation gap between models optimised on MS MARCO and real-world retrieval needs. It evaluates both [[Embedding Model]] based dense retrievers and [[BM25]] sparse retrieval baselines, enabling systematic comparison of [[Semantic Search]] and keyword-matching approaches.

- ### Relationships
  - BEIR [[uses]] [[Embedding Model]] systems as the primary dense retrieval backbone and [[uses]] [[BM25]] as the principal sparse retrieval baseline for all comparative experiments. The benchmark [[enables]] rigorous evaluation of [[Semantic Search]] and [[Dense Passage Retrieval]] methods. It is [[relatedTo]] [[Hybrid Search]], which combines dense and sparse signals, and [[relatedTo]] [[Cross-Encoder Reranking]], which is often used to improve first-stage retrieval results on BEIR datasets.

- ### Content
  - BEIR was introduced in 2021 by Thakur et al. in a paper titled "BEIR: A Heterogeneous Benchmark for Zero-shot Evaluation of Information Retrieval Models," presented at NeurIPS 2021. Its creation was motivated by the observation that retrieval models fine-tuned on MS MARCO (a web question-answering dataset) failed to generalise predictably to scientific, legal, or conversational retrieval tasks, obscuring the true capability of dense retrieval architectures.

  - The benchmark aggregates existing publicly available datasets including TREC-COVID for biomedical retrieval, NFCorpus for nutrition science, FiQA for financial question answering, ArguAna for argument retrieval, and SciFact for scientific claim verification, among others. Evaluation is performed using normalised discounted cumulative gain at rank ten (nDCG@10) and recall at 100, providing a multi-level view of ranking quality. BEIR provides a unified Python toolkit (via the `beir` library) for consistent preprocessing, retrieval, and scoring.

  - BEIR rapidly became the de facto standard for zero-shot retrieval evaluation in the information retrieval community. Subsequent work including MTEB (Massive Text Embedding Benchmark) built on its principles to encompass classification, clustering, and sentence similarity tasks. The benchmark drove development of models such as SPLADE, ColBERT v2, and BGE, which were specifically designed to generalise better across BEIR domains by combining sparse and dense representations.

  - As of 2024–2025, BEIR remains the primary leaderboard for retrieval generalisation. New challenges include evaluation on multilingual BEIR variants, instruction-tuned retrieval models that use query reformulation to improve zero-shot performance, and long-context retrieval where documents exceed standard 512-token limits. The benchmark continues to evolve with community-contributed datasets targeting emerging domains such as code retrieval and medical dialogue.

