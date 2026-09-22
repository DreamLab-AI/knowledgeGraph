public:: true

# Serialisation
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:serialisation", "@type":"Page", "title":"Serialisation", "vc:slug":"serialisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:serialisation",
  "@type": "Class",
  "label": "Serialisation",
  "definition": "Serialisation is the process of converting in-memory data structures or object graphs into a linear byte sequence or text representation that can be stored, transmitted, and later reconstructed. The inverse operation, deserialisation, rebuilds the original structure from the encoded form. Serialisation underpins persistence, inter-process and network communication, and the interoperability of systems that exchange structured data.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-format-standard",
      "label": "Data Format Standard"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:deserialisation",
        "label": "Deserialisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:json",
        "label": "JSON"
      },
      {
        "@id": "urn:ngm:class:protocol-buffer",
        "label": "Protocol Buffers"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-format",
        "label": "Data Format"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      },
      {
        "@id": "urn:ngm:class:remote-procedure-call",
        "label": "Remote Procedure Call"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:data-format",
        "label": "Data Format"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      },
      {
        "@id": "urn:ngm:class:network-communication",
        "label": "Network Communication"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:deserialisation",
        "label": "Deserialisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Serialisation converts in-memory data structures into a linear byte or text representation as a [[Data Format Standard]].
  - The inverse, [[Deserialisation]], reconstructs the original object graph from the encoded form.
  - It underpins persistence and [[Message Passing]] across processes and networks.
- ### Overview
  - Serialisation formats trade off human-readability, compactness, speed, and schema evolution.
  - Text formats such as [[JSON]] and [[XML]] are self-describing and widely interoperable but verbose; binary formats such as [[Protocol Buffers]] are compact and fast but require a schema to interpret.
  - Schema-driven serialisation enables forward and backward compatibility as message definitions evolve.
  - Careful handling of types, references, and cycles is required to faithfully round-trip complex object graphs.
- ### Mechanisms
  - Encoding: walking a data structure and emitting fields in a defined wire order and representation.
  - Schema: an optional contract describing field names, types, and identifiers for compact binary encodings.
  - Versioning: rules for adding, removing, or renaming fields without breaking existing readers.
  - Security: validating untrusted input during deserialisation to avoid injection and resource-exhaustion attacks.
- ### Applications
  - Persisting application state to disk or databases.
  - Encoding messages for [[Remote Procedure Call]] and event streams.
  - Exposing structured data through an [[API]] for cross-system [[Interoperability]].
- ### Relationships
  - hasPart:: [[Deserialisation]]
  - uses:: [[JSON]]
  - uses:: [[Protocol Buffers]]
  - requires:: [[Data Format]]
  - enables:: [[Message Passing]]
  - enables:: [[Remote Procedure Call]]
  - supports:: [[API]]
  - supports:: [[Interoperability]]
  - implements:: [[Data Format]]
  - relatedTo:: [[XML]]
  - relatedTo:: [[Network Communication]]
  - contrastsWith:: [[Deserialisation]]
  - bridgesTo:: [[Message Passing]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
