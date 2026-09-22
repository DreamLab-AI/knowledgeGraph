public:: true

# Software-Defined Networking

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:software-defined-networking",
  "@type": "Page",
  "title": "Software-Defined Networking",
  "vc:slug": "software-defined-networking",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:software-defined-networking",
  "@type": "Class",
  "label": "Software-Defined Networking",
  "definition": "Software-defined networking (SDN) is a network architecture that decouples the control plane, which decides how traffic is routed, from the data plane, which forwards packets, centralising control logic in a programmable software controller. By exposing the network through open interfaces, SDN allows traffic flows and policies to be configured dynamically and programmatically rather than device-by-device. This abstraction enables automation, virtualisation and centralised orchestration of network behaviour.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-architecture",
      "label": "Network Architecture"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:network-architecture",
        "label": "Network Architecture"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:virtual-network",
        "label": "Virtual Network"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:network-slicing",
        "label": "Network Slicing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:network-slicing",
        "label": "Network Slicing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:network-architecture",
        "label": "Network Architecture"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:virtual-network",
        "label": "Virtual Network"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
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
  - A [[Network Architecture]] that separates the control plane from the data plane.
  - Centralises routing logic in a programmable software controller exposed via an [[API]].
  - Enables dynamic configuration of a [[Virtual Network]] and [[Network Slicing]].
- ### Overview
  - SDN replaces per-device manual configuration with centralised, programmatic control.
  - A logically central controller maintains a global view of the network.
  - Open southbound interfaces (such as OpenFlow) instruct forwarding devices.
  - Northbound APIs let applications request network behaviour and policy.
- ### Mechanisms
  - Control plane computes forwarding decisions centrally.
  - Data plane devices forward packets according to installed flow rules.
  - Controller programs flows through standardised southbound protocols.
  - Network applications consume northbound APIs for orchestration.
- ### Applications
  - Data-centre and cloud network automation.
  - Network virtualisation and multi-tenant isolation.
  - Traffic engineering and dynamic policy enforcement.
  - Enabling [[Network Slicing]] in carrier networks.
- ### Relationships
  - partOf:: [[Network Architecture]]
  - hasPart:: [[Virtual Network]]
  - dependsOn:: [[API]]
  - implements:: [[Network Slicing]]
  - enables:: [[Scalability]]
  - enables:: [[Cloud Computing]]
  - uses:: [[API]]
  - supports:: [[Infrastructure]]
  - bridgesTo:: [[Network Slicing]]
  - contrastsWith:: [[Network Architecture]]
  - relatedTo:: [[Virtual Network]]
  - relatedTo:: [[Infrastructure]]
- ### Provenance
  - updated:: 2026-06-15
