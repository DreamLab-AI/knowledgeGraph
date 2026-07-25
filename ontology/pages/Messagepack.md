public:: true

# Messagepack
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:messagepack",
  "@type": "Page",
  "title": "Messagepack",
  "vc:slug": "messagepack",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:messagepack",
  "@type": "Class",
  "label": "Messagepack",
  "definition": "MessagePack is a binary data serialisation format that encodes structured data compactly while preserving a data model compatible with JSON, allowing maps, arrays, strings, integers, and floats to be transmitted in far fewer bytes than their textual equivalents. It uses a type-prefixed encoding that minimises overhead, making it well-suited to high-throughput messaging, caching, and inter-service communication. MessagePack trades human readability for speed and compactness, sitting between verbose JSON and schema-bound formats like Protocol Buffers.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-serialization",
      "label": "Data Serialization"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:data-serialization",
        "label": "Data Serialization"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format",
        "label": "JSON Data Interchange Format"
      },
      {
        "@id": "urn:ngm:class:cbor",
        "label": "CBOR"
      },
      {
        "@id": "urn:ngm:class:protocol-buffer",
        "label": "Protocol Buffer"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format",
        "label": "JSON Data Interchange Format"
      },
      {
        "@id": "urn:ngm:class:protocol-buffer",
        "label": "Protocol Buffer"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:binary-encoding",
        "label": "Binary Encoding"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:message-queue",
        "label": "Message Queue"
      },
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:data-serialization",
        "label": "Data Serialization"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:binary-encoding",
        "label": "Binary Encoding"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:msgpack",
      "label": "MsgPack"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Messagepack]] is a compact [[Binary Encoding]] for structured data with a [[JSON Data Interchange Format]] compatible model, a member of the [[Data Serialization]] family alongside [[CBOR]] and [[Protocol Buffer]]. It optimises for small message size and fast parsing over human readability.
- ### Overview
  - MessagePack was created to make JSON-shaped data dramatically smaller and faster to parse for systems that exchange large volumes of messages. It keeps the same flexible, schema-free data model so existing JSON structures map directly onto its binary form.
  - Each value is prefixed by a type byte that may also encode a small immediate value or length, so short strings and small integers occupy as little as one byte. This yields substantial bandwidth and CPU savings in messaging, caching, and RPC paths.
- ### Key aspects
  - A type-prefix scheme distinguishes integers, strings, arrays, maps, and extensions compactly.
  - Schema-free encoding preserves JSON compatibility without an external definition file.
  - Extension types allow application-specific binary payloads to be tagged.
  - Streaming-friendly framing supports incremental encode and decode.
- ### Applications
  - High-throughput [[Message Queue]] and pub/sub systems reducing payload size.
  - In-memory caches and key-value stores serialising structured values.
  - Inter-service RPC where JSON overhead is prohibitive.
  - Constrained [[Internet of Things]] and [[Embedded Systems]] communication.
- ### Relationships
  - partOf:: [[Data Serialization]]
  - relatedTo:: [[JSON Data Interchange Format]]
  - relatedTo:: [[CBOR]]
  - relatedTo:: [[Protocol Buffer]]
  - contrastsWith:: [[JSON Data Interchange Format]]
  - contrastsWith:: [[Protocol Buffer]]
  - uses:: [[Binary Encoding]]
  - enables:: [[Message Queue]]
  - enables:: [[Embedded Systems]]
  - supports:: [[Internet of Things]]
  - implements:: [[Data Serialization]]
  - requires:: [[Binary Encoding]]
  - bridgesTo:: [[Infrastructure]]
- ### Provenance
  - updated:: 2026-06-15
