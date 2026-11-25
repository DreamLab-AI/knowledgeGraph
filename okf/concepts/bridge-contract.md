---
okf_version: "0.2"
type: Class
title: Bridge Contract
resource: urn:ngm:class:bridge-contract
domain: blockchain
description: A Bridge Contract is a smart contract deployed on one or more blockchain networks that facilitates the transfer of tokens, messages, or state between two separate chains by locking or burning assets on the source chain and minting or releasing equivalent assets on the destination chain. Bridge contracts are the on-chain components of cross-chain bridge protocols, enforcing custody, verifying crypt
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:wrapped-token
uses:
  - urn:ngm:class:relayer
  - urn:ngm:class:cryptographic-hash
relatedTo:
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:sidechain
  - urn:ngm:class:layer-2-scaling
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Bridge Contract

A Bridge Contract is a smart contract deployed on one or more blockchain networks that facilitates the transfer of tokens, messages, or state between two separate chains by locking or burning assets on the source chain and minting or releasing equivalent assets on the destination chain. Bridge contracts are the on-chain components of cross-chain bridge protocols, enforcing custody, verifying cryptographic proofs of source-chain events, and coordinating with off-chain relayers or decentralised oracle networks.
