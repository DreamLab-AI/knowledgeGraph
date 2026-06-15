public:: true

# Network Bandwidth
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:network-bandwidth",
  "@type": "Page",
  "title": "Network Bandwidth",
  "vc:slug": "network-bandwidth",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:network-bandwidth",
  "@type": "Class",
  "label": "Network Bandwidth",
  "definition": "Network bandwidth is the maximum rate at which data can be transferred across a network path, typically measured in bits per second. It defines the capacity of a communication channel rather than its current utilisation or the time taken for an individual message to traverse the path. Bandwidth interacts with latency and packet loss to determine the effective throughput experienced by applications.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-infrastructure",
      "label": "Network Infrastructure"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      },
      {
        "@id": "urn:ngm:class:congestion-control",
        "label": "Congestion Control"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:quality-of-service",
        "label": "Quality of Service"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:network-latency",
        "label": "Network Latency"
      },
      {
        "@id": "urn:ngm:class:quality-of-service",
        "label": "Quality of Service"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
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
  - Network bandwidth is the maximum rate at which data can be transferred across a network path, typically measured in bits per second. It defines the capacity of a communication channel rather than its current utilisation or the time taken for an individual message to traverse the path. Bandwidth interacts with latency and packet loss to determine the effective throughput experienced by applications.
  - Related concepts: [[Network Infrastructure]] [[Latency]] [[Quality of Service]] [[Congestion Control]]
- ### Overview
  - Network bandwidth is a fundamental capacity constraint in any distributed or networked system. It is often conflated with throughput and latency, but the three are distinct: bandwidth is the theoretical maximum capacity, throughput is the achieved data rate under real conditions, and latency is the delay before transfer begins. Real-world performance depends on how protocols manage flow control, congestion, and the bandwidth-delay product of a path.
- ### Key aspects
  - Bandwidth describes channel capacity, distinct from achieved throughput and from latency.
  - The bandwidth-delay product determines how much data can be in flight on a path.
  - Congestion control and quality-of-service mechanisms allocate shared bandwidth among flows.
  - Effective bandwidth is reduced by packet loss, protocol overhead, and contention.
- ### Applications
  - Provisioning capacity for video streaming and real-time media.
  - Designing content delivery networks to minimise origin load and improve delivery.
  - Sizing interconnects between cloud regions and data centres.
  - Shaping and prioritising traffic to meet service-level objectives.
- ### Relationships
  - subClassOf:: [[Network Infrastructure]]
  - requires:: [[Network Infrastructure]]
  - requires:: [[Network Protocol]]
  - dependsOn:: [[Network Infrastructure]]
  - dependsOn:: [[Congestion Control]]
  - hasPart:: [[Quality of Service]]
  - relatedTo:: [[Latency]]
  - relatedTo:: [[Network Latency]]
  - relatedTo:: [[Quality of Service]]
  - relatedTo:: [[Content Delivery Network]]
  - supports:: [[Cloud Computing]]
  - supports:: [[Content Delivery Network]]
  - enables:: [[Scalability]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
