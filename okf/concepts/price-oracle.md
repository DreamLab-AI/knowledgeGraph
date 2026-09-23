---
okf_version: "0.2"
type: Class
title: Price Oracle
resource: urn:ngm:class:price-oracle
domain: blockchain
description: A price oracle is an on-chain or hybrid data feed that supplies decentralised protocols with reliable, manipulation-resistant market prices for tokens, synthetic assets, and other financial instruments. On-chain price oracles — such as time-weighted average price (TWAP) feeds derived from automated market maker pool reserves — are fully decentralised but lag real-time prices. Off-chain oracle netw
maturity: established
quality: 0
is-a:
  - urn:ngm:class:blockchain-oracle
hasPart:
  - urn:ngm:class:twap-oracle
  - urn:ngm:class:aggregator-feed
requires:
  - urn:ngm:class:data-aggregation
  - urn:ngm:class:cryptographic-signature
enables:
  - urn:ngm:class:lending-protocol
  - urn:ngm:class:synthetic-asset
  - urn:ngm:class:perpetual-futures
  - urn:ngm:class:liquidation-mechanism
  - urn:ngm:class:real-world-asset-tokenisation
  - urn:ngm:class:lending-protocol
dependsOn:
  - urn:ngm:class:oracle-network
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:staking
  - urn:ngm:class:staking
contrastsWith:
  - urn:ngm:class:price-discovery
  - urn:ngm:class:centralised-exchange-feed
  - urn:ngm:class:price-discovery
bridgesTo:
  - urn:ngm:class:tee
  - urn:ngm:class:financial-data-api
supports:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi-protocol
partOf:
  - urn:ngm:class:de-fi
  - urn:ngm:class:defi-infrastructure
relatedTo:
  - urn:ngm:class:flash-loan
  - urn:ngm:class:mev
  - urn:ngm:class:proof-of-reserve
  - urn:ngm:class:mev
---

# Price Oracle

A price oracle is an on-chain or hybrid data feed that supplies decentralised protocols with reliable, manipulation-resistant market prices for tokens, synthetic assets, and other financial instruments. On-chain price oracles — such as time-weighted average price (TWAP) feeds derived from automated market maker pool reserves — are fully decentralised but lag real-time prices. Off-chain oracle networks aggregate prices from multiple centralised and decentralised exchanges before committing them on-chain, offering fresher data at the cost of additional trust assumptions on node operators. Price oracles are foundational to DeFi lending protocols, synthetic asset minting, perpetual futures settlement, and insurance claim adjudication.
