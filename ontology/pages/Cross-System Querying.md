public:: true

# Cross-System Querying
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-system-querying",
  "@type": "Page",
  "vc:slug": "cross-system-querying",
  "title": "Cross-System Querying",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-system-querying",
  "@type": "Class",
  "label": "Cross-System Querying",
  "definition": "Cross-system querying is the ability to issue a single query that retrieves and joins data residing in multiple independent systems or data stores. It is achieved through federation surfaces, linked-data encoding, and query mediators that translate and route requests to heterogeneous sources. It enables unified access to distributed data without centralising or duplicating it.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:federation-surface", "label": "Federation Surface"}, {"@id": "urn:ngm:class:linked-data-encoder", "label": "Linked Data Encoder"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Cross-system querying retrieves and combines data spanning multiple independent systems through one logical query. It is enabled by a [[Federation Surface]] and by linked-data structures produced via a [[Linked Data Encoder]].
- ### Content
  - Federated query engines decompose a request, push sub-queries to each source, and merge results, often relying on shared schemas, ontologies, or RDF/SPARQL semantics for alignment. The approach avoids costly data duplication but must contend with source heterogeneity, latency, partial availability, and consistent identity resolution across systems.
