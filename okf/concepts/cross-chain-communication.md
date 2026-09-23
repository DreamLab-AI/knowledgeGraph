---
okf_version: "0.2"
type: Class
title: Cross-Chain Communication
resource: urn:ngm:class:cross-chain-communication
domain: blockchain
description: Cross-chain communication is the exchange of messages, data, and asset-transfer instructions between distinct blockchain networks that do not natively share state. It is implemented through protocols, relays, and light-client verification that let one chain trust and act on events from another. It is the foundation of blockchain interoperability and multi-chain applications.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:cross-chain-bridge
hasPart:
  - urn:ngm:class:light-client-verification
  - urn:ngm:class:relayer
  - urn:ngm:class:merkle-proof
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:de-fi
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:multi-chain-application
implements:
  - urn:ngm:class:cosmos-ibc
  - urn:ngm:class:polkadot-xcm
contrastsWith:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:sidechain
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:oracle-network
relatedTo:
  - urn:ngm:class:cosmos-ibc
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:message-passing
  - urn:ngm:class:token-bridge
  - urn:ngm:class:wrapped-token
---

# Cross-Chain Communication

Cross-chain communication is the exchange of messages, data, and asset-transfer instructions between distinct blockchain networks that do not natively share state. It is implemented through protocols, relays, and light-client verification that let one chain trust and act on events from another. It is the foundation of blockchain interoperability and multi-chain applications.
