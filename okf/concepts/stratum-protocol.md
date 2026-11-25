---
okf_version: "0.2"
type: Class
title: Stratum Protocol
resource: urn:ngm:class:stratum-protocol
domain: blockchain
description: The Stratum Protocol is a lightweight, JSON-based line protocol used to coordinate work between cryptocurrency mining pools and individual miners. The pool server distributes block templates and difficulty targets to connected mining clients, which return valid share submissions, allowing aggregated hashing power to be measured and rewarded. Stratum reduces bandwidth and latency compared with earl
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:mining-pool
requires:
  - urn:ngm:class:mining-pool
  - urn:ngm:class:proof-of-work
enables:
  - urn:ngm:class:mining-hardware
dependsOn:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:latency
bridgesTo:
  - urn:ngm:class:bandwidth
uses:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:web-socket
supports:
  - urn:ngm:class:mining-pool
partOf:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:mining-hardware
  - urn:ngm:class:cryptocurrency
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Stratum Protocol

The Stratum Protocol is a lightweight, JSON-based line protocol used to coordinate work between cryptocurrency mining pools and individual miners. The pool server distributes block templates and difficulty targets to connected mining clients, which return valid share submissions, allowing aggregated hashing power to be measured and rewarded. Stratum reduces bandwidth and latency compared with earlier polling schemes and remains the dominant pool communication standard for proof-of-work coins.
