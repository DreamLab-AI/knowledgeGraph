---
okf_version: "0.2"
type: Class
title: Locking Script
resource: urn:ngm:class:locking-script
domain: blockchain
description: A locking script (also called scriptPubKey or an output script) is the predicate attached to a transaction output in UTXO-based blockchains that specifies the conditions under which that output may later be spent. To redeem the output, a spending transaction must supply an unlocking script whose combination with the locking script evaluates to true. Locking scripts encode spending policies ranging
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:utxo-model
hasPart:
  - urn:ngm:class:hash-function
requires:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:public-key-cryptography
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:transaction-validation
dependsOn:
  - urn:ngm:class:public-key-cryptography
implements:
  - urn:ngm:class:access-control
contrastsWith:
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:transaction-validation
partOf:
  - urn:ngm:class:utxo-model
  - urn:ngm:class:transaction-validation
relatedTo:
  - urn:ngm:class:wallet
  - urn:ngm:class:key-management
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Locking Script

A locking script (also called scriptPubKey or an output script) is the predicate attached to a transaction output in UTXO-based blockchains that specifies the conditions under which that output may later be spent. To redeem the output, a spending transaction must supply an unlocking script whose combination with the locking script evaluates to true. Locking scripts encode spending policies ranging from a single signature to multi-signature, time locks and arbitrary smart-contract logic.
