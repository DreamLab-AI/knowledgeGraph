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
---

# Real-Time Gross Settlement

Real-time gross settlement (RTGS) is an interbank payment mechanism in which funds transfers between institutions are settled individually and irrevocably, transaction by transaction, in central-bank money as each instruction is processed. Because settlement is gross rather than netted and occurs continuously throughout the day, RTGS eliminates settlement risk between counterparties at the moment of transfer. National central banks typically operate RTGS systems for large-value, time-critical payments.
