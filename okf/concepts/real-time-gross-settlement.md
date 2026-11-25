---
okf_version: "0.2"
type: Class
title: Real-Time Gross Settlement
resource: urn:ngm:class:real-time-gross-settlement
domain: finance
description: "Real-time gross settlement (RTGS) is an interbank payment mechanism in which funds transfers between institutions are settled individually and irrevocably, transaction by transaction, in central-bank money as each instruction is processed. Because settlement is gross rather than netted and occurs continuously throughout the day, RTGS eliminates settlement risk between counterparties at the moment "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:payment-system
hasPart:
  - urn:ngm:class:central-bank
requires:
  - urn:ngm:class:liquidity
enables:
  - urn:ngm:class:trustless-settlement
dependsOn:
  - urn:ngm:class:central-bank
implements:
  - urn:ngm:class:transaction
contrastsWith:
  - urn:ngm:class:blockchain
bridgesTo:
  - urn:ngm:class:swift
supports:
  - urn:ngm:class:financial-services
  - urn:ngm:class:financial-infrastructure
partOf:
  - urn:ngm:class:financial-infrastructure
relatedTo:
  - urn:ngm:class:payment-system
  - urn:ngm:class:financial-infrastructure
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Real-Time Gross Settlement

Real-time gross settlement (RTGS) is an interbank payment mechanism in which funds transfers between institutions are settled individually and irrevocably, transaction by transaction, in central-bank money as each instruction is processed. Because settlement is gross rather than netted and occurs continuously throughout the day, RTGS eliminates settlement risk between counterparties at the moment of transfer. National central banks typically operate RTGS systems for large-value, time-critical payments.
