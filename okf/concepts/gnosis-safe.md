---
okf_version: "0.2"
type: Class
title: Gnosis Safe
resource: urn:ngm:class:gnosis-safe
domain: blockchain
description: Gnosis Safe, later rebranded as Safe, is a smart-contract wallet for Ethereum and compatible networks that requires multiple signatures to authorise transactions. Rather than relying on a single private key, it enforces a configurable threshold, such as three of five owners, before funds move or contract calls execute. It is widely used by decentralised autonomous organisations, projects and indiv
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-domain
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:private-key
enables:
  - urn:ngm:class:treasury-management
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:spending-limit
  - urn:ngm:class:social-recovery
  - urn:ngm:class:multisignature-wallets
implements:
  - urn:ngm:class:erc-4337
contrastsWith:
  - urn:ngm:class:externally-owned-account
  - urn:ngm:class:hardware-wallet
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:key-management
  - urn:ngm:class:snapshot
  - urn:ngm:class:decentralised-autonomous-organisation
uses:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
supports:
  - urn:ngm:class:de-fi-protocol
  - urn:ngm:class:snapshot
  - urn:ngm:class:institutional-custody
relatedTo:
  - urn:ngm:class:gnosis-chain
---

# Gnosis Safe

Gnosis Safe, later rebranded as Safe, is a smart-contract wallet for Ethereum and compatible networks that requires multiple signatures to authorise transactions. Rather than relying on a single private key, it enforces a configurable threshold, such as three of five owners, before funds move or contract calls execute. It is widely used by decentralised autonomous organisations, projects and individuals to manage treasuries and reduce the risk of a single compromised key.
