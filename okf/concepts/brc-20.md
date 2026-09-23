---
okf_version: "0.2"
type: Class
title: BRC-20
resource: urn:ngm:class:brc-20
domain: blockchain
description: BRC-20 is an experimental fungible token standard on the Bitcoin blockchain that encodes deploy, mint, and transfer operations as JSON-formatted Ordinals inscriptions written onto individual satoshis. Token balances are not enforced by Bitcoin consensus rules but are instead computed off-chain by indexers that parse inscription data in sequential ordinal order. Proposed by the pseudonymous develop
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:token-standard
requires:
  - urn:ngm:class:ordinals
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:seg-wit
  - urn:ngm:class:taproot
enables:
  - urn:ngm:class:fungible-token
  - urn:ngm:class:minting
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:minting
dependsOn:
  - urn:ngm:class:ordinals-indexer
  - urn:ngm:class:bitcoin-node
contrastsWith:
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:spl-token
  - urn:ngm:class:runes-protocol
  - urn:ngm:class:src-20
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:tokenization
  - urn:ngm:class:neural-network-text-tokenisation
uses:
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:satoshi
  - urn:ngm:class:inscription
  - urn:ngm:class:utxo-model
  - urn:ngm:class:json-data-interchange-format
partOf:
  - urn:ngm:class:bitcoin
relatedTo:
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:digital-asset
  - urn:ngm:class:layer-2-protocol
  - urn:ngm:class:mempool
  - urn:ngm:class:bitcoin-script
---

# BRC-20

BRC-20 is an experimental fungible token standard on the Bitcoin blockchain that encodes deploy, mint, and transfer operations as JSON-formatted Ordinals inscriptions written onto individual satoshis. Token balances are not enforced by Bitcoin consensus rules but are instead computed off-chain by indexers that parse inscription data in sequential ordinal order. Proposed by the pseudonymous developer @domo in March 2023, BRC-20 was the first widely adopted approach to creating transferable fungible tokens natively on Bitcoin without requiring a sidechain or layer-2 network. Its simplicity and permissionless nature drove rapid experimentation but also exposed limitations around scalability, indexer consensus, and on-chain fee pressure.
