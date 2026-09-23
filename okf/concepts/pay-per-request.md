---
okf_version: "0.2"
type: Class
title: Pay-Per-Request
resource: urn:ngm:class:pay-per-request
domain: blockchain
description: Pay-per-request is a pricing and access-control model in which each individual API call or resource request is metered and paid for independently, rather than through a subscription or bulk allocation. It is enabled by protocols such as L402, which gate HTTP responses behind a Lightning Network micropayment, making per-query settlement economically viable for machine-to-machine transactions. It is
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:l-402
partOf:
  - urn:ngm:class:l-402
---

# Pay-Per-Request

Pay-per-request is a pricing and access-control model in which each individual API call or resource request is metered and paid for independently, rather than through a subscription or bulk allocation. It is enabled by protocols such as L402, which gate HTTP responses behind a Lightning Network micropayment, making per-query settlement economically viable for machine-to-machine transactions. It is particularly relevant for AI services that need frictionless, automatable payment for compute-intensive queries.
