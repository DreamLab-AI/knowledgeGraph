---
okf_version: "0.2"
type: Class
title: Peg Mechanism
resource: urn:ngm:class:peg-mechanism
domain: blockchain
description: A peg mechanism is the set of economic and technical arrangements by which a token maintains a stable exchange rate against a reference asset such as a fiat currency or another token. It typically combines collateral backing, minting and redemption rules, and arbitrage incentives so that market deviations from the target price are pushed back towards parity. The design of the peg mechanism determi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:stablecoin
hasPart:
  - urn:ngm:class:peg
  - urn:ngm:class:collateral
requires:
  - urn:ngm:class:collateral
  - urn:ngm:class:liquidity
enables:
  - urn:ngm:class:price-stability
dependsOn:
  - urn:ngm:class:arbitrage
  - urn:ngm:class:liquidity
implements:
  - urn:ngm:class:price-stability
contrastsWith:
  - urn:ngm:class:algorithmic-stablecoin
bridgesTo:
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:arbitrage
  - urn:ngm:class:collateral
  - urn:ngm:class:minting
  - urn:ngm:class:minting
supports:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:wrapped-token
partOf:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:wrapped-token
relatedTo:
  - urn:ngm:class:peg
  - urn:ngm:class:algorithmic-stablecoin
  - urn:ngm:class:dai
---

# Peg Mechanism

A peg mechanism is the set of economic and technical arrangements by which a token maintains a stable exchange rate against a reference asset such as a fiat currency or another token. It typically combines collateral backing, minting and redemption rules, and arbitrage incentives so that market deviations from the target price are pushed back towards parity. The design of the peg mechanism determines how robustly a stablecoin or wrapped asset holds its value under stress.
