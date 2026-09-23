---
okf_version: "0.2"
type: Class
title: Time Synchronisation
resource: urn:ngm:class:time-synchronisation
domain: infrastructure
description: Time synchronisation is the process of coordinating the clocks of networked devices to a shared reference time so that distributed computations, transactions, events, and audit logs share a consistent and ordered temporal frame. It is realised through layered protocols including the Network Time Protocol (NTP / RFC 5905), which delivers millisecond-level accuracy over wide-area networks via a stra
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:network-protocol
hasPart:
  - urn:ngm:class:network-time-protocol
  - urn:ngm:class:precision-time-protocol
  - urn:ngm:class:clock-drift
  - urn:ngm:class:stratum-hierarchy
requires:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:reference-clock
  - urn:ngm:class:gps-receiver
  - urn:ngm:class:atomic-clock
enables:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:distributed-system
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:audit-logging
  - urn:ngm:class:event-ordering
dependsOn:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:timestamp
contrastsWith:
  - urn:ngm:class:logical-clock
  - urn:ngm:class:vector-clock
bridgesTo:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:iot-device-management
supports:
  - urn:ngm:class:blockchain
  - urn:ngm:class:real-time
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:real-time
  - urn:ngm:class:financial-trading-infrastructure
  - urn:ngm:class:industrial-automation
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:ieee
  - urn:ngm:class:itu-t
relatedTo:
  - urn:ngm:class:network-synchronization
  - urn:ngm:class:latency
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:edge-computing
  - urn:ngm:class:clock-skew
---

# Time Synchronisation

Time synchronisation is the process of coordinating the clocks of networked devices to a shared reference time so that distributed computations, transactions, events, and audit logs share a consistent and ordered temporal frame. It is realised through layered protocols including the Network Time Protocol (NTP / RFC 5905), which delivers millisecond-level accuracy over wide-area networks via a stratum hierarchy anchored to atomic or GPS reference clocks, and the Precision Time Protocol (PTP / IEEE 1588-2019), which exploits hardware timestamping in network interface cards and PTP-aware switches to achieve sub-microsecond accuracy on local and carrier-grade networks. Accurate time synchronisation is foundational to distributed consensus algorithms, cryptographic certificate validation, financial transaction sequencing, telecommunications frequency synchronisation, and industrial real-time control; conversely, clock skew and drift are root causes of ordering anomalies, replay attacks, split-brain conditions, and regulatory non-compliance.
