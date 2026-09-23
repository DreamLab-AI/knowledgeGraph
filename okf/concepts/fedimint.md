---
okf_version: "0.2"
type: Class
title: Fedimint
resource: urn:ngm:class:fedimint
domain: blockchain
description: Fedimint is an open-source federated protocol for community-custodied Bitcoin Chaumian e-cash mints, in which a threshold of guardians collectively hold Bitcoin reserves and issue blinded bearer tokens redeemable for satoshis, providing privacy-preserving custody without requiring any single trusted party. The federation model distributes trust across a small, known set of guardians using Byzantin
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ecash
requires:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:multisignature
  - urn:ngm:class:consensus
  - urn:ngm:class:multisignature
  - urn:ngm:class:consensus
enables:
  - urn:ngm:class:privacy-preserving
  - urn:ngm:class:custody
  - urn:ngm:class:financial-inclusion
  - urn:ngm:class:privacy-preserving
  - urn:ngm:class:custody
contrastsWith:
  - urn:ngm:class:self-custody
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:ark-protocol
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:distributed-trust
uses:
  - urn:ngm:class:chaumian-ecash
  - urn:ngm:class:blind-signatures
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:byzantine-fault-tolerance
supports:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-custody
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:federated-system
  - urn:ngm:class:bitcoin-proof-of-work-protocol-layer-2
  - urn:ngm:class:de-fi
  - urn:ngm:class:digital-cash
---

# Fedimint

Fedimint is an open-source federated protocol for community-custodied Bitcoin Chaumian e-cash mints, in which a threshold of guardians collectively hold Bitcoin reserves and issue blinded bearer tokens redeemable for satoshis, providing privacy-preserving custody without requiring any single trusted party. The federation model distributes trust across a small, known set of guardians using Byzantine-fault-tolerant consensus, while the blind-signature scheme cryptographically prevents guardians from linking redemptions to issuances. Fedimint acts as a Bitcoin Layer 2 through embedded Lightning Network gateway integration, enabling community mints to interoperate with the broader Bitcoin payment ecosystem. It targets the gap between self-custody complexity and centralised custodial risk by enabling accountable, trust-minimised community banking at scale.
