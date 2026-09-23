---
okf_version: "0.2"
type: Class
title: QBFT
resource: urn:ngm:class:qbft
domain: blockchain
description: QBFT is a Byzantine fault tolerant consensus algorithm used in enterprise Ethereum clients to provide immediate finality among a known set of validators. It tolerates a minority of faulty or malicious validators.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:byzantine-fault-tolerance
requires:
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:byzantine-fault-tolerance
enables:
  - urn:ngm:class:distributed-ledger-technology
bridgesTo:
  - urn:ngm:class:ethereum-smart-contract-platform
---

# QBFT

QBFT is a Byzantine fault tolerant consensus algorithm used in enterprise Ethereum clients to provide immediate finality among a known set of validators. It tolerates a minority of faulty or malicious validators.
