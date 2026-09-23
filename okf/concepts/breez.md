---
okf_version: "0.2"
type: Class
title: Breez
resource: urn:ngm:class:breez
domain: blockchain
description: Breez is a company and open-source platform providing a non-custodial [[Lightning Network]] wallet and a [[Software Development Kit]] (SDK) that enables developers to embed Bitcoin Lightning payments into applications without managing node infrastructure. Breez operates as a Lightning Service Provider (LSP), handling inbound liquidity and channel management on behalf of users while users retain so
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:lightning-network
requires:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:payment-channel
  - urn:ngm:class:liquidity
enables:
  - urn:ngm:class:self-custody
  - urn:ngm:class:instant-payment
  - urn:ngm:class:non-custodial-wallet
dependsOn:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:bitcoin
  - urn:ngm:class:bitcoin
implements:
  - urn:ngm:class:lightning-service-provider
  - urn:ngm:class:just-in-time-liquidity
contrastsWith:
  - urn:ngm:class:custodial-wallet
  - urn:ngm:class:strike
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:open-banking
uses:
  - urn:ngm:class:bolt-11
  - urn:ngm:class:bolt12-offers
  - urn:ngm:class:submarine-swap
  - urn:ngm:class:lnurl
  - urn:ngm:class:greenlight
  - urn:ngm:class:bolt12-offers
relatedTo:
  - urn:ngm:class:phoenix-wallet
  - urn:ngm:class:lnd
  - urn:ngm:class:core-lightning
---

# Breez

Breez is a company and open-source platform providing a non-custodial [[Lightning Network]] wallet and a [[Software Development Kit]] (SDK) that enables developers to embed Bitcoin Lightning payments into applications without managing node infrastructure. Breez operates as a Lightning Service Provider (LSP), handling inbound liquidity and channel management on behalf of users while users retain sole custody of their private keys. The Breez SDK abstracts away the complexity of [[Payment Channel]] lifecycle management, splicing, and [[Liquidity]] provisioning, exposing a clean API for instant, low-fee Bitcoin payments. Its architecture is grounded in the [[LNURL]] protocol suite and [[Greenlight]] node-as-a-service infrastructure from Blockstream.
