public:: true

# Triple Store
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:triple-store",
  "@type": "Page",
  "vc:slug": "triple-store",
  "title": "Triple Store",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:triple-store",
  "@type": "Class",
  "label": "Triple Store",
  "definition": "A triple store is a database purpose-built to store and query RDF data as subject-predicate-object triples, forming the storage layer for semantic-web and knowledge-graph applications. It supports the SPARQL query language and often provides reasoning and inference over ontologies, enabling expressive graph traversal and entailment beyond what relational stores offer.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}, {"@id": "urn:ngm:class:knowledge-graphing", "label": "Knowledge Graphing"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A database that stores RDF subject-predicate-object triples and answers SPARQL queries, often with reasoning support. It is the storage backbone for a [[Knowledge Graph]] and the practice of [[Knowledge Graphing]].
- ### Content
  - Triple stores index data in permutations such as SPO, POS, and OSP to make graph pattern matching efficient at scale. Many also implement RDFS/OWL reasoning so that implicit facts can be derived through entailment, which is central to ontology-driven knowledge systems.
