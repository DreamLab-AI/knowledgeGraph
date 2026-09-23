---
okf_version: "0.2"
type: Class
title: State Channel
resource: urn:ngm:class:state-channel
domain: blockchain
description: State channels are Layer 2 scaling solutions enabling off-chain interactions between participants through signed state updates, requiring only on-chain transactions for channel opening, closing, and dispute resolution, thereby achieving instant finality and near-zero marginal transaction costs.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:blockchain
hasPart:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:dispute-resolution-mechanism
  - urn:ngm:class:watchtower-service
requires:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:micropayments
  - urn:ngm:class:finality
  - urn:ngm:class:high-frequency-trading
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptographic-hash-function
implements:
  - urn:ngm:class:off-chain-scaling
  - urn:ngm:class:peerto-peer-protocol
contrastsWith:
  - urn:ngm:class:rollup
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:plasma
bridgesTo:
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:raiden-network
supports:
  - urn:ngm:class:de-fi
  - urn:ngm:class:machine-to-machine-payments
partOf:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:off-chain-scaling
  - urn:ngm:class:layer-2-solutions
relatedTo:
  - urn:ngm:class:connext
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:secure-multi-party-computation
---

# State Channel

State channels are Layer 2 scaling solutions enabling off-chain interactions between participants through signed state updates, requiring only on-chain transactions for channel opening, closing, and dispute resolution, thereby achieving instant finality and near-zero marginal transaction costs.
