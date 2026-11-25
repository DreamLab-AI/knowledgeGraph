---
okf_version: "0.2"
type: Class
title: Exchange Custody
resource: urn:ngm:class:exchange-custody
domain: blockchain
description: Exchange custody is the model in which a cryptocurrency exchange or platform holds and controls the private keys to users' digital assets on their behalf, rather than users self-custodying their own keys. The custodian operates wallets, manages security and reconciles internal ledgers crediting customers' balances. This arrangement simplifies user experience and trading but concentrates risk, sinc
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:institutional-custody
requires:
  - urn:ngm:class:key-management
enables:
  - urn:ngm:class:digital-asset
dependsOn:
  - urn:ngm:class:key-management
implements:
  - urn:ngm:class:institutional-custody
contrastsWith:
  - urn:ngm:class:self-custody
bridgesTo:
  - urn:ngm:class:multi-signature-wallet
uses:
  - urn:ngm:class:hot-wallet
  - urn:ngm:class:cold-storage
  - urn:ngm:class:multi-signature-wallet
supports:
  - urn:ngm:class:cryptocurrency-exchange
partOf:
  - urn:ngm:class:cryptocurrency-exchange
relatedTo:
  - urn:ngm:class:institutional-custody
  - urn:ngm:class:cryptocurrency-exchange
  - urn:ngm:class:digital-asset
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Exchange Custody

Exchange custody is the model in which a cryptocurrency exchange or platform holds and controls the private keys to users' digital assets on their behalf, rather than users self-custodying their own keys. The custodian operates wallets, manages security and reconciles internal ledgers crediting customers' balances. This arrangement simplifies user experience and trading but concentrates risk, since users rely on the exchange's solvency, controls and honesty rather than holding their keys directly.
