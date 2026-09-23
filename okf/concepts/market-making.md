---
okf_version: "0.2"
type: Class
title: Market Making
resource: urn:ngm:class:market-making
domain: finance
description: Market making is the practice of continuously quoting firm bid and ask prices for a financial asset or token, providing counterparty liquidity to traders who wish to buy or sell without waiting for a natural matching order. A market maker earns the bid-ask spread as compensation for bearing inventory risk and adverse-selection risk from better-informed traders. In traditional venues the function i
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:liquidity-provision
hasPart:
  - urn:ngm:class:bid-ask-spread
  - urn:ngm:class:inventory-risk
  - urn:ngm:class:quote-refresh
requires:
  - urn:ngm:class:capital-allocation
  - urn:ngm:class:risk-management
enables:
  - urn:ngm:class:price-discovery
  - urn:ngm:class:liquidity
  - urn:ngm:class:trade-execution
  - urn:ngm:class:liquidity
contrastsWith:
  - urn:ngm:class:high-frequency-trading
bridgesTo:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:order-book
  - urn:ngm:class:limit-order
  - urn:ngm:class:hedging
partOf:
  - urn:ngm:class:financial-markets
relatedTo:
  - urn:ngm:class:arbitrage
  - urn:ngm:class:algorithmic-trading
  - urn:ngm:class:adverse-selection
  - urn:ngm:class:market-microstructure
---

# Market Making

Market making is the practice of continuously quoting firm bid and ask prices for a financial asset or token, providing counterparty liquidity to traders who wish to buy or sell without waiting for a natural matching order. A market maker earns the bid-ask spread as compensation for bearing inventory risk and adverse-selection risk from better-informed traders. In traditional venues the function is performed by designated dealers or algorithmic trading firms managing limit-order books; in decentralised finance it is automated by liquidity-pool protocols that replace human quoting with deterministic pricing curves. The activity is fundamental to functional markets because it converts latent supply and demand into observable, executable prices through continuous [[Price Discovery]].
