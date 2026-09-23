---
okf_version: "0.2"
type: Class
title: Omnichain Application
resource: urn:ngm:class:omnichain-application
domain: blockchain
description: An omnichain application is a decentralised application designed to operate across multiple blockchain networks simultaneously, maintaining unified state, liquidity, and user identity without requiring users to bridge assets manually between chains. Unlike multi-chain applications that deploy isolated instances on separate chains, omnichain applications treat all supported networks as a single log
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:decentralized-application
enables:
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:blockchain-interoperability
relatedTo:
  - urn:ngm:class:cross-chain-bridge
---

# Omnichain Application

An omnichain application is a decentralised application designed to operate across multiple blockchain networks simultaneously, maintaining unified state, liquidity, and user identity without requiring users to bridge assets manually between chains. Unlike multi-chain applications that deploy isolated instances on separate chains, omnichain applications treat all supported networks as a single logical execution environment connected by cross-chain messaging protocols. LayerZero is the most widely adopted infrastructure enabling omnichain application patterns.
