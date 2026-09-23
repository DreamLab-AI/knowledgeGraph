---
okf_version: "0.2"
type: Class
title: Commercial Bank
resource: urn:ngm:class:commercial-bank
domain: finance
description: A commercial bank is a deposit-taking financial institution that accepts deposits from the public, extends loans and provides payment and related financial services. Through lending against a fraction of its deposits it participates in money creation and the transmission of monetary policy. Commercial banks are central to retail and corporate finance and operate under prudential regulation and cap
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:monetary-system
hasPart:
  - urn:ngm:class:payment-system
  - urn:ngm:class:lending-protocol
requires:
  - urn:ngm:class:basel-iii
  - urn:ngm:class:liquidity-coverage-ratio
dependsOn:
  - urn:ngm:class:monetary-system
  - urn:ngm:class:liquidity
implements:
  - urn:ngm:class:monetary-policy-transmission
contrastsWith:
  - urn:ngm:class:central-bank
  - urn:ngm:class:shadow-banking
uses:
  - urn:ngm:class:digital-payment-system
supports:
  - urn:ngm:class:payment-settlement
  - urn:ngm:class:liquidity-provision
relatedTo:
  - urn:ngm:class:correspondent-banking
  - urn:ngm:class:traditional-banking
---

# Commercial Bank

A commercial bank is a deposit-taking financial institution that accepts deposits from the public, extends loans and provides payment and related financial services. Through lending against a fraction of its deposits it participates in money creation and the transmission of monetary policy. Commercial banks are central to retail and corporate finance and operate under prudential regulation and capital requirements.
