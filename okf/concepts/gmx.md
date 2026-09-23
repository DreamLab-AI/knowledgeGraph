---
okf_version: "0.2"
type: Class
title: GMX
resource: urn:ngm:class:gmx
domain: blockchain
description: GMX is a decentralised spot and perpetual-futures exchange deployed on the Arbitrum and Avalanche networks. It allows traders to take leveraged positions against a shared multi-asset liquidity pool rather than a traditional order book, with prices supplied by external oracles. Liquidity providers deposit assets into the pool and earn a share of trading fees while acting as the counterparty to trad
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:de-fi
  - urn:ngm:class:decentralised-finance-domain
hasPart:
  - urn:ngm:class:liquidity-pool
requires:
  - urn:ngm:class:oracle
  - urn:ngm:class:arbitrum
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:perpetual-futures
  - urn:ngm:class:leveraged-trading
  - urn:ngm:class:liquidity-provision
dependsOn:
  - urn:ngm:class:arbitrum
  - urn:ngm:class:avalanche
  - urn:ngm:class:chainlink-oracles
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
implements:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:liquidity-pool
contrastsWith:
  - urn:ngm:class:d-yd-x
  - urn:ngm:class:order-book-exchange
  - urn:ngm:class:centralised-exchange
bridgesTo:
  - urn:ngm:class:token-economics
  - urn:ngm:class:risk-management
  - urn:ngm:class:d-yd-x
  - urn:ngm:class:automated-market-maker
uses:
  - urn:ngm:class:oracle
  - urn:ngm:class:liquidation-mechanism
partOf:
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:uniswap
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:yield-farming
---

# GMX

GMX is a decentralised spot and perpetual-futures exchange deployed on the Arbitrum and Avalanche networks. It allows traders to take leveraged positions against a shared multi-asset liquidity pool rather than a traditional order book, with prices supplied by external oracles. Liquidity providers deposit assets into the pool and earn a share of trading fees while acting as the counterparty to traders.
