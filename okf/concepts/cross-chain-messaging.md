---
okf_version: "0.2"
type: Class
title: Cross-Chain Messaging
resource: urn:ngm:class:cross-chain-messaging
domain: blockchain
description: Protocols and mechanisms that enable communication and data transfer between different blockchain networks, facilitating interoperability and cross-chain applications without centralised intermediaries.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:interoperability-protocol
  - urn:ngm:class:message-passing
hasPart:
  - urn:ngm:class:code-execution
  - urn:ngm:class:message-queue
  - urn:ngm:class:verification
  - urn:ngm:class:message-passing
  - urn:ngm:class:verification
  - urn:ngm:class:code-execution
requires:
  - urn:ngm:class:message-authentication
  - urn:ngm:class:relay-network
  - urn:ngm:class:light-client
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:blockchain-proof
enables:
  - urn:ngm:class:cross-chain-communication
  - urn:ngm:class:state-synchronisation
  - urn:ngm:class:decentralised-computation
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:cross-chain-communication
  - urn:ngm:class:asset-movement
dependsOn:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:ibc
contrastsWith:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:centralised-bridge
bridgesTo:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:decentralised-computation
uses:
  - urn:ngm:class:merkle-proof
relatedTo:
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:oracle-network
---

# Cross-Chain Messaging

Protocols and mechanisms that enable communication and data transfer between different blockchain networks, facilitating interoperability and cross-chain applications without centralised intermediaries.
