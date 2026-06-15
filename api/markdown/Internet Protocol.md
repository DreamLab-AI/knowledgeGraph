public:: true

# Internet Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:internet-protocol",
  "@type": "Page",
  "title": "Internet Protocol",
  "vc:slug": "internet-protocol",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:internet-protocol",
  "@type": "Class",
  "label": "Internet Protocol",
  "definition": "The Internet Protocol (IP) is the principal network-layer protocol of the Internet protocol suite, responsible for addressing hosts and routing packets of data from a source to a destination across interconnected networks. It defines a best-effort, connectionless delivery service in which each datagram is forwarded independently using hierarchical addresses. IP provides the universal addressing and packet format on which higher-layer transport and application protocols depend.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
      },
      {
        "@id": "urn:ngm:class:packet-switching",
        "label": "Packet Switching"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:routing-protocol",
        "label": "Routing Protocol"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:ipv6",
        "label": "IPv6"
      },
      {
        "@id": "urn:ngm:class:dns",
        "label": "DNS"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:tcp",
        "label": "TCP"
      },
      {
        "@id": "urn:ngm:class:udp",
        "label": "UDP"
      },
      {
        "@id": "urn:ngm:class:tcp-ip",
        "label": "TCP/IP"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transport-layer",
        "label": "Transport Layer"
      },
      {
        "@id": "urn:ngm:class:networking",
        "label": "Networking"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:packet-switching",
        "label": "Packet Switching"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:osi-model",
        "label": "OSI Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
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
  - The Internet Protocol (IP) is the principal network-layer protocol of the Internet protocol suite, responsible for addressing hosts and routing packets of data from a source to a destination across interconnected networks. It defines a best-effort, connectionless delivery service in which each datagram is forwarded independently using hierarchical addresses. IP provides the universal addressing and packet format on which higher-layer transport and application protocols depend.
  - Related concepts: [[Network Layer]] [[Packet Switching]] [[TCP]] [[Transport Layer]] [[Routing Protocol]]

- ### Overview
  - The Internet Protocol is the thin waist of the Internet architecture: a single, simple addressing and forwarding service over which an enormous diversity of link technologies below and applications above interoperate. Its connectionless, best-effort model pushes reliability and ordering to the transport layer, keeping the network core stateless and scalable.

- ### Mechanisms
  - Hierarchical addressing assigns each interface an IP address that encodes network and host parts for scalable routing.
  - Datagram forwarding moves each packet hop by hop based on its destination address and routers' forwarding tables.
  - Fragmentation and reassembly adapt datagrams to the maximum transmission unit of each underlying link.
  - IPv4 and IPv6 define the two deployed address formats, with IPv6 vastly expanding the address space.

- ### Applications
  - Universal addressing and packet delivery for all Internet communication.
  - Foundation for transport protocols such as TCP and UDP.
  - Interconnection of heterogeneous link-layer networks into a single internetwork.

- ### Relationships
  - implements:: [[Network Layer]]
  - implements:: [[Packet Switching]]
  - requires:: [[Routing Protocol]]
  - has-part:: [[IPv6]]
  - has-part:: [[DNS]]
  - enables:: [[TCP]]
  - enables:: [[UDP]]
  - enables:: [[TCP/IP]]
  - supports:: [[Transport Layer]]
  - supports:: [[Networking]]
  - depends-on:: [[Packet Switching]]
  - uses:: [[OSI Model]]
  - related-to:: [[Network Protocol]]
  - related-to:: [[Communication Protocol]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
