---
okf_version: "0.2"
type: Class
title: Payment Preimage
resource: urn:ngm:class:payment-preimage
domain: blockchain
description: A payment preimage is the secret value whose cryptographic hash forms a payment hash used to lock funds in a Hash Time-Locked Contract on the Lightning Network. Revealing the preimage proves that the intended recipient received the payment and simultaneously releases the locked funds along every hop of the payment route. It is the mechanism that lets protocols such as BOLT11 invoices and L402 guar
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:lightning-network
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Payment Preimage

A payment preimage is the secret value whose cryptographic hash forms a payment hash used to lock funds in a Hash Time-Locked Contract on the Lightning Network. Revealing the preimage proves that the intended recipient received the payment and simultaneously releases the locked funds along every hop of the payment route. It is the mechanism that lets protocols such as BOLT11 invoices and L402 guarantee atomic, trustless settlement across multi-hop payment channels.
