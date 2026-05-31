public:: true

# Inverted Index
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:inverted-index",
  "@type": "Page",
  "vc:slug": "inverted-index",
  "title": "Inverted Index",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:inverted-index",
  "@type": "Class",
  "label": "Inverted Index",
  "definition": "An inverted index is a data structure that maps each term to the list of documents (and often positions) in which it appears, enabling fast full-text retrieval over large corpora. It inverts the natural document-to-terms relationship so that a query term immediately yields its posting list, which can then be intersected or scored. It is the foundational index behind search engines and lexical information retrieval.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:information-retrieval-domain", "label": "Information Retrieval Domain"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - An inverted index maps terms to the documents containing them, the core structure for fast full-text search. It complements [[Semantic Search]] and is a building block of the [[Information Retrieval Domain]].
- ### Content
  - Posting lists are compressed and stored with term frequencies and positions to support ranking functions such as BM25 and phrase queries. Modern search stacks often combine inverted indexes for lexical matching with vector indexes for semantic retrieval in hybrid pipelines.
