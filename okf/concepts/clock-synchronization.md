---
okf_version: "0.2"
type: Class
title: Clock Synchronization
resource: urn:ngm:class:clock-synchronization
domain: infrastructure
description: Clock Synchronization is the process of coordinating the time references of distributed computing nodes or electronic systems so that they share a consistent and accurate notion of time, enabling correct ordering of events, coordinated actions, and time-stamped record-keeping. Protocols such as NTP (Network Time Protocol) and PTP (Precision Time Protocol, IEEE 1588) achieve synchronization by exch
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:network-synchronization
enables:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:time-sensitive-networking
uses:
  - urn:ngm:class:timestamp
  - urn:ngm:class:synchronization-protocol
relatedTo:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:latency
  - urn:ngm:class:timestamp-service
---

# Clock Synchronization

Clock Synchronization is the process of coordinating the time references of distributed computing nodes or electronic systems so that they share a consistent and accurate notion of time, enabling correct ordering of events, coordinated actions, and time-stamped record-keeping. Protocols such as NTP (Network Time Protocol) and PTP (Precision Time Protocol, IEEE 1588) achieve synchronization by exchanging timestamped messages and compensating for network propagation delays. Accurate clock synchronization is critical for distributed databases, consensus algorithms, telecommunications, industrial control systems, and financial transaction ordering.
