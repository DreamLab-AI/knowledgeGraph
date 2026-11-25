---
okf_version: "0.2"
type: Class
title: Non-Custodial Wallet
resource: urn:ngm:class:non-custodial-wallet
domain: blockchain
description: A non-custodial wallet is a cryptocurrency wallet in which the user, rather than a third party, exclusively holds and controls the private keys that authorise transactions. Because no intermediary can move or freeze funds, the user bears full responsibility for key security and recovery, typically managed through a seed phrase. Non-custodial wallets are the technical embodiment of self-custody and
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptocurrency-wallet
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:key-management
enables:
  - urn:ngm:class:self-custody
  - urn:ngm:class:permissionless-trading
dependsOn:
  - urn:ngm:class:custody
implements:
  - urn:ngm:class:self-custody
contrastsWith:
  - urn:ngm:class:custodial-wallet
bridgesTo:
  - urn:ngm:class:decentralisation
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:decentralised-finance
  - urn:ngm:class:account-abstraction
relatedTo:
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:cold-storage
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:digital-wallet
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Non-Custodial Wallet

A non-custodial wallet is a cryptocurrency wallet in which the user, rather than a third party, exclusively holds and controls the private keys that authorise transactions. Because no intermediary can move or freeze funds, the user bears full responsibility for key security and recovery, typically managed through a seed phrase. Non-custodial wallets are the technical embodiment of self-custody and a prerequisite for permissionless interaction with decentralised protocols.
