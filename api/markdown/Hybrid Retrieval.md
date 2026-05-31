public:: true

# Hybrid Retrieval
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hybrid-retrieval",
  "@type": "Page",
  "vc:slug": "hybrid-retrieval",
  "title": "Hybrid Retrieval",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hybrid-retrieval",
  "@type": "Class",
  "label": "Hybrid Retrieval",
  "definition": "Hybrid retrieval is an information-retrieval technique that combines lexical (sparse, keyword-based) scoring such as BM25 with semantic (dense, embedding-based) vector search to rank documents. By fusing the complementary strengths of exact-term matching and meaning-based similarity, it improves recall and precision over either method alone. Fusion is typically performed with reciprocal rank fusion or weighted score combination.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"}],
    "enables": [{"@id": "urn:ngm:class:ai-search", "label": "AI Search"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Hybrid retrieval blends keyword-based and embedding-based ranking, forming a core component of [[Semantic Search]] and modern [[AI Search]] pipelines.
- ### Content
  - In retrieval-augmented generation systems, candidates from a sparse index and a dense vector store are merged and re-ranked, balancing exact-match precision against semantic recall. Tuning the fusion weights and applying a cross-encoder re-ranker further sharpens result quality for downstream language-model grounding.
