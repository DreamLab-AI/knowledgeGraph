public:: true

# Semantic Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:semantic-network",
  "@type": "Page",
  "vc:slug": "semantic-network",
  "title": "Semantic Network",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:semantic-network",
  "@type": "Class",
  "label": "Semantic Network",
  "definition": "A semantic network is a knowledge-representation structure that models concepts as nodes and their relationships as labelled edges. It captures meaning through typed links such as is-a and part-of, supporting inference, inheritance, and associative retrieval. It is a long-standing formalism underlying ontologies, knowledge graphs, and cognitive models of memory.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cognitive-ai", "label": "Cognitive AI"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation Domain"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A semantic network represents concepts and typed relationships as a graph; it is used by [[Cognitive AI]] and is a constituent structure within the [[Knowledge Representation Domain]].
- ### Content
  - By encoding inheritance and associative links, semantic networks enable inference such as property propagation and spreading activation. They are the conceptual ancestor of modern knowledge graphs and description-logic ontologies, balancing expressiveness against tractable reasoning.
