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
---

# Phoenix Wallet

Phoenix is a non-custodial Bitcoin Lightning wallet developed by ACINQ, the team behind the Eclair implementation, that automates channel management so that users experience Lightning payments without manually opening or balancing channels. It keeps users in self-custody of their keys while abstracting liquidity provisioning, on-the-fly channel creation, and fee handling, making the Lightning Network accessible to non-technical mobile users.
