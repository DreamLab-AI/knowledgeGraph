public:: true

# Stratum Protocol

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:stratum-protocol",
  "@type": "Page",
  "title": "Stratum Protocol",
  "vc:slug": "stratum-protocol",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stratum-protocol",
  "@type": "Class",
  "label": "Stratum Protocol",
  "definition": "The Stratum Protocol is a lightweight, JSON-based line protocol used to coordinate work between cryptocurrency mining pools and individual miners. The pool server distributes block templates and difficulty targets to connected mining clients, which return valid share submissions, allowing aggregated hashing power to be measured and rewarded. Stratum reduces bandwidth and latency compared with earlier polling schemes and remains the dominant pool communication standard for proof-of-work coins.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:mining-pool",
      "label": "Mining Pool"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:mining-pool",
        "label": "Mining Pool"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:websocket",
        "label": "WebSocket"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:mining-hardware",
        "label": "Mining Hardware"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:mining-pool",
        "label": "Mining Pool"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:mining-hardware",
        "label": "Mining Hardware"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
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
  - The Stratum Protocol is a lightweight, JSON-based line protocol used to coordinate work between cryptocurrency mining pools and individual miners. The pool server distributes block templates and difficulty targets to connected mining clients, which return valid share submissions, allowing aggregated hashing power to be measured and rewarded. Stratum reduces bandwidth and latency compared with earlier polling schemes and remains the dominant pool communication standard for proof-of-work coins.
  - Core concepts: [[Mining Pool]], [[Proof Of Work]], [[Mining Hardware]], [[Network Protocol]]
- ### Overview
  - **Stratum Protocol** sits within the [[Mining Pool]] area of the blockchain domain.
  - It is referenced by existing classes in the knowledge graph and is materialised here as a defined, rooted node so those edges resolve.
- ### Key aspects
  - Establishes a precise, shared meaning for stratum protocol usable across coordinating components.
  - Integrates with neighbouring concepts through the relations enumerated below.
  - Maturity assessed as established based on established practice and literature.
- ### Mechanisms
  - Operates through the dependencies and components captured in its `requires`, `uses`, and `hasPart` relations.
  - Produces the capabilities captured in its `enables` and `supports` relations.
- ### Applications
  - Applied wherever blockchain systems need the function described above.
  - Connects to broader workflows via the bridging relations listed below.
- ### Relationships
  - subClassOf:: [[Mining Pool]]
  - requires:: [[Mining Pool]]
  - requires:: [[Proof Of Work]]
  - uses:: [[Network Protocol]]
  - uses:: [[WebSocket]]
  - enables:: [[Mining Hardware]]
  - supports:: [[Mining Pool]]
  - dependsOn:: [[Network Protocol]]
  - dependsOn:: [[Latency]]
  - partOf:: [[Blockchain]]
  - relatedTo:: [[Proof Of Work]]
  - relatedTo:: [[Mining Hardware]]
  - relatedTo:: [[Cryptocurrency]]
  - bridgesTo:: [[Bandwidth]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
