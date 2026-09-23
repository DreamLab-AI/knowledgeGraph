---
okf_version: "0.2"
type: Class
title: Payment Routing
resource: urn:ngm:class:payment-routing
domain: blockchain
description: "Payment routing is the process of determining a viable path along which value moves from a payer to a payee across one or more intermediaries, payment channels or networks. In layered payment systems such as the Lightning Network it involves finding a sequence of hops with sufficient liquidity and acceptable fees, whereas in conventional rails it selects acquirers, schemes or correspondent banks. "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:payment-processing
requires:
  - urn:ngm:class:liquidity
  - urn:ngm:class:routing-table
enables:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:open-banking
dependsOn:
  - urn:ngm:class:routing-algorithm
  - urn:ngm:class:liquidity
implements:
  - urn:ngm:class:htlc
  - urn:ngm:class:routing-algorithm
contrastsWith:
  - urn:ngm:class:payment-gateway
bridgesTo:
  - urn:ngm:class:routing-algorithm
uses:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:transaction-fee
supports:
  - urn:ngm:class:payment-gateway
  - urn:ngm:class:payment-network
partOf:
  - urn:ngm:class:payment-network
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:payment-processing
---

# Payment Routing

Payment routing is the process of determining a viable path along which value moves from a payer to a payee across one or more intermediaries, payment channels or networks. In layered payment systems such as the Lightning Network it involves finding a sequence of hops with sufficient liquidity and acceptable fees, whereas in conventional rails it selects acquirers, schemes or correspondent banks. Routing decisions balance cost, success probability, latency and privacy.
