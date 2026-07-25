public:: true

# OSI Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8da2566e2828d0def182cc39ec33981a62f02cce08fdf8c110bfa315898c2ae4",
  "@type": "Page",
  "vc:slug": "osi-model",
  "title": "OSI Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-architecture",
      "vc:label": "Network Architecture"
    },
    {
      "@id": "urn:visionflow:linked:rest-api",
      "vc:label": "REST API"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "OSI Model"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:osi-model",
  "@type": "Class",
  "label": "OSI Model",
  "definition": "The OSI (Open Systems Interconnection) Model is a conceptual reference framework developed by ISO that partitions network communication functions into seven hierarchical layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. Each layer has a well-defined responsibility and communicates with the layer immediately above and below it through standardised interfaces, enabling interoperability between heterogeneous systems from different vendors. Originally published as ISO/IEC 7498-1 in 1984, the model does not describe a concrete protocol stack but provides a universal vocabulary and design template for networking protocols. It remains the canonical educational and diagnostic framework for understanding where specific protocols, devices, and services operate within a network.",
  "domain": "infrastructure",
  "maturity": "mature",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-architecture",
      "label": "Network Architecture"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:physical-layer",
        "label": "Physical Layer"
      },
      {
        "@id": "urn:ngm:class:data-link-layer",
        "label": "Data Link Layer"
      },
      {
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
      },
      {
        "@id": "urn:ngm:class:transport-layer",
        "label": "Transport Layer"
      },
      {
        "@id": "urn:ngm:class:session-layer",
        "label": "Session Layer"
      },
      {
        "@id": "urn:ngm:class:presentation-layer",
        "label": "Presentation Layer"
      },
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:network-architecture",
        "label": "Network Architecture"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:architecture",
        "label": "Layered Architecture"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:vendor-neutrality",
        "label": "Vendor Neutrality"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:separation-of-concerns",
        "label": "Separation of Concerns"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:iec",
        "label": "IEC"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:tcp-ip-model",
        "label": "TCP/IP Model"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:firewall",
        "label": "Firewall"
      },
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:open-systems-interconnection-model",
      "label": "Open Systems Interconnection Model"
    },
    {
      "@id": "urn:ngm:class:iso-iec-7498-1",
      "label": "ISO/IEC 7498-1"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:osi-model:e8a014d39865",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8da2566e2828d0def182cc39ec33981a62f02cce08fdf8c110bfa315898c2ae4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Architecture]]",
      "resolved": "urn:visionflow:linked:network-architecture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[REST API]]",
      "resolved": "urn:visionflow:linked:rest-api",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - The OSI (Open Systems Interconnection) Model is a hierarchical conceptual framework published by the [[ISO]] as ISO/IEC 7498-1 (1984) that partitions [[Network Communication]] into seven distinct functional layers. Each layer encapsulates a specific set of responsibilities—from the voltage signals on a wire at Layer 1 up through routing, reliable delivery, session management, data formatting, and application services at Layer 7—and communicates with adjacent layers through well-defined service access points. The model was created to promote [[Protocol Interoperability]] across heterogeneous vendor equipment and remains the definitive teaching tool for [[Network Architecture]], [[Network Troubleshooting]], and protocol design, even though the dominant real-world stack, [[TCP/IP Model]], collapses these seven layers into four.

- ### Overview
  - The OSI Model emerged from the late-1970s international effort, led by ISO and ITU-T (then CCITT), to allow computers from different manufacturers to communicate over shared networks. Prior to OSI, proprietary architectures such as IBM SNA and DEC DECnet were incompatible. By defining a vendor-neutral [[Layered Architecture]], OSI enabled modular development: a change in the [[Physical Layer]] (e.g. from copper to fibre) need not affect software at the [[Transport Layer]].
  - Although the internet's [[TCP/IP Model]] became the practical winner of the "protocol wars" of the 1980s-90s, OSI terminology permeates modern networking. Engineers still speak of "Layer 3 routing", "Layer 4 load balancing", and "Layer 7 application firewalls". The model thus functions as a living intellectual scaffold for the entire field of [[Computer Networking]].
  - The seven-layer stack uses [[Encapsulation]]: data from a higher layer is wrapped with a header (and sometimes a trailer) by each lower layer, forming a [[Protocol Data Unit]] appropriate to that layer—segments, packets, frames, or bits—which is then unwrapped by the peer layer at the receiving end.

- ### Key Components
  - #### Layer 1 — Physical Layer
    - Concerned with the transmission of raw bit streams over a physical medium.
    - Governs voltage levels, timing, [[Cable Standards]], connector types, and signalling (electrical, optical, radio).
    - Devices: hubs, repeaters, cables, [[Network Interface Card]] transceivers.
    - Protocols/standards: [[Ethernet]] (IEEE 802.3 physical signalling), [[DSL]], [[Wi-Fi]] (IEEE 802.11 radio), [[Fibre Channel]].
  - #### Layer 2 — Data Link Layer
    - Provides reliable node-to-node data transfer over a single link, including error detection/correction and [[MAC Address]] based framing.
    - Sub-layers: Logical Link Control (LLC) and Media Access Control (MAC).
    - Devices: [[Network Switch]], bridge, [[Wireless Access Point]].
    - Protocols: [[Ethernet]] (framing), [[PPP]], [[HDLC]], [[Wi-Fi]] (IEEE 802.11 MAC), [[VLAN]] (IEEE 802.1Q).
  - #### Layer 3 — Network Layer
    - Handles logical addressing ([[IP Address]]) and [[Packet Routing]] across multiple networks (inter-networking).
    - Responsible for fragmentation and path selection.
    - Devices: [[Router]], Layer 3 switch.
    - Protocols: [[Internet Protocol]] (IPv4/IPv6), [[ICMP]], [[OSPF]], [[BGP]].
  - #### Layer 4 — Transport Layer
    - Provides end-to-end communication, segmentation/reassembly, flow control, and error recovery between hosts.
    - Delivers either reliable ordered delivery ([[TCP]]) or lightweight datagram service ([[UDP]]).
    - Protocols: [[TCP]], [[UDP]], [[SCTP]], [[QUIC]].
    - Abstraction used by [[Socket Programming]] and [[Port Number]] multiplexing.
  - #### Layer 5 — Session Layer
    - Manages the establishment, maintenance, and termination of sessions (dialogues) between applications.
    - Handles synchronisation checkpoints for long transfers and session recovery.
    - Protocols: [[NetBIOS]], [[RPC]] session establishment, parts of [[TLS]] handshake.
    - In the [[TCP/IP Model]] this functionality is embedded in the application layer.
  - #### Layer 6 — Presentation Layer
    - Responsible for data translation, compression, and [[Encryption]] between the application and the network.
    - Handles character encoding conversion (e.g. ASCII to EBCDIC), serialisation formats ([[JSON]], [[XML]], [[ASN.1]]), and compression.
    - [[TLS]]/[[SSL]] encryption is often placed here conceptually.
  - #### Layer 7 — Application Layer
    - The topmost layer, directly serving end-user applications with network services.
    - Provides protocols for file transfer, e-mail, web browsing, and directory services.
    - Protocols: [[HTTP]], [[HTTPS]], [[FTP]], [[SMTP]], [[DNS]], [[SNMP]], [[LDAP]], [[REST API]].

- ### Mechanisms
  - **Encapsulation and Decapsulation**: as data travels down the sending stack, each layer adds its own header (and trailer at Layer 2), wrapping the [[Protocol Data Unit]] from the layer above. At the receiving host, the process reverses—each layer strips its header, passing the payload upward.
  - **Service Access Points (SAPs)**: standardised interfaces between adjacent layers that decouple implementations, enabling protocol substitution (e.g. swapping [[IPv4]] for [[IPv6]] at Layer 3 without changing [[TCP]] at Layer 4).
  - **Peer-to-Peer Communication**: each layer communicates logically with its counterpart on the remote host using a shared protocol, even though physically data traverses all lower layers.
  - **Layer Independence (Modularity)**: [[Separation of Concerns]] means that advances in one layer—such as [[Optical Fibre]] replacing copper—do not require protocol changes above Layer 1.

- ### Applications and Use Cases
  - **Network Design and Engineering**: the OSI framework guides architects in partitioning responsibilities, selecting appropriate hardware and protocols, and documenting where different components operate. [[Network Switches]] operate at Layer 2; [[Routers]] at Layer 3; [[Application Delivery Controllers]] at Layer 7.
  - **Security Architecture**: [[Firewall]] products are classified by the OSI layer at which they inspect traffic—packet-filtering firewalls at Layer 3/4, stateful inspection at Layer 4, and next-generation firewalls and [[Web Application Firewall]] (WAF) products at Layer 7. [[Network Security]] policies map naturally to OSI layers.
  - **Network Troubleshooting**: the "bottom-up" OSI diagnostic methodology isolates faults by checking layers sequentially: first physical connectivity, then data link, then IP reachability (ping), then transport (port open), then application. This systematic approach structures tools like [[Wireshark]], traceroute, and [[SNMP]] monitoring.
  - **Protocol Development and Standardisation**: new protocol designers use the OSI model to position their work and define clear interfaces. [[QUIC]] (now RFC 9000), for example, is analysed relative to OSI Layers 4–5 to understand how it departs from the [[TCP]]+[[TLS]] paradigm.
  - **Education and Certification**: OSI is the foundational framework in networking curricula worldwide. Certifications such as CompTIA Network+, Cisco CCNA, and related qualifications organise their syllabi around OSI layers.
  - **Distributed Systems and Cloud**: cloud services map to OSI conceptually—[[Software-Defined Networking]] (SDN) abstracts Layers 2–4; service meshes (e.g. [[Istio]]) operate at Layer 7; [[Microservices]] communicate over Layer 7 protocols such as [[HTTP]] and [[gRPC]].
  - **IoT and Embedded Networks**: [[Internet of Things]] protocol stacks (Zigbee, [[LoRaWAN]], Matter) are frequently mapped to OSI layers to explain their design trade-offs and security boundaries.

- ### Relationships
  - partOf:: [[Network Architecture]]
  - hasPart:: [[Physical Layer]]
  - hasPart:: [[Data Link Layer]]
  - hasPart:: [[Network Layer]]
  - hasPart:: [[Transport Layer]]
  - hasPart:: [[Session Layer]]
  - hasPart:: [[Presentation Layer]]
  - hasPart:: [[Application Layer]]
  - requires:: [[Network Protocol]]
  - requires:: [[Layered Architecture]]
  - enables:: [[Protocol Interoperability]]
  - enables:: [[Network Troubleshooting]]
  - enables:: [[Vendor Neutrality]]
  - dependsOn:: [[Standardisation]]
  - implements:: [[Separation of Concerns]]
  - uses:: [[Encapsulation]]
  - uses:: [[Protocol Data Unit]]
  - standardizedBy:: [[ISO]]
  - standardizedBy:: [[IEC]]
  - contrastsWith:: [[TCP/IP Model]]
  - bridges-to:: [[Distributed Systems]]
  - bridges-to:: [[Microservices]]
  - relatedTo:: [[REST API]]
  - relatedTo:: [[Firewall]]
  - relatedTo:: [[Network Security]]
  - relatedTo:: [[Internet Protocol]]

- ### Standards and Context
  - **ISO/IEC 7498-1:1994** — the authoritative standard defining the OSI Reference Model architecture (second edition; original 1984). Published jointly by [[ISO]] and [[IEC]].
  - **ISO/IEC 7498-2** — OSI Security Architecture, extending the base model with security services and mechanisms mapped to specific layers.
  - **ITU-T X.200** — ITU-T's equivalent publication of the OSI Reference Model, used in telecommunications contexts.
  - **ITU-T X.700 series** — OSI Systems Management standards, mapping management frameworks (fault, configuration, accounting, performance, security — FCAPS) to the OSI model.
  - The model was developed within the ISO/TC 97 (later JTC 1) technical committee, with contributions from national bodies including BSI (UK), ANSI (US), and DIN (Germany).
  - OSI competed with the [[ARPANET]]-derived [[TCP/IP Model]] during the 1980s; the US government's GOSIP mandate briefly required OSI compliance in federal procurements before TCP/IP's dominance became insurmountable.
  - Modern relevance: [[Software-Defined Networking]] (SDN), [[Network Function Virtualisation]] (NFV), and cloud-native [[Service Mesh]] architectures are regularly described and analysed using OSI layer terminology, confirming the model's enduring conceptual utility.

- ### Provenance
  - sources:: ISO/IEC 7498-1:1994; ITU-T X.200; Tanenbaum, A.S. & Wetherall, D.J. — Computer Networks (5th ed.); Forouzan, B.A. — Data Communications and Networking (5th ed.)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-29T00:00:00Z
