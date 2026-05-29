public:: true

# Wikidata
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:wikidata",
  "@type": "Page",
  "vc:slug": "wikidata",
  "title": "Wikidata",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wikidata",
  "@type": "Class",
  "label": "Wikidata",
  "definition": "Wikidata is a free, collaboratively edited knowledge base operated by the Wikimedia Foundation that stores structured data as machine-readable items and statements, serving as a central data repository for Wikipedia and the broader web. Each item has a stable identifier and is described by property-value statements with references and qualifiers, exported as linked data and queryable via SPARQL. Multilingual by design and released under a public-domain licence, Wikidata is one of the largest open knowledge graphs and a key hub in the linked-data web.",
  "domain": "knowledge",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:rdf", "label": "RDF"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:semantic-web", "label": "Semantic Web"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Wikidata is a free, collaboratively edited, multilingual knowledge base storing structured data as items and property-value statements, serving as a central data hub for Wikipedia and the linked-data web.

- ### Relationships
  - Wikidata is a subclass of [[Knowledge Graph]] and uses [[RDF]] and [[Linked Data]] conventions to publish its content for machines. It enables the practical [[Semantic Web]] by acting as a shared identifier hub, and relates to [[Ontology]] engineering and [[Semantic Search]], for which it is a major source of structured entities and relations.

- ### Content
  - Launched in 2012, Wikidata addressed a structural weakness of Wikipedia: the same fact — a city's population, a person's birth date — was duplicated across hundreds of language editions and infoboxes, maintained inconsistently and unreadable by machines. Wikidata centralises such facts as structured statements that the language Wikipedias can draw from, so a single edit propagates everywhere and the knowledge becomes queryable rather than locked in prose.

  - Its data model is built from items, each identified by a stable Q-number, described through statements pairing a property (a P-number) with a value. Statements carry qualifiers for context and references for provenance, embracing the reality that facts are often contested, time-bound, or source-dependent. This design lets Wikidata represent multiple sourced viewpoints rather than asserting a single contested truth, a pragmatic stance suited to a collaboratively edited resource.

  - Wikidata is natively part of the linked-data web. Every item is dereferenceable and exported as RDF, its identifiers are reused as authority links by libraries, museums, and other databases, and the Wikidata Query Service exposes the whole graph through SPARQL, enabling complex federated queries across the open web of data. Being public domain removes licensing friction, encouraging the widest possible reuse in research, applications, and downstream knowledge graphs.

  - Today Wikidata is among the largest and most central open knowledge graphs, with well over a hundred million items and a vast community of human and bot editors. It feeds question-answering systems, grounds entity recognition and disambiguation, and increasingly supplies structured factual context to large language models and retrieval pipelines. Its challenges — data quality, vandalism resistance, ontological coherence at massive scale, and sustainable governance — are the recurring concerns of any open, collaboratively maintained knowledge infrastructure operating at global scope.
