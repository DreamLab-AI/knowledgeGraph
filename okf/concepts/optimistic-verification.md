---
okf_version: "0.2"
type: Class
title: Optimistic Verification
resource: urn:ngm:class:optimistic-verification
domain: blockchain
description: Optimistic Verification is a security model in which state transitions or cross-chain messages are presumed valid and accepted after a challenge period unless a fraud proof demonstrates otherwise. It avoids the cost of validating every claim upfront, relying instead on economically incentivized watchers to detect and dispute invalid assertions. The approach underpins optimistic rollups and many cr
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
relatedTo:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:blockchain-interoperability
---

# Optimistic Verification

Optimistic Verification is a security model in which state transitions or cross-chain messages are presumed valid and accepted after a challenge period unless a fraud proof demonstrates otherwise. It avoids the cost of validating every claim upfront, relying instead on economically incentivized watchers to detect and dispute invalid assertions. The approach underpins optimistic rollups and many cross-chain bridge designs that prioritize throughput over instant finality.
