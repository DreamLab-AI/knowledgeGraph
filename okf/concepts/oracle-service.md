---
okf_version: "0.2"
type: Class
title: Oracle Service
resource: urn:ngm:class:oracle-service
domain: blockchain
description: A service that supplies external data to smart contracts, bridging the gap between on-chain logic and off-chain information such as prices, events or sensor readings. It provides the inputs that contracts cannot read directly from the blockchain.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:price-oracle
requires:
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:de-fi
bridgesTo:
  - urn:ngm:class:chainlink
  - urn:ngm:class:optimistic-oracle
---

# Oracle Service

A service that supplies external data to smart contracts, bridging the gap between on-chain logic and off-chain information such as prices, events or sensor readings. It provides the inputs that contracts cannot read directly from the blockchain.
