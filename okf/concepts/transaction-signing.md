---
okf_version: "0.2"
type: Class
title: Transaction Signing
resource: urn:ngm:class:transaction-signing
domain: blockchain
description: Transaction signing is the cryptographic process by which the holder of a private key authorises a blockchain transaction by producing a digital signature over its contents. The signature proves that the legitimate key holder approved the exact transaction without revealing the private key, and it binds the transaction to a specific account so that the network can verify authenticity and integrity
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptography
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:custody
dependsOn:
  - urn:ngm:class:cryptography
  - urn:ngm:class:private-key
implements:
  - urn:ngm:class:digital-signature
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:nonce
supports:
  - urn:ngm:class:multi-signature-wallet
  - urn:ngm:class:hardware-wallet
partOf:
  - urn:ngm:class:digital-wallet
relatedTo:
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:digital-wallet
  - urn:ngm:class:ethereum
---

# Transaction Signing

Transaction signing is the cryptographic process by which the holder of a private key authorises a blockchain transaction by producing a digital signature over its contents. The signature proves that the legitimate key holder approved the exact transaction without revealing the private key, and it binds the transaction to a specific account so that the network can verify authenticity and integrity. It is fundamental to self-custody, wallet security and the trustless validation of transactions.
