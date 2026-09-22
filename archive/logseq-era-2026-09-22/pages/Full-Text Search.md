public:: true

# Full-Text Search

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:full-text-search",
  "@type": "Page",
  "title": "Full-Text Search",
  "vc:slug": "full-text-search",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:full-text-search",
  "@type": "Class",
  "label": "Full-Text Search",
  "definition": "Full-text search is a technique for locating documents or records that contain specified words or phrases by matching against an inverted index built over tokenised text content, rather than scanning raw text linearly. It supports ranking by relevance, stemming, and fuzzy matching, and is provided natively by systems such as PostgreSQL and dedicated engines such as Elasticsearch. Full-text search underpins query engines and log aggregation systems that must retrieve relevant records from large unstructured text corpora.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:search-index",
      "label": "Search Index"
    }
  ],
  "relations": {}
}
```
