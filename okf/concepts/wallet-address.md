---
okf_version: "0.2"
type: Class
title: Wallet Address
resource: urn:ngm:class:wallet-address
domain: blockchain
description: A wallet address is a public, shareable identifier on a blockchain network to which assets can be sent and from which ownership is asserted. It is typically derived deterministically from a public key by hashing and encoding, allowing anyone to send funds to it while only the holder of the corresponding private key can authorise outgoing transactions. Addresses are network-specific in format and s
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:public-key
requires:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:hash-function
enables:
  - urn:ngm:class:transaction
dependsOn:
  - urn:ngm:class:private-key
  - urn:ngm:class:digital-signature
contrastsWith:
  - urn:ngm:class:private-key
bridgesTo:
  - urn:ngm:class:digital-signature
uses:
  - urn:ngm:class:public-key
  - urn:ngm:class:hash-function
supports:
  - urn:ngm:class:ethereum
  - urn:ngm:class:bitcoin
partOf:
  - urn:ngm:class:cryptocurrency-wallet
relatedTo:
  - urn:ngm:class:cryptocurrency-wallet
  - urn:ngm:class:transaction
  - urn:ngm:class:ethereum
  - urn:ngm:class:bitcoin
---

# Wallet Address

A wallet address is a public, shareable identifier on a blockchain network to which assets can be sent and from which ownership is asserted. It is typically derived deterministically from a public key by hashing and encoding, allowing anyone to send funds to it while only the holder of the corresponding private key can authorise outgoing transactions. Addresses are network-specific in format and serve as the destination in transactions and the anchor for on-chain balance accounting.
