---
okf_version: "0.2"
type: Class
title: SegWit
resource: urn:ngm:class:seg-wit
domain: blockchain
description: "Segregated Witness (SegWit) is a Bitcoin protocol upgrade (BIP141/BIP143/BIP144) that moves witness data (signatures and scripts) into a separate structure outside the traditional transaction serialisation, eliminating transaction malleability, introducing a weight-based block-size accounting system, and enabling second-layer protocols such as the Lightning Network and subsequent upgrades such as "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bitcoin-protocol
hasPart:
  - urn:ngm:class:witness-data
requires:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:soft-fork
enables:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:taproot
  - urn:ngm:class:payment-channel
  - urn:ngm:class:atomic-swap
dependsOn:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:unspent-transaction-output
contrastsWith:
  - urn:ngm:class:block-size
  - urn:ngm:class:bitcoin-proof-of-work-protocol-cash
bridgesTo:
  - urn:ngm:class:state-channel
  - urn:ngm:class:layer-2-protocol
  - urn:ngm:class:bitcoin-proof-of-work-protocol
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:ecdsa
standardizedBy:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-core
partOf:
  - urn:ngm:class:bitcoin-protocol
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
relatedTo:
  - urn:ngm:class:transaction-throughput
  - urn:ngm:class:digital-signature
  - urn:ngm:class:blockchain-scalability
---

# SegWit

Segregated Witness (SegWit) is a Bitcoin protocol upgrade (BIP141/BIP143/BIP144) that moves witness data (signatures and scripts) into a separate structure outside the traditional transaction serialisation, eliminating transaction malleability, introducing a weight-based block-size accounting system, and enabling second-layer protocols such as the Lightning Network and subsequent upgrades such as Taproot.
