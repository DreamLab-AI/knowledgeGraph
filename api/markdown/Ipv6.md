public:: true

# Ipv6
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:ipv6",
  "@type": "Page",
  "title": "Ipv6",
  "vc:slug": "ipv6",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ipv6",
  "@type": "Class",
  "label": "Ipv6",
  "definition": "IPv6 (Internet Protocol version 6) is the current generation of the Internet Protocol, designed to replace IPv4 by providing a vastly larger 128-bit address space, simplified header structure, and built-in support for autoconfiguration and security. Its expanded addressing — roughly 3.4 x 10^38 addresses — resolves the exhaustion of IPv4 addresses and removes the need for widespread network address translation. IPv6 supports stateless address autoconfiguration, mandatory support for IPsec, and improved multicast and mobility. It is fundamental to the continued growth of the internet and the addressing of vast numbers of Internet of Things devices.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:internet-protocol",
      "label": "Internet Protocol"
    },
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:ip-addressing",
        "label": "IP Addressing"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:routing-protocol",
        "label": "Routing Protocol"
      },
      {
        "@id": "urn:ngm:class:packet-switching",
        "label": "Packet Switching"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:tcp-ip",
        "label": "TCP/IP"
      },
      {
        "@id": "urn:ngm:class:dns",
        "label": "DNS"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:broadband-connectivity",
        "label": "Broadband Connectivity"
      },
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:network-topology",
        "label": "Network Topology"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:thread-protocol",
        "label": "Thread Protocol"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
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
  - [[Ipv6]] is the 128-bit-address generation of the [[Internet Protocol]], using [[IP Addressing]] and [[Network Protocol]] mechanisms over [[Packet Switching]] and [[TCP/IP]] to enable the [[Internet of Things]] and sustain internet growth.

- ### Overview
  - IPv6 was designed to address the central limitation of IPv4: the exhaustion of its 32-bit address space. Its 128-bit addresses provide a practically unlimited supply, restoring true end-to-end addressing.
  - Beyond addressing, IPv6 streamlines the packet header, mandates support for IPsec, and provides stateless address autoconfiguration so that devices can self-assign addresses without a configuration server.
  - Adoption has been gradual, with dual-stack and transition mechanisms allowing IPv6 and IPv4 to coexist; the proliferation of IoT devices accelerates the case for ubiquitous IPv6.

- ### Key aspects
  - Address space: 128-bit addresses eliminate scarcity and the need for pervasive network address translation.
  - Autoconfiguration: stateless address autoconfiguration lets hosts derive addresses from router advertisements.
  - Simplified header: a fixed-format base header with extension headers improves router efficiency.
  - Transition: dual-stack operation and tunnelling bridge the IPv4-to-IPv6 migration.

- ### Applications
  - Addressing the vast device population of the Internet of Things.
  - Restoring end-to-end connectivity for peer-to-peer and real-time applications.
  - Underpinning next-generation mobile and broadband networks.

- ### Relationships
  - hasPart:: [[IP Addressing]]
  - hasPart:: [[Network Protocol]]
  - requires:: [[Routing Protocol]]
  - requires:: [[Packet Switching]]
  - uses:: [[TCP/IP]]
  - uses:: [[DNS]]
  - enables:: [[Internet of Things]]
  - enables:: [[Edge Computing]]
  - supports:: [[Broadband Connectivity]]
  - supports:: [[Network Infrastructure]]
  - implements:: [[Internet Protocol]]
  - contrastsWith:: [[Network Topology]]
  - relatedTo:: [[Thread Protocol]]
  - partOf:: [[Internet Protocol]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
