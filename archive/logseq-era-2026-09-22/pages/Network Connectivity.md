public:: true

# network connectivity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f83fe7e1292b30b8bbdde05bf6905bf374ecf95374aef31ea8876f3e814cab78",
  "@type": "Page",
  "vc:slug": "network-connectivity",
  "title": "network connectivity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:network-connectivity",
  "@type": "Class",
  "label": "Network Connectivity",
  "definition": "Network Connectivity is the capability of computing nodes, devices, or systems to establish, maintain, and exchange data across communication links spanning local area networks, wide area networks, and heterogeneous internet topologies. It encompasses the physical transmission medium (copper, fibre, radio), link-layer and network-layer addressing, routing protocols that guide packets across autonomous systems, and transport-layer mechanisms that provide reliability, ordering, and flow control. Together these layers enable end-to-end data delivery on which all higher-order distributed services — from cloud orchestration and edge computing to consensus protocols and collaborative applications — ultimately depend.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-infrastructure",
      "label": "Network Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:network-topology",
        "label": "Network Topology"
      },
      {
        "@id": "urn:ngm:class:routing-protocol",
        "label": "Routing Protocol"
      },
      {
        "@id": "urn:ngm:class:physical-layer",
        "label": "Physical Layer"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ip-addressing",
        "label": "IP Addressing"
      },
      {
        "@id": "urn:ngm:class:dns",
        "label": "DNS"
      },
      {
        "@id": "urn:ngm:class:network-interface",
        "label": "Network Interface"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      },
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:reliability",
        "label": "Network Reliability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:software-defined-networking",
        "label": "Software-Defined Networking"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ieee-802-x",
        "label": "IEEE 802"
      },
      {
        "@id": "urn:ngm:class:ietf-rfc",
        "label": "IETF RFC"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:air-gap",
        "label": "Air Gap"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:consensus-protocol",
        "label": "Consensus Protocol"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:quality-of-service",
        "label": "Quality Of Service"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:network-interconnection",
      "label": "Network Interconnection"
    },
    {
      "@id": "urn:ngm:class:network-access",
      "label": "Network Access"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Network Connectivity is the foundational capability that allows computing nodes, devices, and systems to establish communication links and exchange data across [[Network Infrastructure]]. It spans every layer of the [[OSI Model]], from physical media transmission through [[Routing Protocol]] logic and [[Transport Layer]] reliability guarantees, all the way to application-layer messaging. Reliable connectivity is a prerequisite for [[Distributed Systems]], [[Cloud Computing]], [[Edge Computing]], and modern [[Peer-to-Peer Network]] architectures, making it one of the most universally depended-upon properties in computing.

- ### Overview
  - Network Connectivity describes the degree to which nodes in a system can communicate. Full connectivity implies that any node can reach any other node, either directly or via intermediate hops. Partial connectivity introduces topology constraints that affect [[Fault Tolerance]], [[Latency]], and [[Bandwidth]] utilisation.
  - Why it matters:
    - Without connectivity, distributed computation is impossible — every form of inter-process communication depends on it.
    - The quality of connectivity (measured as latency, jitter, packet loss, and throughput) directly determines what distributed applications are feasible at a given location or tier.
    - Connectivity is increasingly heterogeneous: a single workflow may traverse fibre optic backbone links, wireless last-mile links, and low-power radio (LoRa, Zigbee) within the same data path.
  - How it works:
    - Data is broken into packets at the sender, routed hop-by-hop across a network graph using [[Routing Protocol]] decisions (BGP, OSPF, IS-IS), and reassembled at the destination.
    - The [[Physical Layer]] carries signals; the link layer provides framing and error detection; the network layer handles addressing via [[IP Addressing]] and [[DNS]]; and the transport layer ([[TCP]], UDP, QUIC) provides ordered, reliable, or datagram delivery.
    - Control-plane protocols maintain routing tables dynamically, adapting to topology changes, link failures, and traffic conditions.

- ### Key Components
  - **Physical Layer**
    - Transmission media: copper (Ethernet Cat6/Cat8), fibre optic (single-mode, multi-mode), and wireless (Wi-Fi 6E, 5G NR, satellite).
    - Signal encoding, modulation, and error correction at the bit level.
    - See [[Physical Layer]], [[Wireless Communication]].
  - **Data Link Layer**
    - Framing, MAC addressing, and collision avoidance (CSMA/CD, CSMA/CA).
    - Standards: [[IEEE 802]] (Ethernet 802.3, Wi-Fi 802.11, Bluetooth 802.15).
    - Switches and bridges operate at this layer, creating [[Local Area Network]] segments.
  - **Network Layer**
    - [[IP Addressing]] (IPv4, IPv6) and [[Routing Protocol]] (BGP, OSPF, IS-IS, EIGRP).
    - Routers forward packets between subnets and autonomous systems.
    - [[Network Address Translation]] (NAT) mediates between private and public address spaces.
  - **Transport Layer**
    - [[TCP]] provides reliable, ordered, connection-oriented delivery with congestion control (CUBIC, BBR).
    - [[UDP]] provides lightweight datagram delivery for latency-sensitive applications.
    - [[QUIC]] (HTTP/3) combines multiplexing and encryption with reduced handshake overhead.
  - **Addressing and Discovery**
    - [[DNS]] translates human-readable names to IP addresses and is a critical dependency for almost all internet services.
    - [[DHCP]] dynamically assigns IP addresses within a network segment.
    - [[mDNS]] and [[Zero-Configuration Networking]] enable local discovery without a centralised server.
  - **Quality Metrics**
    - [[Latency]]: round-trip time between sender and receiver, often dominated by propagation delay at intercontinental distances.
    - [[Bandwidth]]: maximum data rate over a link, constrained by medium capacity.
    - Jitter: variance in packet arrival times, critical for [[Real-Time Communication]].
    - Packet loss: ratio of dropped packets, causing retransmissions in TCP and artefacts in UDP-based media.
    - [[Quality of Service]] (QoS) mechanisms prioritise traffic classes to meet service-level objectives.

- ### Mechanisms and Architectures
  - **Circuit-Switched vs Packet-Switched Networks**
    - Circuit switching (legacy telephony) allocates dedicated capacity per connection; packet switching (IP networks) dynamically shares capacity across flows, enabling greater statistical multiplexing.
  - **Software-Defined Networking (SDN)**
    - [[Software-Defined Networking]] decouples the control plane from the data plane, allowing programmable, centralised network management via controllers (OpenFlow, P4).
    - Enables dynamic traffic engineering, rapid reconfiguration, and policy-driven routing.
  - **Network Virtualisation**
    - Virtual LANs (VLANs), Virtual Extensible LAN ([[VXLAN]]), and [[MPLS]] tunnels create logical network overlays over physical infrastructure.
    - [[Network Function Virtualisation]] (NFV) moves firewall, load balancer, and NAT functions from dedicated appliances to software running on commodity hardware.
  - **Content Delivery Networks**
    - [[Content Delivery Network]] (CDN) architectures exploit distributed Points of Presence (PoPs) to cache content close to end users, reducing latency and origin load.
  - **Multipath and Redundant Connectivity**
    - [[Link Aggregation]] (LACP/802.3ad) bonds multiple physical links for higher throughput and failover.
    - Equal-Cost Multi-Path (ECMP) routing spreads traffic across redundant paths.
    - Anycast addressing routes clients to the topologically nearest instance of a service.

- ### Applications and Use Cases
  - **Hyperscale Data Centres**
    - Cloud providers (AWS, Azure, GCP) build leaf-spine fabrics with hundreds of thousands of ports, requiring 400 Gbit/s and 800 Gbit/s links and automated [[Network Topology]] management.
  - **5G and Mobile Edge Computing**
    - [[5G]] connectivity delivers sub-10 ms latency to mobile devices and enables [[Edge Computing]] workloads to run in the Radio Access Network (RAN), supporting autonomous vehicles and industrial automation.
  - **Industrial IoT and OT Networks**
    - Sensors, PLCs, and edge gateways connect via constrained protocols ([[MQTT]], [[OPC UA]], LoRaWAN) to cloud analytics. [[Network Reliability]] and deterministic latency (TSN, Time-Sensitive Networking) are critical for safety-critical systems.
  - **Blockchain and Distributed Ledger**
    - [[Consensus Protocol]] operation depends entirely on network connectivity. Bitcoin and Ethereum peer discovery uses [[DNS]] seeds and [[Distributed Hash Table]] (Kademlia DHT) to maintain overlays. Network partitions can cause chain splits and delayed finality.
    - [[Peer-to-Peer Network]] gossip protocols propagate unconfirmed transactions and blocks.
  - **Federated AI and Distributed Machine Learning**
    - [[Federated Learning]] trains models across geographically dispersed nodes without centralising raw data. Network connectivity quality determines gradient synchronisation round-trip time and ultimately model convergence speed.
  - **Spatial Computing and XR**
    - [[Spatial Computing]] applications (AR/VR head-mounted displays, mixed reality) require high-bandwidth, low-latency links for cloud rendering, scene synchronisation, and multi-user shared spaces. Wi-Fi 6E and 5G mmWave are the primary enablers.
  - **Collaborative Applications**
    - [[Real-Time Communication]] platforms (WebRTC, SIP/RTP) rely on UDP and ICE/STUN/TURN traversal to establish peer connections across NATs and firewalls.
    - [[Distributed Collaboration]] tools synchronise state via Conflict-free Replicated Data Types (CRDTs) over eventually-consistent network layers.

- ### Relationships
  - hasPart:: [[Network Protocol]]
  - hasPart:: [[Network Topology]]
  - hasPart:: [[Routing Protocol]]
  - hasPart:: [[Physical Layer]]
  - requires:: [[IP Addressing]]
  - requires:: [[DNS]]
  - requires:: [[Network Interface]]
  - enables:: [[Peer-to-Peer Network]]
  - enables:: [[Edge Computing]]
  - enables:: [[Cloud Computing]]
  - enables:: [[Distributed Systems]]
  - enables:: [[Real-Time Communication]]
  - dependsOn:: [[Bandwidth]]
  - dependsOn:: [[Latency]]
  - dependsOn:: [[Network Reliability]]
  - supports:: [[Internet of Things]]
  - supports:: [[Software-Defined Networking]]
  - supports:: [[Content Delivery Network]]
  - standardizedBy:: [[IEEE 802]]
  - standardizedBy:: [[IETF RFC]]
  - contrastsWith:: [[Network Isolation]]
  - contrastsWith:: [[Air Gap]]
  - bridges-to:: [[Consensus Protocol]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Spatial Computing]]
  - relatedTo:: [[Network Security]]
  - relatedTo:: [[Quality of Service]]

- ### Standards and Context
  - **IEEE 802 Family**
    - 802.3 (Ethernet), 802.11 (Wi-Fi through Wi-Fi 7/802.11be), 802.1Q (VLANs), 802.3ad (Link Aggregation), 802.1AE (MACsec encryption at Layer 2).
    - [[IEEE 802]] standards are the bedrock of wired and wireless LAN connectivity worldwide.
  - **IETF Standards**
    - RFC 791 (IPv4), RFC 2460 (IPv6), RFC 793 (TCP), RFC 768 (UDP), RFC 9000 (QUIC).
    - [[IETF RFC]] documents specify routing protocols (BGP RFC 4271, OSPF RFC 5340) and transport protocols that form the internet's control and data planes.
  - **3GPP (Cellular)**
    - 3GPP Release 15–18 define LTE and [[5G]] NR air interfaces, core network architecture (5GC), and network slicing capabilities.
  - **ITU-T**
    - ITU-T G-series recommendations govern optical transport (G.709 OTN, G.654 ultra-low-loss fibre).
  - **Open Networking Foundation (ONF)**
    - Governs [[Software-Defined Networking]] standards including OpenFlow and Stratum.
  - **Regulatory Context**
    - Net neutrality regulations in various jurisdictions constrain how ISPs may prioritise or throttle traffic, affecting connectivity quality for different application classes.
    - [[Network Security]] regulations (NIS2 in the EU, NERC CIP for critical infrastructure) impose baseline connectivity resilience and monitoring requirements.

- ### Provenance
  - sources:: IEEE 802 standard family; IETF RFC corpus (791, 793, 2460, 4271, 5340, 9000); 3GPP Release 15–18 specifications; ONF OpenFlow specification
  - updated:: 2026-06-13
