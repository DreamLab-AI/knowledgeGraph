---
okf_version: "0.2"
type: Class
title: Watchtower
resource: urn:ngm:class:watchtower
domain: blockchain
description: A watchtower is a third-party service in payment-channel networks such as the Lightning Network that monitors the blockchain on a client's behalf and reacts to fraudulent channel-closure attempts. When a counterparty broadcasts a revoked, outdated channel state, the watchtower submits a penalty (justice) transaction that claims the cheater's funds, allowing the honest party to remain offline safel
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:lightning-network
hasPart:
  - urn:ngm:class:hash-function
enables:
  - urn:ngm:class:liquidity
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:nonce
contrastsWith:
  - urn:ngm:class:centralised-finance
uses:
  - urn:ngm:class:lnd
  - urn:ngm:class:encryption
supports:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:lightning
partOf:
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:consensus-mechanism
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Watchtower

A watchtower is a third-party service in payment-channel networks such as the Lightning Network that monitors the blockchain on a client's behalf and reacts to fraudulent channel-closure attempts. When a counterparty broadcasts a revoked, outdated channel state, the watchtower submits a penalty (justice) transaction that claims the cheater's funds, allowing the honest party to remain offline safely. Watchtowers store encrypted justice transactions indexed by transaction hints so they learn nothing about channel contents.
