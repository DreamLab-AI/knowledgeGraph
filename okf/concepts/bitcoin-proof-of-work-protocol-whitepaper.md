---
okf_version: "0.2"
type: Class
title: Bitcoin Whitepaper
resource: urn:ngm:class:bitcoin-proof-of-work-protocol-whitepaper
domain: blockchain
description: "The October 2008 technical paper by pseudonymous author Satoshi Nakamoto, titled 'Bitcoin: A Peer-to-Peer Electronic Cash System', which introduced the design of a decentralised digital currency that eliminates reliance on trusted third parties. It proposed a chain of cryptographically linked blocks secured by proof-of-work consensus to prevent double-spending without a central authority. The pape"
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
requires:
  - urn:ngm:class:hashcash
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:digital-signature
  - urn:ngm:class:merkle-tree
enables:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:de-fi
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:blockchain-technology
  - urn:ngm:class:bitcoin-protocol
implements:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:distributed-ledger
contrastsWith:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:centralised-payment-system
bridgesTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:unspent-transaction-output
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:sha-256
relatedTo:
  - urn:ngm:class:satoshi-nakamoto
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:double-spending
  - urn:ngm:class:genesis-block
  - urn:ngm:class:cypherpunk-movement
  - urn:ngm:class:lightning-network
  - urn:ngm:class:double-spending
---

# Bitcoin Whitepaper

The October 2008 technical paper by pseudonymous author Satoshi Nakamoto, titled 'Bitcoin: A Peer-to-Peer Electronic Cash System', which introduced the design of a decentralised digital currency that eliminates reliance on trusted third parties. It proposed a chain of cryptographically linked blocks secured by proof-of-work consensus to prevent double-spending without a central authority. The paper synthesised prior work on digital cash, cryptographic hash functions, and distributed timestamps into a coherent, deployable protocol that was subsequently realised in the January 2009 Bitcoin genesis block launch.
