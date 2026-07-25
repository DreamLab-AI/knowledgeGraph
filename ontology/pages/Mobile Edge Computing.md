public:: true

# Mobile Edge Computing

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:mobile-edge-computing", "@type":"Page", "title":"Mobile Edge Computing", "vc:slug":"mobile-edge-computing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mobile-edge-computing",
  "@type": "Class",
  "label": "Mobile Edge Computing",
  "definition": "Mobile edge computing, also termed multi-access edge computing, places cloud computing capabilities at the edge of the mobile network, close to end users and devices. By hosting applications and services at base stations or aggregation points it reduces latency, conserves backhaul bandwidth and enables real-time processing. It is a foundational enabler for 5G use cases such as augmented reality, autonomous vehicles and industrial automation.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:edge-computing",
      "label": "Edge Computing"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:edge-computing-architecture",
        "label": "Edge Computing Architecture"
      },
      {
        "@id": "urn:ngm:class:network-slicing",
        "label": "Network Slicing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:network-architecture",
        "label": "Network Architecture"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ultra-low-latency",
        "label": "Ultra-Low Latency"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:smart-city",
        "label": "Smart City"
      },
      {
        "@id": "urn:ngm:class:io-t",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:edge-ai",
        "label": "Edge AI"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      },
      {
        "@id": "urn:ngm:class:fog-computing",
        "label": "Fog Computing"
      },
      {
        "@id": "urn:ngm:class:mobile-computing",
        "label": "Mobile Computing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
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
- Mobile edge computing places [[Cloud Computing]] capabilities at the edge of the mobile network, close to end users and devices.
- By hosting applications at base stations or aggregation points it cuts [[Latency]] and conserves backhaul bandwidth.
- It is a foundational enabler for 5G use cases requiring [[Ultra-Low Latency]].
- It extends [[Edge Computing]] principles into the radio access network.
- ### Overview
- Standardised by ETSI as multi-access edge computing (MEC), the approach moves compute, storage and networking from centralised data centres to the network edge.
- Co-locating workloads with the radio access network removes round trips to distant clouds, achieving single-digit-millisecond response times that centralised architectures cannot match.
- MEC platforms expose APIs for radio network information, location and bandwidth management, allowing applications to adapt to live network conditions.
- It is tightly coupled with 5G, where network slicing and software-defined networking allocate dedicated edge resources to latency-sensitive services.
- ### Key aspects
- Co-location of compute with the radio access network.
- Latency reduction and backhaul offload.
- Exposure of network context through standardised APIs.
- Integration with network slicing for service isolation.
- Distributed orchestration across many edge nodes.
- ### Mechanisms
- Deployment of containerised workloads at base stations and aggregation sites.
- Traffic steering and local breakout to keep data near the user.
- Network slicing to guarantee resources for specific applications.
- Edge orchestration platforms managing placement and scaling.
- ### Applications
- Cloud gaming and immersive augmented and virtual reality.
- Connected and autonomous vehicle coordination.
- Industrial automation and real-time control.
- Smart city sensing and video analytics at the edge.
- ### Relationships
- implements:: [[Edge Computing Architecture]]
- implements:: [[Network Slicing]]
- requires:: [[Network Architecture]]
- enables:: [[Ultra-Low Latency]]
- enables:: [[Augmented Reality]]
- enables:: [[Autonomous Vehicle]]
- supports:: [[Smart City]]
- supports:: [[Internet of Things]]
- supports:: [[Edge AI]]
- uses:: [[Content Delivery Network]]
- dependsOn:: [[Cloud Computing]]
- relatedTo:: [[Distributed Computing]]
- relatedTo:: [[Fog Computing]]
- relatedTo:: [[Mobile Computing]]
- contrastsWith:: [[Cloud Computing]]
- bridgesTo:: [[Latency]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
