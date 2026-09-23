---
okf_version: "0.2"
type: Class
title: Trusted Third Party
resource: urn:ngm:class:trusted-third-party
domain: blockchain
description: A trusted third party (TTP) is an intermediary that two or more parties rely upon to facilitate, witness, or settle an interaction without each party having to trust the other directly. Examples include certificate authorities, escrow agents, custodians, and clearing houses. Blockchain systems are largely motivated by the goal of minimising or eliminating trusted third parties, replacing instituti
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:security
requires:
  - urn:ngm:class:custody
enables:
  - urn:ngm:class:centralized-exchange
  - urn:ngm:class:custodial-wallet
dependsOn:
  - urn:ngm:class:custody
contrastsWith:
  - urn:ngm:class:self-custody
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:smart-contract
bridgesTo:
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:kyc
supports:
  - urn:ngm:class:custody
relatedTo:
  - urn:ngm:class:oracle
  - urn:ngm:class:multisig
  - urn:ngm:class:centralized-exchange
---

# Trusted Third Party

A trusted third party (TTP) is an intermediary that two or more parties rely upon to facilitate, witness, or settle an interaction without each party having to trust the other directly. Examples include certificate authorities, escrow agents, custodians, and clearing houses. Blockchain systems are largely motivated by the goal of minimising or eliminating trusted third parties, replacing institutional trust with cryptographic verification and decentralised consensus.
