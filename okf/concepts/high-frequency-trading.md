---
okf_version: "0.2"
type: Class
title: High-Frequency Trading
resource: urn:ngm:class:high-frequency-trading
domain: finance
description: High-frequency trading (HFT) is a form of automated electronic trading characterised by very high order submission rates, extremely short holding periods and a reliance on minimising latency to gain advantage. HFT firms use co-located servers, optimised networking and algorithmic strategies to react to market signals in microseconds, often acting as market makers or capturing fleeting price discre
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:market-microstructure
requires:
  - urn:ngm:class:latency
enables:
  - urn:ngm:class:liquidity
  - urn:ngm:class:market-making
dependsOn:
  - urn:ngm:class:latency
contrastsWith:
  - urn:ngm:class:market-making
bridgesTo:
  - urn:ngm:class:mev
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:order-book
supports:
  - urn:ngm:class:liquidity
partOf:
  - urn:ngm:class:market-microstructure
relatedTo:
  - urn:ngm:class:quantitative-finance
  - urn:ngm:class:risk-management
  - urn:ngm:class:order-book
---

# High-Frequency Trading

High-frequency trading (HFT) is a form of automated electronic trading characterised by very high order submission rates, extremely short holding periods and a reliance on minimising latency to gain advantage. HFT firms use co-located servers, optimised networking and algorithmic strategies to react to market signals in microseconds, often acting as market makers or capturing fleeting price discrepancies. It is a dominant participant in modern equity, futures and foreign-exchange markets and a central subject of market microstructure research.
