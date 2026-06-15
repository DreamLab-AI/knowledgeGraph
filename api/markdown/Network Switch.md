public:: true

# Network Switch

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:network-switch",
  "@type": "Page",
  "title": "Network Switch",
  "vc:slug": "network-switch",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:network-switch",
  "@type": "Class",
  "label": "Network Switch",
  "definition": "A network switch is a hardware device that connects devices within a local area network and forwards data frames between them based on MAC addresses at the data link layer. By learning which addresses sit on which ports, it forwards traffic only to its destination, improving efficiency over shared media. Switches are foundational building blocks of wired networks in offices, campuses and data centres.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:networking-infrastructure",
      "label": "Networking Infrastructure"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethernet",
        "label": "Ethernet"
      },
      {
        "@id": "urn:ngm:class:network-interface",
        "label": "Network Interface"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:network-interface-card",
        "label": "Network Interface Card"
      },
      {
        "@id": "urn:ngm:class:packet-switching",
        "label": "Packet Switching"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-link-layer",
        "label": "Data Link Layer"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:networking-infrastructure",
        "label": "Networking Infrastructure"
      },
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "Data Centre"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:network-topology",
        "label": "Network Topology"
      },
      {
        "@id": "urn:ngm:class:low-latency-networking",
        "label": "Low-Latency Networking"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:time-sensitive-networking",
        "label": "Time-Sensitive Networking"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:software-defined-networking",
        "label": "Software-Defined Networking"
      },
      {
        "@id": "urn:ngm:class:networking-technology",
        "label": "Networking Technology"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:networking-standard",
        "label": "Networking Standard"
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
  - Relates to [[Ethernet]]
  - Relates to [[Networking Infrastructure]]
  - Relates to [[Data Link Layer]]
  - Relates to [[Packet Switching]]
  - Relates to [[Network Topology]]
- ### Overview
  - A switch maintains a forwarding table mapping MAC addresses to physical ports.
  - Frames are forwarded only to the port for their destination, reducing collisions and contention.
  - Managed switches add VLANs, quality of service and monitoring capabilities.
  - In data centres, high-radix switches form the spine and leaf fabric carrying east-west traffic.
- ### Key aspects
  - **MAC learning and forwarding** — The switch observes source addresses to build a table and forward frames to the correct egress port.
  - **VLAN segmentation** — Logical separation of ports into virtual LANs isolates traffic and improves security and management.
  - **Quality of service** — Prioritisation and scheduling support latency-sensitive flows over best-effort traffic.
  - **Data-centre fabrics** — Leaf-spine designs use switches to deliver low-latency, high-bandwidth interconnection at scale.
- ### Applications
  - Connecting workstations, servers and peripherals on an office LAN.
  - Building data-centre fabrics that interconnect compute and storage.
  - Segmenting networks with VLANs for security and traffic isolation.
  - Carrying deterministic flows with time-sensitive networking.
- ### Relationships
  - subClassOf:: [[Networking Infrastructure]]
  - requires:: [[Ethernet]]
  - requires:: [[Network Interface]]
  - hasPart:: [[Network Interface Card]]
  - hasPart:: [[Packet Switching]]
  - uses:: [[Data Link Layer]]
  - uses:: [[Network Protocol]]
  - partOf:: [[Networking Infrastructure]]
  - partOf:: [[Data Centre]]
  - supports:: [[Network Topology]]
  - supports:: [[Low-Latency Networking]]
  - enables:: [[Time-Sensitive Networking]]
  - relatedTo:: [[Software-Defined Networking]]
  - relatedTo:: [[Networking Technology]]
  - dependsOn:: [[Networking Standard]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
