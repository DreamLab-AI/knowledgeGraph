
Hybrid retrieval is an information-retrieval technique that combines lexical (sparse, keyword-based) scoring such as BM25 with semantic (dense, embedding-based) vector search to rank documents. By fusing the complementary strengths of exact-term matching and meaning-based similarity, it improves recall and precision over either method alone. Fusion is typically performed with reciprocal rank fusion or weighted score combination.

- ### Content
  - In retrieval-augmented generation systems, candidates from a sparse index and a dense vector store are merged and re-ranked, balancing exact-match precision against semantic recall. Tuning the fusion weights and applying a cross-encoder re-ranker further sharpens result quality for downstream language-model grounding.

