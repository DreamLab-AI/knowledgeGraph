public:: true

# Knowledge Retrieval
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:knowledge-retrieval",
  "@type": "Page",
  "vc:slug": "knowledge-retrieval",
  "title": "Knowledge Retrieval",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:knowledge-retrieval",
  "@type": "Class",
  "label": "Knowledge Retrieval",
  "definition": "Knowledge retrieval is the process of locating and returning relevant information from a knowledge source in response to a query or information need. It extends classical information retrieval by operating over structured knowledge, semantic representations and contextual relevance rather than keyword matching alone. It is a foundational capability for question answering, retrieval-augmented generation and conversational agents.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:chatbots", "label": "Chatbots"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Knowledge retrieval finds relevant information in response to a query; [[Semantic Search]] is a specialised form of it, and it enables knowledge-grounded [[Chatbots]].
- ### Content
  - Modern systems combine dense vector embeddings, sparse lexical signals and re-ranking to surface contextually relevant passages or facts. As the retrieval stage in retrieval-augmented generation, it grounds language-model outputs in authoritative sources, reducing hallucination and enabling answers over private or up-to-date corpora.
