---
okf_version: "0.2"
type: Class
title: Parametric Insurance
resource: urn:ngm:class:parametric-insurance
domain: blockchain
description: Parametric insurance is a form of coverage that pays a predetermined amount when a measurable trigger event crosses a defined threshold, rather than indemnifying assessed losses. Because payouts depend on objective parameters such as rainfall, wind speed, earthquake magnitude, or flight delay, claims can be settled automatically without loss adjustment. On blockchains, parametric insurance is impl
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:de-fi
requires:
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:arbitrage
dependsOn:
  - urn:ngm:class:blockchain-oracle
  - urn:ngm:class:oracle
contrastsWith:
  - urn:ngm:class:insurance
bridgesTo:
  - urn:ngm:class:supply-chain
uses:
  - urn:ngm:class:blockchain-oracle
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:de-fi
partOf:
  - urn:ngm:class:de-fi
  - urn:ngm:class:insurance
relatedTo:
  - urn:ngm:class:token-economics
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:de-fi
---

# Parametric Insurance

Parametric insurance is a form of coverage that pays a predetermined amount when a measurable trigger event crosses a defined threshold, rather than indemnifying assessed losses. Because payouts depend on objective parameters such as rainfall, wind speed, earthquake magnitude, or flight delay, claims can be settled automatically without loss adjustment. On blockchains, parametric insurance is implemented through smart contracts that consume oracle data to verify triggers and disburse funds, enabling fast, transparent, and trust-minimised settlement.
