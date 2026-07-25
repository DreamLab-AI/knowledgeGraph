public:: true

# JSON Serialisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:json-serialisation",
  "@type": "Page",
  "vc:slug": "json-serialisation",
  "title": "JSON Serialisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:json-data-interchange-format-serialisation",
  "@type": "Class",
  "label": "JSON Serialisation",
  "definition": "JSON serialisation is the process of encoding in-memory data structures into JavaScript Object Notation text and decoding that text back into structured values. It provides a human-readable, language-independent representation for objects, arrays, numbers, strings and booleans. JSON serialisation is the default interchange format for web APIs, configuration files and message-passing between heterogeneous systems.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:node-based-diffusion-pipeline-interface-workflows", "label": "ComfyUI Workflows"},
      {"@id": "urn:ngm:class:nostr-protocol", "label": "Nostr Protocol"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - JSON serialisation encodes structured data as portable JSON text and parses it back, providing the persistence format for [[ComfyUI Workflows]] and the message encoding required by the [[Nostr Protocol]].
- ### Content
  - Its self-describing key-value syntax maps cleanly to most programming languages' native types, enabling lossless round-tripping across services. Care is required around number precision, ordering and schema validation, but JSON's ubiquity and tooling make serialisation to and from it the lingua franca of modern data exchange.
