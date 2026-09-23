---
okf_version: "0.2"
type: Class
title: Multi-Signature
resource: urn:ngm:class:multi-signature
domain: blockchain
description: Multi-Signature (multisig) is a cryptographic access-control scheme requiring that a transaction or operation be authorised by a threshold number m out of a defined set of n independent private keys before it is considered valid. Commonly expressed as m-of-n (e.g. 2-of-3), multisig eliminates single points of failure in key custody and enforces shared governance over digital assets, smart contract
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:signature-scheme
requires:
  - urn:ngm:class:key-management
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:multi-sig-governance
  - urn:ngm:class:dao-governance
  - urn:ngm:class:multi-signature-wallet
  - urn:ngm:class:institutional-custody
  - urn:ngm:class:cross-chain-bridge
implements:
  - urn:ngm:class:access-control
  - urn:ngm:class:threshold-cryptography
contrastsWith:
  - urn:ngm:class:mpc-wallet
  - urn:ngm:class:single-signature
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:decentralised-identity
uses:
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:smart-contract
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:hash-function
standardizedBy:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
  - urn:ngm:class:eip
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
relatedTo:
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:ecdsa
  - urn:ngm:class:pay-to-script-hash
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:key-ceremony
---

# Multi-Signature

Multi-Signature (multisig) is a cryptographic access-control scheme requiring that a transaction or operation be authorised by a threshold number m out of a defined set of n independent private keys before it is considered valid. Commonly expressed as m-of-n (e.g. 2-of-3), multisig eliminates single points of failure in key custody and enforces shared governance over digital assets, smart contracts, or any access-controlled resource. It is foundational to institutional cryptocurrency custody, DAO treasury management, bridge security, and hardware-secure wallet architectures. Multisig schemes may be implemented at the protocol layer, at the script level (as in Bitcoin P2SH/P2WSH), or at the application layer via smart contracts such as Gnosis Safe.
