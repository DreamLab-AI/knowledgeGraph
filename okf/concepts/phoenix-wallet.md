---
okf_version: "0.2"
type: Class
title: Phoenix Wallet
resource: urn:ngm:class:phoenix-wallet
domain: blockchain
description: Phoenix is a non-custodial Bitcoin Lightning wallet developed by ACINQ, the team behind the Eclair implementation, that automates channel management so that users experience Lightning payments without manually opening or balancing channels. It keeps users in self-custody of their keys while abstracting liquidity provisioning, on-the-fly channel creation, and fee handling, making the Lightning Netw
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:non-custodial-wallet
hasPart:
  - urn:ngm:class:wallet
requires:
  - urn:ngm:class:bitcoin
enables:
  - urn:ngm:class:self-custody
dependsOn:
  - urn:ngm:class:eclair
implements:
  - urn:ngm:class:non-custodial-wallet
contrastsWith:
  - urn:ngm:class:cryptocurrency-exchange
uses:
  - urn:ngm:class:lightning-network
supports:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:self-custody
partOf:
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:eclair
  - urn:ngm:class:acinq
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Phoenix Wallet

Phoenix is a non-custodial Bitcoin Lightning wallet developed by ACINQ, the team behind the Eclair implementation, that automates channel management so that users experience Lightning payments without manually opening or balancing channels. It keeps users in self-custody of their keys while abstracting liquidity provisioning, on-the-fly channel creation, and fee handling, making the Lightning Network accessible to non-technical mobile users.
