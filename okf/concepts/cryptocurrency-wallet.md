---
okf_version: "0.2"
type: Class
title: Cryptocurrency Wallet
resource: urn:ngm:class:cryptocurrency-wallet
domain: blockchain
description: A cryptocurrency wallet is software or hardware that manages the cryptographic keys controlling blockchain assets and constructs, signs and broadcasts transactions on a user's behalf. It does not store coins, which exist only as ledger entries, but rather safeguards the private keys that authorise spending and prove ownership. Wallets range from custodial services that hold keys for users to non-c
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:wallet
hasPart:
  - urn:ngm:class:private-key
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:key-management
enables:
  - urn:ngm:class:decentralised-application
dependsOn:
  - urn:ngm:class:blockchain
implements:
  - urn:ngm:class:key-management
bridgesTo:
  - urn:ngm:class:decentralised-application
uses:
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:self-custody
  - urn:ngm:class:custody
partOf:
  - urn:ngm:class:cryptocurrency
relatedTo:
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:staking
  - urn:ngm:class:de-fi
---

# Cryptocurrency Wallet

A cryptocurrency wallet is software or hardware that manages the cryptographic keys controlling blockchain assets and constructs, signs and broadcasts transactions on a user's behalf. It does not store coins, which exist only as ledger entries, but rather safeguards the private keys that authorise spending and prove ownership. Wallets range from custodial services that hold keys for users to non-custodial and hardware wallets that give users sole control.
