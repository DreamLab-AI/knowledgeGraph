---
okf_version: "0.2"
type: Class
title: BOLT12
resource: urn:ngm:class:bolt-12
domain: blockchain
description: BOLT12 is a Lightning Network specification that defines offers, a reusable payment request format that improves on single-use invoices. It supports recurring and static payment requests, onion messaging for invoice fetching, and improved privacy through blinded paths.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bolt
requires:
  - urn:ngm:class:bolt
  - urn:ngm:class:lightning-network
  - urn:ngm:class:onion-routing
enables:
  - urn:ngm:class:phoenix
  - urn:ngm:class:privacy-preserving
dependsOn:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:payment-channel
contrastsWith:
  - urn:ngm:class:bolt-11
  - urn:ngm:class:payment-request
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:digital-identity
  - urn:ngm:class:bolt-11
uses:
  - urn:ngm:class:tlv-encoding
supports:
  - urn:ngm:class:micropayment
standardizedBy:
  - urn:ngm:class:lightning-network-specification
partOf:
  - urn:ngm:class:lightning-network-specification
relatedTo:
  - urn:ngm:class:payment-protocol
  - urn:ngm:class:invoice
---

# BOLT12

BOLT12 is a Lightning Network specification that defines offers, a reusable payment request format that improves on single-use invoices. It supports recurring and static payment requests, onion messaging for invoice fetching, and improved privacy through blinded paths.
