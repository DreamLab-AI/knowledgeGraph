---
okf_version: "0.2"
type: Class
title: Self-Custody
resource: urn:ngm:class:self-custody
domain: blockchain
description: Self-custody is the security model and operational practice whereby an individual or entity retains exclusive, unmediated control of the private cryptographic keys that authorise transactions over their digital assets, entirely without delegating that custody to a centralised exchange, broker, or financial institution. The axiom underpinning self-custody — 'not your keys, not your coins' — reflect
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:key-management
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:seed-phrase
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:random-number-generation
enables:
  - urn:ngm:class:financial-sovereignty
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:de-fi
contrastsWith:
  - urn:ngm:class:custodial-exchange
  - urn:ngm:class:qualified-custodian
  - urn:ngm:class:third-party-custody
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:verifiable-credential-vc
uses:
  - urn:ngm:class:wallet
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:multi-signature
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:cryptography
  - urn:ngm:class:hierarchical-deterministic-wallet
relatedTo:
  - urn:ngm:class:digital-asset
  - urn:ngm:class:bitcoin
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:social-recovery
  - urn:ngm:class:air-gap
  - urn:ngm:class:social-recovery
---

# Self-Custody

Self-custody is the security model and operational practice whereby an individual or entity retains exclusive, unmediated control of the private cryptographic keys that authorise transactions over their digital assets, entirely without delegating that custody to a centralised exchange, broker, or financial institution. The axiom underpinning self-custody — 'not your keys, not your coins' — reflects the fact that whoever controls the private key controls the asset on-chain; counterparty risk from exchange insolvency, fraud, or regulatory asset freezes is therefore eliminated, but operational responsibility for key generation, backup, and signing security is transferred fully to the key holder. Self-custody is realised through software wallets (hot wallets), dedicated hardware security devices (cold wallets), multi-signature threshold schemes that distribute key material across several signatories, and advanced constructions such as threshold signature schemes (TSS) and social recovery wallets. Loss or compromise of the controlling private key or seed phrase results in permanent, irrecoverable loss of the associated assets with no recourse.
