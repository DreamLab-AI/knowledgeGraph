---
okf_version: "0.2"
type: Class
title: Liquid Network
resource: urn:ngm:class:liquid-network
domain: blockchain
description: The Liquid Network is a Bitcoin sidechain developed by Blockstream that provides faster settlement and confidential transactions for exchanges, traders and institutions. Bitcoin is moved onto the network by locking it on the main chain and issuing an equivalent pegged asset, Liquid Bitcoin, which can later be redeemed. The network is operated by a federation of functionaries who produce blocks and
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-domain
requires:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:federation
  - urn:ngm:class:two-way-peg
  - urn:ngm:class:functionary
enables:
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:asset-issuance
  - urn:ngm:class:real-time-settlement
  - urn:ngm:class:security-token
  - urn:ngm:class:stablecoin
implements:
  - urn:ngm:class:sidechain
  - urn:ngm:class:confidential-transactions
contrastsWith:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-lightning-network
  - urn:ngm:class:rollup
bridgesTo:
  - urn:ngm:class:digital-asset
  - urn:ngm:class:institutional-finance
  - urn:ngm:class:exchange-infrastructure
  - urn:ngm:class:bitcoin-proof-of-work-protocol-lightning-network
  - urn:ngm:class:digital-asset-domain
uses:
  - urn:ngm:class:elements-project
  - urn:ngm:class:multisig
partOf:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-layer-2
relatedTo:
  - urn:ngm:class:blockstream
  - urn:ngm:class:peg-mechanism
  - urn:ngm:class:transaction-privacy
---

# Liquid Network

The Liquid Network is a Bitcoin sidechain developed by Blockstream that provides faster settlement and confidential transactions for exchanges, traders and institutions. Bitcoin is moved onto the network by locking it on the main chain and issuing an equivalent pegged asset, Liquid Bitcoin, which can later be redeemed. The network is operated by a federation of functionaries who produce blocks and manage the peg, trading some decentralisation for performance and privacy features.
