public:: true

# Reciprocal Rank Fusion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reciprocal-rank-fusion",
  "@type": "Page",
  "vc:slug": "reciprocal-rank-fusion",
  "title": "Reciprocal Rank Fusion",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reciprocal-rank-fusion",
  "@type": "Class",
  "label": "Reciprocal Rank Fusion",
  "definition": "Reciprocal Rank Fusion (RRF) is a rank-aggregation method that combines multiple ranked result lists by summing the reciprocal of each document's rank across lists, weighted by a small smoothing constant. It requires no score calibration between systems, making it ideal for merging lexical and vector retrieval results in hybrid search. Its robustness and parameter simplicity have made it a default fusion technique in modern retrieval pipelines.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:ai-search", "label": "AI Search"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Reciprocal Rank Fusion is a score-agnostic method for merging ranked lists, widely used to combine lexical and dense results in [[Semantic Search]] and [[AI Search]] systems.
- ### Content
  - For each document, RRF computes a fused score of the form sum over lists of 1/(k + rank), where k (often 60) dampens the influence of top ranks. Because it ignores raw relevance scores, it sidesteps the calibration problems of weighted-sum fusion and reliably improves recall in hybrid retrieval.
