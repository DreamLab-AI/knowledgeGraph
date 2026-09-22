public:: true

# Reranker
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reranker",
  "@type": "Page",
  "vc:slug": "reranker",
  "title": "Reranker",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reranker",
  "@type": "Class",
  "label": "Reranker",
  "definition": "A reranker is a second-stage scoring model in information retrieval and retrieval-augmented generation pipelines that reorders a set of candidate documents or passages — initially retrieved by a fast first-stage retriever such as a dense vector index — using a more computationally intensive cross-encoder or LLM-based relevance model that jointly encodes the query and each candidate together, producing a higher-precision relevance score than bi-encoder similarity alone. Rerankers trade retrieval speed for ranking quality, operating on a reduced candidate set (typically 50-200 passages) rather than the full corpus, thereby making deep transformer inference tractable at query time.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:embedding-model", "label": "Embedding Model"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:language-model", "label": "Language Model"},
      {"@id": "urn:ngm:class:machine-learning-discipline-technique", "label": "Machine Learning Technique"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Reranker]] is a second-stage relevance model in retrieval pipelines that accepts a query and a shortlist of candidate documents retrieved by a first-stage [[Embedding Model]]-based retriever, then applies a cross-encoder transformer to jointly score each query-document pair, producing a precision-optimised re-ordering that significantly improves end-to-end quality in [[Retrieval-Augmented Generation]] and [[Semantic Search]] systems.

- ### Relationships
  - Rerankers occupy a critical intermediate position in two-stage retrieval architectures: first-stage retrievers using [[Embedding Model]] bi-encoders achieve high recall efficiently across millions of documents, but sacrifice ranking precision because query and document embeddings are computed independently. The reranker corrects this by applying a cross-encoder from the [[Large Language Models]] family that attends across the concatenated query-document pair, capturing fine-grained relevance signals invisible to cosine similarity. This directly improves the quality of context provided to [[Retrieval-Augmented Generation]] pipelines and the precision of [[Semantic Search]] results. [[Natural Language Processing]] and [[Language Model]] advances drive reranker capability, with [[Machine Learning Technique]] improvements such as distillation enabling smaller, faster cross-encoders.

- ### Content
  - The two-stage retrieve-then-rerank paradigm predates the transformer era, having roots in classical cascade retrieval systems that used BM25 for first-stage recall and SVM-based learning-to-rank models (RankSVM, LambdaMART) for second-stage reordering. The deep learning revolution changed the architecture substantially: BERT-based cross-encoders (2019) dramatically outperformed feature-engineered ranking models on benchmarks such as MS MARCO, establishing the modern paradigm of fine-tuning a pretrained transformer on query-passage pairs labelled with relevance judgements.

  - A cross-encoder reranker takes as input the concatenation [CLS] query [SEP] passage [SEP] and feeds it through a transformer to produce a scalar relevance score via a linear projection on the [CLS] representation. Training uses pointwise (MSE on labels), pairwise (margin ranking loss), or listwise (softmax cross-entropy on permutations) objectives over human-annotated or distillation-generated relevance data. Inference requires a separate forward pass per candidate, making it O(k) in the candidate set size rather than O(1) amortised for pre-computed bi-encoder embeddings — hence the restriction to small candidate sets. Models such as Cohere Rerank, BGE Reranker, and cross-encoder variants from sentence-transformers are widely deployed in production.

  - Rerankers have become a standard component of enterprise search, legal document review, customer support systems, and RAG pipelines for LLM applications. In RAG specifically, the reranker determines which passages from a retrieved set are passed as context to the generative model, making ranking quality a direct determinant of answer accuracy. Retrieval pipelines without reranking consistently show degraded performance on complex multi-hop questions where the most superficially similar passage is not the most informative.

  - In 2024-2025, LLM-based rerankers that use the full generative power of models such as GPT-4 or Mistral to produce relevance scores via prompted inference are competing with and in some benchmarks outperforming cross-encoder specialists, at the cost of higher latency and compute. Hybrid approaches use a fast cross-encoder for initial reranking and an LLM for a final top-k refinement. Techniques such as RankGPT, first introduced in 2023, established the instruction-following reranking paradigm, and subsequent work has focused on distilling these capabilities into small, deployable models that maintain LLM-quality ranking at cross-encoder inference cost.