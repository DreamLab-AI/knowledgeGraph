---
okf_version: "0.2"
type: Class
title: Derivatives Trading
resource: urn:ngm:class:derivatives-trading
domain: blockchain
description: Derivatives trading is the buying and selling of financial contracts whose value is derived from an underlying asset, index or rate, such as futures, options, swaps and perpetual contracts. Traders use these instruments to hedge exposure, gain leveraged directional exposure or speculate on price movements without holding the underlying. In decentralised finance, derivatives are implemented through
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:digital-asset-trading
hasPart:
  - urn:ngm:class:order-book
requires:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:settlement
enables:
  - urn:ngm:class:digital-asset-trading
  - urn:ngm:class:risk-management
dependsOn:
  - urn:ngm:class:settlement
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:automated-market-maker
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:order-book
supports:
  - urn:ngm:class:risk-management
relatedTo:
  - urn:ngm:class:digital-asset-trading
  - urn:ngm:class:blockchain
---

# Derivatives Trading

Derivatives trading is the buying and selling of financial contracts whose value is derived from an underlying asset, index or rate, such as futures, options, swaps and perpetual contracts. Traders use these instruments to hedge exposure, gain leveraged directional exposure or speculate on price movements without holding the underlying. In decentralised finance, derivatives are implemented through smart contracts that handle margin, settlement and liquidation on-chain.
