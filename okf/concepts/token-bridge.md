---
okf_version: "0.2"
type: Class
title: Token Bridge
resource: urn:ngm:class:token-bridge
domain: blockchain
description: A Token Bridge is a protocol that enables the transfer of token value or representation between two distinct blockchain networks that cannot natively communicate. It commonly locks or burns tokens on the source chain and mints or releases an equivalent representation on the destination chain, coordinated by validators, relayers or light-client proofs. Token bridges are a core mechanism for cross-c
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain-interoperability
requires:
  - urn:ngm:class:secure-enclave
enables:
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:liquidity
dependsOn:
  - urn:ngm:class:attestation
bridgesTo:
  - urn:ngm:class:blockchain-interoperability
uses:
  - urn:ngm:class:wrapped-token
supports:
  - urn:ngm:class:decentralised-exchange
relatedTo:
  - urn:ngm:class:wrapped-token
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:cross-chain-communication
---

# Token Bridge

A Token Bridge is a protocol that enables the transfer of token value or representation between two distinct blockchain networks that cannot natively communicate. It commonly locks or burns tokens on the source chain and mints or releases an equivalent representation on the destination chain, coordinated by validators, relayers or light-client proofs. Token bridges are a core mechanism for cross-chain liquidity but historically a significant locus of security risk.
