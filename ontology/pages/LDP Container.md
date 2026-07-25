public:: true

# LDP Container
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ldp-container",
  "@type": "Page",
  "vc:slug": "ldp-container",
  "title": "LDP Container",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ldp-container",
  "@type": "Class",
  "label": "LDP Container",
  "definition": "An LDP Container is a resource defined by the W3C Linked Data Platform specification that groups and manages other linked-data resources, exposing them through HTTP affordances for creation, retrieval, and deletion. Containers come in basic, direct, and indirect variants that differ in how membership triples are generated. They provide the hierarchical, REST-like structure that Solid pods and other LDP servers use to organise data.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:solid-pod", "label": "Solid Pod"}, {"@id": "urn:ngm:class:solid", "label": "Solid"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An LDP Container is a W3C Linked Data Platform resource that aggregates other resources over HTTP, forming the organisational backbone of a [[Solid Pod]] and the storage model that [[Solid]] implements.
- ### Content
  - Clients interact with containers using standard verbs: POSTing to a container creates a contained resource, while GET returns membership triples. Basic, direct, and indirect container types let applications model collections, ownership, and derived membership without bespoke server logic.
