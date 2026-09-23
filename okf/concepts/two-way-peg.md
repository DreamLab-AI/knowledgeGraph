---
okf_version: "0.2"
type: Class
title: Two Way Peg
resource: urn:ngm:class:two-way-peg
domain: blockchain
description: A two-way peg (2WP) is a blockchain mechanism that enables assets to be transferred bidirectionally between a parent chain and a sidechain, with the asset supply conserved across both chains. When an asset is locked on the parent chain, an equivalent representation is minted on the sidechain; when returned to the parent chain, the sidechain representation is burned and the original asset is unlock
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:sidechain
hasPart:
  - urn:ngm:class:lock-and-mint
  - urn:ngm:class:burn-and-release
  - urn:ngm:class:federation
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:cryptographic-proof
enables:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:de-fi
dependsOn:
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:sidechain
  - urn:ngm:class:cross-chain-bridge
contrastsWith:
  - urn:ngm:class:one-way-peg
  - urn:ngm:class:wrapped-token
uses:
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:merkle-proof
  - urn:ngm:class:spv-verification
  - urn:ngm:class:threshold-signature-scheme
relatedTo:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:zero-knowledge-rollup
---

# Two Way Peg

A two-way peg (2WP) is a blockchain mechanism that enables assets to be transferred bidirectionally between a parent chain and a sidechain, with the asset supply conserved across both chains. When an asset is locked on the parent chain, an equivalent representation is minted on the sidechain; when returned to the parent chain, the sidechain representation is burned and the original asset is unlocked. Two-way pegs are the foundational primitive for sidechain interoperability, enabling specialised execution environments whilst tethering their native asset to a more secure base layer.
