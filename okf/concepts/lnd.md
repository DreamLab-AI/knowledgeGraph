---
okf_version: "0.2"
type: Class
title: LND
resource: urn:ngm:class:lnd
domain: blockchain
description: LND (Lightning Network Daemon) is a production-grade, open-source implementation of a Bitcoin Lightning Network node developed by Lightning Labs. It manages the full lifecycle of payment channels — from on-chain funding and cooperative or force-close settlement to off-chain routing of multi-hop payments — exposing a gRPC and REST API that downstream wallets, exchanges, and applications consume. LN
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:lightning-network
hasPart:
  - urn:ngm:class:watchtower
  - urn:ngm:class:channel-graph
  - urn:ngm:class:lncli
requires:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:payment-channel
  - urn:ngm:class:bitcoin
  - urn:ngm:class:bitcoin-proof-of-work-protocol-core
enables:
  - urn:ngm:class:micropayment
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:streaming-payments
  - urn:ngm:class:keysend
implements:
  - urn:ngm:class:bolt-specifications
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:bolt-specifications
contrastsWith:
  - urn:ngm:class:core-lightning
  - urn:ngm:class:eclair
bridgesTo:
  - urn:ngm:class:layer-2-protocol
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:g-rpc
  - urn:ngm:class:onion-routing
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:macaroon-authentication
relatedTo:
  - urn:ngm:class:taproot-assets
  - urn:ngm:class:loop
  - urn:ngm:class:lightning-loop
  - urn:ngm:class:lightning-pool
  - urn:ngm:class:multi-path-payment
  - urn:ngm:class:autopilot
---

# LND

LND (Lightning Network Daemon) is a production-grade, open-source implementation of a Bitcoin Lightning Network node developed by Lightning Labs. It manages the full lifecycle of payment channels — from on-chain funding and cooperative or force-close settlement to off-chain routing of multi-hop payments — exposing a gRPC and REST API that downstream wallets, exchanges, and applications consume. LND implements the BOLT (Basis of Lightning Technology) protocol specifications and employs Hash Time-Locked Contracts (HTLCs) to ensure atomic, trust-minimised payment routing across a peer-to-peer mesh of channels anchored to the Bitcoin base layer.
