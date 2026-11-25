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
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:custodial-wallet
dependsOn:
  - urn:ngm:class:custody
contrastsWith:
  - urn:ngm:class:self-custody
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:smart-contract
bridgesTo:
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:know-your-customer
supports:
  - urn:ngm:class:custody
relatedTo:
  - urn:ngm:class:oracle
  - urn:ngm:class:multisig
  - urn:ngm:class:centralised-exchange
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Trusted Third Party

A trusted third party (TTP) is an intermediary that two or more parties rely upon to facilitate, witness, or settle an interaction without each party having to trust the other directly. Examples include certificate authorities, escrow agents, custodians, and clearing houses. Blockchain systems are largely motivated by the goal of minimising or eliminating trusted third parties, replacing institutional trust with cryptographic verification and decentralised consensus.
