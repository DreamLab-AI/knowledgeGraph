---
okf_version: "0.2"
type: Class
title: Connext
resource: urn:ngm:class:connext
domain: blockchain
description: A cross-chain interoperability protocol that enables fast transfers and contract calls between Ethereum-compatible blockchains and Layer 2 networks without relying on a single trusted custodian, coordinating liquidity routers and a verification layer to achieve trust-minimised cross-chain composability.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cross-chain-bridge
requires:
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:smart-contract
  - urn:ngm:class:squid-router
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:cross-chain-composability
  - urn:ngm:class:atomic-swap
dependsOn:
  - urn:ngm:class:ethereum
  - urn:ngm:class:evm-compatibility
contrastsWith:
  - urn:ngm:class:trusted-bridge
  - urn:ngm:class:wrapped-token
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:infrastructure
  - urn:ngm:class:cross-chain-bridge
uses:
  - urn:ngm:class:hashed-timelock-contract
  - urn:ngm:class:optimistic-verification
  - urn:ngm:class:automated-market-maker
supports:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:rollup
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:intent-based-bridging
---

# Connext

A cross-chain interoperability protocol that enables fast transfers and contract calls between Ethereum-compatible blockchains and Layer 2 networks without relying on a single trusted custodian, coordinating liquidity routers and a verification layer to achieve trust-minimised cross-chain composability.
