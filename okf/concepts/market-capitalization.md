---
okf_version: "0.2"
type: Class
title: Market Capitalization
resource: urn:ngm:class:market-capitalization
domain: blockchain
description: Market Capitalization in a blockchain context is the aggregate market value of a cryptocurrency or token, computed as the circulating supply multiplied by the current unit price. It serves as a widely used proxy for the relative size, liquidity, and investor confidence of a crypto-economic network, underpinning index construction, risk categorisation, and portfolio weighting decisions by instituti
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
  - urn:ngm:class:economic-mechanism
hasPart:
  - urn:ngm:class:tokenomics
requires:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:token
enables:
  - urn:ngm:class:token-weighted-voting
  - urn:ngm:class:tokenomics-governance
uses:
  - urn:ngm:class:cryptocurrency-token
relatedTo:
  - urn:ngm:class:token-economics
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:liquidity-provision
  - urn:ngm:class:tokenization
  - urn:ngm:class:blockchain-economics
---

# Market Capitalization

Market Capitalization in a blockchain context is the aggregate market value of a cryptocurrency or token, computed as the circulating supply multiplied by the current unit price. It serves as a widely used proxy for the relative size, liquidity, and investor confidence of a crypto-economic network, underpinning index construction, risk categorisation, and portfolio weighting decisions by institutional participants. Critically, market capitalisation is a lagging and manipulable metric: thin order books, wash trading, and locked but counted supply can inflate the figure well beyond the value that could be liquidated in practice.
