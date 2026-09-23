---
okf_version: "0.2"
type: Class
title: Zcash
resource: urn:ngm:class:zcash
domain: blockchain
description: Zcash is a privacy-oriented cryptocurrency launched in 2016 that uses zero-knowledge proofs to allow transactions to be verified without revealing the sender, recipient or amount. It was the first widespread deployment of zk-SNARKs, succinct non-interactive arguments of knowledge, in a public blockchain. Zcash supports both transparent addresses, similar to Bitcoin, and shielded addresses that con
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:blockchain-domain
requires:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:trusted-setup-ceremony
  - urn:ngm:class:elliptic-curve-cryptography
enables:
  - urn:ngm:class:transaction-privacy
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:anonymous-payment
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:public-key-cryptography
implements:
  - urn:ngm:class:zk-snark
  - urn:ngm:class:shielded-transaction
contrastsWith:
  - urn:ngm:class:monero
  - urn:ngm:class:bitcoin
bridgesTo:
  - urn:ngm:class:zk-sync
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:monero
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:note-commitment
relatedTo:
  - urn:ngm:class:cryptocurrency
---

# Zcash

Zcash is a privacy-oriented cryptocurrency launched in 2016 that uses zero-knowledge proofs to allow transactions to be verified without revealing the sender, recipient or amount. It was the first widespread deployment of zk-SNARKs, succinct non-interactive arguments of knowledge, in a public blockchain. Zcash supports both transparent addresses, similar to Bitcoin, and shielded addresses that conceal transaction details, giving users a choice of privacy level. The protocol derives from the Zerocash academic proposal and is developed by the Electric Coin Company.
