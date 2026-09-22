public:: true

# ShEx
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sh-ex",
  "@type": "Page",
  "vc:slug": "sh-ex",
  "title": "ShEx",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sh-ex",
  "@type": "Class",
  "label": "ShEx",
  "definition": "ShEx (Shape Expressions) is a language for describing and validating the structure of RDF graphs, specifying which properties a node must have, their cardinalities, and value constraints. It serves a role for linked data analogous to schemas for XML or JSON, enabling data producers and consumers to agree on graph shapes. It is widely used to validate Solid pods and Wikidata-style knowledge graphs.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:solid", "label": "Solid"}, {"@id": "urn:ngm:class:domain-ontology", "label": "Domain Ontology"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - ShEx (Shape Expressions) is a schema language for describing and validating the structure of RDF graphs by constraining properties, cardinalities, and values. It is used by [[Solid]] to validate pod data and is used to enforce a [[Domain Ontology]].
- ### Content
  - A ShEx schema defines shapes that nodes must conform to, supporting closed and open shapes, logical operators, and value-set constraints. Compared with SHACL it favours a compact grammar and a clear conformance semantics, making it well suited to data interchange contracts and decentralised storage validation.
