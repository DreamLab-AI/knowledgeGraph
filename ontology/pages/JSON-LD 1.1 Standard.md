public:: true

# JSON-LD 1.1 Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:json-ld-1-1-standard",
  "@type": "Page",
  "vc:slug": "json-ld-1-1-standard",
  "title": "JSON-LD 1.1 Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:json-data-interchange-format-ld-1-1-standard",
  "@type": "Class",
  "label": "JSON-LD 1.1 Standard",
  "definition": "JSON-LD 1.1 is a W3C Recommendation defining a JSON-based serialization for Linked Data, allowing JSON documents to be interpreted as RDF graphs. It introduces a context mechanism that maps JSON keys to IRIs, plus features such as framing, nested contexts and typed values added in the 1.1 revision. It is the dominant format for embedding machine-readable semantics in web data.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:linked-data-encoder", "label": "Linked Data Encoder"},
      {"@id": "urn:ngm:class:federation-surface", "label": "Federation Surface"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - JSON-LD 1.1 is the W3C standard that lets a [[Linked Data Encoder]] express RDF graphs as JSON, and provides the contextual vocabulary mapping required by a [[Federation Surface]] to exchange interoperable semantic data.
- ### Content
  - The 1.1 revision added scoped and nested contexts, type-scoped term definitions, the `@json` datatype and improved framing. By aligning ordinary JSON with the RDF data model, JSON-LD enables search engines, knowledge graphs and decentralized systems to consume structured data without bespoke parsers.
