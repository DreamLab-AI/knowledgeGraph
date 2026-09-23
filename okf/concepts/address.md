---
okf_version: "0.2"
type: Class
title: Address
resource: urn:ngm:class:address
domain: blockchain
description: "A blockchain Address is a compact, human-transmissible identifier derived from a public key via cryptographic hashing (typically SHA-256 followed by RIPEMD-160 for Bitcoin, or Keccak-256 for Ethereum), which designates the recipient or controller of blockchain funds or smart-contract state. Addresses function as pseudonymous identifiers: they reveal nothing about the owner's real identity while al"
maturity: established
quality: 0
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:elliptic-curve-cryptography
enables:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:wallet
  - urn:ngm:class:digital-identity
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:public-key
  - urn:ngm:class:private-key
relatedTo:
  - urn:ngm:class:utxo-model
  - urn:ngm:class:account-model
  - urn:ngm:class:secp256k1
  - urn:ngm:class:hash-function
  - urn:ngm:class:digital-wallet
---

# Address

A blockchain Address is a compact, human-transmissible identifier derived from a public key via cryptographic hashing (typically SHA-256 followed by RIPEMD-160 for Bitcoin, or Keccak-256 for Ethereum), which designates the recipient or controller of blockchain funds or smart-contract state. Addresses function as pseudonymous identifiers: they reveal nothing about the owner's real identity while allowing cryptographic proof of ownership through digital signature with the corresponding private key. They are encoded in formats such as Base58Check (Bitcoin legacy), Bech32 (Bitcoin native SegWit), or hexadecimal with EIP-55 checksum (Ethereum).
