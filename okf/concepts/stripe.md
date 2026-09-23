---
okf_version: "0.2"
type: Class
title: Stripe
resource: urn:ngm:class:stripe
domain: finance
description: Stripe is a financial technology company founded in 2010 that provides programmable payment infrastructure, APIs, and financial services software enabling businesses to accept online and in-person payments, manage subscriptions, issue cards, and access embedded financial tooling. It operates as a payment service provider and merchant acquirer, abstracting the complexity of card networks, banking r
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:payment-network
hasPart:
  - urn:ngm:class:fraud-detection
requires:
  - urn:ngm:class:payment-network
  - urn:ngm:class:kyc-aml-compliance
  - urn:ngm:class:banking-rail
enables:
  - urn:ngm:class:financial-services
  - urn:ngm:class:e-commerce
  - urn:ngm:class:marketplace
  - urn:ngm:class:marketplace
  - urn:ngm:class:embedded-finance
contrastsWith:
  - urn:ngm:class:pay-pal
  - urn:ngm:class:square
  - urn:ngm:class:adyen
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:stablecoin
uses:
  - urn:ngm:class:rest-api
  - urn:ngm:class:webhook
  - urn:ngm:class:tokenization
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:neural-network-text-tokenisation
supports:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:open-banking
partOf:
  - urn:ngm:class:financial-services
relatedTo:
  - urn:ngm:class:payment-gateway
  - urn:ngm:class:pci-dss
  - urn:ngm:class:merchant-acquiring
---

# Stripe

Stripe is a financial technology company founded in 2010 that provides programmable payment infrastructure, APIs, and financial services software enabling businesses to accept online and in-person payments, manage subscriptions, issue cards, and access embedded financial tooling. It operates as a payment service provider and merchant acquirer, abstracting the complexity of card networks, banking rails, and compliance into developer-friendly interfaces. Stripe's platform spans payment processing, revenue management, fraud detection, tax computation, and banking-as-a-service, making it a foundational layer of the internet economy. Its products serve businesses ranging from independent developers to large enterprises across more than 135 countries.
