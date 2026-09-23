---
okf_version: "0.2"
type: Class
title: Nakamoto 2008 Bitcoin Whitepaper
resource: urn:ngm:class:nakamoto-2008-bitcoin-whitepaper
domain: blockchain
description: "The Nakamoto 2008 Bitcoin Whitepaper, titled Bitcoin: A Peer-to-Peer Electronic Cash System, is the founding document of Bitcoin, published in October 2008 under the pseudonym Satoshi Nakamoto. It describes a system for electronic payments that allows two parties to transact directly without a trusted intermediary, solving the double-spending problem through a proof-of-work timestamp server. The p"
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:bitcoin
  - urn:ngm:class:owl-thing
hasPart:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:utxo
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:timestamp-server
requires:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:digital-signature
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:consensus
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:trustless-transaction
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:blockchain-domain
implements:
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:longest-chain-rule
contrastsWith:
  - urn:ngm:class:centralised-payment-system
  - urn:ngm:class:trusted-third-party
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:cryptography
  - urn:ngm:class:game-theory
  - urn:ngm:class:utxo
  - urn:ngm:class:cryptographic-hash-function
relatedTo:
  - urn:ngm:class:double-spending
  - urn:ngm:class:mining-incentive
  - urn:ngm:class:51-attack
---

# Nakamoto 2008 Bitcoin Whitepaper

The Nakamoto 2008 Bitcoin Whitepaper, titled Bitcoin: A Peer-to-Peer Electronic Cash System, is the founding document of Bitcoin, published in October 2008 under the pseudonym Satoshi Nakamoto. It describes a system for electronic payments that allows two parties to transact directly without a trusted intermediary, solving the double-spending problem through a proof-of-work timestamp server. The paper introduces a public chain of blocks secured by computational work, where the longest valid chain represents the agreed transaction history. It established the conceptual basis for cryptocurrencies and decentralised consensus.
