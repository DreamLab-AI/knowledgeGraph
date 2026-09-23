---
okf_version: "0.2"
type: Class
title: Stratum V2
resource: urn:ngm:class:stratum-v2
domain: blockchain
description: "Stratum V2 is the second-generation protocol for communication between Bitcoin miners and mining pools, redesigned to improve efficiency, security, and decentralisation over the original Stratum. Its headline feature is Job Declaration, which lets individual miners construct their own block templates and choose which transactions to include rather than blindly mining the pool operator's template, "
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:censorship-resistance
uses:
  - urn:ngm:class:mining-pool
  - urn:ngm:class:proof-of-work
relatedTo:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
---

# Stratum V2

Stratum V2 is the second-generation protocol for communication between Bitcoin miners and mining pools, redesigned to improve efficiency, security, and decentralisation over the original Stratum. Its headline feature is Job Declaration, which lets individual miners construct their own block templates and choose which transactions to include rather than blindly mining the pool operator's template, redistributing transaction-selection power. It also adds end-to-end encryption, binary framing for lower bandwidth, and reduced susceptibility to man-in-the-middle hashrate hijacking.
