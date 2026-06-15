public:: true

# time synchronisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:72e8acf107890f1823f678be03eadcd539f58e0f4d26f198bfd69018c7ba4a56",
  "@type": "Page",
  "vc:slug": "time-synchronisation",
  "title": "time synchronisation",
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
  "@id": "urn:ngm:class:time-synchronisation",
  "@type": "Class",
  "label": "Time Synchronisation",
  "definition": "Time synchronisation is the process of coordinating the clocks of networked devices to a shared reference time so that distributed computations, transactions, events, and audit logs share a consistent and ordered temporal frame. It is realised through layered protocols including the Network Time Protocol (NTP / RFC 5905), which delivers millisecond-level accuracy over wide-area networks via a stratum hierarchy anchored to atomic or GPS reference clocks, and the Precision Time Protocol (PTP / IEEE 1588-2019), which exploits hardware timestamping in network interface cards and PTP-aware switches to achieve sub-microsecond accuracy on local and carrier-grade networks. Accurate time synchronisation is foundational to distributed consensus algorithms, cryptographic certificate validation, financial transaction sequencing, telecommunications frequency synchronisation, and industrial real-time control; conversely, clock skew and drift are root causes of ordering anomalies, replay attacks, split-brain conditions, and regulatory non-compliance.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-protocol",
      "label": "Network Protocol"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:network-time-protocol",
        "label": "Network Time Protocol"
      },
      {
        "@id": "urn:ngm:class:precision-time-protocol",
        "label": "Precision Time Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:consensus-protocol",
        "label": "Consensus Protocol"
      },
      {
        "@id": "urn:ngm:class:distributed-system",
        "label": "Distributed System"
      },
      {
        "@id": "urn:ngm:class:digital-certificate",
        "label": "Digital Certificate"
      },
      {
        "@id": "urn:ngm:class:audit-logging",
        "label": "Audit Logging"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:real-time-system",
        "label": "Real-Time System"
      },
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "IndustrialAutomation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      },
      {
        "@id": "urn:ngm:class:timestamp",
        "label": "Timestamp"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:logical-clock",
        "label": "Logical Clock"
      },
      {
        "@id": "urn:ngm:class:vector-clock",
        "label": "Vector Clock"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      },
      {
        "@id": "urn:ngm:class:itu-t",
        "label": "ITU-T"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-synchronization",
        "label": "Network Synchronization"
      },
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cryptographic-protocol",
        "label": "Cryptographic Protocol"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:clock-synchronisation",
      "label": "Clock Synchronisation"
    },
    {
      "@id": "urn:ngm:class:network-time-synchronization",
      "label": "Network Time Synchronization"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Time synchronisation is the process of coordinating the internal clocks of networked devices to a shared authoritative reference so that all nodes in a [[Distributed System]] observe a consistent and mutually ordered temporal frame. It underpins the correctness of [[Consensus Protocol]] mechanisms, the validity of [[Digital Certificate]] lifetimes, the reliable sequencing of distributed [[Audit Logging]] records, and the integrity of [[Event Ordering]] in financial and operational systems. The primary realisation protocols — [[Network Time Protocol]] (NTP, RFC 5905) and [[Precision Time Protocol]] (PTP, IEEE 1588) — differ in achievable accuracy and deployment model, with NTP serving wide-area internet clients and PTP targeting sub-microsecond precision in carrier, industrial, and data-centre networks.

- ### Overview
  - Clock agreement across networked nodes is a prerequisite for ordering events without relying solely on message-passing causality. Without a common time base, distributed systems must fall back on purely logical ordering mechanisms such as [[Logical Clock]] (Lamport timestamps) or [[Vector Clock]] approaches, which carry higher coordination overhead and cannot express wall-clock deadlines.
  - Time synchronisation is classified as a **mature** field: NTP has been continuously deployed since the 1980s, PTP since 2002, and both are embedded in every major operating system, network switch vendor's firmware, and cloud provider's infrastructure stack.
  - The dual goals of synchronisation are **accuracy** (closeness to absolute UTC) and **stability** (low jitter and drift rate between correction cycles). Both dimensions affect correctness in different ways: accuracy matters for certificate expiry and regulatory timestamping; stability matters for real-time control loops and high-frequency trading.
  - Clock errors fall into two categories: **offset** (instantaneous difference from reference) and **drift** (gradual divergence caused by crystal oscillator imperfections, temperature, and ageing). Synchronisation protocols measure round-trip delay, estimate offset, and issue correction steps or frequency adjustments (slewing) to discipline the local clock.

- ### Key Mechanisms
  - **[[Network Time Protocol]] (NTP / RFC 5905)**
    - Client-server and symmetric peer modes; operates over UDP port 123.
    - Stratum model: stratum-0 = atomic/GPS reference; stratum-1 = primary NTP servers; stratum-2+ = downstream clients.
    - Four timestamps per exchange (T1–T4) allow offset and round-trip delay estimation even under asymmetric network paths.
    - Typical accuracy: 1–50 ms on the internet, sub-millisecond on LAN.
    - Authentication via NTP symmetric keys or NTS (Network Time Security, RFC 8915) using TLS/AEAD.
  - **[[Precision Time Protocol]] (PTP / IEEE 1588-2019)**
    - Master-slave hierarchy with Announce, Sync, Follow-Up, and Delay-Request message exchanges.
    - Hardware timestamping at the NIC eliminates software stack jitter; PTP-aware boundary clocks and transparent clocks in switches further reduce path delay uncertainty.
    - Profiles: IEEE 1588 default; ITU-T G.8275.1 (telecom full-timing-support); G.8275.2 (partial-timing-support); IEC 61850-9-3 (power utilities); SMPTE ST 2059 (broadcast).
    - Typical accuracy: 10–100 nanoseconds on a PTP-aware switched LAN.
  - **GPS-Disciplined Oscillators (GPSDO)**
    - A GPS receiver decodes satellite signals carrying UTC time from onboard atomic clocks; the 1PPS (pulse-per-second) output disciplines a local oscillator to sub-microsecond accuracy.
    - Used as stratum-0 reference for both NTP and PTP deployments; provides holdover accuracy during GPS signal outages via the local oscillator.
  - **White Rabbit Protocol**
    - Extends PTP with sub-nanosecond accuracy using fibre-optic links and synchronous Ethernet; deployed at CERN and large physics facilities.
  - **Cristian's Algorithm and Berkeley Algorithm**
    - Classic academic protocols foundational to understanding offset estimation and averaging-based synchronisation respectively.
  - **Clock Discipline (Feedback Loop)**
    - Operating-system PLL/FLL (Phase-Locked Loop / Frequency-Locked Loop) applies frequency correction (adjtime / adjtimex) rather than abrupt jumps, preventing log timestamp inversions and filesystem corruption.

- ### Applications and Use Cases
  - **[[Distributed Ledger]] and [[Blockchain]] Systems**
    - Bitcoin and most proof-of-work chains use NTP to guard the median time rule that prevents timestamp manipulation in block headers.
    - Proof-of-stake systems with time-bound voting windows (e.g., Ethereum post-Merge attestation deadlines) require tighter synchronisation guarantees.
    - Hyperledger Fabric and permissioned ledgers mandate NTP configuration as an operational prerequisite.
  - **[[Financial Trading Infrastructure]]**
    - MiFID II (EU) and SEC Rule 17a-5 (US) mandate microsecond-level timestamping of trade events; PTP is the standard solution.
    - Low-latency trading venues use GPS-disciplined PTP grandmasters with hardware timestamping NICs.
  - **Telecommunications**
    - 4G LTE and 5G NR require frequency and phase synchronisation across base stations (eNB, gNB) to within ±1.5 µs for TDD operation; ITU-T G.8275.1 PTP profile is the primary mechanism.
    - Synchronous Ethernet (SyncE) propagates frequency (not phase) synchronisation through the physical layer independently of packet-based PTP.
  - **[[Industrial Automation]] and Power Grids**
    - IEC 61850 substation automation uses PTP IEC 61850-9-3 profile for GOOSE and sampled values with sub-millisecond accuracy.
    - Protection relay co-ordination depends on time-stamped fault events to localise faults within milliseconds.
  - **[[Real-Time System]] and Robotics**
    - Robot Operating System (ROS 2) relies on synchronised clocks for sensor fusion, trajectory planning, and multi-robot co-ordination.
    - EtherCAT and PROFINET IRT use distributed clock synchronisation derived from PTP principles.
  - **Cloud and Data Centre**
    - AWS Time Sync Service exposes a local NTP endpoint at 169.254.169.123; Google uses Spanner's TrueTime (GPS + atomic clock ensemble with bounded uncertainty intervals) for globally consistent distributed transactions.
    - Azure uses Precision Time Protocol within data centres; Alibaba Cloud and others follow similar patterns.
  - **[[Edge Computing]] and IoT**
    - Intermittent connectivity forces edge devices to maintain holdover accuracy during outages using local oscillators with known drift specifications.
    - GNSS-denied environments (underground, indoors) require alternative references: PTP over fibre, 5G timing signals, or eLoran.
  - **Cybersecurity**
    - TLS certificate validation, OCSP responses, and DNSSEC signature windows all require accurate wall-clock time; an attacker who shifts a client's clock can bypass certificate expiry checks or replay stale tokens.
    - Kerberos authentication tickets have a default 5-minute clock-skew tolerance; exceeded skew causes authentication failures.
    - NTP amplification attacks exploit monlist queries; modern deployments restrict or disable this.

- ### Relationships
  - hasPart:: [[Network Time Protocol]]
  - hasPart:: [[Precision Time Protocol]]
  - hasPart:: [[Clock Drift]]
  - hasPart:: [[Stratum Hierarchy]]
  - requires:: [[Reference Clock]]
  - requires:: [[GPS Receiver]]
  - requires:: [[Atomic Clock]]
  - requires:: [[Network Protocol]]
  - enables:: [[Consensus Protocol]]
  - enables:: [[Distributed System]]
  - enables:: [[Event Ordering]]
  - enables:: [[Digital Certificate]]
  - enables:: [[Audit Logging]]
  - supports:: [[Blockchain]]
  - supports:: [[Real-Time System]]
  - supports:: [[Financial Trading Infrastructure]]
  - supports:: [[Industrial Automation]]
  - dependsOn:: [[Network Infrastructure]]
  - dependsOn:: [[Timestamp]]
  - contrastsWith:: [[Logical Clock]]
  - contrastsWith:: [[Vector Clock]]
  - standardizedBy:: [[IETF]]
  - standardizedBy:: [[IEEE]]
  - standardizedBy:: [[ITU-T]]
  - relatedTo:: [[Network Synchronization]]
  - relatedTo:: [[Clock Skew]]
  - relatedTo:: [[Latency]]
  - relatedTo:: [[Distributed Ledger]]
  - relatedTo:: [[Edge Computing]]
  - bridges-to:: [[Cryptographic Protocol]]
  - bridges-to:: [[IoT Device Management]]

- ### Standards and Context
  - **RFC 5905** — NTPv4 specification (IETF, 2010); supersedes RFC 1305 (NTPv3).
  - **RFC 8915** — Network Time Security (NTS) for NTP, providing authenticated time using TLS 1.3 handshake and AEAD-encrypted cookie mechanism.
  - **IEEE 1588-2019** — Precision Clock Synchronization Protocol for Networked Measurement and Control Systems (PTP v2.1); second revision of the 2002 original.
  - **ITU-T G.8271 / G.8273 / G.8275** — Telecom phase-synchronisation accuracy and PTP profile family for packet networks.
  - **IEC 61850-9-3** — Communication networks and systems for power utility automation: precision time protocol profile for power industry.
  - **SMPTE ST 2059-2** — SMPTE profile of IEEE 1588 for broadcast media systems.
  - **ISO/IEC 27001** and **PCI DSS** — require accurate audit-log timestamping, implicitly mandating time synchronisation in compliant deployments.
  - **MiFID II RTS 25** — European regulation mandating clock synchronisation to UTC within 1 ms gateway-to-UTC for trading venues and systematic internalisers.
  - Standards bodies: [[IETF]], [[IEEE]], [[ITU-T]], [[IEC]], BIPM (Bureau International des Poids et Mesures, keeper of UTC).

- ### Semantic Classification
  - owl-class:: time-synchronisation:Time Synchronisation
  - owl-role:: Concept

- ### Provenance
  - sources:: RFC 5905 (NTPv4), IEEE 1588-2019, ITU-T G.8275, RFC 8915, MiFID II RTS 25
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
