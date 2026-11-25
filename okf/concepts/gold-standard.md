---
okf_version: "0.2"
type: Class
title: Gold Standard
resource: urn:ngm:class:gold-standard
domain: finance
description: A monetary system in which a currency's value is legally fixed to and redeemable in a defined quantity of gold, constraining the total money supply to the size of gold reserves held by the issuing authority. Under this regime, exchange rates between participating countries are effectively fixed because each currency is independently pegged to gold at a known rate, enabling automatic balance-of-pay
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:monetary-system
requires:
  - urn:ngm:class:gold-reserve
  - urn:ngm:class:currency-convertibility
  - urn:ngm:class:fixed-exchange-rate
enables:
  - urn:ngm:class:price-stability
  - urn:ngm:class:international-trade
  - urn:ngm:class:balance-of-payments
dependsOn:
  - urn:ngm:class:central-bank
  - urn:ngm:class:monetary-policy
contrastsWith:
  - urn:ngm:class:fiat-currency
  - urn:ngm:class:quantitative-easing
  - urn:ngm:class:floating-exchange-rate
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptocurrency
partOf:
  - urn:ngm:class:monetary-system
  - urn:ngm:class:international-monetary-system
relatedTo:
  - urn:ngm:class:inflation
  - urn:ngm:class:commodity-money
  - urn:ngm:class:reserve-currency
  - urn:ngm:class:bretton-woods-system
  - urn:ngm:class:deflation
  - urn:ngm:class:currency-peg
  - urn:ngm:class:specie-flow-mechanism
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Gold Standard

A monetary system in which a currency's value is legally fixed to and redeemable in a defined quantity of gold, constraining the total money supply to the size of gold reserves held by the issuing authority. Under this regime, exchange rates between participating countries are effectively fixed because each currency is independently pegged to gold at a known rate, enabling automatic balance-of-payments adjustment through the price-specie-flow mechanism. The classical gold standard operated broadly from the 1870s until the outbreak of World War I in 1914, was briefly restored in modified forms during the interwar period, and gave way to the Bretton Woods system of dollar-gold convertibility in 1944, which itself ended in 1971 when the United States suspended gold convertibility.
