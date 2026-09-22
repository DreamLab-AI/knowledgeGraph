public:: true

# Mesh Networking

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:mesh-networking",
  "@type": "Page",
  "title": "Mesh Networking",
  "vc:slug": "mesh-networking",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mesh-networking",
  "@type": "Class",
  "label": "Mesh Networking",
  "definition": "Mesh networking is a network topology in which nodes connect directly, dynamically, and non-hierarchically, relaying data on behalf of one another to reach destinations. Each node cooperates in routing, so the network can self-organise and self-heal around failed or moved nodes without central infrastructure. Mesh topologies are widely used in wireless sensor networks, smart-home protocols, and resilient community networks.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-topology",
      "label": "Network Topology"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:network-topology",
        "label": "Network Topology"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:routing-protocol",
        "label": "Routing Protocol"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:resilience",
        "label": "Resilience"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:routing-protocol",
        "label": "Routing Protocol"
      },
      {
        "@id": "urn:ngm:class:zigbee",
        "label": "Zigbee"
      },
      {
        "@id": "urn:ngm:class:thread-protocol",
        "label": "Thread Protocol"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:routing-protocol",
        "label": "Routing Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:resilience",
        "label": "Resilience"
      },
      {
        "@id": "urn:ngm:class:asset-tracking",
        "label": "Asset Tracking"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:network-topology",
        "label": "Network Topology"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:bluetooth-low-energy",
        "label": "Bluetooth Low Energy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
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
  - Mesh networking is a network topology in which nodes connect directly, dynamically, and non-hierarchically, relaying data on behalf of one another to reach destinations. Each node cooperates in routing, so the network can self-organise and self-heal around failed or moved nodes without central infrastructure. Mesh topologies are widely used in wireless sensor networks, smart-home protocols, and resilient community networks.
  - Related concepts: [[Network Topology]] [[Routing Protocol]] [[Internet of Things]] [[Zigbee]] [[Thread Protocol]]
- ### Overview
  - In a mesh network there is no single point of failure: every node both originates traffic and forwards it for its neighbours, so packets hop from device to device until they reach their target. When a node fails or a person moves, the routing protocol discovers alternative paths and the network reconfigures itself. This self-organising, self-healing behaviour makes mesh ideal for dense sensor deployments and environments without reliable fixed infrastructure.
- ### Key aspects
  - Multi-hop relaying where each node forwards for others
  - Self-organising route discovery and self-healing on node failure
  - Decentralised topology with no mandatory central controller
  - Protocol families such as Zigbee, Thread, and Bluetooth Mesh
  - Trade-offs between coverage, latency, and per-node power consumption
- ### Applications
  - Smart-home and building-automation device networks
  - Wireless sensor networks for industrial and environmental monitoring
  - Resilient community and disaster-recovery networks
  - Large-scale indoor positioning and asset-tracking deployments
- ### Relationships
  - subClassOf:: [[Network Topology]]
  - partOf:: [[Network Topology]]
  - relatedTo:: [[Routing Protocol]]
  - relatedTo:: [[Internet of Things]]
  - relatedTo:: [[Resilience]]
  - uses:: [[Routing Protocol]]
  - uses:: [[Zigbee]]
  - uses:: [[Thread Protocol]]
  - dependsOn:: [[Routing Protocol]]
  - enables:: [[Resilience]]
  - enables:: [[Asset Tracking]]
  - implements:: [[Network Topology]]
  - supports:: [[Internet of Things]]
  - supports:: [[Bluetooth Low Energy]]
  - requires:: [[Sensor]]
  - bridgesTo:: [[Fault Tolerance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
