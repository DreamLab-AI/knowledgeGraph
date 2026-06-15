public:: true

# Broadband Connectivity
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:broadband-connectivity",
  "@type": "Page",
  "title": "Broadband Connectivity",
  "vc:slug": "broadband-connectivity",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:broadband-connectivity",
  "@type": "Class",
  "label": "Broadband Connectivity",
  "definition": "Broadband Connectivity is high-capacity, always-on access to the internet delivered over fixed or wireless infrastructure such as fibre, cable, DSL, or cellular networks, characterised by data rates substantially higher than legacy dial-up. It provides the underlying transport for digital services, remote work, streaming, cloud applications, and the Internet of Things. Universal broadband is treated as essential infrastructure, and disparities in its availability constitute the digital divide. Its delivery depends on telecommunications infrastructure, network protocols, and last-mile access technologies.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-infrastructure",
      "label": "Network Infrastructure"
    }
  ],
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      },
      {
        "@id": "urn:ngm:class:telecommunications",
        "label": "Telecommunications"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:packet-switching",
        "label": "Packet Switching"
      },
      {
        "@id": "urn:ngm:class:tcp-ip",
        "label": "TCP/IP"
      },
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:ip-addressing",
        "label": "IP Addressing"
      },
      {
        "@id": "urn:ngm:class:routing-protocol",
        "label": "Routing Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:smart-city",
        "label": "Smart City"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:digital-infrastructure",
        "label": "Digital Infrastructure"
      },
      {
        "@id": "urn:ngm:class:urban-computing",
        "label": "Urban Computing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:digital-divide",
        "label": "Digital Divide"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:dns",
        "label": "DNS"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Broadband Connectivity]] is high-capacity always-on internet access carried over [[Network Infrastructure]] and [[Telecommunications]] using [[Packet Switching]] and [[TCP/IP]], enabling [[Edge Computing]] and the [[Internet of Things]] while its absence drives the [[Digital Divide]].

- ### Overview
  - Broadband connectivity is the transport substrate of the modern digital economy, providing the high throughput and persistent availability that cloud, streaming, and real-time services assume.
  - It is delivered through a layered stack: physical media (fibre, coaxial, copper, radio), link and network protocols, and the last-mile access that connects premises to the core network.
  - Because so many services now presuppose broadband, gaps in its availability — rural, economic, or infrastructural — translate directly into the digital divide.

- ### Key aspects
  - Access technologies: fibre-to-the-premises, cable, DSL, and fixed and mobile wireless deliver the last mile.
  - Capacity and latency: bandwidth and round-trip time determine the feasibility of demanding applications.
  - Protocol stack: packet-switched IP transport carries diverse application traffic over shared infrastructure.
  - Universal service: policy targets equitable availability to mitigate the digital divide.

- ### Applications
  - Remote work, telehealth, and online education.
  - Cloud computing and high-definition streaming.
  - Backhaul for IoT, smart-city sensing, and edge computing.

- ### Relationships
  - dependsOn:: [[Network Infrastructure]]
  - dependsOn:: [[Telecommunications]]
  - uses:: [[Packet Switching]]
  - uses:: [[TCP/IP]]
  - uses:: [[Internet Protocol]]
  - hasPart:: [[IP Addressing]]
  - hasPart:: [[Routing Protocol]]
  - enables:: [[Edge Computing]]
  - enables:: [[Internet of Things]]
  - enables:: [[Smart City]]
  - supports:: [[Digital Infrastructure]]
  - supports:: [[Urban Computing]]
  - contrastsWith:: [[Digital Divide]]
  - requires:: [[Network Protocol]]
  - relatedTo:: [[DNS]]
  - partOf:: [[Network Infrastructure]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
