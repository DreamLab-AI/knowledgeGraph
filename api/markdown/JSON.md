public:: true

# JSON

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:json",
  "@type": "Page",
  "title": "JSON",
  "vc:slug": "json",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:json",
  "@type": "Class",
  "label": "JSON",
  "definition": "JSON, JavaScript Object Notation, is a lightweight, text-based data format for representing structured data as nested objects, arrays and primitive values, defined by ECMA-404 and RFC 8259. Its syntax is a strict subset of JavaScript object literal notation, making it directly parseable in browsers while remaining language-independent, with parsers available in essentially every programming language. It is the dominant format for web API payloads, configuration files and document-oriented data storage.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-format",
      "label": "Data Format"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- JSON, JavaScript Object Notation, is a lightweight, text-based data format for representing structured data as nested objects, arrays and primitive values, defined by ECMA-404 and RFC 8259. Its syntax is a strict subset of JavaScript object literal notation, making it directly parseable in browsers while remaining language-independent, with parsers available in essentially every programming language. It is the dominant format for web API payloads, configuration files and document-oriented data storage.
	- It is a [[Data Format]] concept.
- ### Relationships
	- subClassOf:: [[Data Format]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
