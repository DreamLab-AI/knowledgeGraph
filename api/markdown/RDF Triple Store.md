public:: true

# RDF Triple Store
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:rdf-triple-store",
  "@type": "Page",
  "vc:slug": "rdf-triple-store",
  "title": "RDF Triple Store",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rdf-triple-store",
  "@type": "Class",
  "label": "RDF Triple Store",
  "definition": "An RDF triple store is a purpose-built database for storing and querying data as subject-predicate-object triples following the Resource Description Framework model. It supports the SPARQL query language and often provides reasoning over ontologies to infer implicit facts. Triple stores are the backbone of semantic-web, knowledge-graph, and linked-data applications.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:graph-database", "label": "Graph Database"},
      {"@id": "urn:ngm:class:metaverse-ontology-schema", "label": "Metaverse Ontology Schema"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - An RDF triple store persists data as subject-predicate-object triples queryable via SPARQL. It is a specialised form of [[Graph Database]] and is required to host a [[Metaverse Ontology Schema]].
- ### Content
  - Triple stores index triples (and named-graph quads) for efficient pattern matching and support OWL/RDFS entailment to derive inferred statements. They differ from property-graph databases by adhering to W3C semantic-web standards, enabling federation across linked-data sources and standards-based interoperability of ontologies.
