---
okf_version: "0.2"
type: Class
title: Oracle
resource: urn:ngm:class:oracle
domain: blockchain
description: In blockchain systems, a mechanism that brings external off-chain information onto the chain so that smart contracts can act on data they cannot observe directly. Oracles form the trust boundary between deterministic on-chain logic and the variable outside world, and may be centralised reporters or decentralised aggregation networks.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain-infrastructure
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-domain
hasPart:
  - urn:ngm:class:price-oracle
  - urn:ngm:class:data-feed
  - urn:ngm:class:oracle-node
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:prediction-markets
  - urn:ngm:class:parametric-insurance
  - urn:ngm:class:cross-chain-bridge
dependsOn:
  - urn:ngm:class:external-data-source
  - urn:ngm:class:provider
implements:
  - urn:ngm:class:oracle-network
contrastsWith:
  - urn:ngm:class:centralised-oracle
bridgesTo:
  - urn:ngm:class:real-world-data
  - urn:ngm:class:iot-sensor
  - urn:ngm:class:supply-chain-data
  - urn:ngm:class:price-oracle
  - urn:ngm:class:chainlink
uses:
  - urn:ngm:class:chainlink
  - urn:ngm:class:staking
  - urn:ngm:class:cryptographic-proof
supports:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:lending-protocol
partOf:
  - urn:ngm:class:middleware
relatedTo:
  - urn:ngm:class:tee
  - urn:ngm:class:zero-knowledge-proof
---

# Oracle

In blockchain systems, a mechanism that brings external off-chain information onto the chain so that smart contracts can act on data they cannot observe directly. Oracles form the trust boundary between deterministic on-chain logic and the variable outside world, and may be centralised reporters or decentralised aggregation networks.
