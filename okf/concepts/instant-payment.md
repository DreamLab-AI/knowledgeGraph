---
okf_version: "0.2"
type: Class
title: Instant Payment
resource: urn:ngm:class:instant-payment
domain: blockchain
description: Instant payment refers to a funds transfer that is settled and made available to the recipient within seconds, rather than the minutes, hours or days typical of traditional clearing systems. On blockchain networks this is commonly achieved through payment channel networks such as the Lightning Network, which route transactions off-chain to avoid base-layer confirmation latency, or through purpose-
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:payment-system
partOf:
  - urn:ngm:class:payment-system
relatedTo:
  - urn:ngm:class:lightning
  - urn:ngm:class:breez
---

# Instant Payment

Instant payment refers to a funds transfer that is settled and made available to the recipient within seconds, rather than the minutes, hours or days typical of traditional clearing systems. On blockchain networks this is commonly achieved through payment channel networks such as the Lightning Network, which route transactions off-chain to avoid base-layer confirmation latency, or through purpose-built low-latency settlement layers. Instant payment is a key usability requirement for point-of-sale and micropayment use cases, where users expect confirmation comparable to card payments.
