---
okf_version: "0.2"
type: Class
title: dYdX
resource: urn:ngm:class:d-yd-x
domain: blockchain
description: "dYdX is a decentralised exchange focused on perpetual-futures trading, allowing users to take leveraged long and short positions on cryptocurrencies. Earlier versions operated on Ethereum using a layer-two scaling solution with an off-chain order book and on-chain settlement, while a later version migrated to a purpose-built application-specific blockchain in the Cosmos ecosystem. It combines the "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:de-fi
  - urn:ngm:class:decentralised-finance-domain
hasPart:
  - urn:ngm:class:order-book
  - urn:ngm:class:liquidation-engine
requires:
  - urn:ngm:class:order-book
  - urn:ngm:class:smart-contract
  - urn:ngm:class:collateral-management
  - urn:ngm:class:validator-set
enables:
  - urn:ngm:class:perpetual-futures
  - urn:ngm:class:leveraged-trading
dependsOn:
  - urn:ngm:class:cosmos
  - urn:ngm:class:tendermint-consensus
  - urn:ngm:class:zero-knowledge-rollup
implements:
  - urn:ngm:class:order-book
  - urn:ngm:class:application-specific-blockchain
contrastsWith:
  - urn:ngm:class:gmx
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:centralised-exchange
bridgesTo:
  - urn:ngm:class:cosmos
  - urn:ngm:class:derivatives-trading
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:gmx
uses:
  - urn:ngm:class:on-chain-settlement
  - urn:ngm:class:governance-token
partOf:
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:ethereum
---

# dYdX

dYdX is a decentralised exchange focused on perpetual-futures trading, allowing users to take leveraged long and short positions on cryptocurrencies. Earlier versions operated on Ethereum using a layer-two scaling solution with an off-chain order book and on-chain settlement, while a later version migrated to a purpose-built application-specific blockchain in the Cosmos ecosystem. It combines the order-book trading experience of centralised venues with non-custodial settlement.
