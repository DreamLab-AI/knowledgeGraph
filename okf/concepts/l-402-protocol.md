---
okf_version: "0.2"
type: Class
title: L402 Protocol
resource: urn:ngm:class:l-402-protocol
domain: blockchain
description: L402 Protocol is a web-native payment authentication specification that combines HTTP 402 status responses, [[Lightning Network]] BOLT11 invoices, and cryptographic macaroon tokens to enable pay-per-request access control for APIs and web resources. A server responding with 402 embeds a Lightning invoice and a partially-constructed macaroon; the client pays the invoice, receives the payment preima
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:l-402
requires:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:payment-preimage
  - urn:ngm:class:macaroon-token
enables:
  - urn:ngm:class:micropayment
  - urn:ngm:class:pay-per-request
  - urn:ngm:class:api
  - urn:ngm:class:machine-to-machine-payments
  - urn:ngm:class:api
  - urn:ngm:class:machine-to-machine-payments
dependsOn:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:cryptographic-hash-function
implements:
  - urn:ngm:class:http
  - urn:ngm:class:payment-channel
  - urn:ngm:class:http
  - urn:ngm:class:payment-channel
contrastsWith:
  - urn:ngm:class:oauth
  - urn:ngm:class:api-key-authentication
  - urn:ngm:class:subscription-model
bridgesTo:
  - urn:ngm:class:ai-agent
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:web-of-trust
  - urn:ngm:class:autonomous-agent
uses:
  - urn:ngm:class:http
  - urn:ngm:class:bearer-token
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:http
  - urn:ngm:class:bolt11-invoice
supports:
  - urn:ngm:class:api-monetisation
  - urn:ngm:class:content-monetisation
  - urn:ngm:class:access-control
  - urn:ngm:class:access-control
relatedTo:
  - urn:ngm:class:web-monetisation
  - urn:ngm:class:decentralised-identity
---

# L402 Protocol

L402 Protocol is a web-native payment authentication specification that combines HTTP 402 status responses, [[Lightning Network]] BOLT11 invoices, and cryptographic macaroon tokens to enable pay-per-request access control for APIs and web resources. A server responding with 402 embeds a Lightning invoice and a partially-constructed macaroon; the client pays the invoice, receives the payment preimage, and embeds that preimage as a macaroon caveat to form a valid bearer credential. The protocol enables metered, machine-to-machine micropayments without requiring user accounts, subscriptions, or traditional payment rails, making it well-suited to AI agent infrastructure, streaming data services, and censorship-resistant content monetisation.
