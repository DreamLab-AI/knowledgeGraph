---
okf_version: "0.2"
type: Class
title: IBC
resource: urn:ngm:class:ibc
domain: blockchain
description: Inter-Blockchain Communication is a protocol for relaying authenticated data and tokens between independent blockchains. It is the native interoperability standard of the Cosmos ecosystem.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:blockchain-interoperability
requires:
  - urn:ngm:class:cosmos-sdk
  - urn:ngm:class:merkle-tree
enables:
  - urn:ngm:class:cross-chain-bridge
bridgesTo:
  - urn:ngm:class:tendermint
---

# IBC

Inter-Blockchain Communication is a protocol for relaying authenticated data and tokens between independent blockchains. It is the native interoperability standard of the Cosmos ecosystem.
