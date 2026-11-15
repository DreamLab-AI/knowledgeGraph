---
okf_version: "0.2"
type: Class
title: Payment Channels
resource: urn:ngm:class:payment-channels
domain: blockchain
description: Payment channels are off-chain constructs that let two parties exchange many bitcoin transactions while only recording opening and closing balances on the blockchain.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:payment-channel
requires:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:lightning-network
bridgesTo:
  - urn:ngm:class:lightning-network
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Payment Channels

Payment channels are off-chain constructs that let two parties exchange many bitcoin transactions while only recording opening and closing balances on the blockchain.
