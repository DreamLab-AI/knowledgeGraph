public:: true

# Dense Passage Retrieval
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dense-passage-retrieval",
  "@type": "Page",
  "vc:slug": "dense-passage-retrieval",
  "title": "Dense Passage Retrieval",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dense-passage-retrieval",
  "@type": "Class",
  "label": "Dense Passage Retrieval",
  "definition": "Dense Passage Retrieval (DPR) is an information retrieval approach in which both queries and document passages are encoded into dense continuous vector representations using dual-encoder neural networks, enabling similarity search via dot-product or cosine distance rather than sparse lexical matching. It substantially outperforms traditional BM25 retrieval on semantic matching tasks and forms the retriever component of open-domain question-answering and retrieval-augmented generation systems.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:embedding", "label": "Embedding"},
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:question-answering", "label": "Question Answering"},
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Dense Passage Retrieval]] (DPR) is a neural information retrieval technique that encodes both questions and text passages into dense vector representations using bi-encoder [[Transformer]] models, then retrieves relevant passages by maximum inner product search over a pre-built [[Embedding]] index stored in a [[Vector Database]]. Unlike sparse methods such as BM25 that rely on lexical overlap, DPR captures semantic similarity and handles paraphrastic or inferential query-passage relationships. It is the canonical retriever in open-domain [[Question Answering]] pipelines and the retrieval backbone of [[Retrieval-Augmented Generation]] systems.

- ### Relationships
  - DPR uses [[Embedding]] models (typically fine-tuned BERT-class [[Transformer]] architectures) trained with in-batch negative contrastive learning, and requires efficient approximate nearest-neighbour search via [[Vector Database]] infrastructure such as FAISS or Weaviate. It enables [[Retrieval-Augmented Generation]] pipelines, open-domain [[Question Answering]] systems, and [[Semantic Search]] applications. It is closely related to the [[Language Model]] reader component it supplies with retrieved context, and benefits from fine-tuning on domain-specific corpora.

- ### Content
  - Dense Passage Retrieval was introduced by Karpukhin et al. (Facebook AI Research) in 2020 as a solution to the limitations of sparse retrieval for open-domain question answering. The original DPR model used two independent BERT encoders—one for questions, one for passages—trained on Natural Questions and TriviaQA datasets using gold positive passages and hard negatives mined from BM25. At the time, it achieved a 9-19% improvement in top-20 retrieval accuracy over BM25 on multiple benchmarks, validating the dense retrieval paradigm.

  - The technical architecture of DPR separates offline indexing from online retrieval. During indexing, all passages from a corpus (e.g. Wikipedia) are encoded by the passage encoder and stored as dense vectors. At query time, the question encoder produces a query vector, and FAISS (Facebook AI Similarity Search) performs approximate nearest-neighbour search using HNSW or IVF-flat indices to return the top-k passages in milliseconds. Training relies on contrastive learning with hard negatives—passages retrieved by BM25 that are lexically similar to the query but not the true answer—which forces the model to learn semantically discriminative representations rather than superficial lexical matches.

  - The DPR framework is now foundational to the retrieval-augmented generation (RAG) ecosystem. Systems such as REALM, RAG (Lewis et al., 2020), Atlas, and commercial products from Cohere, Pinecone, and Weaviate all build on or extend DPR-style dense retrieval. Hybrid retrieval combining DPR with sparse BM25 (e.g. using Reciprocal Rank Fusion) consistently outperforms either method alone and has become standard practice in production RAG deployments. Learned sparse models such as SPLADE bridge the two paradigms.

  - By 2024-2025, the landscape has evolved beyond single-vector DPR to multi-vector representations (ColBERT's late interaction), cross-encoder reranking pipelines, and instruction-tuned embedding models (E5, BGE, Nomic-Embed) that generalise across domains without fine-tuning. Long-context language models have partially reduced reliance on retrieval for short-document tasks, but DPR-family retrievers remain the standard for large-scale corpus search where fitting all documents in-context is computationally infeasible.

