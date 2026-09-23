---
okf_version: "0.2"
type: Class
title: Time Lock
resource: urn:ngm:class:time-lock
domain: blockchain
description: A time lock is a cryptographic and protocol-level constraint that prevents the spending or execution of funds, transactions, or governance actions until a specified time or block height has been reached. Implemented on blockchains through absolute and relative locktime fields and dedicated script opcodes, time locks enforce delayed settlement, contestation windows, and staged execution without tru
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:smart-contract
requires:
  - urn:ngm:class:consensus
enables:
  - urn:ngm:class:atomic-swap
dependsOn:
  - urn:ngm:class:consensus
  - urn:ngm:class:blockchain
implements:
  - urn:ngm:class:timelock
contrastsWith:
  - urn:ngm:class:multisignature
bridgesTo:
  - urn:ngm:class:hashed-timelock-contract
  - urn:ngm:class:dao
uses:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:transaction
supports:
  - urn:ngm:class:hashed-timelock-contract
  - urn:ngm:class:lightning-network
  - urn:ngm:class:governance
partOf:
  - urn:ngm:class:bitcoin-script
relatedTo:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:governance
---

# Time Lock

A time lock is a cryptographic and protocol-level constraint that prevents the spending or execution of funds, transactions, or governance actions until a specified time or block height has been reached. Implemented on blockchains through absolute and relative locktime fields and dedicated script opcodes, time locks enforce delayed settlement, contestation windows, and staged execution without trusting a third party. They are foundational to payment channels, atomic swaps, vesting schedules, and the safety delays in DAO governance, where they give participants time to react before irreversible actions occur.
