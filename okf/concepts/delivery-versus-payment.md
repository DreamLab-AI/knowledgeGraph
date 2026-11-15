---
okf_version: "0.2"
type: Class
title: Delivery-Versus-Payment
resource: urn:ngm:class:delivery-versus-payment
domain: finance
description: Delivery-Versus-Payment (DvP) is a securities settlement mechanism that links the transfer of a financial instrument to the simultaneous transfer of payment, ensuring that delivery occurs if and only if payment occurs, thereby eliminating principal risk in securities transactions. It is the standard settlement model mandated or strongly encouraged by financial market infrastructures globally.
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:payment-system
requires:
  - urn:ngm:class:financial-infrastructure
enables:
  - urn:ngm:class:digital-asset-trading
  - urn:ngm:class:custody-infrastructure
uses:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:digital-asset
relatedTo:
  - urn:ngm:class:digital-asset-market
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Delivery-Versus-Payment

Delivery-Versus-Payment (DvP) is a securities settlement mechanism that links the transfer of a financial instrument to the simultaneous transfer of payment, ensuring that delivery occurs if and only if payment occurs, thereby eliminating principal risk in securities transactions. It is the standard settlement model mandated or strongly encouraged by financial market infrastructures globally.
