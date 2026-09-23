---
okf_version: "0.2"
type: Class
title: F2Pool
resource: urn:ngm:class:f-2-pool
domain: blockchain
description: F2Pool is one of the oldest Bitcoin mining pools, allowing miners to combine hash power and share block rewards. It also supports mining for other cryptocurrencies.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:mining-pool
requires:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
enables:
  - urn:ngm:class:transaction-validation
bridgesTo:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
---

# F2Pool

F2Pool is one of the oldest Bitcoin mining pools, allowing miners to combine hash power and share block rewards. It also supports mining for other cryptocurrencies.
