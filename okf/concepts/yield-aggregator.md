---
okf_version: "0.2"
type: Class
title: Yield Aggregator
resource: urn:ngm:class:yield-aggregator
domain: blockchain
description: A yield aggregator is a decentralised-finance protocol that automatically routes deposited assets across multiple yield-bearing strategies — such as lending markets, liquidity pools, and staking — to maximise returns while compounding rewards on the user's behalf. By pooling capital and automating strategy selection, reward harvesting, and reinvestment, aggregators reduce gas costs and operational
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:decentralised-finance
hasPart:
  - urn:ngm:class:vault
  - urn:ngm:class:liquidity-pool
enables:
  - urn:ngm:class:yield-optimisation
  - urn:ngm:class:yield-farming
dependsOn:
  - urn:ngm:class:liquidity-mining
implements:
  - urn:ngm:class:erc-4626
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:lending-protocol
  - urn:ngm:class:staking
supports:
  - urn:ngm:class:composability
partOf:
  - urn:ngm:class:decentralised-finance
  - urn:ngm:class:decentralised-finance
relatedTo:
  - urn:ngm:class:governance-token
  - urn:ngm:class:total-value-locked
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Yield Aggregator

A yield aggregator is a decentralised-finance protocol that automatically routes deposited assets across multiple yield-bearing strategies — such as lending markets, liquidity pools, and staking — to maximise returns while compounding rewards on the user's behalf. By pooling capital and automating strategy selection, reward harvesting, and reinvestment, aggregators reduce gas costs and operational complexity for individual depositors. Modern aggregators frequently expose tokenised vault shares conforming to standards such as ERC-4626, making positions composable with the wider DeFi ecosystem.
