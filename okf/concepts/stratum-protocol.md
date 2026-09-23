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
---

# Stratum Protocol

The Stratum Protocol is a lightweight, JSON-based line protocol used to coordinate work between cryptocurrency mining pools and individual miners. The pool server distributes block templates and difficulty targets to connected mining clients, which return valid share submissions, allowing aggregated hashing power to be measured and rewarded. Stratum reduces bandwidth and latency compared with earlier polling schemes and remains the dominant pool communication standard for proof-of-work coins.
