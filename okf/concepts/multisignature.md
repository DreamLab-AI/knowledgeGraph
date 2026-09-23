---
okf_version: "0.2"
type: Class
title: Multisignature
resource: urn:ngm:class:multisignature
domain: blockchain
description: Multisignature (multisig) is a cryptographic access-control scheme in which a transaction or operation requires a quorum of M independent signatures drawn from a declared set of N authorised keyholders before it can be validated and executed. Applied to cryptocurrency wallets, smart contracts, and DAO treasuries, the M-of-N threshold eliminates single points of failure in key custody by distributi
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:cryptographic-signature
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:quorum-threshold
enables:
  - urn:ngm:class:multi-signature-wallet
  - urn:ngm:class:self-custody
  - urn:ngm:class:treasury-management
  - urn:ngm:class:institutional-custody
  - urn:ngm:class:treasury-management
dependsOn:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:smart-contract
implements:
  - urn:ngm:class:access-control
  - urn:ngm:class:distributed-trust
contrastsWith:
  - urn:ngm:class:single-key-wallet
  - urn:ngm:class:custodial-wallet
bridgesTo:
  - urn:ngm:class:decentralised-governance
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:digital-signatures
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:key-management
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:hash-function
relatedTo:
  - urn:ngm:class:multi-sig-governance
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:account-abstraction
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:secret-sharing
---

# Multisignature

Multisignature (multisig) is a cryptographic access-control scheme in which a transaction or operation requires a quorum of M independent signatures drawn from a declared set of N authorised keyholders before it can be validated and executed. Applied to cryptocurrency wallets, smart contracts, and DAO treasuries, the M-of-N threshold eliminates single points of failure in key custody by distributing signing authority across multiple parties, devices, or organisations. More advanced variants — threshold signature schemes (TSS) and multi-party computation (MPC) — achieve the same security guarantee without assembling the full key set on-chain, reducing transaction cost and improving privacy.
