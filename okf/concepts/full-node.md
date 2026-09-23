---
okf_version: "0.2"
type: Class
title: Full Node
resource: urn:ngm:class:full-node
domain: blockchain
description: A blockchain node that independently downloads, validates, and stores the complete transaction history of the chain from the genesis block, enforcing all consensus rules without trusting external parties. Full nodes are the gold standard for trustless participation and are the backbone of decentralisation.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:networkcomponent
hasPart:
  - urn:ngm:class:transaction-validation
  - urn:ngm:class:blockchain-ledger
  - urn:ngm:class:mempool
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:independent-verification
dependsOn:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:genesis-block
implements:
  - urn:ngm:class:consensus-rule
  - urn:ngm:class:bitcoin-protocol
contrastsWith:
  - urn:ngm:class:light-client
  - urn:ngm:class:simplified-payment-verification
  - urn:ngm:class:mining-node
bridgesTo:
  - urn:ngm:class:network-security
  - urn:ngm:class:distributed-systems
supports:
  - urn:ngm:class:decentralization
  - urn:ngm:class:censorship-resistance
partOf:
  - urn:ngm:class:node
  - urn:ngm:class:blockchain-network
relatedTo:
  - urn:ngm:class:archival-node
  - urn:ngm:class:blockchain-infrastructure
  - urn:ngm:class:network-synchronization
---

# Full Node

A blockchain node that independently downloads, validates, and stores the complete transaction history of the chain from the genesis block, enforcing all consensus rules without trusting external parties. Full nodes are the gold standard for trustless participation and are the backbone of decentralisation.
