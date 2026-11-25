---
okf_version: "0.2"
type: Class
title: Lock-and-Mint Bridge
resource: urn:ngm:class:lock-and-mint-bridge
domain: blockchain
description: A lock-and-mint bridge is a cross-chain interoperability mechanism that transfers asset value between blockchains by locking the original asset in a custodial smart contract on the source chain and minting an equivalent synthetic (wrapped) representation on the destination chain, with the peg maintained by a network of validators or relayers who attest to the lock event.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cross-chain-bridge
enables:
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:cross-chain-interoperability
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:wrapped-token
  - urn:ngm:class:bridge-contract
relatedTo:
  - urn:ngm:class:blockchain-security
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Lock-and-Mint Bridge

A lock-and-mint bridge is a cross-chain interoperability mechanism that transfers asset value between blockchains by locking the original asset in a custodial smart contract on the source chain and minting an equivalent synthetic (wrapped) representation on the destination chain, with the peg maintained by a network of validators or relayers who attest to the lock event.
