---
okf_version: "0.2"
type: Class
title: Bitcoin Improvement Proposals
resource: urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
domain: blockchain
description: Bitcoin Improvement Proposals (BIPs) are the formal design documents through which changes, enhancements, and new features are proposed and ratified for the Bitcoin protocol and its broader ecosystem. First introduced by Amir Taaki in 2011, modelled on Python's PEP and Python Enhancement Proposal process, BIPs serve as the primary coordination mechanism for a decentralised developer community that
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:blockchain-governance
hasPart:
  - urn:ngm:class:bip-32
  - urn:ngm:class:bip-141
  - urn:ngm:class:bip-340
  - urn:ngm:class:bip-341
  - urn:ngm:class:bip-173
  - urn:ngm:class:bip-32-hd-wallets
  - urn:ngm:class:bip-141-segwit
  - urn:ngm:class:bip-340-schnorr-signatures
  - urn:ngm:class:bip-341-taproot
  - urn:ngm:class:bip-173-bech32
requires:
  - urn:ngm:class:rough-consensus
  - urn:ngm:class:peer-review
enables:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview
  - urn:ngm:class:soft-fork
  - urn:ngm:class:hard-fork
  - urn:ngm:class:protocol-upgrades
  - urn:ngm:class:schnorr-signatures
  - urn:ngm:class:taproot
  - urn:ngm:class:protocol-upgrade
dependsOn:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-core
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
  - urn:ngm:class:consensus-rule
implements:
  - urn:ngm:class:decentralised-governance
  - urn:ngm:class:standards-process
contrastsWith:
  - urn:ngm:class:eip
  - urn:ngm:class:ietf-rfc
  - urn:ngm:class:w3c-recommendation
  - urn:ngm:class:ethereum-improvement-proposal
bridgesTo:
  - urn:ngm:class:distributed-systems-governance
  - urn:ngm:class:cryptographic-protocol
uses:
  - urn:ngm:class:git-hub
  - urn:ngm:class:user-activated-soft-fork
  - urn:ngm:class:miner-signalling
standardizedBy:
  - urn:ngm:class:blockchain-protocol
partOf:
  - urn:ngm:class:open-source-governance
relatedTo:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:digital-signature
  - urn:ngm:class:hd-wallet
  - urn:ngm:class:segregated-witness
---

# Bitcoin Improvement Proposals

Bitcoin Improvement Proposals (BIPs) are the formal design documents through which changes, enhancements, and new features are proposed and ratified for the Bitcoin protocol and its broader ecosystem. First introduced by Amir Taaki in 2011, modelled on Python's PEP and Python Enhancement Proposal process, BIPs serve as the primary coordination mechanism for a decentralised developer community that lacks any central authority. Each BIP progresses through a defined lifecycle — draft, proposed, final, and optionally superseded — and must achieve rough consensus among economic nodes, miners, and users before activation. BIPs are organised into three tracks: Standards Track (protocol-level changes requiring network-wide adoption), Informational (guidelines and best practices), and Process (procedural rules governing the BIP process itself).
