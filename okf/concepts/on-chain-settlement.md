---
okf_version: "0.2"
type: Class
title: On Chain Settlement
resource: urn:ngm:class:on-chain-settlement
domain: blockchain
description: On chain settlement is the process by which the transfer of value or assets between parties is recorded directly on a distributed ledger and becomes economically irreversible according to the ledger's consensus rules. Unlike off-chain or netting arrangements that defer ledger updates, on chain settlement writes each transaction's final state into the canonical chain, removing the need for a truste
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:settlement-finality
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:gas-fee
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:tokenization
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:settlement-finality
contrastsWith:
  - urn:ngm:class:rollup
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:stablecoin
relatedTo:
  - urn:ngm:class:digital-asset
  - urn:ngm:class:payment-rail
  - urn:ngm:class:transaction-throughput
---

# On Chain Settlement

On chain settlement is the process by which the transfer of value or assets between parties is recorded directly on a distributed ledger and becomes economically irreversible according to the ledger's consensus rules. Unlike off-chain or netting arrangements that defer ledger updates, on chain settlement writes each transaction's final state into the canonical chain, removing the need for a trusted central clearing intermediary. Settlement is considered complete once the relevant transaction attains the chain's finality guarantee, after which reversal requires violating consensus. It underpins payment, securities, and decentralised finance flows on public and permissioned blockchains.
