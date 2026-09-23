---
okf_version: "0.2"
type: Class
title: Plasma
resource: urn:ngm:class:plasma
domain: blockchain
description: Plasma is a blockchain scaling framework that builds hierarchical chains of child ledgers anchored to a root chain, processing transactions off the main chain while periodically committing compact state commitments to it. Users retain the ability to exit a child chain back to the root chain by submitting fraud proofs, which preserves the security guarantees of the underlying ledger even if a child
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:layer-2-protocol
requires:
  - urn:ngm:class:consensus
enables:
  - urn:ngm:class:scalability
dependsOn:
  - urn:ngm:class:ethereum
implements:
  - urn:ngm:class:decentralization
contrastsWith:
  - urn:ngm:class:rollup
  - urn:ngm:class:sidechain
bridgesTo:
  - urn:ngm:class:ethereum
uses:
  - urn:ngm:class:consensus
supports:
  - urn:ngm:class:scalability
relatedTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:rollup
  - urn:ngm:class:sidechain
  - urn:ngm:class:scalability
  - urn:ngm:class:ethereum
---

# Plasma

Plasma is a blockchain scaling framework that builds hierarchical chains of child ledgers anchored to a root chain, processing transactions off the main chain while periodically committing compact state commitments to it. Users retain the ability to exit a child chain back to the root chain by submitting fraud proofs, which preserves the security guarantees of the underlying ledger even if a child chain operator misbehaves. It was an early Layer 2 design that influenced later optimistic and rollup-based scaling approaches.
