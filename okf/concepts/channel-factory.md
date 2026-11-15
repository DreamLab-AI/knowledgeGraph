---
okf_version: "0.2"
type: Class
title: Channel Factory
resource: urn:ngm:class:channel-factory
domain: blockchain
description: A channel factory is a Bitcoin Lightning Network scaling construction in which multiple participants share a single on-chain funding transaction (a multiparty channel) from which many off-chain payment channels can be opened, closed, and rebalanced without further on-chain transactions. By amortising one on-chain output across many channels, it reduces the on-chain footprint and cost of channel ma
maturity: experimental
quality: 0.72
is-a:
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:lightning-network
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Channel Factory

A channel factory is a Bitcoin Lightning Network scaling construction in which multiple participants share a single on-chain funding transaction (a multiparty channel) from which many off-chain payment channels can be opened, closed, and rebalanced without further on-chain transactions. By amortising one on-chain output across many channels, it reduces the on-chain footprint and cost of channel management. It matters because it improves the capital efficiency and scalability of layer-2 payments.
