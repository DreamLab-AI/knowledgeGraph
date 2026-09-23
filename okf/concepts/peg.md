---
okf_version: "0.2"
type: Class
title: Peg
resource: urn:ngm:class:peg
domain: finance
description: A peg is a commitment to hold the price of one asset fixed against another — historically a national currency fixed to gold or to the US dollar, and in decentralised finance a stablecoin held at parity with a fiat currency. Maintaining a peg requires reserves, redemption rights, or algorithmic supply adjustment strong enough to absorb market pressure and sustain arbitrage back to parity; when conf
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:exchange-rate
dependsOn:
  - urn:ngm:class:redemption-mechanism
relatedTo:
  - urn:ngm:class:peg-mechanism
  - urn:ngm:class:stablecoin
  - urn:ngm:class:monetary-policy
---

# Peg

A peg is a commitment to hold the price of one asset fixed against another — historically a national currency fixed to gold or to the US dollar, and in decentralised finance a stablecoin held at parity with a fiat currency. Maintaining a peg requires reserves, redemption rights, or algorithmic supply adjustment strong enough to absorb market pressure and sustain arbitrage back to parity; when confidence in these defences fails the peg breaks, as in classic currency crises and stablecoin de-pegging events such as the 2022 TerraUSD collapse.
