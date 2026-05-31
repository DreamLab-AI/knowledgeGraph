public:: true

# Locality-Sensitive Hashing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:locality-sensitive-hashing",
  "@type": "Page",
  "vc:slug": "locality-sensitive-hashing",
  "title": "Locality-Sensitive Hashing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:locality-sensitive-hashing",
  "@type": "Class",
  "label": "Locality-Sensitive Hashing",
  "definition": "Locality-sensitive hashing (LSH) is a family of hashing techniques that map similar high-dimensional inputs to the same hash bucket with high probability, enabling sub-linear approximate nearest-neighbour search. By trading exactness for speed, LSH makes similarity search and deduplication tractable over very large datasets. It is widely applied to embeddings, document near-duplicate detection, and retrieval pipelines.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:training-data", "label": "Training Data"}, {"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Locality-sensitive hashing buckets similar vectors together to allow fast approximate nearest-neighbour search; it supports deduplication and filtering of [[Training Data]] and accelerates [[Information Retrieval]] over large corpora.
- ### Content
  - Hash families are chosen so that collision probability rises with input similarity under a target metric such as cosine or Jaccard distance. Multiple hash tables and amplification via AND/OR constructions tune the precision-recall trade-off, and LSH is a common preprocessing step for deduplicating massive training sets.
