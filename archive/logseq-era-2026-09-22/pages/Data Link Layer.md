public:: true

# Data Link Layer

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:data-link-layer",
  "@type": "Page",
  "title": "Data Link Layer",
  "vc:slug": "data-link-layer",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-link-layer",
  "@type": "Class",
  "label": "Data Link Layer",
  "definition": "The data link layer is the second layer of the OSI model, responsible for node-to-node data transfer across a single physical link and for framing raw bits from the physical layer into structured frames. It provides addressing through hardware (MAC) addresses, error detection, and media access control that arbitrates shared transmission media. By presenting a reliable link to the network layer above, it abstracts away the imperfections of the underlying physical medium.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:osi-model",
      "label": "OSI Model"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:ethernet",
        "label": "Ethernet"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:ethernet",
        "label": "Ethernet"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:physical-layer",
        "label": "Physical Layer"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:osi-model",
        "label": "OSI Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
      },
      {
        "@id": "urn:ngm:class:tcp-ip",
        "label": "TCP/IP"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
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
  - The data link layer is the second layer of the OSI model, responsible for node-to-node data transfer across a single physical link and for framing raw bits from the physical layer into structured frames. It provides addressing through hardware (MAC) addresses, error detection, and media access control that arbitrates shared transmission media. By presenting a reliable link to the network layer above, it abstracts away the imperfections of the underlying physical medium.
  - Related concepts: [[OSI Model]] [[Physical Layer]] [[Ethernet]] [[Network Layer]]
- ### Overview
  - The data link layer sits between the physical layer and the network layer in the OSI reference model.
  - It frames bits into structured units, adds hardware addressing, and applies error-detection codes.
  - Media access control governs how multiple devices share a common transmission medium without collision.
  - Ethernet is the dominant data link technology for wired local area networks.
- ### Mechanisms
  - Framing groups raw bits from the [[Physical Layer]] into delimited frames.
  - MAC addressing identifies devices uniquely on a local link.
  - Error detection via checksums flags corrupted frames for discard or retransmission.
  - Media access control arbitrates shared-medium access among contending devices.
  - [[Ethernet]] implements the layer for most wired local networks.
- ### Applications
  - Ethernet local area networking in offices and data centres.
  - Wi-Fi link management for wireless devices sharing a radio channel.
  - Switch operation forwarding frames based on MAC addresses.
  - Providing a dependable link abstraction to the [[Network Layer]] above.
- ### Relationships
  - subClassOf:: [[OSI Model]]
  - contrastsWith:: [[Network Layer]]
  - enables:: [[Network Protocol]]
  - enables:: [[Ethernet]]
  - hasPart:: [[Ethernet]]
  - requires:: [[Physical Layer]]
  - partOf:: [[OSI Model]]
  - relatedTo:: [[Network Layer]]
  - relatedTo:: [[TCP/IP]]
  - relatedTo:: [[Network Protocol]]
  - supports:: [[Network Layer]]
  - supports:: [[Infrastructure]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
