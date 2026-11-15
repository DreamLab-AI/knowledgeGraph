---
okf_version: "0.2"
type: Class
title: Discreet Log Contracts
resource: urn:ngm:class:discreet-log-contracts
domain: blockchain
description: A scheme for executing conditional Bitcoin payments based on signed outcomes from external oracles, where the contract logic stays off-chain and only the settled transaction is broadcast.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:smart-contract
requires:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:cryptographic-proof
enables:
  - urn:ngm:class:atomic-swap
bridgesTo:
  - urn:ngm:class:bitcoin-script
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Discreet Log Contracts

A scheme for executing conditional Bitcoin payments based on signed outcomes from external oracles, where the contract logic stays off-chain and only the settled transaction is broadcast.
