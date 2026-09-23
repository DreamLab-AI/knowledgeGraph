---
okf_version: "0.2"
type: Class
title: Algorithmic Stablecoin
resource: urn:ngm:class:algorithmic-stablecoin
domain: blockchain
description: An algorithmic stablecoin is a cryptocurrency that seeks to maintain a stable peg, typically to a fiat unit, through on-chain algorithmic supply adjustments and incentive mechanisms rather than full reserves of external collateral. Smart contracts expand or contract token supply, often using a companion volatility-absorbing token, to push the market price toward target. The model contrasts with fi
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:stablecoin
requires:
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:de-fi
dependsOn:
  - urn:ngm:class:price-oracle
implements:
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:price-oracle
supports:
  - urn:ngm:class:peg
partOf:
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:tether
  - urn:ngm:class:dai
  - urn:ngm:class:terra
  - urn:ngm:class:usd-coin
---

# Algorithmic Stablecoin

An algorithmic stablecoin is a cryptocurrency that seeks to maintain a stable peg, typically to a fiat unit, through on-chain algorithmic supply adjustments and incentive mechanisms rather than full reserves of external collateral. Smart contracts expand or contract token supply, often using a companion volatility-absorbing token, to push the market price toward target. The model contrasts with fiat- and crypto-collateralised stablecoins and has proven fragile, with several high-profile de-peg failures.
