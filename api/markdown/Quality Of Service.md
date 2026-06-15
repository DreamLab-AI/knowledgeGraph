public:: true
alias:: QualityOfService

# Quality Of Service
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:14d34975efa9f2b7459e5a2b3eed4ae3ca784d4ee2af472367610bdb73545fd5",
  "@type": "Page",
  "vc:slug": "quality-of-service",
  "title": "Quality Of Service",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9209"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Quality Of Service"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:quality-of-service",
  "@type": "Class",
  "label": "Quality Of Service",
  "definition": "Quality of Service (QoS) is a set of network management techniques, policies, and protocols that prioritise, shape, and guarantee specified performance characteristics—including latency, jitter, throughput, and packet loss—for distinct traffic classes traversing shared network infrastructure. QoS mechanisms operate at multiple OSI layers, using traffic classification, queuing disciplines, scheduling algorithms, and admission control to meet differentiated service-level objectives. In real-time systems such as XR, telepresence, and cloud-native distributed applications, QoS is essential for maintaining acceptable user experience under variable load. Standardised frameworks including IntServ, DiffServ, and IEEE 802.1p provide interoperable models for end-to-end QoS across heterogeneous networks.",
  "domain": "infrastructure",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-infrastructure",
      "label": "Network Infrastructure"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:qos",
      "label": "QoS"
    },
    {
      "@id": "urn:ngm:class:network-traffic-management",
      "label": "Network Traffic Management"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  },
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
    "enables": [
      {
        "@id": "urn:ngm:class:real-time",
        "label": "Real Time"
      },
      {
        "@id": "urn:ngm:class:telecollaboration",
        "label": "Telecollaboration"
      },
      {
        "@id": "urn:ngm:class:low-latency-networking",
        "label": "Low-Latency Networking"
      },
      {
        "@id": "urn:ngm:class:service-level-agreement",
        "label": "Service Level Agreement"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:packet-switching",
        "label": "Packet Switching"
      },
      {
        "@id": "urn:ngm:class:routing-protocol",
        "label": "Routing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:traffic-shaping",
        "label": "Traffic Shaping"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:voice-over-ip",
        "label": "Voice over IP"
      },
      {
        "@id": "urn:ngm:class:video-streaming",
        "label": "Video Streaming"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:ieee-802-x",
        "label": "IEEE 802.1"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:bandwidth-adaptation",
        "label": "Bandwidth Adaptation"
      },
      {
        "@id": "urn:ngm:class:network-congestion",
        "label": "Network Congestion"
      },
      {
        "@id": "urn:ngm:class:jitter",
        "label": "Jitter"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:quality-of-service:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:14d34975efa9f2b7459e5a2b3eed4ae3ca784d4ee2af472367610bdb73545fd5"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Quality of Service (QoS) is the set of network management techniques, policies, and protocols used to prioritise, shape, and guarantee specific performance characteristics for different classes of [[Network Traffic]] traversing shared [[Network Infrastructure]]. Core performance metrics managed by QoS include [[Latency]], [[Jitter]], [[Throughput]], and [[Packet Loss]], each of which has direct impact on the perceived quality of real-time applications. QoS mechanisms span multiple layers of the [[OSI Model]], from link-layer frame prioritisation through to application-layer signalling, enabling end-to-end differentiated treatment of flows. Without QoS, shared networks deliver [[Best-Effort Delivery]] with no guarantees, making it unsuitable for latency-sensitive workloads such as [[Voice over IP]], [[Video Streaming]], and [[Extended Reality]].

- ### Overview
  - QoS emerged as a response to the convergence of heterogeneous traffic types—voice, video, interactive data, and bulk transfers—over shared packet-switched networks initially designed for best-effort email and file transfer.
  - The central problem QoS addresses is [[Network Congestion]]: when aggregate demand exceeds link capacity, routers and switches must decide which packets to forward, delay, or discard. Without deliberate policy, this decision is arbitrary and penalises latency-sensitive flows equally with bulk transfers.
  - QoS solves this by classifying traffic into service classes, marking packets accordingly, and applying differentiated forwarding behaviours at each network node.
  - The IETF produced two canonical QoS architectures:
    - **IntServ** ([[Integrated Services]]): per-flow reservation using [[RSVP]] signalling; provides hard guarantees but scales poorly.
    - **DiffServ** ([[Differentiated Services]]): aggregate class-based marking using the DSCP field in the IP header; scales to internet-wide deployment.
  - At the Ethernet layer, [[IEEE 802.1p]] (part of [[IEEE 802.1Q]] VLAN tagging) provides 3-bit Class of Service (CoS) marking for LAN prioritisation.
  - Modern [[Software-Defined Networking]] architectures implement QoS policies programmatically via controllers, decoupling policy from the data plane.

- ### Key Mechanisms
  - **Traffic Classification**
    - The first step in any QoS pipeline; packets are classified by source/destination addresses, ports, DSCP markings, VLAN tags, or deep packet inspection ([[Deep Packet Inspection]]).
    - Classification determines which service class a flow belongs to and what treatment it receives downstream.
  - **Traffic Marking**
    - Packets are marked at ingress with DSCP codepoints (DiffServ) or IEEE 802.1p CoS values to carry the service-class signal across the network.
    - [[DSCP]] (Differentiated Services Code Point): a 6-bit field in the IPv4/IPv6 header, defining up to 64 per-hop behaviours.
    - Expedited Forwarding (EF) per-hop behaviour is typically assigned to voice and interactive video requiring strict low [[Latency]] and [[Jitter]].
  - **Traffic Shaping and Policing**
    - [[Traffic Shaping]] smooths bursty flows to conform to an agreed token-bucket or leaky-bucket rate, delaying excess packets rather than dropping them.
    - Traffic policing enforces rate limits by dropping or re-marking out-of-profile packets at ingress.
  - **Queuing Disciplines** ([[Queuing Discipline]])
    - Multiple output queues per interface serve different traffic classes with different scheduling priorities.
    - Common schedulers: Priority Queuing (PQ), Weighted Fair Queuing (WFQ), Class-Based WFQ (CBWFQ), Low-Latency Queuing (LLQ).
    - LLQ combines a strict-priority queue for real-time traffic with CBWFQ for remaining classes, preventing starvation of bulk traffic while protecting voice/video.
  - **Congestion Avoidance**
    - Active Queue Management (AQM) techniques such as [[Random Early Detection]] (RED) and its weighted variant (WRED) proactively drop packets before queues fill, signalling congestion to TCP senders and reducing synchronised retransmits.
  - **Admission Control** ([[Admission Control]])
    - Prevents new flows from entering the network unless sufficient resources exist to meet their QoS requirements; used in IntServ/RSVP and in session-border controllers for VoIP.
  - **Bandwidth Reservation and Allocation**
    - [[Bandwidth Adaptation]] and explicit bandwidth allocation ensure that critical flows receive guaranteed minimum throughput even under load.
  - **RSVP (Resource Reservation Protocol)**
    - A signalling protocol allowing applications to request bandwidth and latency guarantees from [[Routing]] infrastructure; foundational to IntServ but now less common at internet scale.

- ### Applications and Use Cases
  - **Voice over IP ([[Voice over IP]])**
    - VoIP codecs (G.711, G.729, Opus) require low latency (<150 ms end-to-end), low jitter (<30 ms), and minimal packet loss (<1%) for acceptable call quality. QoS with EF DSCP and LLQ is standard practice in enterprise telephony deployments.
  - **Video Conferencing and Telecollaboration ([[Telecollaboration]])**
    - Multi-party video requires guaranteed bandwidth alongside latency and jitter control. Platforms such as WebRTC implement application-layer adaptive bitrate alongside network-layer QoS where available.
  - **Extended Reality and Immersive Media ([[Extended Reality]])**
    - XR applications are acutely sensitive to motion-to-photon latency and packet loss, which cause cybersickness. Edge-to-headset QoS pipelines are an active research and deployment area, particularly for wireless XR over Wi-Fi 6/6E and 5G.
  - **Cloud Gaming**
    - Interactive game streams require sub-50 ms round-trip latency and predictable jitter to avoid degraded gameplay. Cloud providers and CDNs implement QoS at peering points to prioritise gaming traffic.
  - **Industrial IoT and Robotics ([[Robotics]])**
    - Time-sensitive industrial control loops (IEC 61784, TSN) depend on deterministic sub-millisecond delivery. IEEE Time-Sensitive Networking ([[Time-Sensitive Networking]]) extends 802.1 QoS with scheduled traffic and pre-emption for industrial Ethernet.
  - **5G Network Slicing**
    - [[5G]] network slicing creates logically isolated virtual networks with dedicated QoS policies for different verticals (eMBB, URLLC, mMTC), each with distinct latency and throughput SLAs.
  - **Content Delivery Networks**
    - CDNs use QoS at PoP ingress to prioritise live-streaming ingest and origin-pull traffic, maintaining quality during demand spikes.
  - **Software-Defined WAN ([[Software-Defined Networking]])**
    - SD-WAN appliances apply application-aware QoS policies across hybrid WAN links (MPLS, broadband, LTE), dynamically selecting the best path per application class.

- ### Relationships
  - requires:: [[Network Infrastructure]]
  - requires:: [[Network Protocol]]
  - requires:: [[Traffic Classification]]
  - enables:: [[Real Time]]
  - enables:: [[Telecollaboration]]
  - enables:: [[Low-Latency Networking]]
  - enables:: [[Service Level Agreement]]
  - dependsOn:: [[Packet Switching]]
  - dependsOn:: [[Routing]]
  - implements:: [[Differentiated Services]]
  - implements:: [[Integrated Services]]
  - uses:: [[Traffic Shaping]]
  - uses:: [[Queuing Discipline]]
  - uses:: [[Admission Control]]
  - supports:: [[Voice over IP]]
  - supports:: [[Video Streaming]]
  - supports:: [[Cloud Computing]]
  - standardizedBy:: [[IETF]]
  - standardizedBy:: [[IEEE 802.1]]
  - contrastsWith:: [[Best-Effort Delivery]]
  - relatedTo:: [[Latency]]
  - relatedTo:: [[Bandwidth Adaptation]]
  - relatedTo:: [[Network Congestion]]
  - relatedTo:: [[Jitter]]
  - bridges-to:: [[Extended Reality]]
  - bridges-to:: [[Edge Computing]]

- ### Standards and Context
  - **IETF RFC 2475** — DiffServ architecture, defining per-hop behaviours and the DSCP codepoint structure.
  - **IETF RFC 2205** — RSVP specification for resource reservation in IntServ.
  - **IETF RFC 3246** — Expedited Forwarding (EF) PHB, the primary DiffServ behaviour for latency-critical traffic.
  - **IEEE 802.1p** (incorporated into IEEE 802.1Q) — 3-bit Class of Service field for Ethernet frames, supporting 8 priority levels.
  - **IEEE 802.1Qbv / Time-Sensitive Networking** — extends 802.1 with time-aware shaping for deterministic industrial Ethernet; standardised under the IEEE 802.1 TSN task group.
  - **3GPP 5G QoS Framework** — defines QoS Flow Identifiers (QFI), 5QI values, and network slicing to support URLLC (Ultra-Reliable Low-Latency Communications) and eMBB slices.
  - **MEF (Metro Ethernet Forum)** — defines carrier Ethernet service attributes including CoS performance objectives (latency, jitter, frame loss) used in SLA contracts.
  - **MPLS Traffic Engineering** — uses constrained shortest-path first (CSPF) and RSVP-TE to route traffic along paths that satisfy bandwidth and latency constraints.
  - **ITU-T Y.1540 / Y.1541** — define IP performance parameters and objectives for international PSTN/IP interconnect, underpinning global QoS SLAs.
  - Governance bodies: [[IETF]], [[IEEE]], [[3GPP]], ITU-T, MEF.

- ### Provenance
  - sources:: IETF RFC 2475 (DiffServ); IETF RFC 2205 (RSVP); IETF RFC 3246 (EF PHB); IEEE 802.1Q/p; 3GPP TS 23.501 (5G QoS); ITU-T Y.1541
  - updated:: 2026-06-13
  - owl-class:: infrastructure:QualityOfService
  - owl-role:: Concept
