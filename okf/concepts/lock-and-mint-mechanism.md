---
okf_version: "0.2"
type: Class
title: Lock and Mint Mechanism
resource: urn:ngm:class:lock-and-mint-mechanism
domain: blockchain
description: Cross-chain asset transfer protocol where tokens are locked in a smart contract on the source chain and equivalent wrapped tokens are minted on the destination chain, maintaining a 1:1 backing ratio.
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:defi-protocol
  - urn:ngm:class:blockchain
requires:
  - urn:ngm:class:blockchain-oracle
enables:
  - urn:ngm:class:wrapped-token
implements:
  - urn:ngm:class:cross-chain-bridge
contrastsWith:
  - urn:ngm:class:atomic-swap
uses:
  - urn:ngm:class:smart-contract
generated: {"by":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Lock and Mint Mechanism

Cross-chain asset transfer protocol where tokens are locked in a smart contract on the source chain and equivalent wrapped tokens are minted on the destination chain, maintaining a 1:1 backing ratio.
