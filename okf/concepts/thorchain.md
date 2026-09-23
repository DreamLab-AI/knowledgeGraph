---
okf_version: "0.2"
type: Class
title: THORChain
resource: urn:ngm:class:thorchain
domain: blockchain
description: A decentralised cross-chain liquidity protocol that lets users swap native assets across different blockchains without wrapping them or relying on a single custodian. It uses bonded validators and liquidity pools denominated in its native asset.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:cross-chain-bridge
requires:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:validator
enables:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:interoperability
bridgesTo:
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:automated-market-maker
---

# THORChain

A decentralised cross-chain liquidity protocol that lets users swap native assets across different blockchains without wrapping them or relying on a single custodian. It uses bonded validators and liquidity pools denominated in its native asset.
