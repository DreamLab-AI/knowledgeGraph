public:: true

# DBpedia
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dbpedia",
  "@type": "Page",
  "vc:slug": "dbpedia",
  "title": "DBpedia",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dbpedia",
  "@type": "Class",
  "label": "DBpedia",
  "definition": "DBpedia is a community project that extracts structured information from Wikipedia and publishes it as an interlinked, openly licensed knowledge graph in RDF. It exposes millions of entities through a SPARQL endpoint and dereferenceable URIs, forming a central hub of the Linked Open Data cloud. It is widely used as background knowledge for knowledge-graph construction, entity linking and semantic search.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Infrastructure Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-graphing", "label": "Knowledge Graphing"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - DBpedia is an RDF knowledge graph extracted from Wikipedia and a hub of the Linked Open Data cloud, widely reused in [[Knowledge Graphing]] for entity linking and semantic enrichment.
- ### Content
  - Extraction frameworks parse Wikipedia infoboxes and content into typed triples aligned to the DBpedia ontology, queryable via SPARQL. Its dense interlinking with other datasets makes it a default source of background knowledge for semantic applications.
