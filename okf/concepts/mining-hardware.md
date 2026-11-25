---
okf_version: "0.2"
type: Class
title: Mining Hardware
resource: urn:ngm:class:mining-hardware
domain: blockchain
description: Mining hardware is the specialised computing equipment used to perform the cryptographic work that secures proof-of-work blockchains, racing to find valid block hashes in exchange for block rewards. It has progressed from general-purpose CPUs and GPUs to dedicated application-specific integrated circuits (ASICs) optimised for a single hashing algorithm. The efficiency and concentration of this har
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cryptocurrency-mining
hasPart:
  - urn:ngm:class:asic
  - urn:ngm:class:gpu
requires:
  - urn:ngm:class:energy-consumption
enables:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:hash-rate
dependsOn:
  - urn:ngm:class:energy-consumption
  - urn:ngm:class:mining-difficulty
implements:
  - urn:ngm:class:proof-of-work
contrastsWith:
  - urn:ngm:class:proof-of-stake
bridgesTo:
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:asic
  - urn:ngm:class:gpu
supports:
  - urn:ngm:class:mining-pool
  - urn:ngm:class:block-reward
partOf:
  - urn:ngm:class:cryptocurrency-mining
  - urn:ngm:class:proof-of-work
relatedTo:
  - urn:ngm:class:hash-rate
  - urn:ngm:class:double-spending
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Mining Hardware

Mining hardware is the specialised computing equipment used to perform the cryptographic work that secures proof-of-work blockchains, racing to find valid block hashes in exchange for block rewards. It has progressed from general-purpose CPUs and GPUs to dedicated application-specific integrated circuits (ASICs) optimised for a single hashing algorithm. The efficiency and concentration of this hardware shape network security, energy consumption, and mining centralisation.
