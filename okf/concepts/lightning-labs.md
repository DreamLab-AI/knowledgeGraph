---
okf_version: "0.2"
type: Class
title: Lightning Labs
resource: urn:ngm:class:lightning-labs
domain: blockchain
description: Lightning Labs is a San Francisco-based technology company, founded in 2016 by Elizabeth Stark and Olaoluwa Osuntokun, that builds open-source software and commercial infrastructure for the Bitcoin Lightning Network. The company is the primary maintainer of lnd (Lightning Network Daemon), the most widely deployed Lightning Network implementation, and develops a suite of complementary tools includi
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain-infrastructure
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:lnd
  - urn:ngm:class:loop
  - urn:ngm:class:taproot-assets
  - urn:ngm:class:lightning-node-connect
requires:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:bitcoin-proof-of-work-protocol
enables:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:micropayment
  - urn:ngm:class:streaming-payment
implements:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:bolt-specifications
  - urn:ngm:class:bolt-specifications
contrastsWith:
  - urn:ngm:class:blockstream
  - urn:ngm:class:spiral
bridgesTo:
  - urn:ngm:class:machine-to-machine-payments
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:machine-to-machine-payments
uses:
  - urn:ngm:class:hashed-timelock-contract
  - urn:ngm:class:taproot
  - urn:ngm:class:mu-sig-2
supports:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:decentralised-finance
relatedTo:
  - urn:ngm:class:core-lightning
  - urn:ngm:class:eclair
  - urn:ngm:class:bitcoin-script
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Lightning Labs

Lightning Labs is a San Francisco-based technology company, founded in 2016 by Elizabeth Stark and Olaoluwa Osuntokun, that builds open-source software and commercial infrastructure for the Bitcoin Lightning Network. The company is the primary maintainer of lnd (Lightning Network Daemon), the most widely deployed Lightning Network implementation, and develops a suite of complementary tools including Loop, Pool, Faraday, and Taproot Assets. Lightning Labs contributes to the BOLT (Basis of Lightning Technology) specification process and advances Bitcoin Layer 2 scalability by enabling high-throughput, low-latency micropayments routed through a network of bidirectional payment channels.
