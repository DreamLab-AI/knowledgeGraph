---
okf_version: "0.2"
type: Class
title: Unlocking Script
resource: urn:ngm:class:unlocking-script
domain: blockchain
description: The script supplied in a Bitcoin transaction input, historically called scriptSig, that satisfies the spending conditions imposed by the locking script of the unspent output it references, typically by providing digital signatures and public keys; the input is valid only if executing the unlocking script followed by the locking script leaves a true value on the stack, proving authorisation to spen
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:script
contrastsWith:
  - urn:ngm:class:locking-script
uses:
  - urn:ngm:class:digital-signature
partOf:
  - urn:ngm:class:bitcoin-transaction
  - urn:ngm:class:utxo
relatedTo:
  - urn:ngm:class:utxo-model
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Unlocking Script

The script supplied in a Bitcoin transaction input, historically called scriptSig, that satisfies the spending conditions imposed by the locking script of the unspent output it references, typically by providing digital signatures and public keys; the input is valid only if executing the unlocking script followed by the locking script leaves a true value on the stack, proving authorisation to spend the UTXO.
